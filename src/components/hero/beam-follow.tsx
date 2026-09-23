"use client";

import { useEffect, useRef } from "react";

import { DESKTOP_BEAM } from "./house-geometry";

type Point = readonly [x: number, y: number];

/**
 * How far the beam may swing from where it points in the art, in degrees:
 * well up over the title (negative is up), and a little way down towards
 * the clouds.
 */
const SWING_UP = -62;
const SWING_DOWN = 18;
/**
 * How quickly the beam catches up with the cursor, in ms: the time to close
 * about two thirds of the gap. Short enough to feel attached to the cursor,
 * long enough to smooth out a jittery hand.
 */
const CATCH_UP = 40;

const DEG = 180 / Math.PI;

/** An angle folded into -180..180. */
const fold = (degrees: number) => ((((degrees + 180) % 360) + 360) % 360) - 180;

/**
 * The house box is 1.7 times wider than tall; the beam's SVG uses a
 * 170x100 viewBox over it so that its units are square and the wedge keeps
 * its shape when it turns.
 */
const ASPECT = 1.7;
const toView = ([x, y]: Point): Point => [x * ASPECT, y];

const PIVOT = toView(DESKTOP_BEAM.pivot);
const WEDGE = [
  DESKTOP_BEAM.backTop,
  DESKTOP_BEAM.farTop,
  DESKTOP_BEAM.farBottom,
  DESKTOP_BEAM.backBottom,
].map(toView);
const [BACK_TOP, FAR_TOP, FAR_BOTTOM, BACK_BOTTOM] = WEDGE;
/** Down the middle of the beam, to the middle of its far end. */
const FAR_MIDDLE: Point = [
  (FAR_TOP[0] + FAR_BOTTOM[0]) / 2,
  (FAR_TOP[1] + FAR_BOTTOM[1]) / 2,
];

/**
 * The beam's light along its length, sampled from the raster down its
 * middle: full strength for the first fifth, then fading out by two thirds.
 */
const FALLOFF: [offset: number, opacity: number][] = [
  [0, 1],
  [0.2, 1],
  [0.3, 0.69],
  [0.4, 0.43],
  [0.5, 0.18],
  [0.6, 0.03],
  [0.66, 0],
];

/**
 * The lamp's beam, drawn rather than baked in so that it can turn: the
 * wedge the raster's beam fills, in its colour and falloff, starting just
 * inside the house (which is drawn over that end). A touch of blur softens
 * its edges as the art's are.
 */
export const BeamArt = () => (
  <svg
    aria-hidden
    viewBox="0 0 170 100"
    preserveAspectRatio="none"
    className="absolute inset-0 h-full w-full overflow-visible"
  >
    <defs>
      <linearGradient
        id="hero-beam-falloff"
        gradientUnits="userSpaceOnUse"
        x1={PIVOT[0]}
        y1={PIVOT[1]}
        x2={FAR_MIDDLE[0]}
        y2={FAR_MIDDLE[1]}
      >
        {FALLOFF.map(([offset, opacity]) => (
          <stop
            key={offset}
            offset={offset}
            stopColor="#ffdb8f"
            stopOpacity={opacity}
          />
        ))}
      </linearGradient>
      <filter
        id="hero-beam-soften"
        x="-10%"
        y="-10%"
        width="120%"
        height="120%"
      >
        <feGaussianBlur stdDeviation="1.2" />
      </filter>
    </defs>
    <polygon
      points={WEDGE.map((p) => p.join(",")).join(" ")}
      fill="url(#hero-beam-falloff)"
      filter="url(#hero-beam-soften)"
    />
  </svg>
);

/** Which side of the line through `a` and `b` a point is on, by its sign. */
const side = ([ax, ay]: Point, [bx, by]: Point, [px, py]: Point) =>
  (bx - ax) * (py - ay) - (by - ay) * (px - ax);

/**
 * Swings the lamp's beam round to point at the cursor. The beam (drawn and
 * glow) sits in `.hero-beam-swing` layers that turn about the bulb, so
 * following the cursor is a single rotate per frame, very lightly eased. The countdown stays put: any part
 * of it the beam swings off reads as it does with the lamp off. Hover-only
 * and motion-safe; when the pointer leaves the window the beam settles back
 * to where the art has it.
 */
export const BeamFollow = ({ lit }: { lit: boolean }) => {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const box = anchor.current?.parentElement;
    if (!box || !lit) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers = Array.from(
      box.querySelectorAll<HTMLElement>(".hero-beam-swing")
    );
    // The countdown's title and each of its columns light on their own, so a
    // beam half across it lights just that half.
    const countdownRoot = box.querySelector<HTMLElement>(".hero-countdown");
    const countdownParts = countdownRoot
      ? [
          countdownRoot.children[0] as HTMLElement,
          ...Array.from(countdownRoot.children[1]?.children ?? []),
        ].filter((el): el is HTMLElement => el instanceof HTMLElement)
      : [];

    // Everything below is in view units (see ASPECT), where the art's angles
    // are true.
    const rest =
      Math.atan2(FAR_MIDDLE[1] - PIVOT[1], FAR_MIDDLE[0] - PIVOT[0]) * DEG;
    const inBeam = (point: Point) =>
      side(BACK_TOP, FAR_TOP, point) * side(BACK_TOP, FAR_TOP, FAR_BOTTOM) >
        0 &&
      side(BACK_BOTTOM, FAR_BOTTOM, point) *
        side(BACK_BOTTOM, FAR_BOTTOM, FAR_TOP) >
        0;

    let frame = 0;
    let pointer: { x: number; y: number } | null = null;
    let angle = 0;
    let then = 0;

    const draw = (now: number) => {
      frame = 0;
      // Everything is read before anything is written, so a frame costs one
      // style pass and no layout.
      const rect = box.getBoundingClientRect();
      const centres = countdownParts.map((part) => {
        const r = part.getBoundingClientRect();
        return [r.left + r.width / 2, r.top + r.height / 2] as const;
      });
      const unit = rect.height / 100;
      const view = (x: number, y: number): Point => [
        (x - rect.left) / unit,
        (y - rect.top) / unit,
      ];

      let target = 0;
      if (pointer) {
        const [px, py] = view(pointer.x, pointer.y);
        const aim = Math.atan2(py - PIVOT[1], px - PIVOT[0]) * DEG;
        target = Math.min(SWING_DOWN, Math.max(SWING_UP, fold(aim - rest)));
      }
      // Frame-rate independent: the same catch-up on a 60 Hz or a 120 Hz screen.
      const elapsed = then ? Math.min(now - then, 100) : 16;
      angle += (target - angle) * (1 - Math.exp(-elapsed / CATCH_UP));
      if (Math.abs(target - angle) < 0.05) angle = target;
      layers.forEach((el) => (el.style.transform = `rotate(${angle}deg)`));

      // A countdown part is lit while it sits inside the turned beam: turn it
      // back the other way and test it against the beam as drawn.
      const cos = Math.cos(-angle / DEG);
      const sin = Math.sin(-angle / DEG);
      countdownParts.forEach((part, i) => {
        const [x, y] = view(...centres[i]);
        const dx = x - PIVOT[0];
        const dy = y - PIVOT[1];
        const back: Point = [
          PIVOT[0] + dx * cos - dy * sin,
          PIVOT[1] + dx * sin + dy * cos,
        ];
        if (inBeam(back)) part.removeAttribute("data-shaded");
        else part.setAttribute("data-shaded", "true");
      });

      if (angle !== target) {
        then = now;
        frame = requestAnimationFrame(draw);
      } else {
        then = 0;
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const onMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };
    const onOut = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        pointer = null;
        schedule();
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onOut);
    // The house scrolls under a still cursor, so the aim changes with it.
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("scroll", schedule);
      layers.forEach((el) => (el.style.transform = ""));
      countdownParts.forEach((el) => el.removeAttribute("data-shaded"));
    };
  }, [lit]);

  return <span ref={anchor} hidden aria-hidden="true" />;
};

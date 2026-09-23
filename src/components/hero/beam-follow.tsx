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
 * How far past either limit, in degrees, the beam still follows the cursor
 * (held at the limit). Further out than that (well above or below the beam,
 * or behind the lamp) it points where the art has it.
 */
const FOLLOW_MARGIN = 30;
/**
 * How far out from the bulb, in view units (see ASPECT), the cursor has to
 * be before the beam follows it: clear of the house wall, so a cursor on the
 * house itself, where a small move is a big change of angle, leaves it be.
 */
const MIN_REACH = 6;

const DEG = 180 / Math.PI;

/** An angle folded into -180..180. */
const fold = (degrees: number) => ((((degrees + 180) % 360) + 360) % 360) - 180;

/**
 * The house box is 1.7 times wider than tall; the geometry below is worked
 * in 170x100 "view" units over it, which are square, so angles come out true.
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

/** Which side of the line through `a` and `b` a point is on, by its sign. */
const side = ([ax, ay]: Point, [bx, by]: Point, [px, py]: Point) =>
  (bx - ax) * (py - ay) - (by - ay) * (px - ax);

/**
 * Swings the lamp's beam round to point at the cursor. The beam and its glow
 * are baked images (`.hero-beam-swing`) that turn about the bulb, so
 * following the cursor is a single rotate per frame, with no easing: the
 * beam points wherever the cursor is. The countdown stays put: any part of
 * it the beam swings off reads as it does with the lamp off. Hover-only and
 * motion-safe; when the pointer leaves the window the beam goes back to
 * where the art has it, as it does whenever the cursor is somewhere the
 * beam could not point.
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
    const draw = () => {
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

      let angle = 0;
      if (pointer) {
        const [px, py] = view(pointer.x, pointer.y);
        const aim = fold(Math.atan2(py - PIVOT[1], px - PIVOT[0]) * DEG - rest);
        const reach = Math.hypot(px - PIVOT[0], py - PIVOT[1]);
        if (
          aim >= SWING_UP - FOLLOW_MARGIN &&
          aim <= SWING_DOWN + FOLLOW_MARGIN &&
          reach >= MIN_REACH
        )
          angle = Math.min(SWING_DOWN, Math.max(SWING_UP, aim));
      }
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

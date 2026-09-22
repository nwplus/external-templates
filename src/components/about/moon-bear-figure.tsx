"use client";

import { play, prefersLessMotion } from "@/components/sponsors/ornament-art";
import { cn } from "@/lib/utils";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import "./about.css";
import {
  MOON_BEAR_VIEWBOX,
  MoonBearArt,
  ROD_CAST_DEG,
  ROD_REST_DEG,
  STAR_RIDE,
} from "./moon-bear-art";

/* --- The bear's cast ---------------------------------------------------- */

const OVERSHOOT = "cubic-bezier(0.34, 1.56, 0.64, 1)";

const swingOut: Keyframe[] = [
  { transform: `rotate(${ROD_REST_DEG}deg)`, opacity: 0 },
  { opacity: 1, offset: 0.2 },
  { transform: `rotate(${ROD_CAST_DEG}deg)`, opacity: 1 },
];

const swingBack: Keyframe[] = [
  { transform: `rotate(${ROD_CAST_DEG}deg)`, opacity: 1 },
  { opacity: 1, offset: 0.7 },
  { transform: `rotate(${ROD_REST_DEG}deg)`, opacity: 0 },
];

const lineDrop: Keyframe[] = [
  { transform: "scaleY(0)" },
  { transform: "scaleY(1)" },
];
const lineReel: Keyframe[] = [
  { transform: "scaleY(1)" },
  { transform: "scaleY(0)" },
];

/** The star rides the end of the line down, in the star group's own units. */
const starDrop: Keyframe[] = [
  { opacity: 0, transform: `translateY(${-STAR_RIDE}px) rotate(0deg)` },
  { opacity: 1, offset: 0.3 },
  { opacity: 1, transform: "translateY(0) rotate(0deg)" },
];
// Each step is its own animation and cancels the last, so every step has to
// say the star is visible or it falls back to its resting opacity of 0.
const starWiggle: Keyframe[] = [-16, 13, -9, 6, -3, 0, 4, -3, 2, 0].map(
  (deg) => ({ opacity: 1, transform: `translateY(0) rotate(${deg}deg)` })
);
// The star rides the line up and slips into the reel at the top; it fades
// right there, so nothing is left to snap back when the rod swings away.
const starReel: Keyframe[] = [
  { opacity: 1, transform: "translateY(0) rotate(0deg)" },
  { opacity: 1, offset: 0.82 },
  { opacity: 0, transform: `translateY(${-STAR_RIDE}px) rotate(0deg)` },
];

const pause = (ms: number) => new Promise((done) => setTimeout(done, ms));

/* --- The moon's lap ----------------------------------------------------- */

const LAP_MS = 3000;

/** The sparks trailing the flight: how far behind, how big, how bright. */
const SPARKS = [
  { delay: 70, size: 14, opacity: 0.75 },
  { delay: 140, size: 11, opacity: 0.55 },
  { delay: 210, size: 9, opacity: 0.4 },
  { delay: 280, size: 7, opacity: 0.25 },
];

const px = (n: number) => n.toFixed(1);

/**
 * A loop around the viewport that starts and ends at (cx, cy), heading
 * right at both ends so `offset-rotate: auto` holds the art level as it
 * takes off and lands: out to the right, up over the top, down the far
 * side, along the bottom and back up into place.
 */
const lapPath = (cx: number, cy: number, width: number, height: number) => {
  const k = 0.55; // how far the handles reach, as on a circle's cubic arcs
  const top = Math.min(height * 0.22, cy - 120);
  const bottom = Math.max(height * 0.8, cy + 120);
  const left = width * 0.2;
  const right = Math.min(cx + width * 0.1, width * 0.9);
  const east = { x: right, y: (top + cy) / 2 };
  const north = { x: (left + right) / 2, y: top };
  const west = { x: left, y: (top + bottom) / 2 };
  const south = { x: (left + cx) / 2, y: bottom };
  return [
    `M ${px(cx)} ${px(cy)}`,
    `C ${px(cx + k * (right - cx))} ${px(cy)}, ${px(east.x)} ${px(east.y + k * (cy - east.y))}, ${px(east.x)} ${px(east.y)}`,
    `C ${px(east.x)} ${px(east.y - k * (east.y - top))}, ${px(north.x + k * (right - north.x))} ${px(top)}, ${px(north.x)} ${px(north.y)}`,
    `C ${px(north.x - k * (north.x - left))} ${px(top)}, ${px(left)} ${px(west.y - k * (west.y - top))}, ${px(west.x)} ${px(west.y)}`,
    `C ${px(left)} ${px(west.y + k * (bottom - west.y))}, ${px(south.x - k * (south.x - left))} ${px(bottom)}, ${px(south.x)} ${px(south.y)}`,
    `C ${px(south.x + k * (cx - south.x))} ${px(bottom)}, ${px(cx - k * (cx - south.x))} ${px(cy)}, ${px(cx)} ${px(cy)}`,
  ].join(" ");
};

const hop: Keyframe[] = [
  { transform: "translateY(0)" },
  { transform: "translateY(-2%)" },
  { transform: "translateY(0)" },
];

type Flight = {
  width: number;
  height: number;
  viewBox: string;
  path: string;
};

type MoonBearFigureProps = {
  viewBox?: string;
  className?: string;
};

/**
 * The moon and the bear, drawn over the flattened night scene. Clicking the
 * bear has it whip out a fishing rod, drop a line over the clouds and reel
 * in a star. Clicking the moon sends the pair on a lap around the page: a
 * copy of the figure, fixed to the viewport, flies a loop along an
 * `offset-path` while the original waits, hidden, for it to land. The copy
 * is portalled to `<body>` because a fixed box inside the parallax layer
 * would be fixed to that layer's transform, not the viewport.
 */
export const MoonBearFigure = ({
  viewBox = MOON_BEAR_VIEWBOX,
  className,
}: MoonBearFigureProps) => {
  const id = `moon-bear-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const art = useRef<SVGSVGElement>(null);
  const flyer = useRef<HTMLDivElement>(null);
  const sparks = useRef<(HTMLSpanElement | null)[]>([]);
  const [flight, setFlight] = useState<Flight | null>(null);
  const casting = useRef(false);

  const castRod = async () => {
    const svg = art.current;
    if (!svg || casting.current) return;
    const part = (name: string) =>
      svg.querySelector<SVGGraphicsElement>(`[data-part="${name}"]`);
    const rod = part("rod");
    const line = part("line");
    const star = part("hook-star");
    if (!rod || !line || !star) return;
    casting.current = true;
    try {
      if (prefersLessMotion()) {
        // Held out for a moment, then gone again: no swing, no drop.
        const still = { duration: 1500 };
        const out = { transform: `rotate(${ROD_CAST_DEG}deg)`, opacity: 1 };
        play(rod, [out, out], still);
        play(
          line,
          [{ transform: "scaleY(1)" }, { transform: "scaleY(1)" }],
          still
        );
        await play(star, [{ opacity: 1 }, { opacity: 1 }], still).finished;
        return;
      }
      const forwards = "forwards" as const;
      await play(rod, swingOut, {
        duration: 500,
        easing: OVERSHOOT,
        fill: forwards,
      }).finished;
      play(line, lineDrop, {
        duration: 400,
        easing: "ease-out",
        fill: forwards,
      });
      await play(star, starDrop, {
        duration: 400,
        easing: "ease-out",
        fill: forwards,
      }).finished;
      await play(star, starWiggle, {
        duration: 2400,
        easing: "ease-in-out",
        fill: forwards,
      }).finished;
      await pause(300);
      play(line, lineReel, { duration: 500, easing: "ease-in" });
      await play(star, starReel, { duration: 500, easing: "ease-in" }).finished;
      await pause(120);
      await play(rod, swingBack, { duration: 450, easing: "ease-in" }).finished;
    } catch {
      // A cancelled animation rejects `finished`; the parts are back at rest.
    } finally {
      casting.current = false;
    }
  };

  const flyLap = () => {
    const svg = art.current;
    if (!svg || flight) return;
    if (prefersLessMotion()) {
      play(svg, hop, { duration: 300, easing: "ease-out" });
      return;
    }
    const moon = svg.querySelector<SVGGraphicsElement>('[data-part="moon"]');
    const bear = svg.querySelector<SVGGraphicsElement>('[data-part="bear"]');
    if (!moon || !bear) return;
    // The pair's box in art units, then where that box sits on screen.
    const boxes = [moon.getBBox(), bear.getBBox()];
    const x = Math.min(...boxes.map((b) => b.x));
    const y = Math.min(...boxes.map((b) => b.y));
    const w = Math.max(...boxes.map((b) => b.x + b.width)) - x;
    const h = Math.max(...boxes.map((b) => b.y + b.height)) - y;
    const rect = svg.getBoundingClientRect();
    const [minX, minY, viewWidth] = viewBox.split(/[\s,]+/).map(Number);
    const scale = rect.width / viewWidth;
    const left = rect.left + (x - minX) * scale;
    const top = rect.top + (y - minY) * scale;
    const width = w * scale;
    const height = h * scale;
    setFlight({
      width,
      height,
      viewBox: `${x} ${y} ${w} ${h}`,
      path: lapPath(
        left + width / 2,
        top + height / 2,
        window.innerWidth,
        window.innerHeight
      ),
    });
  };

  // The copy exists once `flight` is set; send it round, and take it down
  // when the last spark has faded.
  useEffect(() => {
    if (!flight || !flyer.current) return;
    const options = {
      duration: LAP_MS,
      easing: "ease-in-out",
      fill: "both" as const,
    };
    const runs = [
      flyer.current.animate(
        [{ offsetDistance: "0%" }, { offsetDistance: "100%" }],
        options
      ),
    ];
    sparks.current.forEach((spark, i) => {
      if (!spark) return;
      const { delay, opacity } = SPARKS[i];
      runs.push(
        spark.animate(
          [
            { offsetDistance: "0%", opacity: 0 },
            { opacity, offset: 0.08 },
            { opacity, offset: 0.9 },
            { offsetDistance: "100%", opacity: 0 },
          ],
          { ...options, delay }
        )
      );
    });
    let landed = false;
    Promise.all(runs.map((run) => run.finished))
      .then(() => {
        if (!landed) setFlight(null);
      })
      .catch(() => {});
    return () => {
      landed = true;
      runs.forEach((run) => run.cancel());
    };
  }, [flight]);

  return (
    <>
      <MoonBearArt
        ref={art}
        idPrefix={id}
        viewBox={viewBox}
        onMoon={flyLap}
        onBear={castRod}
        className={cn("pointer-events-none", className)}
        style={flight ? { opacity: 0 } : undefined}
      />
      {flight &&
        createPortal(
          <>
            {SPARKS.map((spark, i) => (
              <span
                key={spark.delay}
                ref={(el) => {
                  sparks.current[i] = el;
                }}
                aria-hidden="true"
                className="moon-bear-spark"
                style={{
                  width: spark.size,
                  height: spark.size,
                  offsetPath: `path("${flight.path}")`,
                }}
              />
            ))}
            <div
              ref={flyer}
              aria-hidden="true"
              className="moon-bear-flight"
              style={{
                width: flight.width,
                height: flight.height,
                offsetPath: `path("${flight.path}")`,
              }}
            >
              <MoonBearArt
                idPrefix={`${id}-flying`}
                viewBox={flight.viewBox}
                flying
                className="block h-full w-full"
              />
            </div>
          </>,
          document.body
        )}
    </>
  );
};

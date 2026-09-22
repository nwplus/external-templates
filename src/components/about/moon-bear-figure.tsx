"use client";

import { play, prefersLessMotion } from "@/components/sponsors/ornament-art";
import { cn } from "@/lib/utils";

import { useId, useRef } from "react";

import "./about.css";
import {
  MOON_BEAR_VIEWBOX,
  MoonBearArt,
  ROD_CAST_DEG,
  ROD_REST_DEG,
  STAR_RIDE,
} from "./moon-bear-art";

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
const starWiggle: Keyframe[] = [-16, 13, -9, 6, -3, 0].map((deg) => ({
  transform: `translateY(0) rotate(${deg}deg)`,
}));
const starReel: Keyframe[] = [
  { opacity: 1, transform: "translateY(0) rotate(0deg)" },
  { opacity: 1, offset: 0.7 },
  { opacity: 0, transform: `translateY(${-STAR_RIDE}px) rotate(0deg)` },
];

const pause = (ms: number) => new Promise((done) => setTimeout(done, ms));

type MoonBearFigureProps = {
  viewBox?: string;
  className?: string;
};

/**
 * The moon and the bear, drawn over the flattened night scene. Clicking the
 * bear has it whip out a fishing rod, drop a line over the clouds and reel
 * in a star: one Web Animation per part, each waiting on the last.
 */
export const MoonBearFigure = ({
  viewBox = MOON_BEAR_VIEWBOX,
  className,
}: MoonBearFigureProps) => {
  const id = `moon-bear-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const art = useRef<SVGSVGElement>(null);
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
        duration: 900,
        easing: "ease-in-out",
        fill: forwards,
      }).finished;
      await pause(150);
      play(line, lineReel, { duration: 300, easing: "ease-in" });
      await play(star, starReel, { duration: 300, easing: "ease-in" }).finished;
      await pause(100);
      await play(rod, swingBack, { duration: 450, easing: "ease-in" }).finished;
    } catch {
      // A cancelled animation rejects `finished`; the parts are back at rest.
    } finally {
      casting.current = false;
    }
  };

  return (
    <MoonBearArt
      ref={art}
      idPrefix={id}
      viewBox={viewBox}
      onBear={castRod}
      className={cn("pointer-events-none", className)}
    />
  );
};

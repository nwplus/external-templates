"use client";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { useRef } from "react";

import { ORNAMENT_ART, play, prefersLessMotion } from "./ornament-art";

/**
 * Where the foliage meets the pot, as a share of the artwork's height. The
 * foliage above it bends about this line, so nothing tears where the two
 * halves meet; the leaves hanging over the pot below it stay put.
 */
const RIM = 51.6;

const sway = (angles: number[]): Keyframe[] =>
  angles.map((deg) => ({ transform: `skewX(${deg}deg)` }));

/** Petals the gust shakes loose: where they start, and their colour. */
const PETALS = [
  { at: "left-[45%] top-[15%]", colour: "#f0823f", delay: 100 },
  { at: "left-[66%] top-[24%]", colour: "#e68ac9", delay: 260 },
  { at: "left-[23%] top-[25%]", colour: "#4476e0", delay: 420 },
];

const drift: Keyframe[] = [
  { opacity: 0, transform: "translate(0, 0) rotate(0deg)" },
  { opacity: 1, transform: "translate(60%, -40%) rotate(40deg)", offset: 0.12 },
  {
    opacity: 1,
    transform: "translate(420%, 260%) rotate(200deg)",
    offset: 0.7,
  },
  { opacity: 0, transform: "translate(620%, 520%) rotate(320deg)" },
];

/**
 * The potted plant. Hovering stirs the leaves; clicking sends a gust through
 * them that shakes a few petals loose. The artwork is drawn twice, cut at the
 * rim, so only the foliage moves.
 */
export const PottedPlant = () => {
  const art = ORNAMENT_ART.plant;
  const foliage = useRef<HTMLSpanElement>(null);
  const petals = useRef<(HTMLSpanElement | null)[]>([]);

  const onClick = () => {
    if (!foliage.current || prefersLessMotion()) return;
    play(foliage.current, sway([0, -12, 8, -5, 3, -1, 0]), {
      duration: 1600,
      easing: "ease-in-out",
    });
    petals.current.forEach((petal, i) => {
      if (petal)
        play(petal, drift, {
          duration: 1800,
          delay: PETALS[i].delay,
          easing: "ease-out",
        });
    });
  };

  const onPointerEnter = () => {
    if (foliage.current && !prefersLessMotion())
      play(foliage.current, sway([0, -4, 2.5, -1, 0]), {
        duration: 1200,
        easing: "ease-in-out",
      });
  };

  const layer = (clip: string) => ({
    clipPath: clip,
    transformOrigin: `50% ${RIM}%`,
  });

  return (
    <button
      type="button"
      aria-label="Potted plant"
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      className="relative block w-full cursor-pointer rounded-[20%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
      style={{ aspectRatio: `${art.width} / ${art.height}` }}
    >
      {/* The pot and whatever hangs in front of it, which stay still. */}
      <span
        className="absolute inset-0 block"
        style={layer(`inset(${RIM}% 0 0 0)`)}
      >
        <Image
          src={art.src}
          alt=""
          width={art.width}
          height={art.height}
          className="pointer-events-none block h-full w-full"
        />
      </span>
      {/* The foliage, a pixel deeper than the rim so the halves never gap. */}
      <span
        ref={foliage}
        className="absolute inset-0 block"
        style={layer(`inset(0 0 calc(${100 - RIM}% - 1px) 0)`)}
      >
        <Image
          src={art.src}
          alt=""
          width={art.width}
          height={art.height}
          className="pointer-events-none block h-full w-full"
        />
      </span>
      {PETALS.map((petal, i) => (
        <span
          key={petal.at}
          ref={(el) => {
            petals.current[i] = el;
          }}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute block aspect-[4/3] w-[5%] rounded-[50%] opacity-0",
            petal.at
          )}
          style={{ backgroundColor: petal.colour }}
        />
      ))}
    </button>
  );
};

"use client";

import { play, prefersLessMotion } from "@/components/sponsors/ornament-art";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useRef } from "react";

/** Squash flat, spring back a little too tall, settle. */
const squish: Keyframe[] = [
  { transform: "scale(1, 1)" },
  { transform: "scale(1.12, 0.8)", offset: 0.3 },
  { transform: "scale(0.94, 1.1)", offset: 0.6 },
  { transform: "scale(1.03, 0.97)", offset: 0.82 },
  { transform: "scale(1, 1)" },
];

type PillowProps = {
  src: string;
  width: number;
  height: number;
  /** What it is, for anyone reaching it with a screen reader. */
  label: string;
  /** Where the pillow sits in the scene, and how big it is. */
  className: string;
};

/**
 * A cushion in the reading nook that squishes when it is poked. It scales
 * from its bottom edge so it stays put on the floor, and any turn the scene
 * gives it (`rotate-*`) still applies, since Tailwind sets that on its own
 * property rather than `transform`.
 */
export const Pillow = ({
  src,
  width,
  height,
  label,
  className,
}: PillowProps) => {
  const pillow = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    if (!pillow.current || prefersLessMotion()) return;
    play(pillow.current, squish, { duration: 520, easing: "ease-out" });
  };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      ref={pillow}
      className={cn(
        "absolute origin-bottom cursor-pointer rounded-[40%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star",
        className
      )}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="block h-full w-full"
      />
    </button>
  );
};

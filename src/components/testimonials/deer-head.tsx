"use client";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { useRef } from "react";

import { blinkTwice } from "./blink";
import "./blink.css";
import { nookShape } from "./nook-shapes";

/**
 * The face, placed as a share of the head's box. The desktop and phone
 * scenes draw the head at different sizes but the same proportions, so one
 * set of numbers serves both.
 */
const FACE = {
  spots: {
    src: "/assets/testimonials/deer-spots.svg",
    width: 22,
    height: 14,
    className: "left-[31.9%] top-[5.05%] h-[13%] w-[19.3%]",
  },
  muzzle: {
    src: "/assets/testimonials/deer-muzzle.svg",
    width: 47,
    height: 30,
    className: "left-[17.7%] top-[51.5%] h-[28.7%] w-[40.4%]",
  },
  mouth: {
    src: "/assets/testimonials/deer-mouth.svg",
    width: 18,
    height: 12,
    className: "left-[27.7%] top-[59.45%] h-[11%] w-[15.35%]",
  },
} as const;

const EYES = [
  {
    src: "/assets/testimonials/deer-eye-left.svg",
    className: "left-[15%] top-[46.4%] h-[8.4%] w-[5.1%]",
  },
  {
    src: "/assets/testimonials/deer-eye-right.svg",
    className: "left-[54.3%] top-[46.2%] h-[8.5%] w-[5.25%]",
  },
];

/**
 * The deer's head and face. Clicking it makes the deer blink twice; left
 * alone it blinks on its own every seven seconds. The idle blink is a CSS
 * animation on a wrapper around each eye, so the section's motion scope
 * pauses it off screen and `motion-safe` drops it entirely, while the click
 * blink is a Web Animation on the eye itself, so neither one cancels the
 * other. Both scale the eye from just below its middle, which reads as a lid
 * coming down rather than the eye shrinking.
 */
export const DeerHead = ({ className }: { className: string }) => {
  const head = useRef<HTMLButtonElement>(null);

  const onClick = () => blinkTwice(head.current);

  return (
    <button
      type="button"
      aria-label="Deer plush"
      onClick={onClick}
      ref={head}
      className={cn(
        "pointer-events-none absolute cursor-pointer rounded-[45%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star",
        className
      )}
    >
      <Image
        src="/assets/testimonials/deer-head.svg"
        alt=""
        width={116}
        height={106}
        className="pointer-events-auto block h-full w-full"
        style={nookShape("/assets/testimonials/deer-head.svg")}
      />
      {Object.values(FACE).map((part) => (
        <Image
          key={part.src}
          src={part.src}
          alt=""
          width={part.width}
          height={part.height}
          className={cn("pointer-events-none absolute", part.className)}
        />
      ))}
      {EYES.map((eye) => (
        <span
          key={eye.src}
          className={cn(
            "pointer-events-none absolute block origin-[50%_65%] motion-safe:animate-[plush-blink_7s_linear_infinite]",
            eye.className
          )}
        >
          <Image
            src={eye.src}
            alt=""
            width={6}
            height={9}
            data-part="eye"
            className="block h-full w-full origin-[50%_65%]"
          />
        </span>
      ))}
    </button>
  );
};

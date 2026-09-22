"use client";

import { play, prefersLessMotion } from "@/components/sponsors/ornament-art";

import { type MouseEvent, useRef } from "react";

import { HOUSE_SPOTS, LANTERN_CLIP, WINDOW_GLASS } from "./house-geometry";

/* Nugget rises into the round window, bobs about, then sinks away. */
const rise: Keyframe[] = [
  { transform: "translateY(100%)", easing: "ease-out" },
  { transform: "translateY(10%)", offset: 0.15 },
  { transform: "translateY(2%)", offset: 0.28 },
  { transform: "translateY(12%)", offset: 0.42 },
  { transform: "translateY(2%)", offset: 0.56 },
  { transform: "translateY(12%)", offset: 0.7 },
  { transform: "translateY(8%)", offset: 0.82, easing: "ease-in" },
  { transform: "translateY(100%)" },
];

/* The bear leans into the lower window from the side and ducks back. */
const peek: Keyframe[] = [
  { transform: "translateX(-105%) rotate(0deg)", easing: "ease-out" },
  { transform: "translateX(-12%) rotate(-6deg)", offset: 0.22 },
  { transform: "translateX(-8%) rotate(4deg)", offset: 0.45 },
  {
    transform: "translateX(-12%) rotate(-3deg)",
    offset: 0.72,
    easing: "ease-in",
  },
  { transform: "translateX(-105%) rotate(0deg)" },
];

/* A candle-like gutter of warm light in the upper window. */
const flicker: Keyframe[] = [0, 1, 0.35, 0.9, 0.25, 1, 0.55, 0.85, 0.2, 0].map(
  (opacity) => ({ opacity })
);

/* The door swings open on its hinge, waits, and swings shut. */
const swing: Keyframe[] = [
  { transform: "rotateY(0deg)", easing: "ease-out" },
  { transform: "rotateY(-105deg)", offset: 0.15 },
  { transform: "rotateY(-105deg)", offset: 0.85, easing: "ease-in-out" },
  { transform: "rotateY(0deg)" },
];

/* Nugget steps out of the doorway, bobs a hello, and steps back in. */
const stepOut: Keyframe[] = [
  { transform: "translate(0, 8%)" },
  { transform: "translate(0, 8%)", offset: 0.15, easing: "ease-out" },
  { transform: "translate(60%, 4%) rotate(0deg)", offset: 0.3 },
  { transform: "translate(60%, -4%) rotate(-5deg)", offset: 0.4 },
  { transform: "translate(60%, 4%) rotate(0deg)", offset: 0.5 },
  { transform: "translate(60%, -4%) rotate(5deg)", offset: 0.6 },
  {
    transform: "translate(60%, 4%) rotate(0deg)",
    offset: 0.7,
    easing: "ease-in",
  },
  { transform: "translate(0, 8%)", offset: 0.84 },
  { transform: "translate(0, 8%)" },
];

/**
 * With less motion asked for, the same moments as plain cuts: the thing
 * appears in its final place, stays, and disappears.
 */
const still = (hidden: Keyframe, shown: Keyframe): Keyframe[] => [
  hidden,
  { ...shown, offset: 0.04 },
  { ...shown, offset: 0.96 },
  hidden,
];
const CUT: KeyframeAnimationOptions["easing"] = "steps(1, end)";

const stop = (event: MouseEvent) => event.stopPropagation();

/**
 * The house's windows and door, laid over the raster. Hovering the round
 * window brings Nugget up into it (a tap does the same on touch screens),
 * the upper window flickers, the bear peeks through the lower one, and a
 * click on the door swings it open for Nugget to step out and say hello.
 * Everything moves by transform and opacity only, and every click stops at
 * the feature so the lamp behind it stays as it was.
 */
export const HouseFeatures = () => {
  const nugget = useRef<HTMLImageElement>(null);
  const flame = useRef<HTMLSpanElement>(null);
  const bear = useRef<HTMLImageElement>(null);
  const panel = useRef<HTMLSpanElement>(null);
  const visitor = useRef<HTMLImageElement>(null);

  const popUp = () => {
    const el = nugget.current;
    if (!el) return;
    if (prefersLessMotion()) {
      play(
        el,
        still(
          { transform: "translateY(100%)" },
          { transform: "translateY(8%)" }
        ),
        { duration: 2200, easing: CUT }
      );
      return;
    }
    play(el, rise, { duration: 2400, easing: "ease-in-out" });
  };

  const glow = () => {
    const el = flame.current;
    if (!el) return;
    if (prefersLessMotion()) {
      play(el, still({ opacity: 0 }, { opacity: 0.7 }), {
        duration: 1000,
        easing: CUT,
      });
      return;
    }
    play(el, flicker, { duration: 1000, easing: "ease-in-out" });
  };

  const peekIn = () => {
    const el = bear.current;
    if (!el) return;
    if (prefersLessMotion()) {
      play(
        el,
        still(
          { transform: "translateX(-105%)" },
          { transform: "translateX(-10%)" }
        ),
        { duration: 1800, easing: CUT }
      );
      return;
    }
    play(el, peek, { duration: 2000, easing: "ease-in-out" });
  };

  const openDoor = (event: MouseEvent) => {
    stop(event);
    const door = panel.current;
    const guest = visitor.current;
    if (!door || !guest) return;
    if (prefersLessMotion()) {
      play(door, still({ opacity: 1 }, { opacity: 0 }), {
        duration: 3000,
        easing: CUT,
      });
      return;
    }
    play(door, swing, { duration: 3000 });
    play(guest, stepOut, { duration: 3000 });
  };

  return (
    <>
      <button
        type="button"
        tabIndex={-1}
        aria-label="Round window"
        onPointerEnter={popUp}
        onClick={(event) => {
          stop(event);
          popUp();
        }}
        className="absolute cursor-pointer overflow-hidden [clip-path:circle(50%)]"
        style={HOUSE_SPOTS.round}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static art, animated by transform */}
        <img
          ref={nugget}
          src="/assets/testimonials/nugget.svg"
          alt=""
          width={181}
          height={154}
          className="absolute bottom-0 left-[-4%] h-auto w-[108%] max-w-none"
          style={{ transform: "translateY(100%)" }}
        />
      </button>

      <button
        type="button"
        tabIndex={-1}
        aria-label="Upper window"
        onPointerEnter={glow}
        onClick={stop}
        className="absolute cursor-pointer"
        style={HOUSE_SPOTS.upper}
      >
        <span
          ref={flame}
          className="absolute bg-[#FFDA88]/40 opacity-0"
          style={{ ...WINDOW_GLASS.upper, clipPath: LANTERN_CLIP }}
        />
      </button>

      <button
        type="button"
        tabIndex={-1}
        aria-label="Lower window"
        onPointerEnter={peekIn}
        onClick={stop}
        className="absolute cursor-pointer"
        style={HOUSE_SPOTS.lower}
      >
        <span
          className="absolute overflow-hidden"
          style={{ ...WINDOW_GLASS.lower, clipPath: LANTERN_CLIP }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- static art, animated by transform */}
          <img
            ref={bear}
            src="/assets/testimonials/bear-head.svg"
            alt=""
            width={116}
            height={98}
            className="absolute top-[10%] left-0 h-auto w-[125%] max-w-none"
            style={{ transform: "translateX(-105%)" }}
          />
        </span>
      </button>

      {/*
        The door: a panel in the raster's own colour over the drawn door,
        hinged on its left edge, with a warm doorway and Nugget behind it.
      */}
      <button
        type="button"
        aria-label="Open the door"
        onClick={openDoor}
        className="absolute cursor-pointer [perspective:300px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
        style={HOUSE_SPOTS.door}
      >
        <span className="absolute inset-0 rounded-t-[50%_30%] bg-linear-to-b from-[#FFF1BF] via-[#FFD98A] to-[#E9A94E]" />
        {/* eslint-disable-next-line @next/next/no-img-element -- static art, animated by transform */}
        <img
          ref={visitor}
          src="/assets/testimonials/nugget.svg"
          alt=""
          width={181}
          height={154}
          className="absolute bottom-[3%] left-[8%] h-auto w-[84%] max-w-none"
          style={{ transform: "translate(0, 8%)" }}
        />
        <span
          ref={panel}
          className="absolute inset-0 origin-left rounded-t-[50%_30%] bg-[#423032] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)]"
        />
      </button>
    </>
  );
};

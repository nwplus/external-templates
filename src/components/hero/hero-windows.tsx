"use client";

import {
  FIN_TOWER_PATH,
  SLAT_TOWER_PATH,
  WINDOW_RECTS,
  WINDOWS_VIEWBOX,
} from "@/constants/hero-windows";
import { cn } from "@/lib/utils";

import { type CSSProperties, useEffect, useRef } from "react";

/** Share of windows lit when the page loads. */
const LIT_SHARE = 0.3;
/** How often, in ms, some window changes. Each change is itself slow (see
 * PANE_TIMING), so the skyline stays lively without pulling the eye. */
const TICK_MS = 550;
/** Of those changes, the share that are a flicker rather than on/off. */
const FLICKER_SHARE = 0.55;

/** Window panes only: the wide band capping the right-hand tower is part of
 * the building, so it never lights up. */
const PANES = WINDOW_RECTS.filter(([, , w]) => w < 100);

/** A small seeded PRNG (mulberry32), so every pane gets the same timing on
 * the server and in the browser and hydration matches. */
const seeded = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/** Each pane's own pace: how long it takes to switch on or off, how slowly
 * it breathes while lit, how bright it gets and how long a flicker lasts. */
const PANE_TIMING = (() => {
  const rand = seeded(2027);
  const between = (lo: number, hi: number) => lo + (hi - lo) * rand();
  return PANES.map(
    () =>
      ({
        "--fade": `${between(1.8, 4.5).toFixed(2)}s`,
        "--breathe": `${between(5, 14).toFixed(2)}s`,
        "--breathe-delay": `${(-between(0, 14)).toFixed(2)}s`,
        "--glow": between(0.4, 0.62).toFixed(2),
        "--flicker": `${between(2.2, 4).toFixed(2)}s`,
      }) as CSSProperties
  );
})();

const GRADIENT_STOPS = (
  <>
    <stop stopColor="#CFBC8F" stopOpacity="0.61" />
    <stop offset="1" stopColor="#88A9ED" />
  </>
);

type HeroWindowsProps = {
  /** Faded out (and still) while the fireworks are up. */
  hidden?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * The skyline behind the gate (Figma "bkg windows"). The towers are static,
 * but every window is its own rect with a warm glow over it, so windows can
 * switch on and off, breathe while lit and now and then flicker, each at its
 * own slow pace. The changes are made straight on the DOM (data attributes
 * the CSS in hero.css animates), so the hero never re-renders for them.
 */
export const HeroWindows = ({
  hidden = false,
  className,
  style,
}: HeroWindowsProps) => {
  const glowsRef = useRef<SVGGElement>(null);

  // Light a random set once mounted (not during render, so the static HTML
  // and hydration agree).
  useEffect(() => {
    const glows = glowsRef.current?.querySelectorAll<SVGRectElement>("rect");
    glows?.forEach((glow) => {
      if (Math.random() < LIT_SHARE) glow.dataset.lit = "";
    });
  }, []);

  useEffect(() => {
    const group = glowsRef.current;
    if (!group || hidden) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const glows = Array.from(group.querySelectorAll<SVGRectElement>("rect"));
    const onEnd = (event: AnimationEvent) => {
      delete (event.target as SVGRectElement).dataset.flicker;
    };
    group.addEventListener("animationend", onEnd);

    const interval = setInterval(() => {
      if (document.hidden) return;
      const glow = glows[Math.floor(Math.random() * glows.length)];
      if (Math.random() < FLICKER_SHARE) {
        glow.dataset.flicker = "";
      } else if ("lit" in glow.dataset) {
        delete glow.dataset.lit;
      } else {
        glow.dataset.lit = "";
      }
    }, TICK_MS);

    return () => {
      clearInterval(interval);
      group.removeEventListener("animationend", onEnd);
    };
  }, [hidden]);

  return (
    <svg
      viewBox={`0 0 ${WINDOWS_VIEWBOX.width} ${WINDOWS_VIEWBOX.height}`}
      fill="none"
      aria-hidden="true"
      data-hidden={hidden || undefined}
      className={cn("hero-windows overflow-visible", className)}
      style={style}
    >
      <defs>
        <linearGradient
          id="hero-slats"
          x1="888.109"
          y1="150.665"
          x2="891.223"
          y2="729.168"
          gradientUnits="userSpaceOnUse"
        >
          {GRADIENT_STOPS}
        </linearGradient>
        <linearGradient
          id="hero-fins"
          x1="1160.28"
          y1="188.034"
          x2="1163.3"
          y2="730.252"
          gradientUnits="userSpaceOnUse"
        >
          {GRADIENT_STOPS}
        </linearGradient>
        <linearGradient
          id="hero-panes"
          x1="506.76"
          y1="162.199"
          x2="507.096"
          y2="757.521"
          gradientUnits="userSpaceOnUse"
        >
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>
      <path d={SLAT_TOWER_PATH} fill="url(#hero-slats)" fillOpacity="0.5" />
      <path d={FIN_TOWER_PATH} fill="url(#hero-fins)" fillOpacity="0.5" />
      <g fill="url(#hero-panes)" fillOpacity="0.5">
        {WINDOW_RECTS.map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} />
        ))}
      </g>
      <g ref={glowsRef}>
        {PANES.map(([x, y, w, h], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            className="hero-window-glow"
            style={PANE_TIMING[i]}
          />
        ))}
      </g>
    </svg>
  );
};

"use client";

import {
  type GradientLine,
  type Skyline,
  towerPanes,
} from "@/constants/hero-windows";
import { cn } from "@/lib/utils";

import { type CSSProperties, useEffect, useId, useMemo, useRef } from "react";

/** Share of windows lit when the page loads. */
const LIT_SHARE = 0.3;
/** How often, in ms, one of every 100 windows changes (so each window keeps
 * its pace however many there are). Each change is itself slow (see
 * paneTiming), so the skyline stays lively without pulling the eye. */
const TICK_MS = 550;
/** Of those changes, the share that are a flicker rather than on/off. */
const FLICKER_SHARE = 0.55;

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
const paneTiming = (count: number) => {
  const rand = seeded(2027);
  const between = (lo: number, hi: number) => lo + (hi - lo) * rand();
  return Array.from(
    { length: count },
    () =>
      ({
        "--fade": `${between(1.8, 4.5).toFixed(2)}s`,
        "--breathe": `${between(5, 14).toFixed(2)}s`,
        "--breathe-delay": `${(-between(0, 14)).toFixed(2)}s`,
        "--glow": between(0.4, 0.62).toFixed(2),
        "--flicker": `${between(2.2, 4).toFixed(2)}s`,
      }) as CSSProperties
  );
};

const GRADIENT_STOPS = (
  <>
    <stop stopColor="#CFBC8F" stopOpacity="0.61" />
    <stop offset="1" stopColor="#88A9ED" />
  </>
);

/** A vertical-ish gradient from the sky's warm tone to blue, along `line`. */
const Gradient = ({ id, line }: { id: string; line: GradientLine }) => {
  const [x1, y1, x2, y2] = line;
  return (
    <linearGradient
      id={id}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      gradientUnits="userSpaceOnUse"
    >
      {GRADIENT_STOPS}
    </linearGradient>
  );
};

type HeroWindowsProps = {
  /** Which layout's buildings to draw (constants/hero-windows.ts). */
  skyline: Skyline;
  /** Faded out (and still) while the fireworks are up. */
  hidden?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * The skyline behind the gate (Figma "bkg windows"). Every window, and every
 * stripe of the striped towers, has its own warm glow over it, so they can
 * switch on and off, breathe while lit and now and then flicker, each at its
 * own slow pace. The changes are made straight on the DOM (data attributes
 * the CSS in hero.css animates), so the hero never re-renders for them.
 */
export const HeroWindows = ({
  skyline,
  hidden = false,
  className,
  style,
}: HeroWindowsProps) => {
  const glowsRef = useRef<SVGGElement>(null);
  // Both layouts' skylines are in the page, so their gradients need their
  // own ids (useId's, minus the characters url() references trip on).
  const id = `skyline${useId().replace(/[^\w-]/g, "")}`;
  // Building bands are part of the building, so they never light up; the
  // towers' stripes do.
  const panes = useMemo(
    () => [
      ...skyline.rects.filter(([, , w]) => w < skyline.bandWidth),
      ...skyline.towers.flatMap(towerPanes),
    ],
    [skyline]
  );
  const timing = useMemo(() => paneTiming(panes.length), [panes]);

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

    const tick = (TICK_MS * 100) / glows.length;
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
    }, tick);

    return () => {
      clearInterval(interval);
      group.removeEventListener("animationend", onEnd);
    };
  }, [hidden]);

  return (
    <svg
      viewBox={`0 0 ${skyline.width} ${skyline.height}`}
      fill="none"
      aria-hidden="true"
      data-hidden={hidden || undefined}
      className={cn("hero-windows overflow-visible", className)}
      style={style}
    >
      <defs>
        {skyline.towers.map((tower, i) => (
          <Gradient key={i} id={`${id}-tower-${i}`} line={tower.gradient} />
        ))}
        <Gradient id={`${id}-panes`} line={skyline.panes} />
      </defs>
      {skyline.towers.map((tower, i) => (
        <path
          key={i}
          d={tower.d}
          transform={
            tower.x || tower.y ? `translate(${tower.x} ${tower.y})` : undefined
          }
          fill={`url(#${id}-tower-${i})`}
          fillOpacity="0.5"
        />
      ))}
      <g fill={`url(#${id}-panes)`} fillOpacity="0.5">
        {skyline.rects.map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} />
        ))}
      </g>
      <g ref={glowsRef}>
        {panes.map(([x, y, w, h], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            className="hero-window-glow"
            style={timing[i]}
          />
        ))}
      </g>
    </svg>
  );
};

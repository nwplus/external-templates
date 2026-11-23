"use client";

import { rasterArt } from "@/lib/raster-art";

import { useEffect, useRef } from "react";

/** Where the riders cross, in one scene's design frame. */
export type RidersPath = {
  /** The scene's design frame. */
  frame: { width: number; height: number };
  /** The riders layer (the bear, Nugget and the bike) as placed in Figma. */
  box: { x: number; y: number; w: number; h: number };
  /** The deck's arch: the back rail is an ellipse (Figma "Ellipse 674"), and
   * the riders follow its curve. */
  arch: { cx: number; cy: number; rx: number; ry: number };
  /** How far (design px) from their spot in the design they start, toward
   * the right end, and how far they go on toward the left end. The bike
   * faces left, so they ride forward. */
  fromRight: number;
  toLeft: number;
};

/** Where the wheels meet the deck, as a share of the box (the pivot). */
const FEET = { x: 0.5, y: 0.88 };
/** Share of the section's pass through the viewport over which they cross:
 * smaller is faster, and they rest at each end for the rest. */
const SPAN = 0.7;

const deck = ({ cx, cy, rx, ry }: RidersPath["arch"], x: number) => {
  const u = Math.max(-0.999, Math.min(0.999, (x - cx) / rx));
  const root = Math.sqrt(1 - u * u);
  return {
    y: cy - ry * root,
    angle: (Math.atan((ry * u) / (rx * root)) * 180) / Math.PI,
  };
};

/** How quickly the riders catch up with the scroll: they close about 63% of
 * the gap every this many seconds. Wheel scrolling moves the page in jumps
 * (and scroll events land unevenly), so following the scroll exactly made
 * the bike stutter along the deck; easing toward it turns the jumps into a
 * glide and still settles exactly where the scroll says. */
const FOLLOW_S = 0.15;

/** Where along the crossing (-1 at the right end, 0 on their Figma spot, 1 at
 * the left end) the scroll puts them, given the section's box. */
const progressFor = (rect: DOMRect, vh: number) => {
  // -1 as the section comes in at the bottom, 0 centred, 1 as it leaves.
  const pass =
    (vh / 2 - (rect.top + rect.height / 2)) / ((vh + rect.height) / 2);
  return Math.max(-1, Math.min(1, pass / SPAN));
};

/** The bike's wheels, in the riders' box (design px from its top-left, in
 * the desktop frame's art). The spokes are drawn here rather than in the
 * WebP so they can turn; the tyres are round, so they stay in it. */
const WHEELS = [
  { x: 560.866 - 514, y: 645.287 - 470 },
  { x: 705.814 - 514, y: 631.169 - 470 },
];
/** The spokes' reach, and the tyre's outer radius, which is what rolls. */
const SPOKE_R = 38.6;
const ROLL_R = 44.3;

/** One wheel's spokes (Figma "bike"), centred on the hub. */
const Spokes = ({ x, y }: { x: number; y: number }) => (
  <svg
    viewBox={`${-SPOKE_R} ${-SPOKE_R} ${SPOKE_R * 2} ${SPOKE_R * 2}`}
    fill="none"
    aria-hidden="true"
    className="absolute"
    style={{
      left: `${((x - SPOKE_R) / ART_W) * 100}%`,
      top: `${((y - SPOKE_R) / ART_H) * 100}%`,
      width: `${((SPOKE_R * 2) / ART_W) * 100}%`,
      rotate: "var(--spin, 0deg)",
    }}
  >
    <path
      stroke="#3D2800"
      strokeWidth="3.251"
      d="m3.658 36.864-7.383-71.949m-32.283 37.146 71.948-7.383m-59.908 33.037 45.655-56.095m-48.578 5.081 56.096 45.656"
    />
  </svg>
);

const SRC = "/assets/about/riders@2x.webp";
/** The width (design px) the riders WebPs were rendered for: their box in
 * the desktop frame. The phone scene draws the same art smaller. */
const ART_W = 252;
const ART_H = 222;

/**
 * The bear, Nugget and the bike, rolling over the arched bridge as the page
 * scrolls: in from the right end as the section comes in, on their Figma spot
 * when the section is centred in the viewport, and off toward the left end as
 * it leaves.
 * They ride the arch, tilting with it, and the wheels turn by how far they
 * have rolled. Each frame they ease toward where the
 * scroll puts them (FOLLOW_S), and the position is written straight to the
 * element's style, so React never re-renders for it.
 */
export const AboutRiders = ({ path }: { path: RidersPath }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { frame, box } = path;

  useEffect(() => {
    const riders = ref.current;
    const section = riders?.closest("section");
    if (!riders || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { arch, fromRight, toLeft } = path;
    // Design px per cqw: the scene is a container as wide as the frame.
    const perCqw = path.frame.width / 100;
    const feetX = path.box.x + path.box.w * FEET.x;
    const home = deck(arch, feetX);

    const draw = (t: number) => {
      const dx = t < 0 ? -t * fromRight : -t * toLeft;
      const there = deck(arch, feetX + dx);
      const dy = there.y - home.y;
      const tilt = there.angle - home.angle;
      riders.style.translate = `${(dx / perCqw).toFixed(4)}cqw ${(dy / perCqw).toFixed(4)}cqw`;
      riders.style.rotate = `${tilt.toFixed(3)}deg`;
      // Rolling left (dx < 0) turns the wheels anticlockwise.
      const spin = ((dx / ROLL_R) * 180) / Math.PI;
      riders.style.setProperty("--spin", `${spin.toFixed(2)}deg`);
    };

    let shown = progressFor(
      section.getBoundingClientRect(),
      window.innerHeight
    );
    let frame = 0;
    let last = 0;

    const step = (now: number) => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const target = progressFor(rect, vh);
      // Off screen: jump, so they're in place when the section comes back.
      if (rect.bottom < 0 || rect.top > vh) {
        shown = target;
        last = 0;
        draw(shown);
        return;
      }
      const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60;
      last = now;
      shown += (target - shown) * (1 - Math.exp(-dt / FOLLOW_S));
      if (Math.abs(target - shown) < 0.0005) shown = target;
      draw(shown);
      if (shown !== target) frame = requestAnimationFrame(step);
      else last = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(step);
    };

    draw(shown);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [path]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute select-none will-change-[translate,rotate]"
      style={{
        left: `${(box.x / frame.width) * 100}%`,
        top: `${(box.y / frame.height) * 100}%`,
        width: `${(box.w / frame.width) * 100}%`,
        transformOrigin: `${FEET.x * 100}% ${FEET.y * 100}%`,
      }}
    >
      {WHEELS.map((wheel) => (
        <Spokes key={wheel.x} {...wheel} />
      ))}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SRC}
        {...rasterArt(SRC, ART_W, (frame.width * ART_W) / box.w)}
        alt=""
        width={box.w}
        height={box.h}
        draggable={false}
        className="relative block h-auto w-full max-w-none"
      />
    </div>
  );
};

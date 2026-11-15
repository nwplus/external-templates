"use client";

import { rasterArt } from "@/lib/raster-art";

import { useEffect, useRef } from "react";

/** The riders layer (the bear, Nugget and the bike) as placed in Figma, in
 * the 1512 x 982 about frame. */
const BOX = { x: 514, y: 470, w: 252, h: 222 };
/** Where the wheels meet the deck, as a share of the box (the pivot). */
const FEET = { x: 0.5, y: 0.88 };
/** The deck's arch: the back rail is an ellipse (Figma "Ellipse 674"), and
 * the riders follow its curve. */
const ARCH = { cx: 735.37, cy: 960.99, rx: 729.8, ry: 330.48 };
/** How far (design px) from their spot in the design they start, toward the
 * right end, and how far they go on toward the left end. The bike faces
 * left, so they ride forward. */
const FROM_RIGHT = 480;
const TO_LEFT = 300;
/** Share of the section's pass through the viewport over which they cross:
 * smaller is faster, and they rest at each end for the rest. */
const SPAN = 0.7;
/** Design px per cqw (the frame is 1512 wide, so 1cqw = 15.12px). */
const PX_PER_CQW = 15.12;

const deckY = (x: number) => {
  const u = Math.max(-0.999, Math.min(0.999, (x - ARCH.cx) / ARCH.rx));
  return ARCH.cy - ARCH.ry * Math.sqrt(1 - u * u);
};
const deckAngle = (x: number) => {
  const u = Math.max(-0.999, Math.min(0.999, (x - ARCH.cx) / ARCH.rx));
  const slope = (ARCH.ry * u) / (ARCH.rx * Math.sqrt(1 - u * u));
  return (Math.atan(slope) * 180) / Math.PI;
};

const FEET_X = BOX.x + BOX.w * FEET.x;

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

const SRC = "/assets/about/riders@2x.webp";

/**
 * The bear, Nugget and the bike, rolling over the arched bridge as the page
 * scrolls: in from the right end as the section comes in, on their Figma spot
 * when the section is centred in the viewport, and off toward the left end as
 * it leaves.
 * They ride the arch, tilting with it. Each frame they ease toward where the
 * scroll puts them (FOLLOW_S), and the position is written straight to the
 * element's style, so React never re-renders for it.
 */
export const AboutRiders = () => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    const section = img?.closest("section");
    if (!img || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const draw = (t: number) => {
      const dx = t < 0 ? -t * FROM_RIGHT : -t * TO_LEFT;
      const dy = deckY(FEET_X + dx) - deckY(FEET_X);
      const tilt = deckAngle(FEET_X + dx) - deckAngle(FEET_X);
      img.style.translate = `${(dx / PX_PER_CQW).toFixed(4)}cqw ${(dy / PX_PER_CQW).toFixed(4)}cqw`;
      img.style.rotate = `${tilt.toFixed(3)}deg`;
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
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={SRC}
      {...rasterArt(SRC, BOX.w)}
      alt=""
      width={BOX.w}
      height={BOX.h}
      aria-hidden="true"
      draggable={false}
      className="pointer-events-none absolute h-auto max-w-none select-none will-change-[translate,rotate]"
      style={{
        left: `${(BOX.x / 1512) * 100}%`,
        top: `${(BOX.y / 982) * 100}%`,
        width: `${(BOX.w / 1512) * 100}%`,
        transformOrigin: `${FEET.x * 100}% ${FEET.y * 100}%`,
      }}
    />
  );
};

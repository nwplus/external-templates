"use client";

import { type RefObject, useEffect } from "react";

/** Smoothstep: eases both ends of a scroll-mapped 0..1. */
export const smoothstep = (p: number) => p * p * (3 - 2 * p);

/**
 * Writes how far a tall wrapper has been scrolled through onto the element as
 * `--p`: 0 while its top is at the viewport's top, 1 once its last screen is
 * reached. Written straight to the element, not React state, because this runs
 * every frame; the section's CSS turns it into the motion.
 *
 * `ease` shapes the value before it is written (scroll is linear, movement
 * shouldn't be). Under prefers-reduced-motion the wrapper is left at rest and
 * no listener is attached; the CSS shows the finished state instead.
 */
export const useScrollProgress = (
  ref: RefObject<HTMLElement | null>,
  ease: (p: number) => number = (p) => p
) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      el.style.setProperty("--p", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = el.getBoundingClientRect();
      const span = height - window.innerHeight;
      const progress = span <= 0 ? 0 : Math.min(1, Math.max(0, -top / span));
      el.style.setProperty("--p", ease(progress).toFixed(4));
    };
    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, [ref, ease]);
};

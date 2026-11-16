"use client";

import { type RefObject, useEffect } from "react";

/**
 * Writes how far a tall wrapper has been scrolled through onto the element as
 * `--p`: 0 while its top is at the viewport's top, 1 once its last screen is
 * reached. Written straight to the element, not React state, because this runs
 * every frame; `recap.css` turns it into the door's opening.
 */
export const useScrollProgress = (ref: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = el.getBoundingClientRect();
      const span = height - window.innerHeight;
      const progress = span <= 0 ? 0 : Math.min(1, Math.max(0, -top / span));
      el.style.setProperty("--p", progress.toFixed(4));
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
  }, [ref]);
};

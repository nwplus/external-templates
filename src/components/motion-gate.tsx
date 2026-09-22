"use client";

import { useEffect } from "react";

/**
 * Flags each `[data-motion-scope]` section with `data-onscreen` while it is
 * near the viewport. `globals.css` pauses decorative CSS animations in the
 * sections without the flag, so twinkling stars and breathing glows only cost
 * paint while someone can actually see them.
 */
const MotionGate = () => {
  useEffect(() => {
    const scopes = document.querySelectorAll<HTMLElement>(
      "[data-motion-scope]"
    );
    if (scopes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-onscreen", "");
          } else {
            entry.target.removeAttribute("data-onscreen");
          }
        }
      },
      // Wake a section a little before it scrolls in so nothing pops.
      { rootMargin: "20% 0px" }
    );
    scopes.forEach((scope) => observer.observe(scope));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default MotionGate;

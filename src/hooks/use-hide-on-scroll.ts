"use client";

import { useEffect, useRef, useState } from "react";

const TOP_OFFSET = 80;
// small deltas are trackpad jitter, ignore them or the bar flickers
const MIN_DELTA = 8;

let navJumping = false;

export const hideDuringNavJump = () => {
  navJumping = true;
  const done = () => {
    navJumping = false;
    window.removeEventListener("scrollend", done);
  };
  window.addEventListener("scrollend", done);
  // fallback bc older safari doesn't have scrollend
  setTimeout(done, 1500);
};

export const useHideOnScroll = () => {
  const [hidden, setHidden] = useState(false);
  const hiddenRef = useRef(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const update = (next: boolean) => {
      if (next === hiddenRef.current) return;
      hiddenRef.current = next;
      setHidden(next);
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (navJumping) {
        update(y >= TOP_OFFSET);
        lastY = y;
        return;
      }
      if (y < TOP_OFFSET) {
        update(false);
        lastY = y;
        return;
      }
      const delta = y - lastY;
      if (Math.abs(delta) < MIN_DELTA) return;
      update(delta > 0);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hidden;
};

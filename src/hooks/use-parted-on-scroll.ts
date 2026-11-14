"use client";

import { useEffect, useState } from "react";

/** How far down the page the visitor scrolls before the clouds part, as a
 * share of the viewport height. */
const TRIGGER_SHARE = 0.15;

const scrolledFarEnough = () =>
  window.scrollY >= window.innerHeight * TRIGGER_SHARE;

/**
 * True once the visitor has scrolled a little way down the page, and for
 * good after that. Every caller checks the same condition on the same scroll
 * event, so all the page's clouds part together.
 */
export const usePartedOnScroll = () => {
  const [parted, setParted] = useState(false);

  useEffect(() => {
    if (parted) return;
    const check = () => {
      if (scrolledFarEnough()) setParted(true);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [parted]);

  return parted;
};

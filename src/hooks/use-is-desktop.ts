"use client";

import { useSyncExternalStore } from "react";

/**
 * Tailwind's `md` breakpoint (48rem): from here up the sections show their
 * desktop scene, below it the phone one. Both are in the HTML and CSS picks
 * which shows (`hidden md:block` / `md:hidden`), so nothing flashes on load.
 */
export const DESKTOP_QUERY = "(min-width: 48rem)";

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

/**
 * Whether the desktop scenes are the ones showing, or null until the page has
 * hydrated. Scenes use it to keep their timers and listeners off while CSS
 * has them hidden; null means neither has started yet.
 */
export const useIsDesktop = () =>
  useSyncExternalStore<boolean | null>(
    subscribe,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => null
  );

"use client";

import { useIsDesktop } from "@/hooks/use-is-desktop";

import type { ReactNode } from "react";

/**
 * A section's desktop and phone scenes. The static HTML has both, and CSS
 * shows the one for the screen, so nothing flashes before hydration. Once
 * the page knows which it's on, only that scene stays (and the other's
 * timers and listeners never run); crossing the breakpoint swaps them.
 *
 * The display classes come off after hydration rather than staying on for
 * good: with them on an ancestor, Chrome stopped painting the hero's
 * fireworks (animated SVG behind masks and filters) mounted later.
 */
export const ResponsiveScene = ({
  desktop,
  mobile,
}: {
  desktop: ReactNode;
  mobile: ReactNode;
}) => {
  const isDesktop = useIsDesktop();
  const settled = isDesktop !== null;

  return (
    <>
      {isDesktop !== false && (
        <div className={settled ? undefined : "hidden md:block"}>{desktop}</div>
      )}
      {isDesktop !== true && (
        <div className={settled ? undefined : "md:hidden"}>{mobile}</div>
      )}
    </>
  );
};

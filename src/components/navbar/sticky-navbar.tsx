"use client";

import { NAV_LINKS } from "@/constants/navbar";
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";

import { navLinkClass } from "./desktop-navbar";
import { NAV_JUMP, scrollToSection } from "./scroll-to-section";

/** Below this the hero's own nav is on screen, so the bar stays away. */
const REVEAL_AFTER = 160;
/** Scroll smaller than this, in px, doesn't count as a change of direction. */
const TOLERANCE = 8;
/** How long a nav jump may take before the bar listens to scrolling again. */
const JUMP_QUIET_MS = 1500;

/**
 * The nav, back within reach: once the hero's nav has scrolled away, the bar
 * slides down from the top whenever you scroll up, and slides away again as
 * soon as you scroll down or reach the top. Small wobbles (a trackpad's
 * jitter) are ignored, and so is the scrolling a nav link starts, so the bar
 * never pops over the section it just took you to. It moves by transform
 * only, and without a slide under reduced motion. The links keep clear of
 * the MLH badge pinned at the top right (from lg they stay centred by
 * reserving the same room on the left). Desktop only; the phone layout keeps
 * its fixed menu button.
 */
export const StickyNavbar = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    let quietUntil = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y <= REVEAL_AFTER) {
        last = y;
        setShown(false);
        return;
      }
      const moved = y - last;
      // Small moves are left to add up until they are a real scroll.
      if (Math.abs(moved) < TOLERANCE) return;
      last = y;
      if (performance.now() < quietUntil) return;
      setShown(moved < 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onJump = () => {
      setShown(false);
      quietUntil = performance.now() + JUMP_QUIET_MS;
    };
    // The jump is over when the smooth scroll settles (where supported).
    const onScrollEnd = () => {
      if (quietUntil) {
        quietUntil = 0;
        last = window.scrollY;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener(NAV_JUMP, onJump);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener(NAV_JUMP, onJump);
    };
  }, []);

  return (
    <header
      inert={!shown}
      className={cn(
        "fixed inset-x-0 top-0 z-[900] will-change-transform motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out",
        shown ? "translate-y-0" : "-translate-y-[calc(100%+2rem)]"
      )}
    >
      <nav
        aria-label="Sections, pinned"
        className="flex items-center justify-center gap-5 border-b border-white/5 bg-linear-to-b from-[#0b0f27]/95 to-[#0c1637]/90 py-3.5 pr-[max(8rem,12vw)] pl-6 font-title text-[0.9rem] text-white shadow-[0_6px_24px_rgba(4,6,20,0.45)] lg:gap-10 lg:pl-[max(8rem,12vw)] lg:text-[1.15rem] xl:gap-12"
      >
        {NAV_LINKS.map((link) => (
          <button
            type="button"
            key={link.name}
            onClick={() => scrollToSection(link.href)}
            className={navLinkClass}
          >
            {link.name}
          </button>
        ))}
      </nav>
    </header>
  );
};

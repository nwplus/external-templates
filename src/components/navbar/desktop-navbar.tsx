"use client";

import { SlabButton } from "@/components/ui/slab-button";
import { LIVE_PORTAL_URL, NAV_LINKS } from "@/constants/navbar";
import { cn } from "@/lib/utils";

import { scrollToSection } from "./scroll-to-section";

/** Figma "portal button": a teal gradient face on a darker teal slab. */
const PORTAL_FACE = "linear-gradient(89.19deg, #16587c 16.18%, #1f8c88 99.9%)";
const PORTAL_SLAB = "linear-gradient(89.23deg, #124866 16.18%, #135355 99.9%)";

export const LivePortalButton = ({ className }: { className?: string }) => (
  <SlabButton
    href={LIVE_PORTAL_URL}
    external
    face={PORTAL_FACE}
    slab={PORTAL_SLAB}
    className={className}
  >
    Live Portal
  </SlabButton>
);

/** A nav link: the label warms to the lantern glow on hover. */
export const navLinkClass =
  "cursor-pointer whitespace-nowrap font-extrabold transition-[color,text-shadow] duration-150 hover:text-lamp hover:[text-shadow:0_0_20px_rgba(255,231,172,0.7)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lamp";

/**
 * The portal button and the section links, the same in the hero and pinned.
 * Sizes follow the 1512px design (18px links 58px apart, 80px in from the
 * left) and scale with the width; the right side keeps clear of the fixed MLH
 * badge (its offset + width). Too narrow still, it wraps rather than overflows.
 */
export const NavRow = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex w-full flex-wrap items-center gap-x-[clamp(0.75rem,3.836vw,4.5rem)] gap-y-2 pr-[calc(5.291vw+clamp(60px,6.614vw,120px)+1rem)] pl-[5.291vw] text-[clamp(0.8rem,1.1905vw,1.4rem)] leading-[1.22] text-white",
      className
    )}
  >
    <LivePortalButton className="text-[clamp(0.875rem,1.3228vw,1.55rem)]" />
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
  </div>
);

export const DesktopNavbar = () => (
  <nav
    aria-label="Sections"
    className="absolute top-0 left-0 z-100 w-full pt-[2.646vw]"
  >
    <NavRow />
  </nav>
);

"use client";

import { NAV_LINKS } from "@/constants/navbar";

import { scrollToSection } from "./scroll-to-section";

/**
 * A nav link as the design has it on hover: the label turns the lamp's warm
 * yellow and glows (Figma "Navbar Hover"). Shared with the sticky bar.
 */
export const navLinkClass =
  "cursor-pointer whitespace-nowrap uppercase transition-[color,text-shadow] duration-150 hover:text-[#fedb90] hover:[text-shadow:0_0_25px_rgba(255,218,136,0.75)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-star";

/**
 * The row of links: the same size and spacing in the hero and pinned. Type and
 * gaps scale with the width (full size at 1920), and the sides keep clear of
 * the fixed MLH badge (its right offset + width) so the centred row never
 * slides under it. Too narrow still, it wraps rather than overflows.
 */
export const navRowClass =
  "flex w-full flex-wrap items-center justify-center gap-x-[clamp(0.75rem,3.125vw,3.75rem)] gap-y-2 px-[calc(50px+clamp(60px,5vw,100px))] py-6 font-title text-[clamp(0.875rem,1.3334vw,1.6rem)] text-white";

export const DesktopNavbar = () => (
  <nav aria-label="Sections" className="absolute top-0 left-0 z-100 w-full">
    <div className={navRowClass}>
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
  </nav>
);

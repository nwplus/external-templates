"use client";

import { NAV_LINKS } from "@/constants/navbar";

import { scrollToSection } from "./scroll-to-section";

/**
 * A nav link as the design has it on hover: the label turns the lamp's warm
 * yellow and glows (Figma "Navbar Hover"). Shared with the sticky bar.
 */
export const navLinkClass =
  "cursor-pointer uppercase transition-[color,text-shadow] duration-150 hover:text-[#fedb90] hover:[text-shadow:0_0_25px_rgba(255,218,136,0.75)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-star";

export const DesktopNavbar = () => (
  <nav aria-label="Sections" className="absolute top-0 left-0 z-100 w-full">
    <div className="flex w-full items-center justify-center gap-15 px-3 py-6 font-title text-[1.6rem] text-white">
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

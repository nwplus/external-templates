"use client";

import { NAV_LINKS } from "@/constants/navbar";

import { scrollToSection } from "./scroll-to-section";

export const DesktopNavbar = () => (
  <div className="absolute z-100 w-full top-0 left-0">
    <div className="text-white w-full justify-center items-center flex gap-15 px-3 py-6 text-[1.6rem] uppercase font-title">
      {NAV_LINKS.map((link) => (
        <div
          key={link.name}
          onClick={() => scrollToSection(link.href)}
          className="cursor-pointer hover:opacity-60 transition duration-150"
        >
          {link.name}
        </div>
      ))}
    </div>
  </div>
);

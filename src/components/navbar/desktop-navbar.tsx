"use client";

import { NAV_LINKS } from "@/constants/navbar";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";
import { cn } from "@/lib/utils";

import { scrollToSection } from "./scroll-to-section";

export const DesktopNavbar = () => {
  const hidden = useHideOnScroll();

  return (
    <div
      className={cn(
        "fixed z-100 inset-x-0 top-0 transition-transform duration-200 ease-out [--scrim-tail:2.5rem]",
        // also clear the scrim tail that hangs below the bar
        hidden &&
          "-translate-y-[calc(100%+var(--scrim-tail))] pointer-events-none"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100%+var(--scrim-tail))] bg-linear-to-b from-[#0B0F27]/85 via-[#0B0F27]/50 via-60% to-transparent"
      />
      <div className="relative text-white w-full justify-center items-center flex gap-15 px-3 py-6 text-[1.6rem] uppercase font-title [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
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
};

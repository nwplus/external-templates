"use client";

import { LIVE_PORTAL_URL, NAV_LINKS } from "@/constants/navbar";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";
import { cn } from "@/lib/utils";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinkClass } from "./desktop-navbar";
import { scrollToSection } from "./scroll-to-section";

// TODO(mobile): restyle once the mobile nav design lands
export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hidden = useHideOnScroll() && !isOpen;

  return (
    <div className="fixed top-4 right-4 z-100 text-white">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className={cn(
          "relative z-20 rounded-md p-2 transition duration-200 hover:opacity-60",
          hidden && "pointer-events-none -translate-y-[calc(100%+1rem)]"
        )}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <nav
        inert={!isOpen}
        className={cn(
          "fixed inset-x-0 top-0 z-10 flex origin-top-right flex-col items-center gap-6 bg-night/95 px-6 pt-24 pb-12 text-xl shadow-[0_12px_32px_rgba(2,16,28,0.5)] transition-all duration-300",
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        )}
      >
        <a
          href={LIVE_PORTAL_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-[10px] bg-linear-to-r from-[#16587c] to-[#1f8c88] px-4 py-2 font-bold shadow-[0_4px_0_#124866]"
        >
          Live Portal
        </a>
        {NAV_LINKS.map((link) => (
          <button
            type="button"
            key={link.name}
            onClick={() => {
              scrollToSection(link.href);
              setIsOpen(false);
            }}
            className={navLinkClass}
          >
            {link.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

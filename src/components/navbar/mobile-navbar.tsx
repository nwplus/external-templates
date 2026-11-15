"use client";

import { NAV_LINKS } from "@/constants/navbar";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";
import { cn } from "@/lib/utils";

import { X } from "lucide-react";
import { useState } from "react";

import { LivePortalButton, navLinkClass } from "./desktop-navbar";
import { scrollToSection } from "./scroll-to-section";

/** Figma's menu icon (the "menu" instance in the phone hero, 33 x 33). */
const MenuIcon = () => (
  <svg viewBox="0 0 33 33" fill="none" aria-hidden="true" className="size-full">
    <path
      d="M5.5 9.625C5.5 8.86561 6.11561 8.25 6.875 8.25H26.125C26.8844 8.25 27.5 8.86561 27.5 9.625C27.5 10.3844 26.8844 11 26.125 11H6.875C6.11561 11 5.5 10.3844 5.5 9.625ZM5.5 16.5C5.5 15.7406 6.11561 15.125 6.875 15.125H26.125C26.8844 15.125 27.5 15.7406 27.5 16.5C27.5 17.2594 26.8844 17.875 26.125 17.875H6.875C6.11561 17.875 5.5 17.2594 5.5 16.5ZM5.5 23.375C5.5 22.6156 6.11561 22 6.875 22H26.125C26.8844 22 27.5 22.6156 27.5 23.375C27.5 24.1344 26.8844 24.75 26.125 24.75H6.875C6.11561 24.75 5.5 24.1344 5.5 23.375Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * The phone nav (Figma "mobile" > "hero" > "Frame 1966"): the nwPlus logo on
 * the left and the menu button on the right, sized off the 402px design so
 * they sit where the hero has them (18px down, 28px and 21.5px in). Both
 * slide away while you scroll down and come back when you scroll up. The
 * menu drops down a panel in the pinned bar's colours, with the portal button
 * and the section links.
 */
export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hidden = useHideOnScroll() && !isOpen;

  return (
    <div className="text-white">
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-100 flex items-start justify-between pt-[4.478vw] pr-[5.348vw] pl-[6.919vw] motion-safe:transition-transform motion-safe:duration-200",
          hidden && "pointer-events-none -translate-y-full"
        )}
      >
        <button
          type="button"
          aria-label="Back to the top"
          onClick={() => {
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative z-20 mt-[0.751vw] w-[5.53vw] cursor-pointer focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lamp"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/nwplus-logo.svg"
            alt=""
            width={22.229}
            height={26.965}
            draggable={false}
            className="block h-auto w-full"
          />
        </button>
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="relative z-20 size-[8.209vw] cursor-pointer transition-opacity duration-200 hover:opacity-70 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-lamp"
        >
          {isOpen ? <X className="size-full p-[12%]" /> : <MenuIcon />}
        </button>
      </div>

      <nav
        aria-label="Sections"
        inert={!isOpen}
        className={cn(
          "fixed inset-x-0 top-0 z-90 flex origin-top flex-col items-center gap-6 border-b border-white/5 bg-linear-to-b from-[#06344d]/95 to-[#0b3a5a]/95 px-6 pt-[calc(12.687vw+2rem)] pb-10 text-lg leading-[1.22] shadow-[0_12px_32px_rgba(2,16,28,0.5)] backdrop-blur-sm motion-safe:transition-[opacity,translate] motion-safe:duration-300",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <LivePortalButton className="text-lg" />
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

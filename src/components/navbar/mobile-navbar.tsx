"use client";

import { NAV_LINKS } from "@/constants/navbar";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";
import { cn } from "@/lib/utils";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { scrollToSection } from "./scroll-to-section";

// TODO(mobile): restyle once remaining mobile assets land (logo, type)
export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hidden = useHideOnScroll() && !isOpen;

  return (
    <div className="fixed top-4 right-4 z-100 text-white">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-20 p-2 rounded-md transition hover:opacity-60"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/*
        The panel is sized by its background art (393x756, wavy bottom edge),
        so it deliberately does not span the full viewport height.
      */}
      <nav
        className={`fixed inset-x-0 top-0 z-10 transition-all duration-300 origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <Image
          src="/assets/navbar/mobile-background.svg"
          alt=""
          width={393}
          height={756}
          className="block w-full h-auto"
        />
        {/* Links sit in the solid body of the panel, above the wavy edge (~bottom 15%) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 pb-[15%] font-title text-2xl uppercase">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.name}
              onClick={() => {
                scrollToSection(link.href);
                setIsOpen(false);
              }}
              className="cursor-pointer active:underline"
            >
              {link.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

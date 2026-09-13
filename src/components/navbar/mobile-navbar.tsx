"use client";

import { NAV_LINKS } from "@/constants/navbar";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { scrollToSection } from "./scroll-to-section";

// TODO(mobile): restyle once mobile assets land (logo, menu background, type)
export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      <nav
        className={`fixed inset-x-0 top-0 z-10 flex flex-col items-center gap-6 bg-[#0B0F27] py-24 font-title text-2xl uppercase transition-all duration-300 origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
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
      </nav>
    </div>
  );
};

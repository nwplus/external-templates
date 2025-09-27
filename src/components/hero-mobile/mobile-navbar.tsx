"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return;
      if (Math.abs(window.scrollY - lastScrollY.current) <= 5) {
        return;
      }
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setIsVisible(false);
      }
      // Scrolling up
      else if (window.scrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  const links = [
    { name: "About", href: "about-mobile" },

    { name: "Our Events", href: "our-events-mobile" },

    { name: "Recap", href: "recap-mobile" },

    { name: "Stats", href: "mobile-stats" },

    { name: "Testimonials", href: "testimonials-mobile" },

    { name: "10 Years", href: "10-years-mobile" },

    { name: "FAQ", href: "faq" },

    { name: "Sponsors", href: "sponsors" },
  ];

  return (
    <div className={`fixed top-4 right-4 z-50  `}>
      <button
        className={`flex flex-col space-y-1.5 p-2 rounded-md hover:bg-gray-100 transition z-20 ${!isVisible && "-translate-y-24"} transition duration-300`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {!isOpen ? <Menu /> : <X className="z-20 text-white" />}
      </button>

      <div
        className={`fixed w-[100vw] h-[70vh] left-0 top-0 bg-[#87B171] text-white shadow-lg transform transition-all duration-300 origin-top-right z-10 py-[5vh] ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <Image
          src="/assets/hero/mobile/hclogo.svg"
          width={60}
          height={50}
          alt="HackCamp 2025 logo"
          className="mx-auto mb-5 -mt-3"
        />

        <nav className="flex flex-col text-center space-y-7 font-bold text-[4.7vw]">
          {links.map((link) => (
            <button
              type="button"
              key={link.name}
              onClick={() => {
                const el = document.getElementById(link.href);
                switch (link.name) {
                  case "Testimonials":
                    if (el) {
                      console.log(el);
                      console.log(el.getBoundingClientRect().top);
                      console.log(window.scrollY);
                      const y = el.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({
                        top: y,
                        behavior: "smooth",
                      });
                    } //the element exists but el.getBoundingClientRect.top returns 0? No clue why the Id's are in the same position
                    break;

                  case "Stats":
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                    break;

                  default:
                    console.log(el);
                    scrollToSection(link.href);
                }
                setIsOpen(false);
              }}
              className="cursor-pointer active:underline transition duration-200"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

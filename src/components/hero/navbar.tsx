"use client";

import { vh } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  const links = [
    { name: "About", href: "about" },
    { name: "Our Events", href: "our-events" },
    { name: "Recap", href: "recap" },
    { name: "Stats", href: "stats" },
    { name: "Testimonials", href: "testimonials" },
    { name: "10 Years", href: "10-years" },
    { name: "FAQ", href: "faq" },
    { name: "Sponsors", href: "sponsors" },
  ];

  return (
    <div className="flex justify-between items-center px-25">
      <div className="flex gap-15 px-3 py-6 text-[1.3rem] font-extrabold">
        {links.map((link) => (
          <div
            key={link.name}
            onClick={
              link.name != "Testimonials"
                ? () => scrollToSection(link.href)
                : () => {
                    const el = document.getElementById("testimonials");
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY;
                      console.log(y);
                      window.scrollTo({ top: y + 1200, behavior: "smooth" });
                    } //really scuffed but ids dont seem to work on stats page? hard coding this for now...
                  }
            }
            className="cursor-grab hover:opacity-60 transition duration-150"
          >
            {link.name}
          </div>
        ))}
      </div>
      <a
        href="https://portal.nwplus.io/"
        target="_blank"
        className=" bg-[#2C6D7D] text-[1.2vw] font-semibold py-[0.7vw] px-[1.7vw] rounded-[0.8vw] text-title cursor-pointer hover:bg-[#32787b] transition duration-200"
      >
        Live Portal
      </a>
    </div>
  );
}

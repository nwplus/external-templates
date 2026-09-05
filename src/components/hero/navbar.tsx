"use client";

import MlhBadge from "@/components/mlh-badge";

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
    { name: "Stats", href: "stats" },
    { name: "Recap", href: "recap" },
    { name: "Testimonials", href: "testimonials" },
    { name: "11 Years", href: "10-years" },
    { name: "FAQ", href: "faq" },
    { name: "Sponsors", href: "sponsors" },
  ];

  return (
    <div className="flex justify-between items-center px-25">
      <MlhBadge />
      <div className="flex gap-15 px-3 py-6 text-[1.3rem] font-extrabold">
        {links.map((link) => (
          <div
            key={link.name}
            onClick={() => scrollToSection(link.href)}
            className="cursor-pointer hover:opacity-60 transition duration-150"
          >
            {link.name}
          </div>
        ))}
      </div>
      {/* <a
        href="https://forms.gle/B6Eai84mh9SKLNa28"
        target="_blank"
        rel="noopener"
        className=" bg-[#2C6D7D] text-[1.2vw] font-semibold py-[0.7vw] px-[1.7vw] rounded-[0.8vw] text-title cursor-pointer hover:bg-[#32787b] transition duration-200"
      >
        Interest Form
      </a> */}
    </div>
  );
}

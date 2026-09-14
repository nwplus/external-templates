export interface NavLink {
  name: string;
  /** id of the section wrapper this link scrolls to */
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: "About", href: "about" },
  { name: "Our Events", href: "our-events" },
  { name: "Stats", href: "stats" },
  { name: "Prizing", href: "prizing" },
  { name: "Recap", href: "recap" },
  { name: "Testimonials", href: "testimonials" },
  { name: "FAQ", href: "faq" },
  { name: "Sponsors", href: "sponsors" },
];

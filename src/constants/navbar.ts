export interface NavLink {
  name: string;
  /** id of the section wrapper this link scrolls to */
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: "About", href: "about" },
  { name: "Recap", href: "recap" },
  { name: "Workshops", href: "workshops" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Past Projects", href: "past-projects" },
  { name: "FAQ", href: "faq" },
  { name: "Sponsors", href: "sponsors" },
  { name: "Contact Us", href: "contact" },
];

export const LIVE_PORTAL_URL = "https://portal.nwplus.io";

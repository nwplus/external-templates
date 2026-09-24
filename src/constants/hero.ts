/** Countdown target shown in the hero. */
export const APPLICATION_DEADLINE = "Nov 7, 2026 9:00:00";

export const HERO_TITLE = "HackCamp";
export const HERO_TAGLINE = "Canada's largest beginner friendly hackathon";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${HERO_TITLE} 2026: ${HERO_TAGLINE}`,
};

export interface CtaLinkItem {
  label: string;
  href: string;
}

// TODO: replace placeholder hrefs once the application/mentor forms are live
export const HERO_CTA_LINKS: CtaLinkItem[] = [
  { label: "Register Now", href: "#" },
  { label: "Become a Mentor", href: "#" },
];

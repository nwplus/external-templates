export const HERO_TITLE = "nwHacks";
export const HERO_TAGLINE = "Western Canada’s Premier Hackathon";
export const HERO_DATE_LOCATION = "January 16-17 | UBC Life Sciences Institute";

export interface RoleLink {
  label: string;
  /** Left empty until the application forms are ready. */
  href: string;
  /** Button face and the darker slab under it (Figma "button text hero"). */
  face: string;
  slab: string;
  ink: string;
}

export const HERO_ROLE_LINKS: RoleLink[] = [
  {
    label: "Hacker",
    href: "",
    face: "#f2d69f",
    slab: "#cf9f3e",
    ink: "#07354e",
  },
  {
    label: "Mentor",
    href: "",
    face: "#88a6e4",
    slab: "#4f548a",
    ink: "#103c5d",
  },
  {
    label: "Volunteer",
    href: "",
    face: "#bbdea7",
    slab: "#408679",
    ink: "#1c4671",
  },
];

/** Left empty until the sponsorship package link is ready. */
export const SPONSOR_LINK = { label: "Become a Sponsor", href: "" };

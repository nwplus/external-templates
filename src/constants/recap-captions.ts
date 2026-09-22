/**
 * Captions for the recap wall's photos, by file name
 * (public/assets/recap/photos/<name>.jpg). Shown under a photo when it is
 * opened; keep them to about 60 characters.
 */
export const RECAP_CAPTIONS: Record<string, string> = {
  brown: "the whole team, one laptop, one very confident plan",
  "dark-brown": "hacker in the wild, 3 AM, running on granola bars",
  green: "the lecture hall, now 90% laptops and 10% snacks",
  hanging: "hour one: 100% awake, 0% merge conflicts",
  mirror: "the decorated corner, still tidy at this point",
  purple: "demo time: it worked five minutes ago, promise",
  red: "the atrium at hour twelve, still (mostly) upright",
};

/** The caption for a photo, from its path. */
export const recapCaption = (src: string) =>
  RECAP_CAPTIONS[src.slice(src.lastIndexOf("/") + 1, src.lastIndexOf("."))] ??
  "";

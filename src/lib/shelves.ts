import type { SponsorDoc } from "@/lib/firestore";

export type Decoration = "books-left" | "books-right" | "sheep" | "plant";

export type ShelfSpec =
  | {
      kind: "card";
      sponsor: SponsorDoc;
      left?: Decoration;
      right?: Decoration;
    }
  | {
      kind: "frames";
      sponsors: SponsorDoc[];
      left?: Decoration;
      right?: Decoration;
    };

export const TIER_ORDER = [
  "title",
  "platinum",
  "gold",
  "silver",
  "bronze",
  "startup",
  "inkind",
] as const;

export const FRAMES_PER_SHELF = 3;

const tierRank = (tier: string) => {
  const index = (TIER_ORDER as readonly string[]).indexOf(tier);
  return index === -1 ? TIER_ORDER.length : index;
};

const byTier = (a: SponsorDoc, b: SponsorDoc) =>
  tierRank(a.tier) - tierRank(b.tier);

const hasBlurb = (sponsor: SponsorDoc) =>
  typeof sponsor.blurb === "string" && sponsor.blurb.trim().length > 0;

/**
 * Turns the sponsor list into shelf rows following the design rule:
 * each blurb sponsor gets its own chalkboard shelf (decorations alternate
 * sides), then the remaining sponsors are sorted by tier and packed into
 * shelves of `framesPerShelf` picture frames (plant on even rows, books on
 * odd rows).
 */
export function buildShelves(
  sponsors: SponsorDoc[],
  framesPerShelf: number = FRAMES_PER_SHELF
): ShelfSpec[] {
  const cards = sponsors.filter(hasBlurb).sort(byTier);
  const frames = sponsors.filter((s) => !hasBlurb(s)).sort(byTier);

  const cardShelves: ShelfSpec[] = cards.map((sponsor, i) => ({
    kind: "card",
    sponsor,
    left: i % 2 === 0 ? "books-left" : "sheep",
    right: i % 2 === 0 ? "sheep" : "books-left",
  }));

  const frameShelves: ShelfSpec[] = [];
  for (let i = 0; i < frames.length; i += framesPerShelf) {
    const row = frameShelves.length;
    frameShelves.push({
      kind: "frames",
      sponsors: frames.slice(i, i + framesPerShelf),
      left: row % 2 === 0 ? "plant" : undefined,
      right: row % 2 === 1 ? "books-right" : undefined,
    });
  }

  return [...cardShelves, ...frameShelves];
}

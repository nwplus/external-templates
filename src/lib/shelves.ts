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
    }
  | {
      kind: "decor";
      items: Decoration[];
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

/** What the narrow layout stands on the decoration-only shelf, left to right. */
export const DECOR_SHELF_ITEMS: Decoration[] = ["books-left", "sheep", "plant"];

export type ShelfOptions = {
  framesPerShelf?: number;
};

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
 * each blurb sponsor gets its own chalkboard shelf with books one side and the
 * sheep the other, then the remaining sponsors are sorted by tier and packed
 * into shelves of `framesPerShelf` picture frames, one tier per shelf, with
 * the plant one side and books the other. Both pairs swap sides on every
 * other row.
 *
 * The decoration-only shelf between the two groups is always included: the
 * narrow layout shows it and hides the shelf-end decorations, the wide layout
 * does the opposite, and both choices are made in CSS so the markup is the
 * same before and after hydration.
 */
export function buildShelves(
  sponsors: SponsorDoc[],
  { framesPerShelf = FRAMES_PER_SHELF }: ShelfOptions = {}
): ShelfSpec[] {
  const cards = sponsors.filter(hasBlurb).sort(byTier);
  const frames = sponsors.filter((s) => !hasBlurb(s)).sort(byTier);

  const cardShelves: ShelfSpec[] = cards.map((sponsor, i) => ({
    kind: "card",
    sponsor,
    left: i % 2 === 0 ? "books-left" : "sheep",
    right: i % 2 === 0 ? "sheep" : "books-left",
  }));

  // Each tier starts on a fresh shelf, so a tier that doesn't fill its last
  // shelf never shares it with the next tier down.
  const tiers = new Map<string, SponsorDoc[]>();
  for (const sponsor of frames) {
    const tier = tiers.get(sponsor.tier);
    if (tier) tier.push(sponsor);
    else tiers.set(sponsor.tier, [sponsor]);
  }

  const frameShelves: ShelfSpec[] = [];
  for (const tier of tiers.values()) {
    for (let i = 0; i < tier.length; i += framesPerShelf) {
      const row = frameShelves.length;
      frameShelves.push({
        kind: "frames",
        sponsors: tier.slice(i, i + framesPerShelf),
        left: row % 2 === 0 ? "plant" : "books-right",
        right: row % 2 === 0 ? "books-right" : "plant",
      });
    }
  }

  if (cardShelves.length + frameShelves.length === 0) return [];

  const decor: ShelfSpec = { kind: "decor", items: DECOR_SHELF_ITEMS };

  // Between the two groups when there are both, otherwise after whatever
  // there is — a decoration shelf should never open the band.
  return cardShelves.length > 0
    ? [...cardShelves, decor, ...frameShelves]
    : [...frameShelves, decor];
}

/**
 * Splits one shelf's frames into the design's pyramid: the raised row hangs
 * above the shelf, the standing row rests just over the plank. A shelf of two
 * frames or fewer is all standing row.
 */
export function frameRows<T>(frames: T[]): { raised: T[]; standing: T[] } {
  if (frames.length < 3) return { raised: [], standing: frames };
  return {
    raised: frames.slice(0, frames.length - 2),
    standing: frames.slice(-2),
  };
}

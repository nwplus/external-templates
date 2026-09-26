import type { FAQDoc } from "@/lib/firestore";

/**
 * The part of a FAQ the room renders. Plain data, so it can be passed from
 * the server section to the client-side room (a full FAQDoc carries a
 * Firestore Timestamp, which cannot).
 */
export type FaqItem = Pick<FAQDoc, "question" | "answer" | "category">;
export type FaqGroup<T extends FaqItem = FAQDoc> = {
  category: string;
  faqs: T[];
};
export type FaqLayout<T extends FaqItem = FAQDoc> = {
  tapestry: FaqGroup<T> | null;
  shelves: FaqGroup<T>[];
};

/**
 * Places FAQ categories in the VHS room: the first non-empty category goes on
 * the tapestry, every further one becomes a boombox shelf, in record
 * (Firestore) insertion order. Empty categories are dropped.
 */
export function layoutFaqs<T extends FaqItem>(
  byCategory: Record<string, T[]>
): FaqLayout<T> {
  const groups: FaqGroup<T>[] = Object.entries(byCategory)
    .filter(([, faqs]) => faqs.length > 0)
    .map(([category, faqs]) => ({ category, faqs }));

  const [tapestry = null, ...shelves] = groups;
  return { tapestry, shelves };
}

/**
 * Where a tape is drawn in its stack, counted from the top. A stack drawn
 * from the bottom puts its first tape lowest and piles the rest on top, so
 * the order is flipped; the stagger and the HACKING badges follow this
 * position, which keeps the badge letters reading downwards either way.
 */
export function positionFromTop(
  index: number,
  count: number,
  fromBottom: boolean
): number {
  return fromBottom ? count - 1 - index : index;
}

/**
 * Orders tapes the way they pile up: tapes are as wide as their question, so
 * the longest goes first (at the bottom) and each one after is no wider than
 * the one it rests on. Ties keep a stable alphabetical order.
 */
export function stackByLength<T extends { question: string }>(faqs: T[]): T[] {
  return [...faqs].sort(
    (a, b) =>
      b.question.length - a.question.length ||
      a.question.localeCompare(b.question)
  );
}

/**
 * Splits one cabinet category's tapes into the two bottom-aligned stacks the
 * design piles inside the cabinet. Tapes are dealt out longest first,
 * alternately left and right, so each stack runs from its longest tape at the
 * bottom to its shortest at the top and the two stay about the same height; an
 * odd count leaves the extra tape on the left, the taller stack in the design.
 */
export function splitTapeStacks<T extends { question: string }>(
  faqs: T[]
): { left: T[]; right: T[] } {
  const sorted = stackByLength(faqs);
  return {
    left: sorted.filter((_, i) => i % 2 === 0),
    right: sorted.filter((_, i) => i % 2 === 1),
  };
}

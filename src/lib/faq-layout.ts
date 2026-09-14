import type { FAQDoc } from "@/lib/firestore";

/**
 * The part of a FAQ the room renders. Plain data, so it can be passed from
 * the server section to the client-side room (a full FAQDoc carries a
 * Firestore Timestamp, which cannot).
 */
export type FaqItem = Pick<FAQDoc, "question" | "answer">;
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
 * Splits one cabinet category's tapes into the two bottom-aligned stacks the
 * design piles inside the cabinet. The split is sequential, so reading order
 * runs down the left stack and then down the right one; an odd count leaves
 * the extra tape on the left, which is the taller stack in the design.
 */
export function splitTapeStacks<T>(faqs: T[]): { left: T[]; right: T[] } {
  const half = Math.ceil(faqs.length / 2);
  return { left: faqs.slice(0, half), right: faqs.slice(half) };
}

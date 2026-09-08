import type { FAQDoc } from "@/lib/firestore";

export type FaqGroup = { category: string; faqs: FAQDoc[] };
export type FaqLayout = { tapestry: FaqGroup | null; shelves: FaqGroup[] };

/**
 * Places FAQ categories in the VHS room: the first non-empty category goes on
 * the tapestry, every further one becomes a boombox shelf, in record
 * (Firestore) insertion order. Empty categories are dropped.
 */
export function layoutFaqs(byCategory: Record<string, FAQDoc[]>): FaqLayout {
  const groups: FaqGroup[] = Object.entries(byCategory)
    .filter(([, faqs]) => faqs.length > 0)
    .map(([category, faqs]) => ({ category, faqs }));

  const [tapestry = null, ...shelves] = groups;
  return { tapestry, shelves };
}

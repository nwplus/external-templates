import {
  FAQ_CATEGORIES,
  FAQ_FALLBACK,
  type FaqCategoryId,
  type FaqEntry,
  type FaqsByCategory,
} from "@/constants/faq";

type FaqSource = { category?: string; question?: string; answer?: string };

const tankFor = (category: string | undefined): FaqCategoryId | null => {
  const name = category?.trim();
  const match = FAQ_CATEGORIES.find(({ categories }) =>
    (categories as readonly string[]).includes(name ?? "")
  );
  return match?.id ?? null;
};

/**
 * Sorts FAQ docs into the three tanks by their Firestore `category`, keeping
 * their order. Docs with an unknown category or missing text are dropped. A
 * tank Firestore has nothing for falls back to the design's questions, so no
 * tank ever opens empty.
 */
export const faqsByCategory = (
  docs: FaqSource[],
  fallback: FaqsByCategory = FAQ_FALLBACK
): FaqsByCategory => {
  const grouped: FaqsByCategory = { general: [], teams: [], logistics: [] };
  for (const { category, question, answer } of docs) {
    const tank = tankFor(category);
    if (!tank || !question?.trim() || !answer?.trim()) continue;
    grouped[tank].push({ question: question.trim(), answer: answer.trim() });
  }
  for (const { id } of FAQ_CATEGORIES) {
    if (grouped[id].length === 0) grouped[id] = fallback[id];
  }
  return grouped;
};

export type AnswerRun =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string }
  | { type: "break" };

const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

/**
 * Splits an answer into paragraphs (on blank lines) of text, `[text](url)`
 * links and single line breaks, so it renders without HTML.
 */
export const parseAnswer = (answer: FaqEntry["answer"]): AnswerRun[][] =>
  answer
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => {
      const runs: AnswerRun[] = [];
      paragraph
        .trim()
        .split("\n")
        .forEach((line, i) => {
          if (i > 0) runs.push({ type: "break" });
          let last = 0;
          for (const match of line.matchAll(LINK)) {
            const start = match.index ?? 0;
            if (start > last)
              runs.push({ type: "text", text: line.slice(last, start) });
            runs.push({ type: "link", text: match[1], href: match[2] });
            last = start + match[0].length;
          }
          if (last < line.length)
            runs.push({ type: "text", text: line.slice(last) });
        });
      return runs;
    });

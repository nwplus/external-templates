import {
  layoutFaqs,
  positionFromTop,
  splitTapeStacks,
  stackByLength,
} from "@/lib/faq-layout";
import type { FAQDoc } from "@/lib/firestore";

import { describe, expect, it } from "vitest";

const mk = (category: string, question: string): FAQDoc => ({
  hackathonIds: ["HackCamp2026"],
  category,
  question,
  answer: `${question} answer`,
  lastModified: {} as FAQDoc["lastModified"],
  lastModifiedBy: "tester",
});

const general = [
  mk("General", "What is HackCamp?"),
  mk("General", "Who can attend?"),
];
const teams = [mk("Teams & Projects", "How big are teams?")];
const logistics = [mk("Logistics", "Where is it?")];

describe("layoutFaqs", () => {
  it("returns no tapestry and no shelves for empty input", () => {
    expect(layoutFaqs({})).toEqual({ tapestry: null, shelves: [] });
  });

  it("puts a single category on the tapestry with no shelves", () => {
    expect(layoutFaqs({ General: general })).toEqual({
      tapestry: { category: "General", faqs: general },
      shelves: [],
    });
  });

  it("puts the first category on the tapestry and the second on one shelf", () => {
    expect(layoutFaqs({ General: general, "Teams & Projects": teams })).toEqual(
      {
        tapestry: { category: "General", faqs: general },
        shelves: [{ category: "Teams & Projects", faqs: teams }],
      }
    );
  });

  it("turns every category after the first into a shelf, in order", () => {
    expect(
      layoutFaqs({
        General: general,
        "Teams & Projects": teams,
        Logistics: logistics,
      })
    ).toEqual({
      tapestry: { category: "General", faqs: general },
      shelves: [
        { category: "Teams & Projects", faqs: teams },
        { category: "Logistics", faqs: logistics },
      ],
    });
  });

  it("skips an empty category", () => {
    expect(
      layoutFaqs({ Empty: [], General: general, "Teams & Projects": teams })
    ).toEqual({
      tapestry: { category: "General", faqs: general },
      shelves: [{ category: "Teams & Projects", faqs: teams }],
    });
  });
});

/** Tapes whose questions are `n` characters long, one per length given. */
const tapes = (...lengths: number[]) =>
  lengths.map((n) => ({ question: "x".repeat(n) }));
const lengthsOf = (faqs: { question: string }[]) =>
  faqs.map((faq) => faq.question.length);

describe("stackByLength", () => {
  it("puts the longest question first and the shortest last", () => {
    expect(lengthsOf(stackByLength(tapes(3, 10, 1, 7)))).toEqual([10, 7, 3, 1]);
  });

  it("orders questions of the same length alphabetically", () => {
    expect(
      stackByLength([
        { question: "bb" },
        { question: "ccc" },
        { question: "aa" },
      ]).map((faq) => faq.question)
    ).toEqual(["ccc", "aa", "bb"]);
  });

  it("leaves the input untouched", () => {
    const input = tapes(1, 2);
    stackByLength(input);
    expect(lengthsOf(input)).toEqual([1, 2]);
  });
});

describe("splitTapeStacks", () => {
  it("returns two empty stacks for no tapes", () => {
    expect(splitTapeStacks([])).toEqual({ left: [], right: [] });
  });

  it("deals the tapes longest first, alternately left and right", () => {
    const { left, right } = splitTapeStacks(tapes(2, 8, 5, 1, 6, 4));
    expect(lengthsOf(left)).toEqual([8, 5, 2]);
    expect(lengthsOf(right)).toEqual([6, 4, 1]);
  });

  it("leaves the extra tape on the left stack for an odd count", () => {
    const { left, right } = splitTapeStacks(tapes(1, 3, 2));
    expect(lengthsOf(left)).toEqual([3, 1]);
    expect(lengthsOf(right)).toEqual([2]);
  });

  it("puts a lone tape on the left stack", () => {
    const { left, right } = splitTapeStacks(tapes(4));
    expect(lengthsOf(left)).toEqual([4]);
    expect(right).toEqual([]);
  });
});

describe("positionFromTop", () => {
  it("keeps list order for a stack drawn top-down", () => {
    expect([0, 1, 2].map((i) => positionFromTop(i, 3, false))).toEqual([
      0, 1, 2,
    ]);
  });

  it("puts the first tape at the bottom of a stack drawn from the bottom", () => {
    expect([0, 1, 2].map((i) => positionFromTop(i, 3, true))).toEqual([
      2, 1, 0,
    ]);
  });

  it("puts a lone tape at the top either way", () => {
    expect(positionFromTop(0, 1, true)).toBe(0);
    expect(positionFromTop(0, 1, false)).toBe(0);
  });
});

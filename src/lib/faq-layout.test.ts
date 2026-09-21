import { layoutFaqs, positionFromTop, splitTapeStacks } from "@/lib/faq-layout";
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

describe("splitTapeStacks", () => {
  it("returns two empty stacks for no tapes", () => {
    expect(splitTapeStacks([])).toEqual({ left: [], right: [] });
  });

  it("keeps reading order down the left stack and then the right one", () => {
    expect(splitTapeStacks(["a", "b", "c", "d"])).toEqual({
      left: ["a", "b"],
      right: ["c", "d"],
    });
  });

  it("leaves the extra tape on the left stack for an odd count", () => {
    expect(splitTapeStacks(["a", "b", "c"])).toEqual({
      left: ["a", "b"],
      right: ["c"],
    });
  });

  it("puts a lone tape on the left stack", () => {
    expect(splitTapeStacks(["a"])).toEqual({ left: ["a"], right: [] });
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

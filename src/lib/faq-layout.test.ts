import { layoutFaqs } from "@/lib/faq-layout";
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

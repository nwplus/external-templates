import type { FaqsByCategory } from "@/constants/faq";

import { describe, expect, it } from "vitest";

import { faqsByCategory, parseAnswer } from "./faq";

const FALLBACK: FaqsByCategory = {
  general: [{ question: "G?", answer: "g" }],
  teams: [{ question: "T?", answer: "t" }],
  logistics: [{ question: "L?", answer: "l" }],
};

describe("faqsByCategory", () => {
  it("sorts docs into the tanks by category, keeping their order", () => {
    const grouped = faqsByCategory(
      [
        { category: "Logistics", question: "Bring?", answer: "Laptop" },
        { category: "General", question: "Cost?", answer: "Free" },
        { category: "Teams & Projects", question: "Size?", answer: "1-4" },
        { category: "Logistics", question: "Sleep?", answer: "Optional" },
      ],
      FALLBACK
    );
    expect(grouped.general).toEqual([{ question: "Cost?", answer: "Free" }]);
    expect(grouped.teams).toEqual([{ question: "Size?", answer: "1-4" }]);
    expect(grouped.logistics.map((faq) => faq.question)).toEqual([
      "Bring?",
      "Sleep?",
    ]);
  });

  it("accepts the older Teams / Projects category names", () => {
    const grouped = faqsByCategory(
      [{ category: "Projects", question: "Theme?", answer: "None" }],
      FALLBACK
    );
    expect(grouped.teams).toEqual([{ question: "Theme?", answer: "None" }]);
  });

  it("falls back per tank and drops unknown or empty docs", () => {
    const grouped = faqsByCategory(
      [
        { category: "General", question: "Cost?", answer: "Free" },
        { category: "Sponsors", question: "Who?", answer: "Many" },
        { category: "Logistics", question: "  ", answer: "x" },
      ],
      FALLBACK
    );
    expect(grouped.general).toEqual([{ question: "Cost?", answer: "Free" }]);
    expect(grouped.teams).toBe(FALLBACK.teams);
    expect(grouped.logistics).toBe(FALLBACK.logistics);
  });
});

describe("parseAnswer", () => {
  it("splits paragraphs on blank lines and keeps single line breaks", () => {
    expect(parseAnswer("One\nstill one\n\nTwo")).toEqual([
      [
        { type: "text", text: "One" },
        { type: "break" },
        { type: "text", text: "still one" },
      ],
      [{ type: "text", text: "Two" }],
    ]);
  });

  it("turns markdown links into link runs", () => {
    expect(
      parseAnswer(
        "Read [Medium](https://medium.com/x) and [UBC](https://ubc.ca)."
      )
    ).toEqual([
      [
        { type: "text", text: "Read " },
        { type: "link", text: "Medium", href: "https://medium.com/x" },
        { type: "text", text: " and " },
        { type: "link", text: "UBC", href: "https://ubc.ca" },
        { type: "text", text: "." },
      ],
    ]);
  });

  it("leaves non-http brackets as text", () => {
    expect(parseAnswer("See [this](javascript:alert(1))")).toEqual([
      [{ type: "text", text: "See [this](javascript:alert(1))" }],
    ]);
  });
});

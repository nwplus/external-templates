import type { SponsorDoc } from "@/lib/firestore";
import { buildShelves } from "@/lib/shelves";

import { describe, expect, it } from "vitest";

const mk = (
  name: string,
  tier: SponsorDoc["tier"],
  blurb = ""
): SponsorDoc => ({
  name,
  tier,
  blurb,
  imgName: `${name}.png`,
  imgURL: `https://example.com/${name}.png`,
  link: `https://${name}.example.com`,
});

describe("buildShelves", () => {
  it("returns no shelves for no sponsors", () => {
    expect(buildShelves([])).toEqual([]);
  });

  it("gives a blurb sponsor its own card shelf with books left and sheep right", () => {
    const shelves = buildShelves([mk("google", "title", "We love hackers")]);
    expect(shelves).toEqual([
      {
        kind: "card",
        sponsor: expect.objectContaining({ name: "google" }),
        left: "books-left",
        right: "sheep",
      },
    ]);
  });

  it("alternates decoration sides on successive card shelves", () => {
    const shelves = buildShelves([
      mk("a", "title", "blurb a"),
      mk("b", "platinum", "blurb b"),
      mk("c", "gold", "blurb c"),
    ]);
    expect(shelves.map((s) => [s.left, s.right])).toEqual([
      ["books-left", "sheep"],
      ["sheep", "books-left"],
      ["books-left", "sheep"],
    ]);
  });

  it("packs non-blurb sponsors into frame shelves of three, alternating plant and books", () => {
    const sponsors = ["a", "b", "c", "d", "e", "f", "g"].map((n) =>
      mk(n, "silver")
    );
    const shelves = buildShelves(sponsors);
    expect(shelves.map((s) => s.kind)).toEqual(["frames", "frames", "frames"]);
    expect(
      shelves.map((s) => (s.kind === "frames" ? s.sponsors.length : 0))
    ).toEqual([3, 3, 1]);
    expect(shelves.map((s) => [s.left, s.right])).toEqual([
      ["plant", undefined],
      [undefined, "books-right"],
      ["plant", undefined],
    ]);
  });

  it("orders non-blurb sponsors by tier regardless of input order", () => {
    const shelves = buildShelves([
      mk("bronze-co", "bronze"),
      mk("gold-co", "gold"),
      mk("inkind-co", "inkind"),
      mk("platinum-co", "platinum"),
    ]);
    const names =
      shelves[0].kind === "frames"
        ? shelves[0].sponsors.map((s) => s.name)
        : [];
    expect(names).toEqual(["platinum-co", "gold-co", "bronze-co"]);
  });

  it("treats a whitespace-only blurb as no blurb", () => {
    const shelves = buildShelves([mk("a", "gold", "   ")]);
    expect(shelves[0].kind).toBe("frames");
  });

  it("puts card shelves before frame shelves", () => {
    const shelves = buildShelves([
      mk("frame-co", "gold"),
      mk("card-co", "silver", "has a blurb"),
    ]);
    expect(shelves.map((s) => s.kind)).toEqual(["card", "frames"]);
  });

  it("respects a smaller framesPerShelf for mobile", () => {
    const sponsors = ["a", "b", "c"].map((n) => mk(n, "gold"));
    const shelves = buildShelves(sponsors, 2);
    expect(
      shelves.map((s) => (s.kind === "frames" ? s.sponsors.length : 0))
    ).toEqual([2, 1]);
  });
});

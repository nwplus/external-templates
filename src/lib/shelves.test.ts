import type { SponsorDoc } from "@/lib/firestore";
import { buildShelves, frameRows, type ShelfSpec } from "@/lib/shelves";

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

/** The shelves that carry sponsors, without the decoration-only one. */
const sponsorShelves = (shelves: ShelfSpec[]) =>
  shelves.filter((shelf) => shelf.kind !== "decor");

describe("buildShelves", () => {
  it("returns no shelves for no sponsors", () => {
    expect(buildShelves([])).toEqual([]);
  });

  it("gives a blurb sponsor its own card shelf with books left and sheep right", () => {
    const shelves = buildShelves([mk("google", "title", "We love hackers")]);
    expect(sponsorShelves(shelves)).toEqual([
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
    expect(sponsorShelves(shelves).map((s) => [s.left, s.right])).toEqual([
      ["books-left", "sheep"],
      ["sheep", "books-left"],
      ["books-left", "sheep"],
    ]);
  });

  it("packs non-blurb sponsors into frame shelves of three, swapping the plant and books sides", () => {
    const sponsors = ["a", "b", "c", "d", "e", "f", "g"].map((n) =>
      mk(n, "silver")
    );
    const shelves = buildShelves(sponsors);
    expect(sponsorShelves(shelves).map((s) => s.kind)).toEqual([
      "frames",
      "frames",
      "frames",
    ]);
    expect(
      sponsorShelves(shelves).map((s) =>
        s.kind === "frames" ? s.sponsors.length : 0
      )
    ).toEqual([3, 3, 1]);
    expect(sponsorShelves(shelves).map((s) => [s.left, s.right])).toEqual([
      ["plant", "books-right"],
      ["books-right", "plant"],
      ["plant", "books-right"],
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
    expect(sponsorShelves(shelves).map((s) => s.kind)).toEqual([
      "card",
      "frames",
    ]);
  });

  it("respects a smaller framesPerShelf", () => {
    const sponsors = ["a", "b", "c"].map((n) => mk(n, "gold"));
    const shelves = buildShelves(sponsors, { framesPerShelf: 2 });
    expect(
      sponsorShelves(shelves).map((s) =>
        s.kind === "frames" ? s.sponsors.length : 0
      )
    ).toEqual([2, 1]);
  });

  it("sorts an unknown tier after every known tier", () => {
    const odd = { ...mk("odd", "gold"), tier: "mystery" as SponsorDoc["tier"] };
    const shelves = buildShelves([odd, mk("bronze-co", "bronze")]);
    const names =
      shelves[0].kind === "frames"
        ? shelves[0].sponsors.map((s) => s.name)
        : [];
    expect(names).toEqual(["bronze-co", "odd"]);
  });

  it("treats a missing blurb as no blurb", () => {
    const noBlurb = {
      ...mk("a", "gold"),
      blurb: undefined as unknown as string,
    };
    expect(buildShelves([noBlurb])[0].kind).toBe("frames");
  });

  it("keeps card and frame decoration counters independent", () => {
    const shelves = buildShelves([
      mk("card-co", "title", "has a blurb"),
      ...["a", "b", "c", "d"].map((n) => mk(n, "silver")),
    ]);
    expect(shelves.map((s) => s.kind)).toEqual([
      "card",
      "decor",
      "frames",
      "frames",
    ]);
    expect(sponsorShelves(shelves).map((s) => [s.left, s.right])).toEqual([
      ["books-left", "sheep"],
      ["plant", "books-right"],
      ["books-right", "plant"],
    ]);
  });

  it("sits the decoration shelf between the cards and the frames", () => {
    const shelves = buildShelves([
      mk("card-co", "title", "has a blurb"),
      ...["a", "b", "c"].map((n) => mk(n, "silver")),
    ]);
    expect(shelves.map((s) => s.kind)).toEqual(["card", "decor", "frames"]);
    expect(shelves[1]).toEqual({
      kind: "decor",
      items: ["books-left", "sheep", "plant"],
    });
  });

  it("puts the decoration shelf last when there are no frame sponsors", () => {
    const shelves = buildShelves([mk("card-co", "title", "has a blurb")]);
    expect(shelves.map((s) => s.kind)).toEqual(["card", "decor"]);
  });

  it("never opens the band with the decoration shelf", () => {
    const shelves = buildShelves(["a", "b"].map((n) => mk(n, "silver")));
    expect(shelves.map((s) => s.kind)).toEqual(["frames", "decor"]);
  });

  it("skips the decoration shelf when there are no sponsors at all", () => {
    expect(buildShelves([])).toEqual([]);
  });
});

describe("frameRows", () => {
  it("hangs the first frame above the two that stand on the shelf", () => {
    expect(frameRows(["a", "b", "c"])).toEqual({
      raised: ["a"],
      standing: ["b", "c"],
    });
  });

  it("stands a lone frame on the shelf", () => {
    expect(frameRows(["a"])).toEqual({ raised: [], standing: ["a"] });
  });

  it("stands a pair of frames on the shelf", () => {
    expect(frameRows(["a", "b"])).toEqual({ raised: [], standing: ["a", "b"] });
  });

  it("raises every frame past the last two", () => {
    expect(frameRows(["a", "b", "c", "d"])).toEqual({
      raised: ["a", "b"],
      standing: ["c", "d"],
    });
  });

  it("has nothing on either row for no frames", () => {
    expect(frameRows([])).toEqual({ raised: [], standing: [] });
  });
});

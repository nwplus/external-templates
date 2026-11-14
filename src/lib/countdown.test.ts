import { describe, expect, it } from "vitest";

import { toCountdownParts } from "./countdown";

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

describe("toCountdownParts", () => {
  it("splits the remaining time into padded days, hours and minutes", () => {
    expect(
      toCountdownParts(8 * DAY + 23 * HOUR + 40 * MINUTE + 59_000)
    ).toEqual({ days: "08", hours: "23", minutes: "40" });
  });

  it("keeps three-digit day counts whole", () => {
    expect(toCountdownParts(120 * DAY).days).toBe("120");
  });

  it("holds at zero once the deadline has passed", () => {
    expect(toCountdownParts(0)).toEqual({
      days: "00",
      hours: "00",
      minutes: "00",
    });
    expect(toCountdownParts(-5 * MINUTE)).toEqual({
      days: "00",
      hours: "00",
      minutes: "00",
    });
  });
});

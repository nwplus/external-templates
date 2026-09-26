import { play } from "@/components/sponsors/ornament-art";

/** Lids down, a beat shut, lids up. Played twice for a quick double blink. */
const blink: Keyframe[] = [
  { transform: "scaleY(1)" },
  { transform: "scaleY(0.1)", offset: 0.4 },
  { transform: "scaleY(0.1)", offset: 0.55 },
  { transform: "scaleY(1)" },
];

// idle blink is on a wrapper around each eye so this doesn't cancel it
export const blinkTwice = (root: Element | null) =>
  root?.querySelectorAll("[data-part='eye']").forEach((eye) =>
    play(eye, blink, {
      duration: 200,
      iterations: 2,
      easing: "ease-in-out",
    })
  );

// origin a bit below the middle so it reads as a lid closing, not the eye shrinking
export const SVG_EYE = "[transform-box:fill-box] origin-[50%_65%]";

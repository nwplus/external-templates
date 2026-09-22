/** The artwork behind the shelf ornaments, at its true intrinsic size. */
export const ORNAMENT_ART = {
  "books-left": {
    src: "/assets/sponsors/books-left.webp",
    width: 515,
    height: 596,
  },
  "books-right": {
    src: "/assets/sponsors/books-right.webp",
    width: 516,
    height: 545,
  },
  plant: {
    base: "/assets/sponsors/plant",
    widths: [400, 800, 1200],
    width: 368,
    height: 368,
  },
} as const;

/** Plays nothing when the visitor has asked for less motion. */
export const prefersLessMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Starts a Web Animation on an element after cancelling whatever it was
 * already playing, so a second click restarts the move instead of stacking
 * two of them.
 */
export const play = (
  el: Element,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions
) => {
  el.getAnimations().forEach((animation) => animation.cancel());
  return el.animate(keyframes, options);
};

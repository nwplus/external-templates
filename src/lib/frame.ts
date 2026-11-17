import type { CSSProperties } from "react";

/** A layer's box in a Figma frame, as a percentage of the frame's width and
 * height (see constants/stats.ts and friends). */
export type Box = { x: number; y: number; w: number; h: number };

/** Absolute placement for a layer inside a scene that keeps the design's
 * proportions (`aspect-[w/h]` on the scene root). */
export const frameStyle = ({ x, y, w, h }: Box): CSSProperties => ({
  left: `${x}%`,
  top: `${y}%`,
  width: `${w}%`,
  height: `${h}%`,
});

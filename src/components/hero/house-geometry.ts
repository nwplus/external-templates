import type { CSSProperties } from "react";

/**
 * Where things are on the house rasters, as percentages of the image, and
 * the arithmetic for putting overlays in the same place on screen.
 *
 * The desktop house (2271x1390) is drawn with `object-contain
 * object-bottom-left` in a box that is wider than the art (aspect 1.7), so
 * the image is height-fitted and left-aligned: it spans the box's full
 * height but only 96.1% of its width. Anything placed in that box in image
 * percentages needs its x scaled by that factor; y is unchanged.
 */
export const HOUSE_IMAGE_TO_BOX = 2271 / 1390 / 1.7;

type Point = [x: number, y: number];

const polygon = (points: Point[], xScale: number) =>
  `polygon(${points
    .map(([x, y]) => `${(x * xScale).toFixed(2)}% ${y}%`)
    .join(", ")})`;

/**
 * The desktop house with its lamp off: everything except the baked-in beam.
 * The path comes in from the top edge, follows the roof peak, the lamp
 * bracket, the wall where the bulb's glow begins, the lower eave, then its
 * underside and the gap between eave and wall (the beam's soft halo shows
 * through there), and heads back out below the beam. Every vertex was read
 * off the raster's alpha channel; the beam itself fades out by 76%, so the far
 * ends only need to clear its edges.
 */
const DESKTOP_UNLIT: Point[] = [
  [0, 0],
  [94, 0],
  [25.05, 31.9],
  [25.45, 33],
  [25.85, 34],
  [26.05, 34.5],
  [26.25, 35.05],
  [29.75, 35.05],
  [29.75, 35.45],
  [29.95, 35.5],
  [30.15, 35.7],
  [30.35, 35.85],
  [30.35, 36.05],
  [30.15, 36.2],
  [29.85, 36.3],
  [29.65, 36.5],
  [29.45, 36.7],
  [29.43, 42.1],
  [29.55, 42.2],
  [29.65, 42.4],
  [29.75, 42.6],
  [30.45, 43.95],
  [31.12, 45],
  [31.67, 45.8],
  [31.67, 46.35],
  [32.12, 47.1],
  [33.12, 48.7],
  [33.12, 49.9],
  [32.55, 49.9],
  [32.55, 49.42],
  [31.85, 49.42],
  [31.3, 49.565],
  [30.5, 49.565],
  [30.42, 49.635],
  [29.75, 49.635],
  [29.72, 49.35],
  [29.55, 48.85],
  [29.35, 48.25],
  [29.32, 48.2],
  [29.28, 48.7],
  [29.2, 48.85],
  [29.19, 49.05],
  [29.1, 49.15],
  [29.09, 49.7],
  [29.02, 50],
  [28.98, 50.4],
  [100, 70],
  [100, 100],
  [0, 100],
];

/**
 * The same for the phone house (393x710 art, drawn at its own size). Its beam
 * is a shallower fan that runs off the right edge, and its soft halo reaches
 * over the roof ridge, so the path follows the ridge, the lamp bracket, the
 * bulb's edge, the lower eave and its underside before heading out. It dips
 * around the teal star that sits just under the beam.
 */
const MOBILE_UNLIT: Point[] = [
  [0, 0],
  [100, 0],
  [100, 18],
  [60, 20.5],
  [26.65, 27.2],
  [26.65, 27.55],
  [26.9, 27.85],
  [27.1, 28.05],
  [27.6, 28.55],
  [28.1, 29.05],
  [28.6, 29.3],
  [29.1, 29.8],
  [29.1, 29.88],
  [39.1, 29.88],
  [39.6, 30.25],
  [40.35, 30.5],
  [41.1, 30.75],
  [41.1, 30.85],
  [39.85, 31],
  [38.6, 31.25],
  [38.6, 31.75],
  [38.4, 32],
  [38.35, 32.6],
  [38.1, 32.75],
  [38.1, 33.9],
  [37.85, 34],
  [37.85, 34.6],
  [38.1, 34.75],
  [38.1, 36.1],
  [38.35, 36.25],
  [38.35, 36.6],
  [38.6, 36.75],
  [40.1, 37.75],
  [41.2, 38.5],
  [42.1, 39],
  [43.6, 39.75],
  [44.35, 40.25],
  [44.4, 40.75],
  [44.85, 41],
  [45.85, 41.5],
  [46.6, 42],
  [47.7, 42.5],
  [48.45, 43],
  [48.85, 43.5],
  [49.1, 43.75],
  [48.6, 44],
  [48.6, 44.4],
  [48.15, 44.4],
  [48.15, 44.25],
  [47.9, 44],
  [47.65, 43.75],
  [47.65, 43.62],
  [45.4, 43.62],
  [45.4, 43.9],
  [39.15, 43.9],
  [39.15, 43.85],
  [38.9, 43.5],
  [38.65, 43.25],
  [38.4, 43],
  [38.15, 42.75],
  [37.95, 42.62],
  [37.9, 42.75],
  [37.65, 43],
  [37.65, 43.3],
  [37.4, 43.5],
  [37.4, 43.8],
  [37.15, 44],
  [37.15, 44.3],
  [36.9, 44.5],
  [36.9, 44.8],
  [36.65, 45],
  [36.65, 45.3],
  [36.4, 45.5],
  [36.4, 45.8],
  [36.15, 46],
  [36.15, 46.4],
  [42, 48.6],
  [53, 48.6],
  [79, 48.6],
  [80, 47.7],
  [89, 47.7],
  [90, 48.6],
  [100, 48.7],
  [100, 100],
  [0, 100],
];

export const DESKTOP_UNLIT_CLIP = polygon(DESKTOP_UNLIT, HOUSE_IMAGE_TO_BOX);
export const MOBILE_UNLIT_CLIP = polygon(MOBILE_UNLIT, 1);

/** A rectangle given in image percentages, as a style for the house box. */
const spot = (
  left: number,
  top: number,
  width: number,
  height: number,
  xScale = HOUSE_IMAGE_TO_BOX
): CSSProperties => ({
  left: `${(left * xScale).toFixed(2)}%`,
  top: `${top}%`,
  width: `${(width * xScale).toFixed(2)}%`,
  height: `${height}%`,
});

/**
 * The interactive spots on the desktop house. `lamp` is the house and its
 * hill (the click target for the light); the windows and door are the frames
 * as drawn, with the glass measured separately where something has to fit
 * inside it. The round window's width and height are chosen so it is a true
 * circle on screen (the box is 1.7 times wider than it is tall).
 */
export const HOUSE_SPOTS = {
  lamp: spot(3, 28, 37.5, 72),
  round: spot(13.5, 51, 3.4, 5.6),
  upper: spot(21.2, 40.8, 6, 7.6),
  lower: spot(18.8, 50.4, 5.2, 6.4),
  door: spot(24.1, 50.7, 3.4, 10.1),
} as const;

/** The glass of each arched window, as a fraction of its frame's spot. */
export const WINDOW_GLASS = {
  upper: { left: "26.7%", top: "13.2%", width: "46.7%", height: "79%" },
  lower: { left: "28.8%", top: "12.5%", width: "38.5%", height: "76.6%" },
} as const;

/** The pointed-arch outline of the window glass. */
export const LANTERN_CLIP =
  "polygon(50% 0, 100% 24%, 100% 74%, 50% 100%, 0 74%, 0 24%)";

/** The phone house: just the tap target for the light. */
export const MOBILE_SPOTS = {
  lamp: spot(0, 26, 50, 42, 1),
} as const;

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

/**
 * The desktop beam as a wedge in house-box percentages, for drawing it apart
 * from the raster. Its two long edges are where the raster's beam crosses
 * half strength (measured at 40% and 50% across the image): the top edge
 * falls 0.47 and the bottom edge climbs 0.23 for every step across. The
 * wedge starts a little way behind the wall, inside the house, so its root
 * stays hidden however it is turned, and runs out to the image's right edge.
 */
const beamTop = (x: number) => 31.5 - 0.47 * (x - 40);
const beamBottom = (x: number) => 48 + 0.23 * (x - 40);
const beamPoint = (x: number, y: number) =>
  [x * HOUSE_IMAGE_TO_BOX, y] as const;

export const DESKTOP_BEAM = {
  backTop: beamPoint(27, beamTop(27)),
  farTop: beamPoint(100, beamTop(100)),
  farBottom: beamPoint(100, beamBottom(100)),
  backBottom: beamPoint(27, beamBottom(27)),
  /**
   * What the beam swings about: the middle of the beam where it leaves the
   * lamp, so it stays on the lamp whichever way it points.
   */
  pivot: beamPoint(29.8, (beamTop(29.8) + beamBottom(29.8)) / 2),
} as const;

/**
 * Where the beam's baked images sit in the house box, in percentages, as
 * cropped to their visible pixels. `beam.webp` is the wedge above;
 * `beam-glow.webp` is the spotlight glow that used to be a live 40 px CSS
 * blur. Both are rendered once, so turning them is only a texture rotating on
 * the GPU (a blurred, blended layer had to be re-blurred every frame).
 */
export const DESKTOP_BEAM_ART = {
  beam: { left: 24.286, top: 16.332, width: 48.357, height: 40.254 },
  glow: { left: 25.036, top: 12.082, width: 56.179, height: 48.45 },
} as const;

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
 * A lit window's glow: a box centred on the pane, given as its centre and
 * size in image percentages, grown by `grow` so the light spills past the
 * frame onto the wall.
 */
const glow = (
  x: number,
  y: number,
  width: number,
  height: number,
  xScale = HOUSE_IMAGE_TO_BOX,
  grow = 1.7
) =>
  spot(
    x - (width * grow) / 2,
    Number((y - (height * grow) / 2).toFixed(2)),
    width * grow,
    Number((height * grow).toFixed(2)),
    xScale
  );

/**
 * The desktop house's windows, measured off the raster's panes: the upper
 * window, the lower one beside the door and the round lattice window.
 */
export const HOUSE_WINDOWS = [
  glow(24.09, 44.75, 2.2, 5.9),
  glow(21.09, 53.67, 1.89, 5.04),
  glow(15.32, 53.6, 3.52, 5.76),
] as const;

/**
 * The phone house's two windows. Its round window is cut off by the left
 * edge, so it goes without.
 */
export const MOBILE_WINDOWS = [
  glow(23.13, 39.17, 6.38, 5.74, 1),
  glow(14.63, 47.82, 5.25, 4.84, 1),
] as const;

/** The desktop house and its hill: the click target for the light. */
export const HOUSE_SPOTS = {
  lamp: spot(3, 28, 37.5, 72),
} as const;

/** The phone house: just the tap target for the light. */
export const MOBILE_SPOTS = {
  lamp: spot(0, 26, 50, 42, 1),
} as const;

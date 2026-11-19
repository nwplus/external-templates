/* Layer positions and sizes are percentages of the corresponding frame
 * dimension so they scale with the scene. */


/** Layers inside the desktop stats frame. */
export const STATS_DESKTOP_FRAME = { width: 1512, height: 1412 };

export const STATS_DESKTOP = {
  // Align the perspective lines with the bottom edge of the About artwork.
  texture: { x: -9.094, y: -31.831, w: 109.493, h: 105.666 },
  clouds: { x: -12.037, y: -2.408, w: 136.019, h: 102.408 },
  video: { x: 29.696, y: 62.04, w: 46.495, h: 34.136 },
  mentors: { x: 71.23, y: 12.394, w: 23.068, h: 48.298 },
  hackers: { x: 41.733, y: 25.354, w: 34.178, h: 37.421 },
  bear: { x: 24.167, y: 43.215, w: 14.349, h: 14.333 },
  lanterns: { x: 79.762, y: 65.652, w: 16.577, h: 26.886 },
  recap2027: { x: 6.217, y: 46.176, w: 21.925, h: 43.591 },
  projects: { x: 6.217, y: 14.943, w: 35.463, h: 21.671 },
} as const;

/** Layers inside the phone stats frame (402x1510). */
export const STATS_MOBILE_FRAME = { width: 402, height: 1510 };

export const STATS_MOBILE = {
  // The phone crops the same texture to a different part of the perspective.
  texture: { x: -40.217, y: -15.674, w: 175.451, h: 42.49 },
  clouds: { x: -23.881, y: -1.06, w: 156.468, h: 82.046 },
  projects: { x: 16.667, y: 11.06, w: 66.692, h: 10.132 },
  mentors: { x: 48.507, y: 23.642, w: 43.383, h: 22.583 },
  hackers: { x: 3.483, y: 36.424, w: 64.279, h: 17.497 },
  bear: { x: 13.184, y: 27.02, w: 26.99, h: 6.702 },
  lanterns: { x: 58.458, y: 49.536, w: 31.169, h: 12.57 },
  recap2027: { x: 10.199, y: 65.497, w: 73.184, h: 12.914 },
  video: { x: 8.955, y: 80.993, w: 82.338, h: 15.026 },
} as const;

/* Layer positions and sizes are percentages of the corresponding frame
 * dimension so they scale with the scene. */


/** Layers inside the desktop stats frame. */
export const STATS_DESKTOP_FRAME = { width: 1512, height: 1412 };

export const STATS_DESKTOP = {
  // Align the perspective lines with the bottom edge of the About artwork.
  texture: { x: -9.094, y: -31.831, w: 109.493, h: 105.666 },
  clouds: { x: -12.037, y: -2.408, w: 136.019, h: 102.408 },
  video: { x: 29.696, y: 62.04, w: 46.495, h: 34.136 },
  mentors: { x: 70.503, y: 11.615, w: 23.810, h: 49.079 },
  hackers: { x: 40.135, y: 24.150, w: 37.434, h: 38.598 },
  bear: { x: 23.238, y: 42.224, w: 16.201, h: 16.317 },
  lanterns: { x: 78.538, y: 64.341, w: 19.024, h: 29.507 },
  recapArrow: { x: 4.828, y: 44.688, w: 24.537, h: 45.467 },
  projects: { x: 5.225, y: 14.234, w: 37.368, h: 23.513 },
} as const;

/** Layers inside the phone stats frame (402x1510). */
export const STATS_MOBILE_FRAME = { width: 402, height: 1510 };

export const STATS_MOBILE = {
  // The phone crops the same texture to a different part of the perspective.
  texture: { x: -40.217, y: -15.674, w: 175.451, h: 42.49 },
  clouds: { x: -23.881, y: -1.06, w: 156.468, h: 82.046 },
  projects: { x: 14.801, y: 10.728, w: 70.398, h: 10.993 },
  mentors: { x: 47.139, y: 23.278, w: 44.776, h: 22.980 },
  hackers: { x: 3.482, y: 35.861, w: 64.428, h: 18.079 },
  bear: { x: 11.444, y: 26.555, w: 30.467, h: 7.629 },
  lanterns: { x: 56.157, y: 48.924, w: 35.777, h: 13.796 },
  recapArrow: { x: 9.590, y: 64.801, w: 76.617, h: 14.238 },
  video: { x: 8.955, y: 80.993, w: 82.338, h: 15.026 },
} as const;

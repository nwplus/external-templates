/* Geometry lifted from the nwHacks 2027 Figma ("Final for dev"), expressed as a
 * percentage of its frame, so a scene keeps the design's proportions at any
 * width: 1% of x is 1% of the frame's width, 1% of y is 1% of its height. */
/** Layers inside the desktop testimonial frames (1512x982). */
export const TESTIMONIALS_DESKTOP_FRAME = { width: 1512, height: 982 };

export const TESTIMONIALS_DESKTOP = {
  bg: { x: -34.921, y: -33.299, w: 135.119, h: 133.299 },
  pascaleBase: { x: 0.0, y: 23.727, w: 32.937, h: 56.976 },
  vaibhavBase: { x: 31.944, y: 25.458, w: 36.786, h: 56.253 },
  qaziBase: { x: 66.138, y: 25.967, w: 35.423, h: 57.536 },
  pascaleSelected: { x: 7.407, y: 15.784, w: 41.382, h: 77.088 },
  vaibhavSelected: { x: 5.952, y: 16.701, w: 46.217, h: 70.672 },
  qaziSelected: { x: 4.795, y: 16.293, w: 45.172, h: 74.745 },
  card: { x: 54.563, y: 24.134, w: 37.103, h: 46.436 },
  tail: { x: 47.877, y: 35.804, w: 8.439, h: 8.269 },
  title: { x: 36.442, y: 6.008, w: 27.183, h: 7.637 },
  hint: { x: 36.442, y: 13.646, w: 27.183, h: 2.749 },
  arrows: { x: 64.153, y: 76.273, w: 17.923, h: 5.092 },
} as const;

/** Layers inside the phone testimonial frames (402x874). */
export const TESTIMONIALS_MOBILE_FRAME = { width: 402, height: 874 };

export const TESTIMONIALS_MOBILE = {
  bg: { x: -7.985, y: -3.627, w: 114.602, h: 104.314 },
  pascaleStall: { x: 10.945, y: 4.577, w: 77.836, h: 40.217 },
  pascalePortrait: { x: 37.562, y: 15.389, w: 23.881, h: 16.476 },
  qaziStall: { x: 9.453, y: 7.437, w: 81.343, h: 35.938 },
  vaibhavStall: { x: 10.697, y: 8.238, w: 80.149, h: 36.613 },
  card: { x: 9.95, y: 47.483, w: 79.851, h: 36.842 },
  tail: { x: 48.035, y: 44.771, w: 6.244, h: 3.844 },
  hint: { x: 2.985, y: 84.668, w: 94.03, h: 2.975 },
  arrows: { x: 16.418, y: 87.986, w: 67.413, h: 5.721 },
} as const;

/* Geometry lifted from the nwHacks 2027 Figma ("Final for dev"), expressed as a
 * percentage of its frame, so a scene keeps the design's proportions at any
 * width: 1% of x is 1% of the frame's width, 1% of y is 1% of its height. */
/** Layers inside the desktop recap frame (Fig. Frame 1199, 1512x982). */
export const RECAP_DESKTOP_FRAME = { width: 1512, height: 982 };

export const RECAP_DESKTOP = {
  wall: { x: -0.066, y: 9.267, w: 100.0, h: 96.843 },
  columnLeft: { x: 0.0, y: 13.035, w: 7.804, h: 86.965 },
  columnRight: { x: 92.593, y: 13.035, w: 7.804, h: 86.965 },
  lights: { x: 1.653, y: 13.035, w: 91.653, h: 53.157 },
  topShadow: { x: 9.921, y: 28.513, w: 81.019, h: 15.275 },
  doorShadow: { x: 12.235, y: 28.717, w: 83.003, h: 76.375 },
  door: { x: 7.54, y: 26.578, w: 84.788, h: 78.513 },
  photos: { x: 13.69, y: 31.772, w: 76.131, h: 62.811 },
  sideShadowL: { x: 8.796, y: 28.615, w: 2.778, h: 71.385 },
  sideShadowR: { x: 88.426, y: 28.513, w: 2.778, h: 71.385 },
  // Overlap the wood cutout slightly to cover the rail's translucent edge.
  rightDoor: { x: 90.013, y: 27.495, w: 2.65, h: 73.523 },
} as const;

/** Layers inside the phone recap frame (407x874). */
export const RECAP_MOBILE_FRAME = { width: 407, height: 874 };

export const RECAP_MOBILE = {
  door: { x: 1.229, y: 0.0, w: 98.771, h: 100.0 },
  doorBottom: { x: 1.229, y: 94.966, w: 98.771, h: 5.034 },
  doorHandle: { x: 41.523, y: 96.568, w: 21.867, h: 1.945 },
  photo1: { x: 49.877, y: 29.863, w: 46.781, h: 12.357 },
  photo2: { x: 3.686, y: 45.423, w: 45.725, h: 17.849 },
  photo3: { x: 14.251, y: 12.929, w: 40.541, h: 18.65 },
  photo4: { x: 10.319, y: 60.069, w: 51.302, h: 14.462 },
  photo5: { x: 46.437, y: 44.165, w: 41.622, h: 13.844 },
  photo6: { x: 49.386, y: 13.387, w: 38.6, h: 13.73 },
  photo7: { x: 15.479, y: 32.838, w: 36.192, h: 12.643 },
  photo8: { x: 52.58, y: 70.023, w: 42.26, h: 21.384 },
  lights: { x: -1.229, y: -0.057, w: 96.704, h: 42.849 },
  photo9: { x: 9.828, y: 76.43, w: 46.118, h: 15.0 },
} as const;

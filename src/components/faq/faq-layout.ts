import type { FaqCategoryId } from "@/constants/faq";

/*
 * Where everything sits in the Figma "FAQ UNSELECTED" frame (1512 wide), in
 * design px, plus how far each group moves once a tank is picked (the "FAQ
 * GENERAL / TEAMS AND PROJECTS / LOGISTICS" frames).
 */

const A = "/assets/faq";

/** A layer exported from Figma. (x, y, w, h) is its box in the design. */
export type Layer = {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  /** Rotated layers: the art's own size, drawn centred in the box. */
  art?: { w: number; h: number };
  /** Rotation / mirroring from the design, applied to the art. */
  transform?: string;
};

/** A fish. `facing` is the way its nose points (1 right, -1 left). */
export type Fish = Layer & { facing: 1 | -1 };

export type Bubble = { cx: number; cy: number; r: number };

export type Shift = { dx: number; dy: number };

export const FRAME_W = 1512;
/** The unselected frame. The section never gets shorter than this, so the
 * page below doesn't jump when a tank is picked. */
export const FRAME_H = 1142;

/* ---- Room -------------------------------------------------------------- */

/** The wall's radial glow in each frame: centre and radii in design px. */
export const WALL = {
  idle: {
    cx: 732.5,
    cy: 600.6,
    rx: 1347,
    ry: 625.6,
    stops: ["rgb(19 91 79)", "rgb(34 67 59)", "rgb(49 43 38)"],
  },
  selected: {
    cx: 732.5,
    cy: 580.6,
    rx: 1347,
    ry: 604.8,
    stops: ["rgb(26 88 69)", "rgb(38 66 54)", "rgb(49 43 38)"],
  },
} as const;

/** The floor's spotlight (Figma "floor", 1682 x 337). */
export const FLOOR = {
  x: -79,
  y: 804,
  w: 1682,
  h: 337,
  shift: { dx: -6, dy: 36 },
} as const;

type Brick = [x: number, y: number, color: string];
const BRICK = { w: 65, h: 32.5, radius: 5.909 };
export { BRICK };

export const BRICKS: { shift: Shift; bricks: Brick[] }[] = [
  {
    shift: { dx: 5, dy: 61 },
    bricks: [
      [1174.09, 212.5, "#7d8578"],
      [1247.96, 212.5, "#354038"],
      [1442.96, 212.5, "#7d8578"],
      [1277.5, 126.82, "#525c4b"],
      [1360.23, 91.36, "#7d8578"],
      [1180, 82.5, "#7d8578"],
      [1212.5, 115, "#646a60"],
      [1342.5, 162.27, "#525c4b"],
      [1215.46, 177.05, "#7d8578"],
      [1312.96, 212.5, "#7d8578"],
      [1082.5, 180, "#7d8578"],
      [1050, 147.5, "#525c4b"],
      [1440, 82.5, "#525c4b"],
      [1407.5, 50, "#7d8578"],
      [1050, 212.5, "#7d8578"],
      [1442.96, 147.5, "#7d8578"],
    ],
  },
  {
    shift: { dx: 4, dy: 38 },
    bricks: [
      [-4, 767.5, "#77876d"],
      [61, 767.5, "#64715c"],
      [323.96, 767.5, "#77876d"],
      [28.5, 735, "#4f6b4e"],
      [161.46, 735, "#77876d"],
      [193.96, 702.5, "#77876d"],
      [128.96, 637.5, "#77876d"],
      [-4, 702.5, "#77876d"],
      [193.96, 767.5, "#64715c"],
      [226.46, 735, "#4f6b4e"],
      [256, 637.5, "#4f6b4e"],
      [220.54, 605, "#77876d"],
      [31.46, 605, "#77876d"],
      [128.96, 767.5, "#77876d"],
    ],
  },
];

/** The five little jars on top of the stack. Figma's picked frames draw
 * their fish differently, which wasn't intended: the idle design is used in
 * both. */
export const JARS = {
  // Set into the General lid, so they still rest on it while it lifts.
  layer: { src: `${A}/jars.svg`, x: 205, y: 90, w: 314, h: 150 },
  shift: { dx: -26, dy: 40 },
} as const;

export const TITLE = { y: 74, w: 411 } as const;

/** The questions column in the picked frames. */
export const QUESTIONS = { x: 606, y: 248, w: 752, bottomPad: 78 } as const;

/* ---- Topic tanks -------------------------------------------------------- */

export type TankLabel = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** The tag itself, rotated in its box. */
  tag: { w: number; h: number; rotate: number; fill: string; ink: string };
};

export type Tank = {
  id: FaqCategoryId;
  /** The tank's box: the click target. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Where the water starts, for the burst bubbles to rise to. */
  waterTop: number;
  /** Bubble colour in this tank. */
  bubble: string;
  /** Glass, water and rim, drawn under the fish. */
  back: Layer[];
  /** Replaces `back` in the desktop stack, where a hover lifts the tank: the
   * glass runs on behind the lid below, so the lift doesn't bare its bottom.
   * The phone stack is staggered (and has no hover), so it keeps `back`. */
  liftBack?: Layer[];
  fish: Fish[];
  /** The tank's resting bubbles, which go with its fish. */
  bubbles?: Layer;
  label: TankLabel;
  /** Fish drawn over the label (Figma has one goldfish on top of it). */
  fishOverLabel?: Fish[];
};

/** The whole stack slides this far when a tank is picked. */
export const TANKS_SHIFT: Shift = { dx: -16, dy: 41 };

export const TANKS: Tank[] = [
  {
    id: "general",
    x: 146,
    y: 232,
    w: 407,
    h: 227.881,
    waterTop: 281,
    bubble: "rgb(255 255 255 / 0.75)",
    back: [
      { src: `${A}/general-tank.svg`, x: 146, y: 232, w: 407, h: 227.881 },
    ],
    liftBack: [
      { src: `${A}/general-tank-tall.svg`, x: 146, y: 232, w: 407, h: 240 },
    ],
    bubbles: { src: `${A}/general-bubbles.svg`, x: 305, y: 360, w: 43, h: 59 },
    fish: [
      {
        src: `${A}/general-goldfish-1.svg`,
        x: 181,
        y: 288,
        w: 137.531,
        h: 116.066,
        art: { w: 127.164, h: 102.944 },
        transform: "rotate(6.2deg)",
        facing: 1,
      },
    ],
    label: {
      x: 274,
      y: 268,
      w: 161.866,
      h: 72.959,
      tag: {
        w: 160.599,
        h: 70,
        rotate: -1.06,
        fill: "#ffd580",
        ink: "#942829",
      },
    },
    fishOverLabel: [
      {
        src: `${A}/general-goldfish-2.svg`,
        x: 372,
        y: 329.99,
        w: 137.531,
        h: 116.066,
        art: { w: 127.164, h: 102.944 },
        transform: "rotate(-6.2deg)",
        facing: -1,
      },
    ],
  },
  {
    id: "teams",
    x: 146,
    y: 442,
    w: 410.946,
    h: 252.999,
    waterTop: 505,
    bubble: "rgb(255 255 255 / 0.75)",
    back: [
      { src: `${A}/teams-tank.svg`, x: 146, y: 442, w: 410.946, h: 252.999 },
    ],
    fish: [
      {
        src: `${A}/teams-fish@2x.webp`,
        x: 212,
        y: 551,
        w: 285,
        h: 124,
        facing: 1,
      },
    ],
    label: {
      x: 189,
      y: 484,
      w: 258.907,
      h: 80.106,
      tag: {
        w: 256.334,
        h: 70,
        rotate: -2.27,
        fill: "#ffd580",
        ink: "#942829",
      },
    },
  },
  {
    id: "logistics",
    x: 150.39,
    y: 674,
    w: 406.636,
    h: 240.85,
    waterTop: 744,
    bubble: "rgb(195 255 237 / 0.75)",
    back: [
      {
        src: `${A}/logistics-water.svg`,
        x: 166.25,
        y: 743.85,
        w: 375.254,
        h: 171,
      },
      {
        src: `${A}/logistics-edge-left.svg`,
        x: 163.5,
        y: 689,
        w: 14.4976,
        h: 225.719,
      },
      {
        src: `${A}/logistics-edge-right.svg`,
        x: 521.52,
        y: 697.61,
        w: 27.9712,
        h: 216.789,
        transform: "scaleX(-1)",
      },
      {
        src: `${A}/logistics-rim.svg`,
        x: 150.39,
        y: 674,
        w: 406.636,
        h: 34.873,
        art: { w: 406.148, h: 24.955 },
        transform: "rotate(1.4deg)",
      },
    ],
    fish: [
      {
        src: `${A}/logistics-fish-1@2x.webp`,
        x: 201.02,
        y: 854,
        w: 130.705,
        h: 33.501,
        facing: 1,
      },
      {
        src: `${A}/logistics-fish-2@2x.webp`,
        x: 381.02,
        y: 826,
        w: 136,
        h: 37.501,
        transform: "scaleX(-1)",
        facing: -1,
      },
      {
        src: `${A}/logistics-fish-3@2x.webp`,
        x: 187.27,
        y: 772.85,
        w: 127,
        h: 32.551,
        facing: 1,
      },
    ],
    bubbles: {
      src: `${A}/logistics-bubbles.svg`,
      x: 327.02,
      y: 790,
      w: 47,
      h: 48,
    },
    label: {
      x: 336,
      y: 723,
      w: 190.576,
      h: 85.713,
      tag: {
        w: 187.501,
        h: 78,
        rotate: 2.38,
        fill: "#ffd47f",
        ink: "#942828",
      },
    },
  },
];

/* ---- Long tank (top right; slides under the questions) ----------------- */

export const LONG_TANK = {
  x: 593,
  y: 231,
  w: 797,
  h: 242.802,
  shift: { dx: -14, dy: 500 },
  back: `${A}/long-tank-back.svg`,
  seagrass: `${A}/long-tank-seagrass.svg`,
  front: `${A}/long-tank-front.svg`,
  /** The grass's roots, as a share of the tank box (the sway pivot). */
  grassRoot: "12.5% 91.4%",
  fish: [
    {
      src: `${A}/long-fish-1@2x.webp`,
      x: 799.5,
      y: 297.69,
      w: 154.184,
      h: 116.306,
      art: { w: 142.009, h: 97.515 },
      transform: "rotate(172.01deg) scaleY(-1)",
      facing: 1,
    },
    {
      src: `${A}/long-fish-2@2x.webp`,
      x: 1182.02,
      y: 288,
      w: 154.184,
      h: 116.306,
      art: { w: 142.009, h: 97.515 },
      transform: "rotate(172.01deg) scaleY(-1)",
      facing: 1,
    },
  ] satisfies Fish[],
  /** The one blowing bubbles: the easter-egg fish. */
  blower: {
    src: `${A}/long-fish-3@2x.webp`,
    x: 996,
    y: 329,
    w: 156.197,
    h: 119.682,
    art: { w: 142.011, h: 97.515 },
    transform: "rotate(9.53deg)",
    facing: -1,
  } satisfies Fish,
  /** Figma "Group 1429": the blower's bubbles, bottom one first. */
  blowerBubbles: {
    x: 973.5,
    y: 313,
    w: 34,
    h: 60,
    fill: "#C9E4F9",
    bubbles: [
      { cx: 12.5, cy: 56.5, r: 3.5 },
      { cx: 28.5, cy: 34.5, r: 5.5 },
      { cx: 6, cy: 6, r: 6 },
    ] satisfies Bubble[],
  },
} as const;

/* ---- Giant tank (idle only) -------------------------------------------- */

export const GIANT_TANK = {
  water: {
    src: `${A}/giant-water.svg`,
    x: 614,
    y: 519,
    w: 759,
    h: 399.632,
  },
  fish: [
    {
      src: `${A}/giant-fish-1@2x.webp`,
      x: 998,
      y: 564,
      w: 158.574,
      h: 91.49,
      art: { w: 153.999, h: 82.611 },
      transform: "rotate(176.64deg) scaleY(-1)",
      facing: -1,
    },
    {
      src: `${A}/giant-fish-2@2x.webp`,
      x: 744,
      y: 630,
      w: 176.998,
      h: 112.955,
      art: { w: 165.379, h: 88.714 },
      transform: "rotate(-171.21deg) scaleY(-1)",
      facing: -1,
    },
    {
      src: `${A}/giant-fish-3@2x.webp`,
      x: 989,
      y: 708,
      w: 178.097,
      h: 115.178,
      art: { w: 165.615, h: 88.84 },
      transform: "rotate(9.59deg)",
      facing: 1,
    },
  ] satisfies Fish[],
  bubbles: {
    src: `${A}/giant-bubbles.svg`,
    x: 723.36,
    y: 552.28,
    w: 43.766,
    h: 93.085,
  },
  sparkle: {
    src: `${A}/giant-sparkle.svg`,
    x: 1279,
    y: 553,
    w: 51.067,
    h: 60.335,
  },
  seagrass: {
    src: `${A}/giant-seagrass.svg`,
    x: 1196,
    y: 608,
    w: 143.667,
    h: 246.018,
    transform: "scaleX(-1)",
  },
  /** Rocks, sand, glass edges and rim, over the fish and grass. */
  front: [
    {
      src: `${A}/giant-rock-1.svg`,
      x: 818,
      y: 765,
      w: 59.595,
      h: 42.196,
      art: { w: 53.701, h: 32.764 },
      transform: "rotate(10.91deg) skewX(-1.19deg)",
    },
    {
      src: `${A}/giant-sand.svg`,
      x: 626.5,
      y: 787.61,
      w: 738.5,
      h: 131.786,
    },
    {
      src: `${A}/giant-rock-2.svg`,
      x: 1249,
      y: 797,
      w: 45.428,
      h: 34.483,
      art: { w: 38.28, h: 31.033 },
      transform: "rotate(-6.52deg) scaleY(0.99) skewX(7.27deg)",
    },
    {
      src: `${A}/giant-rock-3.svg`,
      x: 891.09,
      y: 800.33,
      w: 24.702,
      h: 23.355,
      art: { w: 24.904, h: 20.19 },
      transform: "rotate(7.3deg) scaleY(0.99) skewX(7.3deg)",
    },
    {
      src: `${A}/giant-edge-left.svg`,
      x: 608.5,
      y: 463,
      w: 27.9923,
      h: 458.373,
    },
    {
      src: `${A}/giant-edge-right.svg`,
      x: 1360,
      y: 463,
      w: 16.4988,
      h: 457.148,
      transform: "scaleX(-1)",
    },
    { src: `${A}/giant-rim.svg`, x: 592, y: 442, w: 800, h: 45 },
  ] satisfies Layer[],
} as const;

/* ---- Characters (idle only) -------------------------------------------- */

/** The cool teen deer, plus the face details Figma keeps outside its group
 * (open mouth, eye shines). */
export const DEER: Layer[] = [
  { src: `${A}/deer@2x.webp`, x: 506.086, y: 659, w: 203, h: 482 },
  { src: `${A}/deer-mouth.svg`, x: 635, y: 811, w: 10, h: 10 },
  { src: `${A}/deer-eye-shine.svg`, x: 617, y: 789, w: 2, h: 2 },
  { src: `${A}/deer-eye-glint.svg`, x: 613, y: 791, w: 1, h: 1 },
  { src: `${A}/deer-eye-shine.svg`, x: 659, y: 788, w: 2, h: 2 },
  { src: `${A}/deer-eye-glint.svg`, x: 655, y: 790, w: 1, h: 1 },
];

/** Tennis player Nugget holding a box of fish: what's behind the fish, the
 * fish (which hop), then the box front and the rest. */
export const NUGGET = {
  back: [
    {
      src: `${A}/nugget-shadow.svg`,
      x: 650.86,
      y: 923.7,
      w: 198.556,
      h: 228.292,
      art: { w: 124.867, h: 192.631 },
      transform: "rotate(26.92deg)",
    },
    {
      src: `${A}/nugget-body@2x.webp`,
      x: 691.99,
      y: 793.36,
      w: 204.249,
      h: 181.671,
      art: { w: 202.145, h: 179.294 },
      transform: "rotate(-0.68deg)",
    },
    { src: `${A}/nugget-hat@2x.webp`, x: 720.93, y: 782, w: 111.55, h: 51.178 },
    {
      src: `${A}/nugget-shirt-sleeve@2x.webp`,
      x: 700.7,
      y: 862.15,
      w: 26.906,
      h: 37.488,
      art: { w: 23.279, h: 35.203 },
      transform: "rotate(173.87deg) scaleY(-1)",
    },
    {
      src: `${A}/nugget-shirt@2x.webp`,
      x: 711.45,
      y: 860.64,
      w: 132.8,
      h: 76.368,
    },
    {
      src: `${A}/nugget-fanny-pack.svg`,
      x: 716.06,
      y: 861.74,
      w: 132.467,
      h: 56.007,
    },
  ] satisfies Layer[],
  fish: [
    {
      src: `${A}/nugget-box-fish-1@2x.webp`,
      x: 728,
      y: 848,
      w: 63.011,
      h: 79.362,
      art: { w: 80.513, h: 22.2 },
      transform: "rotate(56.44deg) scaleY(-1)",
    },
    {
      src: `${A}/nugget-box-fish-2@2x.webp`,
      x: 695,
      y: 853,
      w: 86.632,
      h: 59.942,
      art: { w: 85.319, h: 23.526 },
      transform: "rotate(-152.78deg) scaleY(-1)",
    },
    {
      src: `${A}/nugget-box-fish-3@2x.webp`,
      x: 743,
      y: 859,
      w: 78.511,
      h: 58.993,
      art: { w: 78.561, h: 21.662 },
      transform: "rotate(-30.96deg)",
    },
  ] satisfies Layer[],
  front: [
    {
      src: `${A}/nugget-box.svg`,
      x: 697.61,
      y: 880.37,
      w: 118.33,
      h: 44.073,
      art: { w: 117.593, h: 41.963 },
      transform: "rotate(1.03deg)",
    },
    {
      src: `${A}/nugget-paw@2x.webp`,
      x: 791.89,
      y: 861.58,
      w: 51.922,
      h: 46.187,
    },
    {
      src: `${A}/nugget-skirt@2x.webp`,
      x: 702.02,
      y: 927.36,
      w: 148.761,
      h: 38.61,
    },
    {
      src: `${A}/nugget-eye-right@2x.webp`,
      x: 797,
      y: 796,
      w: 22.645,
      h: 23.201,
      art: { w: 17.554, h: 16.078 },
      transform: "rotate(-60.44deg)",
    },
    {
      src: `${A}/nugget-eye-left@2x.webp`,
      x: 727,
      y: 796,
      w: 18.636,
      h: 19.681,
      art: { w: 15.442, h: 12.666 },
      transform: "rotate(-119.56deg) scaleY(-1)",
    },
  ] satisfies Layer[],
} as const;

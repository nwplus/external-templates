/**
 * Captions for the six framed pictures on the FAQ wall
 * (public/assets/faq/shelf-frames.webp), by frame. Shown under a picture when
 * it is opened; keep them to about 60 characters.
 */
export const FAQ_FRAME_CAPTIONS = {
  campfire: "team bonding, pre-merge-conflict era",
  astronaut: "lost in space, but the build is green",
  "cross-stitch": "cross-stitched tent, finished before the deadline for once",
  "aurora-bear": "northern lights, or the laptop screen at 4 AM",
  pterodactyl: "scope creep, airborne",
  selfie: "mascot selfie, taken before the coffee ran out",
};

export type FaqFrame = keyof typeof FAQ_FRAME_CAPTIONS;

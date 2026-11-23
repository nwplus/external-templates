import {
  type PartingCloud,
  PartingClouds,
} from "@/components/ui/parting-clouds";
import { ABOUT_PARAGRAPHS_MOBILE, ABOUT_TITLE } from "@/constants/about";

import { AboutDeer, AboutLayer } from "./about-art";
import { AboutRiders, type RidersPath } from "./about-riders";

/** The Figma phone frame ("about us" in "mobile"). */
const W = 402;
const H = 874;
const FRAME = { width: W, height: H };
const M = "/assets/about/mobile";

/** The phone art is the desktop art at this scale, so the deer and riders
 * reuse the desktop WebPs. Their boxes are the desktop ones, carried over
 * from the bike's spot in each frame (Figma "bike": 507.69, 560.94 on
 * desktop; 97.64, 655.71 here). */
const S = 0.46496;
const fromBike = (x: number, y: number) => ({
  x: 97.64 + (x - 507.69) * S,
  y: 655.71 + (y - 560.94) * S,
});

/** The deer on the back rail. */
const DEER = { ...fromBike(785, 460), w: 110 * S };

/** The bridge is the desktop one scaled too, and so is its arch. */
const RIDERS: RidersPath = {
  frame: FRAME,
  box: { ...fromBike(514, 470), w: 252 * S, h: 222 * S },
  // Figma "Ellipse 674" (-140, 683.88, 687 x 315.66), inset to the deck top
  // like the desktop arch.
  arch: { cx: 203.5, cy: 841.71, rx: 729.8 * S, ry: 330.48 * S },
  fromRight: 480 * S,
  toLeft: 300 * S,
};

/** The three clouds, gathered toward the copy until the section is scrolled
 * into. As on desktop, each ends in a square cut past the frame's edge (the
 * left cloud on its left, the others on their right), so `from` stops short
 * of it. */
const CLOUDS: PartingCloud[] = [
  { src: `${M}/cloud-right.svg`, x: 223, y: 14, w: 380, h: 121, from: -170 },
  { src: `${M}/cloud-bottom.svg`, x: 173, y: 808, w: 399, h: 86, from: -150 },
  { src: `${M}/cloud-left.svg`, x: -190, y: -38, w: 385, h: 121, from: 150 },
];

/**
 * The phone layout of "One for the history books": the same sunset bridge,
 * cropped tall, with the copy in the sky above the city. Type is sized in
 * container units from the 402px frame (1cqw = 4.02 design px). The riders
 * cross and the clouds part as on desktop.
 */
export const AboutSceneMobile = () => (
  <div className="@container relative aspect-[402/874] w-full z-10 [clip-path:inset(0_0_-6%)] bg-[#11364f]">
    <AboutLayer src={`${M}/scene-back.svg`} frame={FRAME} />
    <AboutDeer frame={FRAME} {...DEER} />
    <AboutRiders path={RIDERS} />
    <AboutLayer src={`${M}/scene-front.svg`} frame={FRAME} />

    <div className="absolute top-[10.07%] left-1/2 flex w-[77.11%] -translate-x-1/2 flex-col items-center gap-[2.985cqw] text-center text-white">
      <h2 className="font-display text-[7.463cqw] leading-[1.267] font-normal text-balance">
        {ABOUT_TITLE}
      </h2>
      <div className="flex flex-col gap-[4.975cqw] text-[3.731cqw] leading-[1.333] font-medium">
        {ABOUT_PARAGRAPHS_MOBILE.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>

    <PartingClouds clouds={CLOUDS} width={W} height={H} />
  </div>
);

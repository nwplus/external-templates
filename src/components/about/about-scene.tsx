import {
  type PartingCloud,
  PartingClouds,
} from "@/components/ui/parting-clouds";
import { ABOUT_BODY, ABOUT_TITLE } from "@/constants/about";

import { AboutDeer, AboutLayer } from "./about-art";
import { AboutRiders, type RidersPath } from "./about-riders";

/** The Figma frame ("MacBook Pro 14" - 22"); the art is drawn at this size. */
const W = 1512;
const H = 982;
const FRAME = { width: W, height: H };

/** The deer on the back rail (art/about/deer.svg's box in the frame). */
const DEER = { x: 785, y: 460, w: 110 };

const RIDERS: RidersPath = {
  frame: FRAME,
  box: { x: 514, y: 470, w: 252, h: 222 },
  arch: { cx: 735.37, cy: 960.99, rx: 729.8, ry: 330.48 },
  fromRight: 480,
  toLeft: 300,
};

/** The three Figma clouds, gathered toward the copy until the section is
 * scrolled into. Each ends in a square cut past the frame's edge (left
 * cloud on its left, the others on their right), so `from` stops short of
 * it. */
const CLOUDS: PartingCloud[] = [
  {
    src: "/assets/about/cloud-right.svg",
    x: 1097,
    y: 5,
    w: 907,
    h: 283,
    from: -460,
  },
  {
    src: "/assets/about/cloud-bottom.svg",
    x: 834,
    y: 830,
    w: 956,
    h: 190,
    from: -260,
  },
  {
    src: "/assets/about/cloud-left.svg",
    x: -359,
    y: -77,
    w: 919,
    h: 283,
    from: 330,
  },
];

/**
 * "One for the history books": the crew crossing a red bridge at sunset,
 * Vancouver behind them. Like the hero, the scene keeps the design's
 * proportions at every width and sizes its type in container units worked
 * out from the 1512px design (1cqw = 15.12 design px).
 *
 * The bear, Nugget and the bike ride over the bridge with the scroll, between
 * the back rail (with the deer) and the front rail. The clouds part like the
 * hero's.
 */
export const AboutScene = () => (
  <div className="@container relative aspect-[1512/982] w-full z-10 [clip-path:inset(0_0_-6%)] bg-[#1b3a62]">
    <AboutLayer src="/assets/about/scene-back.svg" frame={FRAME} />
    <AboutDeer frame={FRAME} {...DEER} />
    <AboutRiders path={RIDERS} />
    <AboutLayer src="/assets/about/scene-front.svg" frame={FRAME} />

    <div className="absolute top-[13.54%] left-1/2 flex w-[41.73%] -translate-x-1/2 flex-col items-center gap-[1.455cqw] text-center text-white">
      <h2 className="font-display text-[2.746cqw] leading-[1.213] font-normal whitespace-nowrap">
        {ABOUT_TITLE}
      </h2>
      <p className="text-[1.323cqw] leading-[1.3] font-medium">{ABOUT_BODY}</p>
    </div>

    <PartingClouds clouds={CLOUDS} width={W} height={H} />
  </div>
);

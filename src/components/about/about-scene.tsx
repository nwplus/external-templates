import {
  type PartingCloud,
  PartingClouds,
} from "@/components/ui/parting-clouds";
import { ABOUT_PARAGRAPHS, ABOUT_TITLE } from "@/constants/about";

import { AboutDeer, AboutKwekKwek, AboutLayer } from "./about-art";
import { AboutRiders, type RidersPath } from "./about-riders";

/** The Figma frame ("MacBook Pro 14" - 22"); the art is drawn at this size. */
const W = 1512;
const H = 982;
const FRAME = { width: W, height: H };

/** The deer on the back rail (art/about/deer.svg's box in the frame). */
const DEER = { x: 795.052, y: 464.777, w: 115 };
/** The kwek kwek in its hand (art/about/kwek-kwek.svg's box). */
const KWEK_KWEK = { x: 807.537, y: 554.489, scale: 1 };

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
    {/* In the deer's paw, so the riders and front rail pass over it. */}
    <AboutKwekKwek frame={FRAME} {...KWEK_KWEK} />
    <AboutRiders path={RIDERS} />
    <AboutLayer src="/assets/about/scene-front.svg" frame={FRAME} />

    <div className="absolute top-[4.58%] left-1/2 flex w-[52.51%] -translate-x-1/2 flex-col items-center gap-[1.1cqw] text-center text-white">
      <h2 className="font-display text-[2.746cqw] leading-[1.213] font-normal whitespace-nowrap">
        {ABOUT_TITLE}
      </h2>
      {/* The closing line (the night market) is set narrower, 648 of 794. */}
      <div className="flex flex-col items-center gap-[1.19cqw] text-[1.323cqw] leading-[1.3] font-medium">
        {ABOUT_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph} className="last:w-[81.61%]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>

    <PartingClouds clouds={CLOUDS} width={W} height={H} />
  </div>
);

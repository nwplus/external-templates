import {
  type PartingCloud,
  PartingClouds,
} from "@/components/ui/parting-clouds";
import { ABOUT_BODY, ABOUT_TITLE } from "@/constants/about";
import { rasterArt } from "@/lib/raster-art";
import { cn } from "@/lib/utils";

import { AboutRiders } from "./about-riders";

/** The Figma frame ("MacBook Pro 14" - 22"); the art is drawn at this size. */
const W = 1512;
const H = 982;

/** The deer on the back rail (art/about/deer.svg's box in the frame). */
const DEER = {
  src: "/assets/about/deer@2x.webp",
  x: 785,
  y: 460,
  w: 110,
  h: 216,
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
    h: 270,
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

/** A full-frame layer of the scene, exported from Figma as SVG. */
const Layer = ({ src, className }: { src: string; className?: string }) => (
  // Plain <img>: vector art in a static export, so next/image adds nothing.
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt=""
    width={W}
    height={H}
    aria-hidden="true"
    draggable={false}
    decoding="async"
    className={cn(
      "pointer-events-none absolute inset-0 size-full select-none",
      className
    )}
  />
);

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
  <div className="@container relative aspect-[1512/982] w-full overflow-hidden bg-[#1b3a62]">
    <Layer src="/assets/about/scene-back.svg" />
    {/* The deer on the back rail, drawn last in the Figma back layer; split
        out so it ships as WebP like the other characters. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={DEER.src}
      {...rasterArt(DEER.src, DEER.w)}
      alt=""
      width={DEER.w}
      height={DEER.h}
      aria-hidden="true"
      draggable={false}
      decoding="async"
      className="pointer-events-none absolute h-auto max-w-none select-none"
      style={{
        left: `${(DEER.x / W) * 100}%`,
        top: `${(DEER.y / H) * 100}%`,
        width: `${(DEER.w / W) * 100}%`,
      }}
    />
    <AboutRiders />
    <Layer src="/assets/about/scene-front.svg" />

    <div className="absolute top-[13.54%] left-1/2 flex w-[41.73%] -translate-x-1/2 flex-col items-center gap-[1.455cqw] text-center text-white">
      <h2 className="font-display text-[2.746cqw] leading-[1.213] font-normal whitespace-nowrap">
        {ABOUT_TITLE}
      </h2>
      <p className="text-[1.323cqw] leading-[1.3] font-medium">{ABOUT_BODY}</p>
    </div>

    <PartingClouds clouds={CLOUDS} width={W} height={H} />
  </div>
);

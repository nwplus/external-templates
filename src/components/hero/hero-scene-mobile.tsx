"use client";

import {
  type PartingCloud,
  PartingClouds,
} from "@/components/ui/parting-clouds";
import { SlabButton } from "@/components/ui/slab-button";
import {
  HERO_DATE_LOCATION,
  HERO_ROLE_LINKS,
  HERO_TAGLINE,
  HERO_TITLE,
  SPONSOR_LINK,
} from "@/constants/hero";
import { useCollectFood } from "@/components/food-collection";
import { MOBILE_SKYLINE } from "@/constants/hero-windows";
import { cn } from "@/lib/utils";

import { type CSSProperties, type ReactNode, useState } from "react";

import { Countdown } from "./countdown";
import { HeroFireworks } from "./hero-fireworks";
import { HeroLanterns } from "./hero-lanterns";
import { HeroWindows } from "./hero-windows";
import "./hero.css";
import { scenePlacer } from "./scene-art";

/** The Figma phone hero ("mobile" > "hero"); every layer is placed in these
 * units. */
const W = 402;
const H = 1106;
const { pos, at, Art } = scenePlacer(W, H);

const M = "/assets/hero/mobile";

/** The desktop gate art (848 x 475) drawn 399.5px wide. */
const GATE = { x: 0, y: 458, width: 399.504 };
const GATE_H = (GATE.width * 475) / 848;

/** Figma's sky (both frames share the stops; the fireworks frame centres the
 * glow lower and wider). */
const SKY_STOPS = "#bfa48b 0%, #305693 59.6%, #06344d 100%";
const SKY = `radial-gradient(97.31% 28.71% at 50% 60.26%, ${SKY_STOPS})`;
const SKY_FIREWORKS = `radial-gradient(111.39% 31.99% at 50% 62.43%, ${SKY_STOPS})`;

/*
 * With the fireworks up, the Figma "fireworks hero mobile" frame has the
 * scene lower down: the gate, road and bear 39px, the countdown 19px and the
 * right-hand clouds 29px. Given in cqw (1cqw = 4.02 design px).
 */
const SHIFT_SCENE = "9.701cqw";
const SHIFT_COUNTDOWN = "4.726cqw";
const SHIFT_CLOUDS = "7.214cqw";

/** The two Figma cloud banks, one file per cloud, each sharing its bank's
 * box. They start gathered over the countdown, as on desktop. The left bank
 * is cut square at its left edge and the right bank at its right edge, so
 * `from` never pulls a cut into view. */
const bank = (
  side: "left" | "right",
  box: { x: number; y: number; w: number; h: number },
  froms: number[]
): PartingCloud[] =>
  froms.map((from, i) => ({
    src: `${M}/cloud-${side}-${i + 1}.svg`,
    ...box,
    from,
  }));

const LEFT_CLOUDS = bank(
  "left",
  { x: -871, y: 839, w: 1129, h: 290.899 },
  [120, 90, 150, 165]
);
const RIGHT_CLOUDS = bank(
  "right",
  { x: 252, y: 826, w: 320.449, h: 258.857 },
  [-140, -100]
);

/** Moves its layer down by `--shift` while the fireworks are up. */
const Shift = ({
  on,
  by,
  className,
  children,
}: {
  on: boolean;
  by: string;
  className?: string;
  children: ReactNode;
}) => (
  <div
    data-on={on || undefined}
    className={cn("hero-shift pointer-events-none absolute inset-0", className)}
    style={{ "--shift": by } as CSSProperties}
  >
    {children}
  </div>
);

/**
 * The phone hero (Figma "mobile" > "hero" and "fireworks hero mobile"): the
 * title and buttons up top, the night market gate below, the countdown in the
 * clouds. Tapping the gate sets off fireworks the way clicking it does on
 * desktop: the city lights go out, the mountains show, and the scene settles
 * a little lower, as the fireworks frame has it. The lanterns sway in the
 * breeze (there's no cursor to knock them with).
 *
 * Like the desktop scene it keeps the design's proportions at every width:
 * layers are placed in % of the 402 x 1106 frame and type is in cqw worked
 * out from the 402px design (1cqw = 4.02 design px).
 */
export const HeroSceneMobile = () => {
  const collectFood = useCollectFood();
  const [fireworks, setFireworks] = useState(false);
  const [fireworksLoaded, setFireworksLoaded] = useState(false);

  const toggleFireworks = () => {
    setFireworksLoaded(true);
    if (!fireworks) collectFood("tanghulu");
    setFireworks((on) => !on);
  };

  return (
    <div
      className="@container relative aspect-[402/1106] w-full overflow-hidden"
      style={{ background: SKY }}
    >
      <div
        aria-hidden="true"
        data-on={fireworks || undefined}
        className="hero-sky-fireworks absolute inset-0"
        style={{ background: SKY_FIREWORKS }}
      />

      <Shift on={fireworks} by={SHIFT_SCENE}>
        {/* Behind the ground: what the fireworks reveal */}
        <Art
          src={`${M}/mountains.svg`}
          width={1038}
          height={85.514}
          x={-321}
          y={619}
          className={cn("hero-mountains", fireworks && "is-shown")}
        />
        <HeroWindows
          skyline={MOBILE_SKYLINE}
          hidden={fireworks}
          className="absolute h-auto"
          style={at(-328, 418, MOBILE_SKYLINE.width)}
        />
        <HeroFireworks
          on={fireworks}
          loaded={fireworksLoaded}
          variant="mobile"
          className="absolute"
          style={at(0, 399, 402)}
        />
        <Art
          src="/assets/hero/market.svg"
          width={178.243}
          height={57.973}
          x={111}
          y={616.913}
        />
        <Art
          src={`${M}/ground.svg`}
          width={944.228}
          height={443}
          x={-271}
          y={668}
        />
        <Art src={`${M}/road.svg`} width={568} height={249} x={-91} y={669} />

        {/* The gate: tap it for fireworks */}
        <button
          type="button"
          aria-pressed={fireworks}
          aria-label={
            fireworks
              ? "Put out the fireworks"
              : "Set off fireworks over the gate"
          }
          onClick={toggleFireworks}
          className="group pointer-events-auto absolute aspect-[848/475] cursor-pointer focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lamp"
          style={at(GATE.x, GATE.y, GATE.width)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/gate.svg"
            alt=""
            width={848}
            height={475}
            draggable={false}
            className="absolute inset-0 size-full transition-[filter] duration-300 group-hover:brightness-110"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/gate-lights.svg"
            alt=""
            width={848}
            height={475}
            draggable={false}
            className={cn(
              "hero-gate-lights absolute inset-0 size-full",
              fireworks && "is-off"
            )}
          />
        </button>
        <HeroLanterns frame={{ width: W, height: H }} gate={GATE} />
        <Art
          src="/assets/hero/sign.svg"
          width={GATE.width}
          height={GATE_H}
          x={GATE.x}
          y={GATE.y}
        />
        <Art
          src="/assets/hero/bear-nugget@2x.webp"
          width={181.673}
          height={240.347}
          x={108}
          y={701}
        />
      </Shift>

      {/* Title, date and the ways to take part */}
      <div
        className="absolute inset-x-0 flex flex-col items-center gap-[7.463cqw] text-center font-medium text-white"
        style={pos(0, 111)}
      >
        <div className="flex flex-col items-center">
          <h1 className="font-display text-[9.95cqw] leading-[2.001] font-normal">
            {HERO_TITLE}
          </h1>
          <div className="flex flex-col items-center gap-[3.483cqw] text-[4.478cqw] leading-[1.018]">
            <p>{HERO_TAGLINE}</p>
            <p className="w-[64.93cqw]">{HERO_DATE_LOCATION}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[2.488cqw] text-[4.478cqw] leading-[1.018]">
          <p>Apply to be a:</p>
          <div className="flex items-end gap-[2.555cqw]">
            {HERO_ROLE_LINKS.map(({ label, href, face, slab, ink }) => (
              <SlabButton
                key={label}
                href={href}
                face={face}
                slab={slab}
                ink={ink}
                className="text-[3.985cqw]"
              >
                {label}
              </SlabButton>
            ))}
          </div>
          <a
            href={SPONSOR_LINK.href || undefined}
            aria-disabled={SPONSOR_LINK.href ? undefined : true}
            className="w-max underline decoration-from-font underline-offset-[0.15em] hover:text-lamp"
          >
            {SPONSOR_LINK.label}
          </a>
        </div>
      </div>

      <Shift on={fireworks} by={SHIFT_COUNTDOWN}>
        <Countdown className="absolute top-[81.28%] left-[49.94%] -translate-x-1/2 text-[3.633cqw]" />
      </Shift>
      {/* Over the countdown until the visitor scrolls a little way down */}
      <Shift on={fireworks} by={SHIFT_CLOUDS}>
        <PartingClouds clouds={RIGHT_CLOUDS} width={W} height={H} />
      </Shift>
      <PartingClouds clouds={LEFT_CLOUDS} width={W} height={H} />
    </div>
  );
};

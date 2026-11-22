"use client";

import { SlabButton } from "@/components/ui/slab-button";
import { useCollectFood } from "@/components/food-collection";
import {
  HERO_DATE_LOCATION,
  HERO_ROLE_LINKS,
  HERO_TAGLINE,
  HERO_TITLE,
  SPONSOR_LINK,
} from "@/constants/hero";
import { DESKTOP_SKYLINE } from "@/constants/hero-windows";
import { cn } from "@/lib/utils";

import { useState } from "react";

import { Countdown } from "./countdown";
import { HeroClouds } from "./hero-clouds";
import { HeroFireworks } from "./hero-fireworks";
import { HeroLanterns } from "./hero-lanterns";
import { HeroWindows } from "./hero-windows";
import "./hero.css";
import { scenePlacer } from "./scene-art";

/** The Figma "hero" frame; every layer is placed in these units. */
const W = 1512;
const H = 1422;
const { pos, at, Art } = scenePlacer(W, H);

/** The gate (gate.svg, 848 x 475), which the lanterns hang from. */
const GATE = { x: 630, y: 237, width: 848 };

/**
 * The nwHacks 2027 hero: a night market gate at the end of the road, the
 * city behind it and clouds rolling in at the bottom (gathered over the
 * countdown until the visitor scrolls a little way down). Clicking the gate
 * dims the city and sets off fireworks (and clicking again puts them out).
 *
 * The scene keeps the design's proportions at every width: layers are placed
 * in % of the 1512 x 1422 frame, and type uses container units (cqw) worked
 * out from the 1512px design, so 1cqw = 15.12 design px.
 */
export const HeroScene = () => {
  const collectFood = useCollectFood();
  const [fireworks, setFireworks] = useState(false);
  // The fireworks art loads on the first click and then stays mounted.
  const [fireworksLoaded, setFireworksLoaded] = useState(false);

  const toggleFireworks = () => {
    setFireworksLoaded(true);
    if (!fireworks) collectFood("tanghulu");
    setFireworks((on) => !on);
  };

  return (
    <div className="hero-frame @container relative aspect-[1512/1422] w-full overflow-hidden bg-[radial-gradient(47.72%_41.82%_at_69.97%_53.46%,#bfa48b_0%,#305693_59.6%,#06344d_100%)]">
      {/* Behind the ground: what the fireworks reveal */}
      <Art
        src="/assets/hero/mountains.svg"
        width={1512}
        height={172}
        x={0}
        y={614}
        className={cn("hero-mountains", fireworks && "is-shown")}
      />
      {/* The skyline, behind the ground so it can drop behind the hill
          (hero.css) */}
      <HeroWindows
        skyline={DESKTOP_SKYLINE}
        hidden={fireworks}
        className="hero-skyline pointer-events-none absolute h-auto"
        style={at(0, 111, 1512)}
      />
      <Art
        src="/assets/hero/ground.svg"
        width={1512}
        height={731}
        x={0}
        y={691}
      />

      <HeroFireworks
        on={fireworks}
        loaded={fireworksLoaded}
        className="absolute"
        style={at(582, 108, 933)}
      />

      <Art
        src="/assets/hero/market.svg"
        width={378}
        height={123}
        x={870}
        y={574}
      />

      {/* Title, date and the ways to take part */}
      <div
        className="absolute flex flex-col gap-[1.984cqw] text-white"
        style={pos(143, 264)}
      >
        <div className="flex flex-col gap-[1.521cqw] font-medium">
          <h1 className="pl-[0.992cqw] font-display text-[5.291cqw] leading-none font-normal">
            {HERO_TITLE}
          </h1>
          <p className="text-[1.455cqw] leading-[0.833] whitespace-nowrap">
            {HERO_TAGLINE}
          </p>
          <p className="text-[1.455cqw] leading-[0.833] whitespace-nowrap">
            {HERO_DATE_LOCATION}
          </p>
        </div>
        <div className="flex flex-col gap-[0.661cqw] text-[1.323cqw] font-medium tracking-[-0.013em]">
          <p className="leading-[1.6]">Apply to be a:</p>
          <div className="flex items-end gap-[0.848cqw]">
            {HERO_ROLE_LINKS.map(({ label, href, face, slab, ink }) => (
              <SlabButton
                key={label}
                href={href}
                face={face}
                slab={slab}
                ink={ink}
              >
                {label}
              </SlabButton>
            ))}
          </div>
          <a
            href={SPONSOR_LINK.href || undefined}
            aria-disabled={SPONSOR_LINK.href ? undefined : true}
            className="w-max leading-[1.6] underline decoration-from-font underline-offset-[0.15em] hover:text-lamp"
          >
            {SPONSOR_LINK.label}
          </a>
        </div>
      </div>

      {/* The gate: click it for fireworks */}
      <button
        type="button"
        aria-pressed={fireworks}
        aria-label={
          fireworks
            ? "Put out the fireworks"
            : "Set off fireworks over the gate"
        }
        onClick={toggleFireworks}
        className="group absolute aspect-[848/475] cursor-pointer focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lamp"
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
        {/* The roof bulbs, which go out while the fireworks are up */}
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
      {/* Lanterns hang under the sign, which is drawn over their hooks */}
      <HeroLanterns frame={{ width: W, height: H }} gate={GATE} />
      <Art
        src="/assets/hero/sign.svg"
        width={848}
        height={475}
        x={630}
        y={237}
      />

      <Art
        src="/assets/hero/road.svg"
        width={1107}
        height={436}
        x={405}
        y={688}
      />
      {/* Dashes in the sky around the countdown, like the about section's */}
      <Art
        src="/assets/hero/sky-lines.svg"
        width={608}
        height={248}
        x={448}
        y={1058}
      />
      <Art
        src="/assets/hero/bear-nugget@2x.webp"
        width={383}
        height={506}
        x={866}
        y={710}
      />

      <Countdown className="absolute left-[50.3%] top-[79.04%] -translate-x-1/2 text-[1.932cqw]" />
      {/* Over the countdown until the visitor scrolls a little way down */}
      <HeroClouds />
    </div>
  );
};

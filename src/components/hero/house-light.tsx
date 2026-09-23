"use client";

import { ResponsiveArt } from "@/components/ui/responsive-art";

import Image from "next/image";
import { type CSSProperties, useState } from "react";

import { BeamArt, BeamFollow } from "./beam-follow";
import { Countdown } from "./countdown";
import "./hero.css";
import {
  DESKTOP_BEAM,
  DESKTOP_UNLIT_CLIP,
  HOUSE_SPOTS,
  MOBILE_SPOTS,
  MOBILE_UNLIT_CLIP,
} from "./house-geometry";
import { SpotlightGlow } from "./spotlight-glow";

/**
 * The invisible button over the house that flips its lamp. The beam is part
 * of the house raster, so this sits over the house itself rather than the
 * whole (viewport-wide) image box, so a click on the sky does nothing.
 */
const LampButton = ({
  lit,
  toggle,
  style,
}: {
  lit: boolean;
  toggle: () => void;
  style: CSSProperties;
}) => (
  <button
    type="button"
    aria-pressed={lit}
    aria-label={lit ? "Turn the house lamp off" : "Turn the house lamp on"}
    onClick={toggle}
    className="absolute cursor-pointer rounded-[20%] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-star"
    style={style}
  />
);

/** The beam's layers turn about the bulb (see beam-follow.tsx). */
const SWING_ORIGIN: CSSProperties = {
  transformOrigin: `${DESKTOP_BEAM.pivot[0]}% ${DESKTOP_BEAM.pivot[1]}%`,
};

/**
 * The desktop house with its countdown, inside the house box. Clicking the
 * house turns its lamp off and on, and the beam swings round to follow the
 * cursor. The raster's own beam is clipped away (the house is drawn to its
 * lamp-off silhouette) and a drawn one that can turn sits underneath it, so
 * the house always covers the beam's root. "Off" simply hides the beam; the
 * glow turns and fades with it, and the countdown swaps to cream on the
 * dark sky.
 */
export const DesktopHouse = () => {
  const [lit, setLit] = useState(true);
  const toggle = () => setLit((on) => !on);

  return (
    <>
      <div className="absolute inset-0 z-10">
        {/* The beam: beam-follow.tsx owns its transform, nothing else sets one */}
        <div
          className="hero-beam-swing pointer-events-none absolute inset-0 will-change-transform"
          style={lit ? SWING_ORIGIN : { ...SWING_ORIGIN, visibility: "hidden" }}
        >
          <BeamArt />
        </div>
        {/* The house without its baked-in beam */}
        <Image
          src="/assets/hero/house.webp"
          alt="House"
          fill
          className="pointer-events-none object-contain object-bottom-left"
          style={{ clipPath: DESKTOP_UNLIT_CLIP }}
        />
      </div>
      {/* Spotlight glow along the beam, turning with it */}
      <div
        className="hero-beam-swing pointer-events-none absolute inset-0 z-20 will-change-transform"
        style={SWING_ORIGIN}
      >
        <div data-lit={lit} className="hero-glow absolute inset-0">
          <SpotlightGlow />
        </div>
      </div>
      <BeamFollow lit={lit} />
      <div className="absolute inset-0 z-20">
        <LampButton lit={lit} toggle={toggle} style={HOUSE_SPOTS.lamp} />
      </div>

      {/* Locked to the house spotlight; % tracks the house box as the viewport resizes */}
      <div
        data-lit={lit}
        className="hero-countdown-box absolute left-[54%] top-[37%] z-30 -translate-x-1/2 -translate-y-1/2"
      >
        <Countdown className="hero-countdown text-[6.5vw]" />
      </div>
    </>
  );
};

/** The phone house: a tap on the house does the same. */
export const MobileHouse = () => {
  const [lit, setLit] = useState(true);
  const toggle = () => setLit((on) => !on);

  return (
    <div className="relative z-10 -mt-14 -mb-20 w-full">
      <ResponsiveArt
        base="/assets/hero/mobile-house"
        widths={[800, 1200, 1600]}
        width={393}
        height={710}
        sizes="100vw"
        media="(max-width: 767px)"
        priority
        alt="House"
        className="block w-full h-auto"
        style={lit ? undefined : { clipPath: MOBILE_UNLIT_CLIP }}
      />
      <LampButton lit={lit} toggle={toggle} style={MOBILE_SPOTS.lamp} />
      {/* % tracks the 393x710 house art; the beam runs from the lamp (~36%, 31%) off the right edge */}
      <div
        data-lit={lit}
        className="absolute left-[75%] top-[35%] z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <Countdown compact className="hero-countdown text-[9vw]" />
      </div>
    </div>
  );
};

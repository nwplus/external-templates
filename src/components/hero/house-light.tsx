"use client";

import { ResponsiveArt } from "@/components/ui/responsive-art";

import Image from "next/image";
import { type CSSProperties, useState } from "react";

import { BeamFollow } from "./beam-follow";
import { Countdown } from "./countdown";
import "./hero.css";
import {
  DESKTOP_BEAM,
  DESKTOP_BEAM_ART,
  DESKTOP_UNLIT_CLIP,
  HOUSE_SPOTS,
  HOUSE_WINDOWS,
  MOBILE_SPOTS,
  MOBILE_UNLIT_CLIP,
  MOBILE_WINDOWS,
} from "./house-geometry";

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

/**
 * Warm light flickering in the house's windows, like a lamp burning inside.
 * It has nothing to do with the roof lamp, so it keeps going whether or not
 * the beam is on; each window flickers on its own timing.
 */
const WindowGlows = ({ spots }: { spots: readonly CSSProperties[] }) =>
  spots.map((style, i) => (
    <span
      key={i}
      aria-hidden
      className="hero-window pointer-events-none absolute rounded-[40%]"
      style={{
        ...style,
        animationDuration: `${4.6 + i * 1.1}s`,
        animationDelay: `-${(i * 2.3) % 5}s`,
      }}
    />
  ));

/**
 * One of the beam's images placed in the house box, turning about the bulb
 * (see beam-follow.tsx): the pivot given relative to the image's own box.
 */
const swing = (art: {
  left: number;
  top: number;
  width: number;
  height: number;
}): CSSProperties => ({
  left: `${art.left}%`,
  top: `${art.top}%`,
  width: `${art.width}%`,
  height: `${art.height}%`,
  transformOrigin: `${(((DESKTOP_BEAM.pivot[0] - art.left) / art.width) * 100).toFixed(3)}% ${(((DESKTOP_BEAM.pivot[1] - art.top) / art.height) * 100).toFixed(3)}%`,
});

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
        <Image
          src="/assets/hero/beam.webp"
          alt=""
          aria-hidden
          width={812}
          height={398}
          className="hero-beam-swing pointer-events-none absolute max-w-none will-change-transform"
          style={
            lit
              ? swing(DESKTOP_BEAM_ART.beam)
              : { ...swing(DESKTOP_BEAM_ART.beam), visibility: "hidden" }
          }
        />
        {/* The house without its baked-in beam */}
        <Image
          src="/assets/hero/house.webp"
          alt="House"
          fill
          className="pointer-events-none object-contain object-bottom-left"
          style={{ clipPath: DESKTOP_UNLIT_CLIP }}
        />
        <WindowGlows spots={HOUSE_WINDOWS} />
      </div>
      {/* Spotlight glow along the beam, turning and pulsing with it */}
      <div
        data-lit={lit}
        className="hero-glow pointer-events-none absolute inset-0 z-20"
      >
        <Image
          src="/assets/hero/beam-glow.webp"
          alt=""
          aria-hidden
          width={472}
          height={239}
          className="hero-beam-swing absolute max-w-none will-change-transform motion-safe:animate-glow"
          style={swing(DESKTOP_BEAM_ART.glow)}
        />
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
      <WindowGlows spots={MOBILE_WINDOWS} />
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

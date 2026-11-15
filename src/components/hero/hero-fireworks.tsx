"use client";

import { cn } from "@/lib/utils";

import dynamic from "next/dynamic";
import type { CSSProperties } from "react";

// The art is ~20 KB of paths nobody sees until the gate is clicked, so it
// loads on the first click instead of with the page. The phone layout has
// its own arrangement of bursts (Figma "fireworks hero mobile").
const FireworksArt = dynamic(
  () => import("./fireworks-art").then((mod) => mod.FireworksArt),
  { ssr: false }
);
const FireworksArtMobile = dynamic(
  () => import("./fireworks-art-mobile").then((mod) => mod.FireworksArtMobile),
  { ssr: false }
);

type HeroFireworksProps = {
  on: boolean;
  /** Mount the art (and so fetch it); stays true once the gate is first clicked. */
  loaded: boolean;
  /** Which layout's art to show. */
  variant?: "desktop" | "mobile";
  className?: string;
  style?: CSSProperties;
};

/**
 * The fireworks over the gate (Figma "fireworks hero w empty tray", and
 * "fireworks hero mobile" on phones). The launches go up one after another;
 * see hero.css.
 */
export const HeroFireworks = ({
  on,
  loaded,
  variant = "desktop",
  className,
  style,
}: HeroFireworksProps) => (
  <div
    aria-hidden="true"
    data-on={on || undefined}
    className={cn("hero-fireworks pointer-events-none", className)}
    style={style}
  >
    {loaded &&
      (variant === "mobile" ? (
        <FireworksArtMobile className="block h-auto w-full" />
      ) : (
        <FireworksArt className="block h-auto w-full" />
      ))}
  </div>
);

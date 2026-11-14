"use client";

import { cn } from "@/lib/utils";

import dynamic from "next/dynamic";
import type { CSSProperties } from "react";

// The art is ~20 KB of paths nobody sees until the gate is clicked, so it
// loads on the first click instead of with the page.
const FireworksArt = dynamic(
  () => import("./fireworks-art").then((mod) => mod.FireworksArt),
  { ssr: false }
);

type HeroFireworksProps = {
  on: boolean;
  /** Mount the art (and so fetch it); stays true once the gate is first clicked. */
  loaded: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * The fireworks over the gate (Figma "fireworks hero w empty tray"). For now
 * each burst just fades in on its own step; see hero.css.
 */
export const HeroFireworks = ({
  on,
  loaded,
  className,
  style,
}: HeroFireworksProps) => (
  <div
    aria-hidden="true"
    data-on={on || undefined}
    className={cn("hero-fireworks pointer-events-none", className)}
    style={style}
  >
    {loaded && <FireworksArt className="block h-auto w-full" />}
  </div>
);

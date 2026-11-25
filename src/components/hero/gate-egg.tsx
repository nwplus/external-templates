"use client";

import { EggSparkle } from "@/components/food-egg";
import { cn } from "@/lib/utils";

/**
 * What draws the eye to the gate, which sets off the fireworks (and puts
 * the tanghulu on the tray): a wave of light along the roof bulbs every
 * few seconds, which stops while the fireworks are up, and a glint. Drawn
 * inside the gate button, over its art.
 */
export const GateEggArt = ({
  fireworks,
  sparkleSize,
}: {
  fireworks: boolean;
  /** The glint's width in cqw of the hero. */
  sparkleSize: number;
}) => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/assets/hero/gate-lights.svg"
      alt=""
      width={848}
      height={475}
      draggable={false}
      className={cn(
        "hero-gate-wave pointer-events-none absolute inset-0 size-full",
        fireworks && "is-off"
      )}
    />
    <EggSparkle food="tanghulu" x={73} y={14} size={sparkleSize} />
  </>
);

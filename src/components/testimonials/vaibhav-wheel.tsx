"use client";

import { FoodEgg } from "@/components/food-egg";

import { useState } from "react";

/** The wheelbarrow's wheel (Figma "wheel" in "wheelbarrow stall"), as a
 * share of the cart art's box. The phone cart is the same art, so the share
 * holds on both. */
const WHEEL = { x: 17.1007, y: 78.6744, w: 21.1795, h: 21.3256 };

/**
 * Vaibhav's cart wheel, a tray easter egg: click it and it spins, and the
 * cart hands over Korean fried hotdogs. Every few seconds it rocks a
 * quarter turn, as if the cart had been nudged. It sits over the wheel in
 * the cart art, inside the cart's box.
 */
export const VaibhavWheel = ({
  active,
  sparkleSize,
}: {
  active: boolean;
  /** The glint's width in cqw of the scene. */
  sparkleSize: number;
}) => {
  // Each click adds two more turns, so the wheel winds on from where it was.
  const [spins, setSpins] = useState(0);
  return (
    <FoodEgg
      food="corn-dog"
      box={WHEEL}
      label="Spin the cart's wheel"
      onClick={() => setSpins((n) => n + 1)}
      tabIndex={active ? 0 : -1}
      className="testi-wheel rounded-full"
      style={{ pointerEvents: active ? "auto" : "none" }}
      sparkle={{ x: 78, y: 12, size: sparkleSize }}
    >
      <span className="testi-wheel-rock egg-art block size-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/testimonials/vaibhav-wheel.webp"
          alt=""
          draggable={false}
          className="size-full select-none"
          style={{ rotate: `${spins * -720}deg` }}
        />
      </span>
    </FoodEgg>
  );
};

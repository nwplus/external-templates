"use client";

import { cn } from "@/lib/utils";

import { useState } from "react";

import { StringLightsBottomArt } from "./string-lights-bottom-art";
import { StringLightsTopArt } from "./string-lights-top-art";

const ART = {
  top: {
    Art: StringLightsTopArt,
    className: "w-full xl:w-[97.6%]",
    label: "Fairy lights",
  },
  bottom: {
    Art: StringLightsBottomArt,
    className: "w-full xl:w-[81.3%]",
    label: "Fairy lights under the shelf",
  },
} as const;

/**
 * The small lights twinkle in three phases and the bulb and star halos
 * breathe. Both are opacity-only and switch off under reduced motion.
 */
const lightsClass =
  "motion-safe:[&_.dot]:animate-twinkle [&_.dot:nth-child(3n+1)]:[animation-delay:-0.9s] [&_.dot:nth-child(3n+2)]:[animation-delay:-1.9s] motion-safe:[&_.halo]:animate-breathe";

/**
 * A garland of fairy lights: one across the top of the band, one hung off
 * the last shelf. Clicking a light, a bulb or the cord switches the garland
 * off and on, sweeping along the strand; the `.fairy-lights` rules in
 * globals.css do the switching. Only the garland itself takes the click, so
 * the text and links it hangs over stay usable.
 */
const StringLights = ({
  variant,
  className,
}: {
  variant: "top" | "bottom";
  className?: string;
}) => {
  const [lit, setLit] = useState(true);
  const { Art, className: sizeClass, label } = ART[variant];

  return (
    <div
      className={cn(
        "pointer-events-none flex w-full justify-center",
        className
      )}
    >
      <button
        type="button"
        aria-label={label}
        aria-pressed={lit}
        onClick={() => setLit((on) => !on)}
        className={cn(
          "fairy-lights pointer-events-none block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-star",
          sizeClass
        )}
      >
        <Art className={cn("block h-auto w-full overflow-visible", lightsClass)} />
      </button>
    </div>
  );
};

export default StringLights;

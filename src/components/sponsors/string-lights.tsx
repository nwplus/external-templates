import { cn } from "@/lib/utils";

import { StringLightsBottomArt } from "./string-lights-bottom-art";
import { StringLightsTopArt } from "./string-lights-top-art";

const ART = {
  top: { Art: StringLightsTopArt, className: "w-full xl:w-[97.6%]" },
  bottom: { Art: StringLightsBottomArt, className: "w-full xl:w-[81.3%]" },
} as const;

/**
 * The small lights twinkle in three phases and the bulb and star halos
 * breathe. Both are opacity-only and switch off under reduced motion.
 */
const lightsClass =
  "motion-safe:[&_.dot]:animate-twinkle [&_.dot:nth-child(3n+1)]:[animation-delay:-0.9s] [&_.dot:nth-child(3n+2)]:[animation-delay:-1.9s] motion-safe:[&_.halo]:animate-breathe";

/** A garland of fairy lights: one across the top of the band, one hung off
 * the last shelf. Inlined so the lights can be animated. */
const StringLights = ({
  variant,
  className,
}: {
  variant: "top" | "bottom";
  className?: string;
}) => {
  const { Art, className: sizeClass } = ART[variant];
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none flex w-full justify-center",
        className
      )}
    >
      <Art className={cn("block h-auto", sizeClass, lightsClass)} />
    </div>
  );
};

export default StringLights;

import { cn } from "@/lib/utils";

import Image from "next/image";

import "./candle.css";
import { nookShape } from "./nook-shapes";

/** The two jar candles, with where the wax surface sits in each drawing. */
const CANDLE_ART = {
  large: {
    src: "/assets/testimonials/candle-large.svg",
    width: 30,
    height: 30,
    wax: 42,
  },
  small: {
    src: "/assets/testimonials/candle-small.svg",
    width: 17,
    height: 21,
    wax: 43,
  },
} as const;

/** Three wisps, each on its own clock, so they never rise in step. */
const WISPS = [
  { duration: 4.6, delay: -0.4 },
  { duration: 5.6, delay: -2.3 },
  { duration: 5.1, delay: -3.7 },
];

type CandleProps = {
  variant: keyof typeof CANDLE_ART;
  /** Where the candle sits in the scene, and how big it is. */
  className: string;
};

/**
 * A candle with a few wisps of smoke curling off the wax. The wisps are
 * placed as a share of the candle's box, so they follow it whatever size the
 * scene draws it at, and they wait for `motion-safe` like the rest of the
 * site's decoration. The section's motion scope pauses them off screen.
 */
export const Candle = ({ variant, className }: CandleProps) => {
  const art = CANDLE_ART[variant];

  return (
    <div className={cn("absolute", className)}>
      <Image
        src={art.src}
        alt=""
        width={art.width}
        height={art.height}
        className="block h-full w-full"
        style={nookShape(art.src)}
      />
      {WISPS.map(({ duration, delay }) => (
        <span
          key={duration}
          aria-hidden="true"
          className="candle-wisp pointer-events-none absolute left-1/2 block aspect-square w-[60%] rounded-full opacity-0 motion-safe:animate-[candle-smoke_5s_ease-in-out_infinite]"
          style={{
            top: `${art.wax}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  );
};

import { cn } from "@/lib/utils";

/**
 * Six puffs, each on its own clock and staggered, so they overlap into one
 * trail instead of rising in step.
 */
const PUFFS = [
  { duration: 7.2, delay: 0 },
  { duration: 6.6, delay: -1.2 },
  { duration: 7.6, delay: -2.5 },
  { duration: 6.9, delay: -3.6 },
  { duration: 7.4, delay: -4.9 },
  { duration: 7, delay: -6 },
];

/**
 * Smoke curling out of the house's chimney and drifting off with the wind.
 * Soft puffs start just inside the chimney's mouth (the house is drawn over
 * them there) and rise, swell and thin out. Same recipe as the candles in
 * the testimonials: transform and opacity only, no filters, `motion-safe`,
 * and paused off screen by the hero's motion scope. Place it with a
 * className centred on the chimney's mouth, sized as a share of the house
 * art.
 */
export const ChimneySmoke = ({ className }: { className: string }) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute", className)}
  >
    {PUFFS.map(({ duration, delay }) => (
      <span
        key={duration}
        className="chimney-puff absolute top-0 left-1/2 block aspect-square w-full rounded-full opacity-0 motion-safe:animate-[chimney-smoke_7s_ease-out_infinite]"
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    ))}
  </div>
);

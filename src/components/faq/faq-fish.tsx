import type { CSSProperties } from "react";

import { Art, u } from "./faq-art";
import type { Fish, Tank } from "./faq-layout";

/** A repeatable pseudo-random number in [0, 1) for a seed, so the server and
 * the browser give every fish the same timing. */
export const noise = (seed: number) => {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const lerp = (min: number, max: number, t: number) => min + (max - min) * t;

/**
 * How a fish sways. Ordinary fish drift on a slow 6-9 s cycle; the long
 * tank's orange fish (the easter egg) swing wider and about three times as
 * fast so the eye lands on them. Negative delays start everyone mid-cycle,
 * out of step.
 */
export const swayStyle = (
  seed: number,
  kind: "slow" | "special"
): CSSProperties => {
  const a = noise(seed);
  const b = noise(seed + 0.5);
  const half = kind === "special" ? lerp(1.1, 1.4, a) : lerp(3.2, 4.5, a);
  return {
    "--sway-dur": `${half.toFixed(2)}s`,
    "--sway-delay": `${(-b * half * 2).toFixed(2)}s`,
    "--sway-rot": `${(kind === "special" ? lerp(3.5, 4.5, b) : lerp(1, 1.8, b)).toFixed(2)}deg`,
    "--sway-x": u(kind === "special" ? 3 : 0),
    "--sway-y": u(kind === "special" ? lerp(5, 7, a) : lerp(2, 3.5, a)),
  } as CSSProperties;
};

/** Slow bobbing for resting bubbles. */
export const bobStyle = (seed: number): CSSProperties => {
  const half = lerp(2.6, 3.6, noise(seed));
  return {
    "--bob-dur": `${half.toFixed(2)}s`,
    "--bob-delay": `${(-noise(seed + 0.3) * half * 2).toFixed(2)}s`,
  } as CSSProperties;
};

/** Sea grass sway, pivoting at `root` (a transform-origin). */
export const grassStyle = (seed: number, root: string): CSSProperties => {
  const half = lerp(2.2, 3, noise(seed));
  return {
    "--root": root,
    "--grass-dur": `${half.toFixed(2)}s`,
    "--grass-delay": `${(-noise(seed + 0.7) * half * 2).toFixed(2)}s`,
  } as CSSProperties;
};

type FishArtProps = {
  fish: Fish;
  origin?: { x: number; y: number };
  seed: number;
  sway?: "slow" | "special";
  /** Whether the idle scheduler may pick this fish for a busy moment. */
  accent?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * A fish: its box from the design, then an accent layer (the scheduler's
 * one-off moves), then the sway loop, then the art. Each motion gets its
 * own element so their transforms stack instead of fighting.
 */
export const FishArt = ({
  fish,
  origin,
  seed,
  sway = "slow",
  accent = true,
  className,
  style,
}: FishArtProps) => (
  <Art
    layer={fish}
    origin={origin}
    className={className}
    style={style}
    wrap={(img) => (
      <div
        className="faq-accent flex size-full items-center justify-center"
        data-accent={accent ? "fish" : undefined}
        style={{ "--dart": u(4 * fish.facing) } as CSSProperties}
      >
        <div
          className="faq-sway flex size-full items-center justify-center"
          style={swayStyle(seed, sway)}
        >
          {img}
        </div>
      </div>
    )}
  />
);

export type BurstBubble = {
  x: number;
  y: number;
  r: number;
  rise: number;
  drift: number;
  delay: number;
  dur: number;
};

/**
 * The bubbles a tank's fish burst into when the tank is picked: a handful
 * per fish (more for bigger fish), spread over the middle of its body, each
 * rising to the waterline with its own wobble and timing.
 */
export const burstBubbles = (tank: Tank, seed: number): BurstBubble[] => {
  const fish = [...tank.fish, ...(tank.fishOverLabel ?? [])];
  const bubbles: BurstBubble[] = [];
  fish.forEach((f, fi) => {
    const count = Math.min(9, Math.max(5, Math.round(f.w / 30)));
    for (let i = 0; i < count; i++) {
      const s = seed * 100 + fi * 10 + i;
      const r = lerp(3, f.w > 200 ? 8 : 6.5, noise(s));
      const x = f.x + f.w * lerp(0.2, 0.8, noise(s + 0.1));
      const y = f.y + f.h * lerp(0.3, 0.7, noise(s + 0.2));
      bubbles.push({
        x,
        y,
        r,
        rise: Math.max(24, y - tank.waterTop - r - 2),
        drift: lerp(4, 10, noise(s + 0.3)) * (noise(s + 0.4) < 0.5 ? -1 : 1),
        delay: Math.round(lerp(0, 200, noise(s + 0.5))),
        dur: Math.round(lerp(750, 1000, noise(s + 0.6))),
      });
    }
  });
  return bubbles;
};

/**
 * Every sparkle of the hero sky as its own image. Each one was cut from the
 * 1687x1154 art at the box below (its glow's filter region plus a small
 * margin) at 1x and 2x, so laying them back at their boxes recreates the
 * picture. There's no background image under them anymore.
 *
 * The eight biggest drift, twinkle and now and then wiggle, each on its own
 * timing so the sky never moves in lockstep. The rest just float.
 */
import "./hero.css";
import { SkyTwinkle } from "./sky-twinkle";

const ART = { width: 1687, height: 1154 };

const DRIFTING = 8;

const STARS = [
  { n: 1, x: 666.38, y: -10, w: 285, h: 260 },
  { n: 2, x: 128.82, y: 87.94, w: 267, h: 264 },
  { n: 3, x: 1404.8, y: 315.21, w: 262, h: 237 },
  { n: 4, x: 1400.41, y: 62.96, w: 236, h: 236 },
  { n: 5, x: 1053.37, y: 38, w: 211, h: 218 },
  { n: 6, x: 487.58, y: 29.75, w: 203, h: 214 },
  { n: 7, x: 838.08, y: 99.63, w: 194, h: 194 },
  { n: 8, x: 3.66, y: 206.91, w: 188, h: 193 },
  { n: 9, x: 1312.79, y: 559.86, w: 194, h: 176 },
  { n: 10, x: 657.44, y: 1059.2, w: 107, h: 105 },
  { n: 11, x: 1259.92, y: 41.02, w: 145, h: 149 },
  { n: 12, x: 755.16, y: 853.86, w: 148, h: 151 },
  { n: 13, x: 960.26, y: 742.82, w: 176, h: 176 },
  { n: 14, x: 12.62, y: 94.76, w: 157, h: 135 },
  { n: 15, x: 213.33, y: 318.02, w: 140, h: 154 },
  { n: 16, x: 1256.85, y: 909.56, w: 120, h: 113 },
  { n: 17, x: 1201.16, y: 382.44, w: 112, h: 111 },
  { n: 18, x: 1458.86, y: 801.05, w: 118, h: 106 },
  { n: 19, x: 965.14, y: 975.61, w: 107, h: 106 },
  { n: 20, x: -10, y: 493.55, w: 103, h: 103 },
  { n: 21, x: 337.2, y: 76.75, w: 107, h: 107 },
] as const;

type HeroStarsProps = {
  /**
   * How many viewport widths the art is laid out across, for `sizes`: 1 on
   * desktop, 2 on phones where the sparkles are drawn at 200vw.
   */
  scale?: number;
};

// parent sets the aspect. not lazy bc it's the whole sky, above the fold
export const HeroStars = ({ scale = 1 }: HeroStarsProps) => (
  <>
    <SkyTwinkle />
    {STARS.map(({ n, x, y, w, h }, i) => {
      const width = (w / ART.width) * 100;
      const base = `/assets/hero/star-${n}`;
      const drifting = i < DRIFTING;
      return (
        // eslint-disable-next-line @next/next/no-img-element -- static export, needs a srcset
        <img
          key={n}
          src={`${base}-${w}.webp`}
          srcSet={`${base}-${w}.webp ${w}w, ${base}-${w * 2}.webp ${w * 2}w`}
          sizes={`${(width * scale).toFixed(1)}vw`}
          width={w}
          height={h}
          alt=""
          decoding="async"
          className={`${drifting ? "hero-star" : "motion-safe:animate-float"} pointer-events-none absolute h-auto max-w-none`}
          style={{
            left: `${((x / ART.width) * 100).toFixed(2)}%`,
            top: `${((y / ART.height) * 100).toFixed(2)}%`,
            width: `${width.toFixed(2)}%`,
            ...(drifting
              ? {
                  animationDuration: `${5 + (i % 4)}s, ${2.6 + ((i * 1.3) % 2.4)}s, ${7 + ((i * 2.3) % 5)}s`,
                  animationDelay: `-${(i * 1.7) % 8}s, -${(i * 0.9) % 3}s, -${(i * 3.1) % 9}s`,
                }
              : {
                  animationDuration: `${6 + (i % 4)}s`,
                  animationDelay: `-${((i * 1.3) % 7).toFixed(1)}s`,
                }),
          }}
        />
      );
    })}
  </>
);

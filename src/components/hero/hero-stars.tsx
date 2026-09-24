/**
 * The eight biggest sparkles of the hero, lifted out of the flattened
 * background so they can drift like the footer's stars. Each one was cut
 * from the 1687x1154 art at the box below (its glow's filter region plus a
 * small margin) and rasterised at that size and at double it, so laying it
 * back at the same box recreates the original picture. Each drifts on its
 * own timing so the sky never moves in lockstep; the drift is wider than the
 * footer stars' float because these sit among sparkles that stay put, and a
 * small move reads as none. They also twinkle, on a beat that never matches
 * their drift, so no two stars repeat the same pairing.
 */
import "./hero.css";

const ART = { width: 1687, height: 1154 };

const STARS = [
  { n: 1, x: 665.38, y: -11, w: 287, h: 262 },
  { n: 2, x: 128.82, y: 87.94, w: 267, h: 264 },
  { n: 3, x: 1404.8, y: 315.21, w: 262, h: 237 },
  { n: 4, x: 1401.41, y: 63.96, w: 234, h: 234 },
  { n: 5, x: 1055.37, y: 40, w: 207, h: 214 },
  { n: 6, x: 489.58, y: 31.75, w: 199, h: 210 },
  { n: 7, x: 841.08, y: 102.63, w: 188, h: 188 },
  { n: 8, x: 6.66, y: 209.91, w: 182, h: 187 },
] as const;

type HeroStarsProps = {
  /**
   * How many viewport widths the art is laid out across, for `sizes`: 1 on
   * desktop, 2 on phones where the sparkles are drawn at 200vw.
   */
  scale?: number;
};

/** Drifting stars, placed over the sparkles art they were taken from. */
export const HeroStars = ({ scale = 1 }: HeroStarsProps) => (
  <>
    {STARS.map(({ n, x, y, w, h }, i) => {
      const width = (w / ART.width) * 100;
      const base = `/assets/hero/star-${n}`;
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
          loading="lazy"
          decoding="async"
          className="hero-star pointer-events-none absolute h-auto max-w-none"
          style={{
            left: `${((x / ART.width) * 100).toFixed(2)}%`,
            top: `${((y / ART.height) * 100).toFixed(2)}%`,
            width: `${width.toFixed(2)}%`,
            animationDuration: `${5 + (i % 4)}s, ${2.6 + ((i * 1.3) % 2.4)}s`,
            animationDelay: `-${(i * 1.7) % 8}s, -${(i * 0.9) % 3}s`,
          }}
        />
      );
    })}
  </>
);

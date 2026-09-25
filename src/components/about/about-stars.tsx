import { cn } from "@/lib/utils";

// cut out of the moon bear art w/ their glow, boxes are in art units
const STARS = [
  { n: 1, x: 768.55, y: 86.78, w: 169, h: 182 },
  { n: 2, x: 850.73, y: 282.29, w: 125, h: 134 },
  { n: 3, x: 977.93, y: 194.77, w: 100, h: 97 },
  { n: 4, x: 1423.67, y: 145.03, w: 208, h: 212 },
  { n: 5, x: 1302.61, y: 318.04, w: 238, h: 250 },
  { n: 6, x: 854.74, y: 460.47, w: 161, h: 165 },
  { n: 7, x: 1020.05, y: 552.29, w: 154, h: 141 },
  { n: 8, x: 1291.62, y: 539.75, w: 202, h: 211 },
  { n: 9, x: 1198.49, y: 482.6, w: 121, h: 121 },
  { n: 10, x: 782.05, y: 440.91, w: 71, h: 73 },
  { n: 11, x: 160.71, y: 1.3, w: 155, h: 151 },
  { n: 12, x: -83.07, y: 371.6, w: 253, h: 245 },
  { n: 13, x: 641.09, y: 622.06, w: 135, h: 108 },
  { n: 14, x: 227.83, y: 642.79, w: 132, h: 121 },
  { n: 15, x: 596.12, y: 83.23, w: 158, h: 158 },
] as const;

type AboutStarsProps = {
  viewBox: string;
  className?: string;
};

export const AboutStars = ({ viewBox, className }: AboutStarsProps) => {
  const [minX, minY, width, height] = viewBox.split(/[\s,]+/).map(Number);
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none overflow-hidden", className)}
    >
      {STARS.map(({ n, x, y, w, h }, i) => {
        const base = `/assets/about/star-${n}`;
        const share = (w / width) * 100;
        return (
          // eslint-disable-next-line @next/next/no-img-element -- static export, needs a srcset
          <img
            key={n}
            src={`${base}-${w}.webp`}
            srcSet={`${base}-${w}.webp ${w}w, ${base}-${w * 2}.webp ${w * 2}w`}
            sizes={`${share.toFixed(1)}vw`}
            width={w}
            height={h}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute h-auto max-w-none motion-safe:animate-float"
            style={{
              left: `${(((x - minX) / width) * 100).toFixed(2)}%`,
              top: `${(((y - minY) / height) * 100).toFixed(2)}%`,
              width: `${share.toFixed(2)}%`,
              animationDuration: `${6 + (i % 4)}s`,
              animationDelay: `-${((i * 1.3) % 7).toFixed(1)}s`,
            }}
          />
        );
      })}
    </div>
  );
};

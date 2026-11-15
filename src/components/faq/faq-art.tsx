import { rasterArt } from "@/lib/raster-art";
import { cn } from "@/lib/utils";

import type { CSSProperties, ReactNode } from "react";

import type { Layer, Shift } from "./faq-layout";

/**
 * Design px as a length. The scene sets `--u` to 1/1512 of its width (in
 * container units), so everything keeps the design's proportions.
 */
export const u = (px: number) =>
  // Rounded so server and browser print the same number (no hydration
  // mismatch from float noise in computed positions).
  `calc(${Math.round(px * 1000) / 1000} * var(--u))`;

/** Absolute box for a layer, relative to `origin` (another layer's corner). */
export const boxStyle = (
  { x, y, w, h }: { x: number; y: number; w: number; h: number },
  origin: { x: number; y: number } = { x: 0, y: 0 }
): CSSProperties => ({
  left: u(x - origin.x),
  top: u(y - origin.y),
  width: u(w),
  height: u(h),
});

/** CSS variables for a group that slides once a tank is picked (faq.css). */
export const shiftStyle = ({ dx, dy }: Shift): CSSProperties =>
  ({ "--dx": u(dx), "--dy": u(dy) }) as CSSProperties;

type ArtProps = {
  layer: Layer;
  origin?: { x: number; y: number };
  className?: string;
  style?: CSSProperties;
  /** Wrappers between the box and the art (sway, accents). */
  wrap?: (art: ReactNode) => ReactNode;
};

/**
 * One layer of the scene, exported from Figma (SVG, or WebP for the
 * characters and fish: see rasterArt). Rotated layers get
 * their bounding box from the design and the art drawn centred inside it.
 */
export const Art = ({ layer, origin, className, style, wrap }: ArtProps) => {
  const { src, art, transform } = layer;
  const img = (
    // Plain <img>: a static export, so next/image adds nothing.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      {...rasterArt(src, art?.w ?? layer.w)}
      alt=""
      aria-hidden="true"
      draggable={false}
      decoding="async"
      width={art?.w ?? layer.w}
      height={art?.h ?? layer.h}
      className={cn(
        "block max-w-none shrink-0 select-none",
        art ? "" : "size-full"
      )}
      style={{
        ...(art ? { width: u(art.w), height: u(art.h) } : {}),
        transform,
      }}
    />
  );

  return (
    <div
      className={cn(
        "pointer-events-none absolute",
        art && "flex items-center justify-center",
        className
      )}
      style={{ ...boxStyle(layer, origin), ...style }}
    >
      {wrap ? wrap(img) : img}
    </div>
  );
};

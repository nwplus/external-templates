import { rasterArt } from "@/lib/raster-art";
import { cn } from "@/lib/utils";

import type { CSSProperties } from "react";

/**
 * Placement helpers for a scene drawn in a fixed Figma frame (`width` x
 * `height` design px) that keeps its proportions at every screen width:
 * layers are placed in % of the frame.
 */
export const scenePlacer = (width: number, height: number) => {
  /** Place a layer by its top-left corner in design px. */
  const pos = (x: number, y: number): CSSProperties => ({
    left: `${(x / width) * 100}%`,
    top: `${(y / height) * 100}%`,
  });

  /** Place a layer by its top-left corner and width in design px. */
  const at = (x: number, y: number, w: number): CSSProperties => ({
    ...pos(x, y),
    width: `${(w / width) * 100}%`,
  });

  type ArtProps = {
    src: string;
    /** The art's own size, which is also its size in the design. */
    width: number;
    height: number;
    x: number;
    y: number;
    className?: string;
  };

  /** A static layer of the scene, exported from Figma (SVG, or WebP for the
   * characters: see rasterArt). */
  const Art = ({ src, width: w, height: h, x, y, className }: ArtProps) => (
    // Plain <img>: the site is a static export, so next/image would add
    // nothing but a wrapper.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      {...rasterArt(src, w, width)}
      alt=""
      width={w}
      height={h}
      aria-hidden="true"
      draggable={false}
      className={cn(
        "pointer-events-none absolute h-auto max-w-none select-none",
        className
      )}
      style={at(x, y, w)}
    />
  );

  return { pos, at, Art };
};

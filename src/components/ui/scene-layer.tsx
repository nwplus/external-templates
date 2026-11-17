import { type Box, frameStyle } from "@/lib/frame";
import { cn } from "@/lib/utils";

import type { CSSProperties } from "react";

import { ArtworkText } from "./artwork-text";

/**
 * One exported Figma layer, placed by its box in the frame. The art keeps the
 * design's aspect (the box comes from Figma), so it fills its box exactly.
 */
export const SceneLayer = ({
  src,
  box,
  className,
  style,
  priority,
  fit = "fill",
  alt = "",
}: {
  src: string;
  box: Box;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  /** "contain" keeps the art's own aspect inside the box. A few Figma
   * exports carry glow past the node's box, so stretching them would distort
   * the drawing; contain centres it instead. */
  fit?: "fill" | "contain";
  /** Only for art that carries meaning (the stats signs). Everything else
   * stays decorative. */
  alt?: string;
}) => (
  <div
    className={cn("pointer-events-none absolute", className)}
    style={{ ...frameStyle(box), ...style }}
  >
    {/* Plain <img>: these are pre-cropped Figma exports, so next/image has
        nothing to add that the export didn't already bake in. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      aria-hidden={alt ? undefined : "true"}
      draggable={false}
      decoding={priority ? "sync" : "async"}
      loading={priority ? "eager" : "lazy"}
      className={cn(
        "size-full select-none",
        fit === "contain" && "object-contain"
      )}
    />
    <ArtworkText asset={src.split("/").pop() ?? ""} />
  </div>
);

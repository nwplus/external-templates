import { frameStyle, type Box } from "@/lib/frame";
import { cn } from "@/lib/utils";

import type { CSSProperties } from "react";

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
}: {
  src: string;
  box: Box;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
}) => (
  <div className={cn("pointer-events-none absolute", className)} style={{ ...frameStyle(box), ...style }}>
    {/* Plain <img>: these are pre-cropped Figma exports, so next/image has
        nothing to add that the export didn't already bake in. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      decoding={priority ? "sync" : "async"}
      loading={priority ? "eager" : "lazy"}
      className="size-full select-none"
    />
  </div>
);

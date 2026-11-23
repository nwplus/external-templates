import { FoodEgg } from "@/components/food-egg";
import type { Box } from "@/lib/frame";

import type { CSSProperties } from "react";

/**
 * The "182 projects" neon sign, a tray easter egg (a steamer of baozi): on
 * hover the neon burns brighter.
 */
export const BaoSign = ({
  box,
  rise,
  sparkleSize,
}: {
  box: Box;
  /** When the sign rises in with the others (stats.css). */
  rise: string;
  sparkleSize: number;
}) => (
  <FoodEgg
    food="steamer-of-baozi"
    box={box}
    label="Grab a steamer of baozi from the 182 projects sign"
    className="bao-sign stats-rise stat-neon-tube"
    style={
      {
        "--rise": rise,
        "--neon": "13.7s",
        "--neon-delay": "-6.2s",
      } as CSSProperties
    }
    sparkle={{ x: 93, y: 8, size: sparkleSize }}
  >
    {/* Contained: the export carries glow past the node's box (SceneLayer). */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/assets/stats/projects.webp"
      alt=""
      draggable={false}
      className="bao-sign-art size-full object-contain select-none"
    />
  </FoodEgg>
);

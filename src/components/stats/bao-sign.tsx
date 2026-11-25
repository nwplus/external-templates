import { FoodEgg } from "@/components/food-egg";
import type { Box } from "@/lib/frame";

import type { CSSProperties } from "react";

/**
 * The "169 projects" neon sign, a tray easter egg (a steamer of baozi): on
 * hover the neon burns brighter.
 */
export const BaoSign = ({
  box,
  rise,
  sparkleSize,
  mobile = false,
}: {
  box: Box;
  /** When the sign rises in with the others (stats.css). */
  rise: string;
  sparkleSize: number;
  mobile?: boolean;
}) => (
  <FoodEgg
    food="steamer-of-baozi"
    box={box}
    label="Grab a steamer of baozi from the 169 projects sign"
    className="bao-sign stats-rise stat-neon-tube"
    style={
      {
        "--rise": rise,
        "--neon": "7.4s",
        "--neon-delay": "-6.2s",
      } as CSSProperties
    }
    sparkle={{ x: 93, y: 8, size: sparkleSize }}
  >
    {/* Contained: the export carries glow past the node's box (SceneLayer). */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={
        mobile
          ? "/assets/stats/projects-mobile-final.svg"
          : "/assets/stats/projects-final.svg"
      }
      alt=""
      draggable={false}
      className="size-full object-contain select-none"
    />
  </FoodEgg>
);

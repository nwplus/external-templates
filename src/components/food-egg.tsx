"use client";

import {
  type Food,
  useCollectFood,
  useRegisterSparkle,
} from "@/components/food-collection";
import { type Box, frameStyle } from "@/lib/frame";
import { cn } from "@/lib/utils";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

/**
 * A glint on an egg's art. The tray (FoodCollection) twinkles one sparkle
 * on screen every few seconds, and stops picking this one once `food` is on
 * the tray, so whatever still sparkles is what's left to find. `x` and `y`
 * place its centre in its parent (%); `size` is its width in cqw of the
 * nearest scene.
 */
export const EggSparkle = ({
  food,
  x,
  y,
  size = 1.1,
}: {
  food: Food;
  x: number;
  y: number;
  size?: number;
}) => {
  const register = useRegisterSparkle();
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) return register(ref.current, food);
  }, [register, food]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="egg-sparkle"
      style={
        {
          left: `${x}%`,
          top: `${y}%`,
          "--sparkle-size": `${size}cqw`,
        } as CSSProperties
      }
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 0c.8 6.6 4.4 10.4 12 12-7.6 1.6-11.2 5.4-12 12-.8-6.6-4.4-10.4-12-12C7.6 10.4 11.2 6.6 12 0Z" />
      </svg>
      <svg viewBox="0 0 24 24" className="egg-sparkle-small">
        <path d="M12 0c.8 6.6 4.4 10.4 12 12-7.6 1.6-11.2 5.4-12 12-.8-6.6-4.4-10.4-12-12C7.6 10.4 11.2 6.6 12 0Z" />
      </svg>
    </span>
  );
};

/**
 * A click target over a piece of scene art that puts `food` on the tray.
 * `box` places it in the scene's frame like any other layer; art drawn
 * inside it with the `egg-art` class grows a little on hover.
 */
export const FoodEgg = ({
  food,
  box,
  label,
  onClick,
  tabIndex,
  sparkle,
  className,
  style,
  children,
}: {
  food: Food;
  box: Box;
  label: string;
  onClick?: () => void;
  tabIndex?: number;
  /** Where the glint sits, in % of the box, and its size in cqw. */
  sparkle?: { x: number; y: number; size?: number };
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) => {
  const collect = useCollectFood();
  return (
    <button
      type="button"
      aria-label={label}
      tabIndex={tabIndex}
      onClick={(event) => {
        onClick?.();
        collect(food, event.currentTarget);
      }}
      className={cn("food-egg absolute", className)}
      style={{ ...frameStyle(box), ...style }}
    >
      {children}
      {sparkle && <EggSparkle food={food} {...sparkle} />}
    </button>
  );
};

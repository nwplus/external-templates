"use client";

import { usePartedOnScroll } from "@/hooks/use-parted-on-scroll";
import { cn } from "@/lib/utils";

import type { CSSProperties } from "react";

import "./parting-clouds.css";

export type PartingCloud = {
  /** Path under /public. */
  src: string;
  /** Where the design has it: top-left corner and size, in design px. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Design px it starts nearer the middle (+ right, - left). Keep it short
   * of any square cut where Figma's frame clipped the cloud. */
  from: number;
};

type PartingCloudsProps = {
  clouds: PartingCloud[];
  /** The design frame the clouds are placed in. */
  width: number;
  height: number;
  className?: string;
};

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/**
 * Clouds that start bunched toward the middle of a section and drift back to
 * their places in the design once the visitor has scrolled a little way down
 * the page (see usePartedOnScroll). Every cloud on the page parts at the same
 * moment and takes the same time, so they move as one (the ones gathered
 * from further away just move faster). They stay put after that.
 */
export const PartingClouds = ({
  clouds,
  width,
  height,
  className,
}: PartingCloudsProps) => {
  const parted = usePartedOnScroll();

  return (
    <div
      aria-hidden="true"
      data-parted={parted || undefined}
      className={cn(
        "parting-clouds pointer-events-none absolute inset-0",
        className
      )}
    >
      {clouds.map(({ src, x, y, w, h, from }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          width={w}
          height={h}
          draggable={false}
          className="parting-cloud absolute h-auto max-w-none select-none"
          style={
            {
              left: pct(x, width),
              top: pct(y, height),
              width: pct(w, width),
              "--from": pct(from, w),
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};

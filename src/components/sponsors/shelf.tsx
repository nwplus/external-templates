import type { Decoration } from "@/lib/shelves";
import { cn } from "@/lib/utils";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import { ShelfOrnament } from "./shelf-ornament";

/**
 * How wide each decoration stands, and how far its outer edge is inset from
 * the end of the plank — both as a share of the shelf, so a row keeps the
 * design's proportions at any width. The plant leans past the shelf's end,
 * hence its negative inset.
 */
const PLACEMENT: Record<Decoration, { size: number; inset: number }> = {
  "books-left": { size: 20.5, inset: 3.1 },
  "books-right": { size: 20.4, inset: 2.2 },
  sheep: { size: 18.2, inset: 5.6 },
  plant: { size: 29, inset: -3.3 },
};

const ShelfDecoration = ({
  kind,
  side,
}: {
  kind: Decoration;
  side: "left" | "right";
}) => {
  const { size, inset } = PLACEMENT[kind];
  const style: CSSProperties = {
    width: `${size}%`,
    ...(side === "left" ? { left: `${inset}%` } : { right: `${inset}%` }),
  };

  return (
    <div style={style} className="absolute bottom-0 hidden xl:block">
      <ShelfOrnament kind={kind} />
    </div>
  );
};

/**
 * One shelf: whatever stands on it, bottom-aligned onto the plank, with a
 * decoration parked against either end.
 */
const Shelf = ({
  left,
  right,
  className,
  children,
}: {
  left?: Decoration;
  right?: Decoration;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("mx-auto w-[94.8%] xl:w-[82.8%]", className)}>
      <div className="relative flex items-end justify-center">
        {children}
        {left && <ShelfDecoration kind={left} side="left" />}
        {right && <ShelfDecoration kind={right} side="right" />}
      </div>
      <Image
        src="/assets/sponsors/shelf.webp"
        alt=""
        aria-hidden
        width={1600}
        height={78}
        className="pointer-events-none relative -mt-px h-auto w-full"
      />
    </div>
  );
};

export default Shelf;

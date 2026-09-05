import type { Decoration } from "@/lib/shelves";

import Image from "next/image";
import type { ReactNode } from "react";

const DECORATIONS: Record<
  Decoration,
  { src: string; width: number; height: number; className: string }
> = {
  "books-left": {
    src: "/assets/sponsors/books-left.svg",
    width: 230,
    height: 260,
    className: "w-[16vw] max-w-[230px]",
  },
  "books-right": {
    src: "/assets/sponsors/books-right.svg",
    width: 230,
    height: 240,
    className: "w-[16vw] max-w-[230px]",
  },
  sheep: {
    src: "/assets/sponsors/sheep.svg",
    width: 200,
    height: 200,
    className: "w-[14vw] max-w-[200px]",
  },
  plant: {
    src: "/assets/sponsors/plant.svg",
    width: 330,
    height: 330,
    className: "w-[22vw] max-w-[330px]",
  },
};

const DecorationImage = ({ kind }: { kind: Decoration }) => {
  const d = DECORATIONS[kind];
  return (
    <Image
      src={d.src}
      alt=""
      aria-hidden
      width={d.width}
      height={d.height}
      className={`hidden h-auto shrink-0 md:block ${d.className}`}
    />
  );
};

const Shelf = ({
  left,
  right,
  children,
}: {
  left?: Decoration;
  right?: Decoration;
  children: ReactNode;
}) => {
  return (
    <div className="mx-auto w-full max-w-[1110px] px-4">
      <div className="flex items-end justify-center gap-6 md:gap-10">
        {left && <DecorationImage kind={left} />}
        <div className="flex flex-wrap items-end justify-center gap-6 md:gap-10">
          {children}
        </div>
        {right && <DecorationImage kind={right} />}
      </div>
      <Image
        src="/assets/sponsors/shelf.svg"
        alt=""
        aria-hidden
        width={1110}
        height={60}
        className="-mt-1 h-auto w-full"
      />
    </div>
  );
};

export default Shelf;

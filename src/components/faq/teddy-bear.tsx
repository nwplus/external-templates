"use client";

import { cn } from "@/lib/utils";

import { useAnimate, useReducedMotion } from "framer-motion";
import Image from "next/image";

/** A little hop: up, a squashed landing, a smaller bounce, settle. */
const HOP = {
  y: ["0%", "-12%", "0%", "-4%", "0%"],
  rotate: [0, -6, 4, -2, 0],
  scaleX: [1, 0.96, 1.07, 0.99, 1],
  scaleY: [1, 1.05, 0.92, 1.01, 1],
};

/** The teddy on the cabinet, which hops when it is clicked. */
export const TeddyBear = ({ className }: { className?: string }) => {
  const [scope, animate] = useAnimate<HTMLSpanElement>();
  const reduceMotion = useReducedMotion();

  const hop = () => {
    if (reduceMotion || !scope.current) return;
    animate(scope.current, HOP, { duration: 0.8, ease: "easeInOut" });
  };

  return (
    <button
      type="button"
      aria-label="Squeeze the teddy bear"
      onClick={hop}
      className={cn(
        "cursor-pointer rounded-[30%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star",
        className
      )}
    >
      <span ref={scope} className="block origin-bottom">
        <Image
          src="/assets/faq/teddy.svg"
          alt=""
          width={158}
          height={161}
          className="pointer-events-none block h-auto w-full"
        />
      </span>
    </button>
  );
};

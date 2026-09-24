"use client";

import { cn } from "@/lib/utils";

import {
  motion,
  type TargetAndTransition,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";

// little wiggle every few sec so ppl realize it's clickable
const bearNudge = {
  duration: 0.9,
  ease: "easeInOut",
  repeat: Infinity,
  repeatDelay: 3.6,
} as const;

type TappableBearProps = {
  onClick: () => void;
  className?: string;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
};

export const TappableBear = ({
  onClick,
  className,
  whileHover,
  whileTap,
}: TappableBearProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="Next testimonial"
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={cn("absolute origin-bottom cursor-pointer", className)}
    >
      <motion.span
        className="absolute inset-0"
        animate={
          reduceMotion ? undefined : { y: ["0%", "-2.55%", "0%", "-1%", "0%"] }
        }
        transition={bearNudge}
      >
        <Image
          src="/assets/testimonials/bear-body.svg"
          alt=""
          width={138}
          height={126}
          className="absolute left-0 top-[47.8%] h-[52.2%] w-full rotate-[-1.14deg]"
        />
        <motion.span
          className="absolute left-[6.3%] top-0 h-[52.9%] w-[85%] origin-bottom"
          animate={reduceMotion ? undefined : { rotate: [0, -3, 3, 0] }}
          transition={bearNudge}
        >
          <Image
            src="/assets/testimonials/bear-head.svg"
            alt=""
            width={116}
            height={98}
            className="absolute left-[1.2%] top-[23.2%] h-[76.8%] w-[98.8%]"
          />
          <Image
            src="/assets/testimonials/bear-hat.svg"
            alt=""
            width={92}
            height={48}
            className="absolute left-0 top-0 h-[37.9%] w-[78.5%]"
          />
        </motion.span>
      </motion.span>
    </motion.button>
  );
};

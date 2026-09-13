"use client";

import { cn } from "@/lib/utils";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useEffect, useRef } from "react";

type ParallaxProps = {
  /**
   * Fraction of the page scroll the layer lags behind. Positive values drift
   * slower than the page (background layers), negative values move faster
   * (foreground). 0.1–0.3 is subtle; keep foreground values small.
   */
  speed?: number;
  /**
   * Where the layer sits at its designed position (no offset applied):
   * "center" when it is centred in the viewport, "top" when the page is at
   * scroll 0 (use for anything in the hero).
   */
  anchor?: "center" | "top";
  className?: string;
  children: ReactNode;
};

/** Scroll-linked vertical drift for decorative layers. */
export const Parallax = ({
  speed = 0.2,
  anchor = "center",
  className,
  children,
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  // 0 when the layer's top reaches the viewport bottom, 1 when its bottom
  // leaves the viewport top; framer re-measures the layer on every scroll.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Scroll distance covered by that 0 → 1 range: viewport + layer height.
  const travel = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => travel.set(window.innerHeight + el.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [travel]);

  const y = useTransform(
    [scrollY, scrollYProgress, travel],
    ([scroll, progress, distance]: number[]) =>
      anchor === "top" ? scroll * speed : (progress - 0.5) * distance * speed
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
};

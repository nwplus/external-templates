"use client";

import { cn } from "@/lib/utils";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import {
  type ReactNode,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";

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

/*
 * Every parallax layer lives in a desktop-only tree (`hidden md:block`), and
 * `display: none` does not stop React from mounting it. So on phones the
 * layer stays put and measures nothing: no scroll tracking, no resize
 * observer. It is rendered "off" on the server so hydration matches, and
 * switches on straight after on desktop.
 */
const DESKTOP = "(min-width: 768px)";
const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(DESKTOP);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};
const getSnapshot = () => window.matchMedia(DESKTOP).matches;
const getServerSnapshot = () => false;

/** Scroll-linked vertical drift for decorative layers. */
export const Parallax = ({
  speed = 0.2,
  anchor = "center",
  className,
  children,
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const active = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  // Read by the transform below; a motion value so the change reaches it
  // without rebuilding the transform.
  const enabled = useMotionValue(0);
  useEffect(() => {
    enabled.set(active ? 1 : 0);
  }, [active, enabled]);

  const { scrollY } = useScroll();
  // 0 when the layer's top reaches the viewport bottom, 1 when its bottom
  // leaves the viewport top; framer re-measures the layer on every scroll, so
  // the layer is only tracked when that progress is actually used.
  const { scrollYProgress } = useScroll({
    target: active && anchor === "center" ? ref : undefined,
    offset: ["start end", "end start"],
  });
  // Scroll distance covered by that 0 → 1 range: viewport + layer height.
  const travel = useMotionValue(0);

  useEffect(() => {
    if (!active) return;
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
  }, [active, travel]);

  const y = useTransform(
    [scrollY, scrollYProgress, travel, enabled],
    ([scroll, progress, distance, on]: number[]) => {
      if (!on) return 0;
      return anchor === "top"
        ? scroll * speed
        : (progress - 0.5) * distance * speed;
    }
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

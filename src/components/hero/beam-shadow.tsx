"use client";

import { useEffect, useRef } from "react";

type Point = [x: number, y: number];

/** Where the lamp is, in house-box percentages. */
const LIGHT: Point = [29, 38];
/** The beam's far edge, as a share of the box width. */
const FAR_X = 80;
/** The beam's wedge, the same triangle the glow is clipped to. */
const WEDGE: [Point, Point, Point] = [
  [28, 37],
  [80, 15],
  [80, 57],
];

const inWedge = (x: number, y: number) => {
  const [[ax, ay], [bx, by], [cx, cy]] = WEDGE;
  const d1 = (x - bx) * (ay - by) - (ax - bx) * (y - by);
  const d2 = (x - cx) * (by - cy) - (bx - cx) * (y - cy);
  const d3 = (x - ax) * (cy - ay) - (cx - ax) * (y - ay);
  const negative = d1 < 0 || d2 < 0 || d3 < 0;
  const positive = d1 > 0 || d2 > 0 || d3 > 0;
  return !(negative && positive);
};

/**
 * The shadow the cursor casts in the beam while the lamp is on: a soft dark
 * streak that starts under the cursor and runs away from the lamp to the
 * beam's edge, wider the further it has travelled from the light, the way a
 * shadow from a point source spreads. It is one gradient-filled box moved
 * with a transform, written straight to the DOM on each pointer move (one
 * write per frame at most), so nothing re-renders. Only devices with a
 * hovering pointer get the listener.
 */
export const BeamShadow = ({ lit }: { lit: boolean }) => {
  const layer = useRef<HTMLDivElement>(null);
  const streak = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = layer.current;
    const shadow = streak.current;
    if (!el || !shadow || !lit) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let frame = 0;
    let pointer: { x: number; y: number } | null = null;
    const hide = () => {
      el.style.opacity = "0";
    };
    const draw = () => {
      frame = 0;
      if (!pointer) return;
      const rect = el.getBoundingClientRect();
      const x = ((pointer.x - rect.left) / rect.width) * 100;
      const y = ((pointer.y - rect.top) / rect.height) * 100;
      if (!inWedge(x, y)) return hide();
      const [lx, ly] = LIGHT;
      // Direction from the lamp through the cursor, in screen pixels, and
      // how far the streak has to run to leave the beam.
      const dx = ((x - lx) / 100) * rect.width;
      const dy = ((y - ly) / 100) * rect.height;
      const distance = Math.hypot(dx, dy);
      if (dx <= 1) return hide();
      const heading = (Math.atan2(dy, dx) * 180) / Math.PI;
      const reach = (((FAR_X - x) / 100) * rect.width) / (dx / distance);
      // Spread with distance from the lamp: a hand held close casts a wide
      // shadow, one held far away a slimmer one, but never a hairline.
      const spread = Math.min(
        1.6,
        Math.max(0.55, 0.35 + distance / (0.55 * rect.width))
      );
      shadow.style.transform = `translate(${(x / 100) * rect.width}px, ${(y / 100) * rect.height}px) rotate(${heading.toFixed(2)}deg) scale(${(reach / rect.width).toFixed(3)}, ${spread.toFixed(3)})`;
      el.style.opacity = "1";
    };
    const onMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(draw);
    };
    // Leaving the window, or scrolling (the beam moves with the parallax
    // while the cursor stays put), drops the shadow until the next move.
    const onOut = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        pointer = null;
        hide();
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onOut);
    window.addEventListener("scroll", hide, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("scroll", hide);
      hide();
    };
  }, [lit]);

  return (
    <div
      ref={layer}
      aria-hidden="true"
      className="hero-beam-shadow pointer-events-none absolute inset-0 z-20"
    >
      <div ref={streak} className="hero-beam-shadow-streak" />
    </div>
  );
};

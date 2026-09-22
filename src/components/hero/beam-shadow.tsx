"use client";

import { useEffect, useId, useRef } from "react";

type Point = [x: number, y: number];

/** Where the lamp is, in house-box percentages (the svg's viewBox units). */
const LIGHT: Point = [29, 38];
/** The beam's far edge. */
const FAR_X = 80;
/** The beam's wedge, the same triangle the glow is clipped to. */
const WEDGE: [Point, Point, Point] = [
  [28, 37],
  [80, 15],
  [80, 57],
];
/** How big an object the cursor is, in viewBox units. */
const CURSOR_RADIUS = 1.6;

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
 * The shadow a disc around the cursor would cast: the two rays from the lamp
 * that graze the disc, carried on to the beam's far edge. The polygon runs
 * from the two grazing points out to where the rays leave the beam.
 */
const shadowPoints = (cx: number, cy: number) => {
  const [lx, ly] = LIGHT;
  const dx = cx - lx;
  const dy = cy - ly;
  const distance = Math.hypot(dx, dy);
  // Right at the lamp there is no shadow to draw.
  if (distance <= CURSOR_RADIUS * 1.05) return null;
  const heading = Math.atan2(dy, dx);
  const spread = Math.asin(CURSOR_RADIUS / distance);
  const reach = Math.sqrt(distance * distance - CURSOR_RADIUS * CURSOR_RADIUS);
  const near: Point[] = [];
  const far: Point[] = [];
  for (const side of [1, -1]) {
    const angle = heading + side * spread;
    const ux = Math.cos(angle);
    const uy = Math.sin(angle);
    // A ray heading back toward the house never reaches the far edge.
    if (ux <= 0.01) return null;
    near.push([lx + ux * reach, ly + uy * reach]);
    const t = (FAR_X - lx) / ux;
    far.push([lx + ux * t, ly + uy * t]);
  }
  return [near[0], far[0], far[1], near[1]]
    .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");
};

/**
 * Draws the cursor's shadow inside the light beam while the lamp is on. The
 * polygon is written straight to the DOM on each pointer move (one write per
 * frame at most), so nothing re-renders; the svg just fades in and out. Only
 * devices with a hovering pointer get the listener.
 */
export const BeamShadow = ({ lit }: { lit: boolean }) => {
  const svg = useRef<SVGSVGElement>(null);
  const shape = useRef<SVGPolygonElement>(null);
  const gradient = `beam-shadow-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useEffect(() => {
    const el = svg.current;
    const poly = shape.current;
    if (!el || !poly || !lit) return;
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
      const points = inWedge(x, y) ? shadowPoints(x, y) : null;
      if (!points) return hide();
      poly.setAttribute("points", points);
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
    <svg
      ref={svg}
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="hero-beam-shadow pointer-events-none absolute inset-0 z-20 h-full w-full"
    >
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0B1327" stopOpacity="0.6" />
          <stop offset="1" stopColor="#0B1327" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon ref={shape} fill={`url(#${gradient})`} points="0,0 0,0 0,0" />
    </svg>
  );
};

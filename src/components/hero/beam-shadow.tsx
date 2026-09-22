"use client";

import { useEffect, useRef } from "react";

import { HOUSE_IMAGE_TO_BOX } from "./house-geometry";

type Point = [x: number, y: number];

/** Where the bulb is, in house-box percentages. */
const LIGHT: Point = [29.5 * HOUSE_IMAGE_TO_BOX, 40];
/**
 * The beam as drawn in the raster, in house-box percentages: from the lamp
 * bracket out to where its top edge leaves the top of the image and its
 * bottom edge leaves the right edge (the same vertices the lamp-off clip
 * follows). Convex, so a shadow can be clipped to it edge by edge, and it
 * never reaches the house, so nothing of the house is ever cut.
 */
const BEAM: Point[] = (
  [
    [29.75, 35.05],
    [94, 0],
    [100, 0],
    [100, 70],
    [28.98, 50.4],
  ] as Point[]
).map(([x, y]) => [x * HOUSE_IMAGE_TO_BOX, y]);
/**
 * How big a thing the cursor is, in box-width percent: about a hand, so that
 * close to the bulb it takes the whole beam and far out it still leaves a
 * shadow you can see.
 */
const CURSOR_RADIUS = 2.6;

/** Which way round a polygon's vertices run (the sign of its area). */
const winding = (poly: Point[]) =>
  Math.sign(
    poly.reduce((sum, [x, y], i) => {
      const [nx, ny] = poly[(i + 1) % poly.length];
      return sum + x * ny - nx * y;
    }, 0)
  );

/** Sutherland–Hodgman: `subject` clipped to the convex polygon `clip`. */
const clipPolygon = (subject: Point[], clip: Point[]) => {
  const turn = winding(clip);
  let output = subject;
  for (let i = 0; i < clip.length && output.length; i++) {
    const [ax, ay] = clip[i];
    const [bx, by] = clip[(i + 1) % clip.length];
    const inside = ([x, y]: Point) =>
      ((bx - ax) * (y - ay) - (by - ay) * (x - ax)) * turn >= 0;
    const intersect = ([px, py]: Point, [qx, qy]: Point): Point => {
      const d = (px - qx) * (by - ay) - (py - qy) * (bx - ax);
      const t = ((px - ax) * (by - ay) - (py - ay) * (bx - ax)) / d;
      return [px + t * (qx - px), py + t * (qy - py)];
    };
    const input = output;
    output = [];
    for (let j = 0; j < input.length; j++) {
      const current = input[j];
      const previous = input[(j + input.length - 1) % input.length];
      if (inside(current)) {
        if (!inside(previous)) output.push(intersect(previous, current));
        output.push(current);
      } else if (inside(previous)) {
        output.push(intersect(previous, current));
      }
    }
  }
  return output;
};

/**
 * The shadow a disc at the cursor casts: the disc's own outline on the side
 * facing the bulb, then the two rays from the bulb that graze it, carried on
 * well past the beam's end. Close to the bulb the disc covers the whole beam,
 * so the beam's outline itself is the shadow.
 */
const shadowShape = (cx: number, cy: number): Point[] => {
  const [lx, ly] = LIGHT;
  const distance = Math.hypot(cx - lx, cy - ly);
  if (distance <= CURSOR_RADIUS * 1.05) return BEAM;
  // Angle from the cursor back to the bulb, and how far round the disc the
  // grazing rays touch it.
  const toLight = Math.atan2(ly - cy, lx - cx);
  const alpha = Math.acos(CURSOR_RADIUS / distance);
  const on = (angle: number): Point => [
    cx + Math.cos(angle) * CURSOR_RADIUS,
    cy + Math.sin(angle) * CURSOR_RADIUS,
  ];
  const FAR = 400;
  const beyond = ([tx, ty]: Point): Point => {
    const length = Math.hypot(tx - lx, ty - ly);
    return [lx + ((tx - lx) / length) * FAR, ly + ((ty - ly) / length) * FAR];
  };
  const arc: Point[] = [];
  const steps = 14;
  for (let i = 0; i <= steps; i++) {
    arc.push(on(toLight - alpha + ((2 * alpha) / steps) * i));
  }
  return [...arc, beyond(arc[arc.length - 1]), beyond(arc[0])];
};

/**
 * Lets the cursor block the lamp's light. The beam is baked into the house
 * raster and echoed by the glow layer, so the shadow is cut out of both with
 * an even-odd clip path: everything stays except the wedge behind the
 * cursor, where the night sky shows through as if the lamp did not reach.
 * Works right up against the bulb (the disc covers the whole beam) and at
 * the beam's edges (the shadow is clipped to the beam's outline); the
 * countdown goes dark when the shadow falls on it. Written to
 * the DOM once per frame at most; hover-only, and cleared while the lamp is
 * off, on scroll, or when the pointer leaves.
 */
export const BeamShadow = ({ lit }: { lit: boolean }) => {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const box = anchor.current?.parentElement;
    if (!box || !lit) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const targets = Array.from(
      box.querySelectorAll<HTMLElement>(".hero-house, .hero-glow")
    );
    // The countdown's title and each of its columns shade on their own, so a
    // shadow across half of it darkens just that half.
    const countdownRoot = box.querySelector<HTMLElement>(".hero-countdown");
    const countdownParts = countdownRoot
      ? [
          countdownRoot.children[0] as HTMLElement,
          ...Array.from(countdownRoot.children[1]?.children ?? []),
        ].filter((el): el is HTMLElement => el instanceof HTMLElement)
      : [];

    let frame = 0;
    let pointer: { x: number; y: number } | null = null;
    const clear = () => {
      targets.forEach((el) => (el.style.clipPath = ""));
      countdownParts.forEach((el) => el.removeAttribute("data-shaded"));
    };
    // Ray casting: is a point inside the (clipped) shadow?
    const inShadow = ([px, py]: Point, poly: Point[]) => {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const [xi, yi] = poly[i];
        const [xj, yj] = poly[j];
        if (
          yi > py !== yj > py &&
          px < ((xj - xi) * (py - yi)) / (yj - yi) + xi
        )
          inside = !inside;
      }
      return inside;
    };
    const draw = () => {
      frame = 0;
      if (!pointer) return;
      const rect = box.getBoundingClientRect();
      const x = ((pointer.x - rect.left) / rect.width) * 100;
      const y = ((pointer.y - rect.top) / rect.height) * 100;
      // Behind the bulb there is nothing to block.
      if (x <= LIGHT[0] + 0.2) return clear();
      const shadow = clipPolygon(shadowShape(x, y), BEAM);
      if (shadow.length < 3) return clear();
      const px = ([sx, sy]: Point) =>
        `${((sx / 100) * rect.width).toFixed(1)} ${((sy / 100) * rect.height).toFixed(1)}`;
      const hole =
        shadow.map((p, i) => `${i ? "L" : "M"}${px(p)}`).join("") + "Z";
      const path = `path(evenodd, "M0 0H${rect.width.toFixed(1)}V${rect.height.toFixed(1)}H0Z${hole}")`;
      targets.forEach((el) => (el.style.clipPath = path));
      // The countdown sits in the beam; whatever part of it the shadow falls
      // on reads as it does with the lamp off rather than glowing in the dark.
      for (const part of countdownParts) {
        const r = part.getBoundingClientRect();
        const centre: Point = [
          ((r.left + r.width / 2 - rect.left) / rect.width) * 100,
          ((r.top + r.height / 2 - rect.top) / rect.height) * 100,
        ];
        if (inShadow(centre, shadow)) part.setAttribute("data-shaded", "true");
        else part.removeAttribute("data-shaded");
      }
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
        clear();
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onOut);
    window.addEventListener("scroll", clear, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("scroll", clear);
      clear();
    };
  }, [lit]);

  return <span ref={anchor} hidden aria-hidden="true" />;
};

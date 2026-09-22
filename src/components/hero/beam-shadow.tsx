"use client";

import { useEffect, useRef } from "react";

import { HOUSE_IMAGE_TO_BOX } from "./house-geometry";

type Point = [x: number, y: number];

/**
 * Where the light comes from, in house-box percentages: not the bulb on the
 * wall but the point the beam's two edges converge on, a little way inside
 * the house. Shadows cast from there run true to the beam's own spread.
 */
const LIGHT: Point = [10.8 * HOUSE_IMAGE_TO_BOX, 45.4];
/**
 * The beam as drawn in the raster, in house-box percentages: from the lamp
 * bracket out to where its top edge leaves the top of the image and its
 * bottom edge leaves the right edge (the same vertices the lamp-off clip
 * follows). Convex, so a shadow can be clipped to it edge by edge. The lower
 * eave does poke into it, which is why the house is drawn again, beamless,
 * over the shadowed layer (see house-light.tsx).
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
 * How big a thing the cursor is, as a share of the box width: about a hand,
 * so that close to the bulb it takes the whole beam and far out it still
 * leaves a shadow you can see.
 */
const CURSOR_RADIUS = 0.026;
/**
 * The cursor casts nothing until it is inside the beam, and the blocker then
 * grows in from nothing: this many times the cursor's distance in from the
 * nearer long edge, until it reaches hand size. Near the bulb the beam is
 * narrow and a hand anywhere in it fills it, so it grows faster there.
 */
const ENTRY_TAPER = 2;
const ENTRY_TAPER_AT_WALL = 8;

/**
 * The box is 1.7 times wider than it is tall, so a percentage of its width
 * and a percentage of its height are different lengths; all the geometry
 * below is done in pixels, with these read off the box each frame.
 */
const toPixels = ([x, y]: Point, width: number, height: number): Point => [
  (x / 100) * width,
  (y / 100) * height,
];

/**
 * How far a point is inside the line through `a` and `b`, one edge of a
 * polygon with winding `turn`: positive inside, negative outside.
 */
const insideDistance = (
  [ax, ay]: Point,
  [bx, by]: Point,
  [px, py]: Point,
  turn: number
) =>
  (((bx - ax) * (py - ay) - (by - ay) * (px - ax)) * turn) /
  Math.hypot(bx - ax, by - ay);

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
const shadowShape = (
  cursor: Point,
  light: Point,
  beam: Point[],
  radius: number
): Point[] => {
  const [cx, cy] = cursor;
  const [lx, ly] = light;
  const distance = Math.hypot(cx - lx, cy - ly);
  if (distance <= radius * 1.05) return beam;
  // Angle from the cursor back to the bulb, and how far round the disc the
  // grazing rays touch it.
  const toLight = Math.atan2(ly - cy, lx - cx);
  const alpha = Math.acos(radius / distance);
  const on = (angle: number): Point => [
    cx + Math.cos(angle) * radius,
    cy + Math.sin(angle) * radius,
  ];
  const far = distance * 40;
  const beyond = ([tx, ty]: Point): Point => {
    const length = Math.hypot(tx - lx, ty - ly);
    return [lx + ((tx - lx) / length) * far, ly + ((ty - ly) / length) * far];
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
 * the beam's edges (the shadow is clipped to the beam's outline), and does
 * nothing at all while the cursor is above or below the beam; the
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
      const { width, height } = rect;
      const cursor: Point = [pointer.x - rect.left, pointer.y - rect.top];
      const light = toPixels(LIGHT, width, height);
      // Behind the bulb there is nothing to block.
      if (cursor[0] <= toPixels(BEAM[0], width, height)[0] - 4) return clear();
      const beam = BEAM.map((p) => toPixels(p, width, height));
      // A hand right by the lamp blocks the whole beam, so close to the wall
      // the blocker grows to the beam's height there and settles back to
      // hand size over the first stretch of the beam.
      const edgeY = (edge: [Point, Point], x: number) => {
        const [[x0, y0], [x1, y1]] = edge;
        return y0 + ((x - x0) / (x1 - x0)) * (y1 - y0);
      };
      const wallX = beam[0][0];
      const halfHeight =
        (edgeY([beam[4], beam[3]], cursor[0]) -
          edgeY([beam[0], beam[1]], cursor[0])) /
        2;
      const nearWall = Math.max(0, 1 - (cursor[0] - wallX) / (0.12 * width));
      const hand =
        CURSOR_RADIUS * width +
        Math.max(0, halfHeight - CURSOR_RADIUS * width) * nearWall;
      // Above or below the beam the cursor is not in the light and casts
      // nothing; just inside an edge, the blocker is still small.
      const turn = winding(beam);
      const margin = Math.min(
        insideDistance(beam[0], beam[1], cursor, turn),
        insideDistance(beam[3], beam[4], cursor, turn)
      );
      if (margin <= 0) return clear();
      const taper =
        ENTRY_TAPER + (ENTRY_TAPER_AT_WALL - ENTRY_TAPER) * nearWall;
      const radius = Math.min(hand, taper * margin);
      const shadow = clipPolygon(
        shadowShape(cursor, light, beam, radius),
        beam
      );
      if (shadow.length < 3) return clear();
      const px = ([sx, sy]: Point) => `${sx.toFixed(1)} ${sy.toFixed(1)}`;
      const hole =
        shadow.map((p, i) => `${i ? "L" : "M"}${px(p)}`).join("") + "Z";
      const path = `path(evenodd, "M0 0H${width.toFixed(1)}V${height.toFixed(1)}H0Z${hole}")`;
      targets.forEach((el) => (el.style.clipPath = path));
      // The countdown sits in the beam; whatever part of it the shadow falls
      // on reads as it does with the lamp off rather than glowing in the dark.
      for (const part of countdownParts) {
        const r = part.getBoundingClientRect();
        const centre: Point = [
          r.left + r.width / 2 - rect.left,
          r.top + r.height / 2 - rect.top,
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

"use client";

import { type RefObject, useEffect } from "react";

/** Hook spring: about a 1.7 s swing, dying away over a few seconds. */
const BODY_K = 14;
const BODY_DAMP = 0.9;
/** Tassel spring: quicker and a little looser. */
const TASSEL_K = 45;
const TASSEL_DAMP = 2.2;
/** How hard the lantern's own acceleration throws the tassel. */
const TASSEL_LAG = 1.1;
/** Spin (deg/s) given per lantern-width/s of cursor speed, and its caps. */
const KNOCK_GAIN = 2.6;
const MAX_SPIN = 140;
const MAX_ANGLE = 30;
/** How far around the lantern (in lantern widths) the cursor still hits it. */
const REACH = 0.25;
/** Below this, a lantern counts as still and the loop can stop. */
const REST = 0.02;

type Motion = { body: number; bodyV: number; tassel: number; tasselV: number };

/** A cursor to knock them with: a mouse or trackpad, not a finger. Touch
 * screens just get the breeze. */
const KNOCK_QUERY = "(hover: hover) and (pointer: fine)";

export const useLanternMotion = (
  layerRef: RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const layer = layerRef.current;
    const scene =
      layer?.closest("[data-lantern-scene]") ?? layer?.parentElement;
    if (!layer || !scene) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia(KNOCK_QUERY).matches) return;

    const lanterns = Array.from(layer.children) as HTMLElement[];
    const motion: Motion[] = lanterns.map(() => ({
      body: 0,
      bodyV: 0,
      tassel: 0,
      tasselV: 0,
    }));
    let last: { x: number; y: number; t: number } | null = null;
    let raf = 0;
    let then = 0;

    const step = (now: number) => {
      // Cap the step so a stalled tab doesn't fling them on its return.
      const dt = Math.min((now - then) / 1000, 1 / 30);
      then = now;
      let moving = false;
      motion.forEach((m, i) => {
        const bodyA = -BODY_K * m.body - BODY_DAMP * m.bodyV;
        m.bodyV += bodyA * dt;
        m.body = Math.max(
          -MAX_ANGLE,
          Math.min(MAX_ANGLE, m.body + m.bodyV * dt)
        );
        const tasselA =
          -TASSEL_K * m.tassel - TASSEL_DAMP * m.tasselV - TASSEL_LAG * bodyA;
        m.tasselV += tasselA * dt;
        m.tassel += m.tasselV * dt;

        const still =
          Math.abs(m.body) < REST &&
          Math.abs(m.bodyV) < REST &&
          Math.abs(m.tassel) < REST &&
          Math.abs(m.tasselV) < REST;
        if (still) {
          m.body = m.bodyV = m.tassel = m.tasselV = 0;
        } else {
          moving = true;
        }
        lanterns[i].style.setProperty("--knock", `${m.body.toFixed(2)}deg`);
        lanterns[i].style.setProperty(
          "--knock-tassel",
          `${m.tassel.toFixed(2)}deg`
        );
      });
      raf = moving ? requestAnimationFrame(step) : 0;
    };

    const onMove = (rawEvent: Event) => {
      const event = rawEvent as PointerEvent;
      if (
        layer.closest(
          '.testi-slide[aria-hidden="true"], .testi-base[aria-hidden="true"]'
        )
      )
        return;
      const point = { x: event.clientX, y: event.clientY, t: event.timeStamp };
      const prev = last;
      last = point;
      if (!prev) return;
      const dt = (point.t - prev.t) / 1000;
      if (dt <= 0 || dt > 0.1) return;

      let knocked = false;
      lanterns.forEach((lantern, i) => {
        const rect = lantern.getBoundingClientRect();
        const pad = rect.width * REACH;
        // Walk the path since the last event so a fast flick still connects.
        let hit = false;
        for (let s = 0; s <= 1 && !hit; s += 0.125) {
          const x = prev.x + (point.x - prev.x) * s;
          const y = prev.y + (point.y - prev.y) * s;
          hit =
            x > rect.left - pad &&
            x < rect.right + pad &&
            y > rect.top - pad &&
            y < rect.bottom + pad;
        }
        if (!hit) return;
        // Width-relative speed, so it feels the same at any screen size.
        // Pushing right swings the bottom right, which is anticlockwise.
        const speed = (point.x - prev.x) / rect.width / dt;
        const push = Math.max(
          -MAX_SPIN,
          Math.min(MAX_SPIN, -speed * KNOCK_GAIN)
        );
        // Carried along, not kicked once per event: a lantern only speeds
        // up while the cursor moves faster than it in that direction, so
        // the knock depends on the sweep's speed, not on the event rate.
        const m = motion[i];
        if (push > 0 ? push > m.bodyV : push < m.bodyV) {
          m.bodyV += (push - m.bodyV) * 0.6;
          knocked = true;
        }
      });

      if (knocked && !raf) {
        then = performance.now();
        raf = requestAnimationFrame(step);
      }
    };
    const onLeave = () => {
      last = null;
    };

    scene.addEventListener("pointermove", onMove, { passive: true });
    scene.addEventListener("pointerleave", onLeave);
    return () => {
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [layerRef]);
};

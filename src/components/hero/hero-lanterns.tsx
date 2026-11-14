"use client";

import { type CSSProperties, useEffect, useRef } from "react";

/** The lantern art's own size (Figma "Red Round Lantern"). */
const LANTERN_W = 47.689;
const LANTERN_H = 67.722;

type Lantern = {
  /** Rotated bounding box in the 1512 x 1422 hero, as Figma reports it. */
  box: [x: number, y: number, w: number, h: number];
  /** Resting tilt, as hung in the design. */
  tilt: number;
  /** Seconds for one swing back and forth. */
  period: number;
  /** Degrees either side of the tilt at the hook. */
  swing: number;
  /** Seconds into the cycle it starts, so the four never sync up. */
  delay: number;
};

const LANTERNS: Lantern[] = [
  {
    box: [912.71, 485.27, 53.404, 71.283],
    tilt: 5.02,
    period: 3.1,
    swing: 3.2,
    delay: -0.4,
  },
  {
    box: [990.26, 486.31, 51.708, 70.15],
    tilt: 3.5,
    period: 3.5,
    swing: 2.6,
    delay: -2.1,
  },
  {
    box: [1068.39, 485.92, 50.32, 69.205],
    tilt: -2.27,
    period: 2.8,
    swing: 3.0,
    delay: -1.3,
  },
  {
    box: [1147, 485, 51.719, 70.157],
    tilt: -3.51,
    period: 3.3,
    swing: 3.4,
    delay: -2.7,
  },
];

/*
 * Knocking a lantern. Each one is a pair of damped springs: the lantern on
 * its hook, and the tassel on the bottom cap, which is thrown the other way
 * whenever the lantern speeds up (so it trails behind, like a loose weight).
 * Angles are degrees, time is seconds.
 */
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

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/**
 * The four red lanterns under the "Night Market" sign, positioned in the
 * hero's 1512 x 1422 space. Each is split at its joints (hook, tassel) into
 * two layers of the same size. CSS keeps them swaying in the breeze (see
 * hero.css), and sweeping the cursor through one knocks it: the knock is
 * simulated here and added on top through `--knock` / `--knock-tassel`.
 */
export const HeroLanterns = () => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const scene = layer?.parentElement;
    if (!layer || !scene) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lanterns = Array.from(layer.children) as HTMLElement[];
    const motion: Motion[] = lanterns.map(() => ({
      body: 0,
      bodyV: 0,
      tassel: 0,
      tasselV: 0,
    }));
    let last: { x: number; y: number; t: number } | null = null;
    let frame = 0;
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
      frame = moving ? requestAnimationFrame(step) : 0;
    };

    const onMove = (event: PointerEvent) => {
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

      if (knocked && !frame) {
        then = performance.now();
        frame = requestAnimationFrame(step);
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
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      {LANTERNS.map(({ box: [x, y, w, h], tilt, period, swing, delay }) => (
        <div
          key={x}
          className="absolute"
          style={
            {
              left: pct(x + w / 2 - LANTERN_W / 2, 1512),
              top: pct(y + h / 2 - LANTERN_H / 2, 1422),
              width: pct(LANTERN_W, 1512),
              aspectRatio: `${LANTERN_W} / ${LANTERN_H}`,
              rotate: `${tilt}deg`,
              "--period": `${period}s`,
              "--gust": `${period * 2.3}s`,
              "--swing": `${swing}deg`,
              "--delay": `${delay}s`,
            } as CSSProperties
          }
        >
          <div className="lantern-gust size-full">
            <div className="lantern-swing relative size-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/hero/lantern-body.svg"
                alt=""
                width={LANTERN_W}
                height={LANTERN_H}
                draggable={false}
                className="absolute inset-0 size-full"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/hero/lantern-tassel.svg"
                alt=""
                width={LANTERN_W}
                height={LANTERN_H}
                draggable={false}
                className="lantern-tassel absolute inset-0 size-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

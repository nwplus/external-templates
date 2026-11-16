"use client";

import { useLanternMotion } from "@/hooks/use-lantern-motion";

import { type CSSProperties, useRef } from "react";

/** The lantern art's own size (Figma "Red Round Lantern"). */
const LANTERN_W = 47.689;
const LANTERN_H = 67.722;

/** The gate art's own width (gate.svg); lanterns are placed in its units. */
const GATE_W = 848;
const pct = (value: number, of: number) => `${(value / of) * 100}%`;

type Lantern = {
  /** Rotated bounding box, as Figma reports it, relative to the gate's
   * top-left corner (the desktop hero has the gate at 630, 237). */
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
    box: [282.71, 248.27, 53.404, 71.283],
    tilt: 5.02,
    period: 3.1,
    swing: 3.2,
    delay: -0.4,
  },
  {
    box: [360.26, 249.31, 51.708, 70.15],
    tilt: 3.5,
    period: 3.5,
    swing: 2.6,
    delay: -2.1,
  },
  {
    box: [438.39, 248.92, 50.32, 69.205],
    tilt: -2.27,
    period: 2.8,
    swing: 3.0,
    delay: -1.3,
  },
  {
    box: [517, 248, 51.719, 70.157],
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
type HeroLanternsProps = {
  /** The scene's design frame, which the lanterns are placed in. */
  frame: { width: number; height: number };
  /** Where the gate sits in that frame: its top-left corner and width. */
  gate: { x: number; y: number; width: number };
};

/**
 * The four red lanterns under the "Night Market" sign, hung from the gate
 * wherever the scene puts it. Each is split at its joints (hook, tassel) into
 * two layers of the same size. CSS keeps them swaying in the breeze (see
 * hero.css), and sweeping a cursor through one knocks it: the knock is
 * simulated here and added on top through `--knock` / `--knock-tassel`.
 */
export const HeroLanterns = ({ frame, gate }: HeroLanternsProps) => {
  const layerRef = useRef<HTMLDivElement>(null);
  const scale = gate.width / GATE_W;

  useLanternMotion(layerRef);

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
              left: pct(
                gate.x + (x + w / 2 - LANTERN_W / 2) * scale,
                frame.width
              ),
              top: pct(
                gate.y + (y + h / 2 - LANTERN_H / 2) * scale,
                frame.height
              ),
              width: pct(LANTERN_W * scale, frame.width),
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

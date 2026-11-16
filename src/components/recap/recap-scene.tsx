"use client";

import { SceneLayer } from "@/components/ui/scene-layer";
import { TestimonialsScene } from "@/components/testimonials/testimonials-scene";
import { RECAP_DESKTOP } from "@/constants/recap";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

import { useRef } from "react";

import "./recap.css";

/** The garage opening inside the desktop frame, as percentages: everything
 * that happens behind the door is clipped to it. */
const OPENING = { left: 7.8, top: 28.5, width: 84.8, height: 71.5 };

/**
 * The garage. The section pins while the corrugated door rolls up onto the
 * night market, then the camera walks through the doorway: the facade zooms
 * past faster than the doorway opens, so the market ends up filling the
 * screen — which is where the testimonials section hands over.
 *
 * `--p` is written by useScrollProgress as you scroll and recap.css turns it
 * into the door, the doorway's growth and the facade's exit.
 */
export const RecapScene = () => {
  const pin = useRef<HTMLDivElement>(null);
  useScrollProgress(pin);

  return (
    <div ref={pin} className="recap-pin relative h-[220vh]">
      <div className="recap-sticky overflow-hidden bg-[#0b101c]">
        <div className="@container absolute top-1/2 left-1/2 aspect-[1512/982] w-screen -translate-x-1/2 -translate-y-1/2">
          {/* The facade zooms out past the camera, so it is one layer that all
              grows and leaves together; its origin is the doorway's centre. */}
          <div className="recap-chrome absolute inset-0">
            <SceneLayer src="/assets/recap/wall.webp" box={RECAP_DESKTOP.wall} priority />
            <SceneLayer
              src="/assets/recap/column-left.webp"
              box={RECAP_DESKTOP.columnLeft}
            />
            <SceneLayer
              src="/assets/recap/column-right.webp"
              box={RECAP_DESKTOP.columnRight}
            />
            <SceneLayer
              src="/assets/recap/side-shadow-left.webp"
              box={RECAP_DESKTOP.sideShadowL}
            />
            <SceneLayer
              src="/assets/recap/side-shadow-right.webp"
              box={RECAP_DESKTOP.sideShadowR}
            />
            <SceneLayer
              src="/assets/recap/right-door.webp"
              box={RECAP_DESKTOP.rightDoor}
            />
            {/* The lamps hang in front of the frame, as they do in the design. */}
            <SceneLayer
              src="/assets/recap/lights.webp"
              box={RECAP_DESKTOP.lights}
              fit="contain"
            />
            <div className="recap-title absolute inset-x-0 top-[16.8%] flex flex-col items-center gap-[0.8cqw]">
              <h2 className="font-display text-[3.175cqw] leading-none text-white">
                Recap
              </h2>
              <span className="recap-cue flex items-center gap-[0.4cqw] text-[0.95cqw] font-medium tracking-[0.14em] text-[#ffe7ac]/70 uppercase">
                Scroll to open
                <svg
                  viewBox="0 0 24 24"
                  className="recap-cue-arrow size-[1.1cqw] fill-none stroke-current stroke-2"
                  aria-hidden="true"
                >
                  <path d="M12 4v14m0 0 5-5m-5 5-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          {/* Everything behind the door lives in this window, so none of it
              spills onto the facade around the opening. */}
          <div
            className="recap-opening pointer-events-none absolute overflow-hidden"
            style={{
              left: `${OPENING.left}%`,
              top: `${OPENING.top}%`,
              width: `${OPENING.width}%`,
              height: `${OPENING.height}%`,
            }}
          >
            {/* The market fills the doorway at every size: as the doorway
                grows with the pin it grows with it, and lands at 1:1 with the
                frame when the doorway covers the frame. */}
            <div
              id="testimonials"
              className="absolute inset-0 grid place-items-center overflow-hidden"
              style={{ "--market-chrome": "var(--open, 1)" } as React.CSSProperties}
            >
              <div className="recap-street">
                <TestimonialsScene />
              </div>
            </div>
            <div className="recap-street-shade pointer-events-none absolute inset-0" />

            {/* Daylight through the opening, over the market. */}
            <div className="recap-glow pointer-events-none absolute inset-0" />
            <div className="recap-floor pointer-events-none absolute inset-0" />

            {/* The door and the polaroids pinned to it roll up as one. */}
            <div className="recap-door absolute inset-0">
              <SceneLayer
                src="/assets/recap/door.webp"
                box={RECAP_DESKTOP.door}
                priority
                className="recap-slab"
              />
              <SceneLayer
                src="/assets/recap/photos.webp"
                box={RECAP_DESKTOP.photos}
                priority
                className="recap-photos"
              />
              <SceneLayer
                src="/assets/recap/top-shadow.webp"
                box={RECAP_DESKTOP.topShadow}
                priority
                className="z-10"
              />
              <SceneLayer
                src="/assets/recap/door-shadow.webp"
                box={RECAP_DESKTOP.doorShadow}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

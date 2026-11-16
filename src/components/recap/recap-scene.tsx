"use client";

import { SceneLayer } from "@/components/ui/scene-layer";
import { RECAP_DESKTOP } from "@/constants/recap";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

import { useRef } from "react";

import "./recap.css";

/**
 * The garage. The section pins for a couple of screens: the corrugated door
 * rolls up, the polaroids drift and fade, and then the page is handed on to
 * testimonials, which arrives from further down the street.
 *
 * The pin is why this is a client component: `--p` is written by
 * useScrollProgress as you scroll, and recap.css turns it into the door.
 */
export const RecapScene = () => {
  const pin = useRef<HTMLDivElement>(null);
  useScrollProgress(pin);

  return (
    <div ref={pin} className="recap-pin relative h-[180vh]">
      <div className="recap-sticky flex h-screen items-center justify-center overflow-hidden bg-[#0b101c]">
        <div className="@container relative aspect-[1512/982] w-[min(100%,calc(100vh*1.5397))] overflow-hidden bg-[#0b101c]">
          <SceneLayer src="/assets/recap/wall.webp" box={RECAP_DESKTOP.wall} priority />
          <div className="recap-glow pointer-events-none absolute inset-0" />
          <div className="recap-floor pointer-events-none absolute inset-0" />
          <SceneLayer
            src="/assets/recap/column-left.webp"
            box={RECAP_DESKTOP.columnLeft}
          />
          <SceneLayer
            src="/assets/recap/column-right.webp"
            box={RECAP_DESKTOP.columnRight}
          />
          <SceneLayer
            src="/assets/recap/lights.webp"
            box={RECAP_DESKTOP.lights}
            className="recap-lights"
            fit="contain"
          />

          {/* The door and everything pinned to it roll up as one piece: the
              polaroids are on the door in the design, so they leave with it
              and reveal the lit garage behind. */}
          <div className="recap-door pointer-events-none absolute inset-0">
            <SceneLayer src="/assets/recap/door.webp" box={RECAP_DESKTOP.door} />
            <SceneLayer src="/assets/recap/photos.webp" box={RECAP_DESKTOP.photos} />
            <SceneLayer
              src="/assets/recap/top-shadow.webp"
              box={RECAP_DESKTOP.topShadow}
              className="z-10"
            />
            <SceneLayer
              src="/assets/recap/door-shadow.webp"
              box={RECAP_DESKTOP.doorShadow}
            />
          </div>
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
      </div>
    </div>
  );
};

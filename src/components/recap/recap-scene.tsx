"use client";

import { FoodEgg } from "@/components/food-egg";
import { TestimonialsScene } from "@/components/testimonials/testimonials-scene";
import { LightboxGallery, LightboxTrigger } from "@/components/ui/lightbox";
import { SceneLayer } from "@/components/ui/scene-layer";
import { RECAP_DESKTOP } from "@/constants/recap";
import { RECAP_DESKTOP_PHOTOS } from "@/constants/recap-photos";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { frameStyle } from "@/lib/frame";

import { useRef } from "react";

import "./recap.css";

/** The door lifts as the camera moves through the opening. All garage
 * layers retain the original 1512 × 982 Figma coordinate system. */
export const RecapScene = () => {
  const pin = useRef<HTMLDivElement>(null);
  useScrollProgress(pin);

  return (
    <div ref={pin} className="recap-pin relative h-[220vh]">
      <div
        id="testimonials"
        className="recap-testimonials-anchor pointer-events-none absolute bottom-0 h-screen w-px"
        aria-hidden="true"
      />
      <div className="recap-sticky overflow-hidden bg-[#0b101c]">
        <div className="recap-frame @container">
          <div
            className="recap-market absolute inset-0"
            style={
              { "--market-chrome": "var(--zoom, 1)" } as React.CSSProperties
            }
          >
            <TestimonialsScene />
          </div>
          {/* Clip the moving slab, not its coordinate system. The door and
              facade share one camera transform so the opening stays aligned. */}
          <div className="recap-opening pointer-events-none absolute inset-0">
            {/* The door and the polaroids pinned to it roll up as one. */}
            <div className="recap-door absolute inset-0">
              <SceneLayer
                src="/assets/recap/door.webp"
                box={RECAP_DESKTOP.door}
                priority
                className="recap-slab"
              />
              <LightboxGallery>
                {RECAP_DESKTOP_PHOTOS.map((photo) => {
                  if ("kind" in photo) {
                    if (photo.kind === "illustration") {
                      return <SceneLayer key={photo.src} {...photo} />;
                    }
                    return (
                      <FoodEgg
                        key={photo.src}
                        food="strawberry-mini-pancakes"
                        box={photo.box}
                        label="Add strawberry pancakes to the food tray"
                        className="recap-photo recap-flyer"
                        sparkle={{ x: 82, y: 10, size: 1 }}
                      >
                        <SceneLayer
                          src={photo.src}
                          box={{ x: 0, y: 0, w: 100, h: 100 }}
                        />
                      </FoodEgg>
                    );
                  }
                  return (
                    <LightboxTrigger
                      key={photo.src}
                      photo={{
                        ...photo,
                        src: photo.fullSrc,
                        width: photo.fullWidth,
                        height: photo.fullHeight,
                        caption: photo.alt,
                      }}
                      className="recap-photo absolute"
                      style={frameStyle(photo.box)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        draggable={false}
                        className="size-full select-none"
                      />
                    </LightboxTrigger>
                  );
                })}
              </LightboxGallery>
              <SceneLayer
                src="/assets/recap/top-shadow-final.svg"
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
          {/* The facade zooms out past the camera, so it is one layer that all
              grows and leaves together; its origin is the doorway's centre. */}
          <div className="recap-chrome pointer-events-none absolute inset-0">
            <SceneLayer
              src="/assets/recap/wall.webp"
              box={RECAP_DESKTOP.wall}
              priority
            />
            <SceneLayer
              src="/assets/recap/column-left.webp"
              box={RECAP_DESKTOP.columnLeft}
            />
            <SceneLayer
              src="/assets/recap/column-right.webp"
              box={RECAP_DESKTOP.columnRight}
            />
            <div className="recap-doorway-trim absolute inset-0">
              <SceneLayer
                src="/assets/recap/side-shadow-left-final.svg"
                box={RECAP_DESKTOP.sideShadowL}
              />
              <SceneLayer
                src="/assets/recap/side-shadow-right-final.svg"
                box={RECAP_DESKTOP.sideShadowR}
              />
              <SceneLayer
                src="/assets/recap/right-rail-final.svg"
                box={RECAP_DESKTOP.rightDoor}
              />
            </div>
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
                  <path
                    d="M12 4v14m0 0 5-5m-5 5-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

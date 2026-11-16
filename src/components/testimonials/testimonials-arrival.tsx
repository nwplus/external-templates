"use client";

import { smoothstep, useScrollProgress } from "@/hooks/use-scroll-progress";

import { useRef } from "react";

import { TestimonialsScene } from "./testimonials-scene";

/**
 * The night market is down the street from the garage: it starts small, as if
 * seen from the door, and grows to fill the screen as you keep scrolling. Once
 * it fills the frame the pin ends and the page carries on.
 */
export const TestimonialsArrival = () => {
  const pin = useRef<HTMLDivElement>(null);
  useScrollProgress(pin, smoothstep);

  return (
    <div ref={pin} className="testi-pin relative h-[220vh]">
      <div className="testi-sticky flex h-screen items-center justify-center overflow-hidden bg-[#080b11]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(62%_62%_at_50%_46%,#101725_0%,#070a10_78%)]" />
        {/* At a distance the street's rectangle melts into the dark; it
            sharpens back up as the scene fills the frame. */}
        <div className="testi-vignette pointer-events-none absolute inset-0" />
        <div className="testi-zoom relative w-[min(100%,calc(100vh*1.5397))] shadow-[0_6vh_18vh_rgb(0_0_0_/_0.55)]">
          <TestimonialsScene />
        </div>
      </div>
    </div>
  );
};

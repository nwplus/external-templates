"use client";

import { SceneLayer } from "@/components/ui/scene-layer";
import {
  TESTIMONIALS,
  TESTIMONIALS_HINT_TOUCH,
} from "@/constants/testimonials";
import { TESTIMONIALS_MOBILE as L } from "@/constants/testimonials-layout";
import { frameStyle } from "@/lib/frame";

import { useState } from "react";

import { PascaleCart } from "./pascale-cart";
import { TestimonialArrows } from "./testimonial-arrows";
import "./testimonials.css";
import { VaibhavWheel } from "./vaibhav-wheel";

/** One stall at a time on the phone, with the quote underneath. */
const STALLS = {
  pascale: { stall: L.pascaleStall, portrait: L.pascalePortrait },
  vaibhav: { stall: L.vaibhavStall, portrait: null },
  qazi: { stall: L.qaziStall, portrait: null },
} as const;

export const TestimonialsSceneMobile = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const go = (next: number, step?: 1 | -1) => {
    if (next === index) return;
    setLeaving(index);
    setDirection(step ?? (next > index ? 1 : -1));
    setIndex(next);
  };

  return (
    <div
      id="testimonials"
      data-lantern-scene
      className="@container relative aspect-[402/874] w-full overflow-hidden bg-[#1b1a26]"
    >
      <SceneLayer
        src="/assets/testimonials/mobile-bg.webp"
        box={L.bg}
        priority
      />

      {/* Tapping the cart is the phone equivalent of picking a stall on
          desktop: it steps to the next person. It sits under the slides,
          which let taps through, so Vaibhav's wheel can take its own. */}
      <button
        type="button"
        onClick={() => go((index + 1) % TESTIMONIALS.length, 1)}
        aria-label="Next testimonial (tap cart)"
        className="absolute cursor-pointer"
        style={frameStyle(
          index === 0
            ? STALLS.pascale.stall
            : index === 1
              ? STALLS.vaibhav.stall
              : STALLS.qazi.stall
        )}
      >
        <span className="sr-only">Next testimonial</span>
      </button>

      {TESTIMONIALS.map((entry, stall) => {
        const boxes = STALLS[entry.id];
        return (
          <div
            key={entry.id}
            aria-hidden={stall !== index}
            className="testi-slide absolute inset-0"
            data-active={stall === index ? "" : undefined}
            data-leaving={stall === leaving ? "" : undefined}
            data-dir={direction}
            onAnimationEnd={(event) => {
              if (event.target === event.currentTarget && leaving === stall) {
                setLeaving(null);
              }
            }}
          >
            {/* The portrait sits behind the cart so the counter and the
                boxes cover its bottom edge, as in the design. */}
            {boxes.portrait && (
              <SceneLayer
                src={`/assets/testimonials/mobile-${entry.id}-portrait.webp`}
                box={boxes.portrait}
              />
            )}
            {entry.id === "pascale" ? (
              <div
                className="testi-cart absolute"
                style={frameStyle(boxes.stall)}
              >
                <PascaleCart variant="mobile" />
              </div>
            ) : (
              <SceneLayer
                src={`/assets/testimonials/mobile-${entry.id}.webp`}
                box={boxes.stall}
                className="testi-cart"
              />
            )}
            {entry.id === "vaibhav" && (
              <div
                className="pointer-events-none absolute"
                style={frameStyle(boxes.stall)}
              >
                <VaibhavWheel active={stall === index} sparkleSize={2.8} />
              </div>
            )}
            <div
              className="testi-card absolute"
              data-open=""
              style={{ ...frameStyle(L.card), height: "auto" }}
            >
              <div className="relative w-full rounded-[2.4cqw] bg-[#f6e9e9] px-[6%] py-[5%] shadow-[0_2cqw_5cqw_rgb(0_0_0_/_0.35)]">
                <span
                  className="absolute top-[-2.2cqw] left-1/2 size-[4.4cqw] -translate-x-1/2 rotate-45 rounded-[0.6cqw] bg-[#f6e9e9]"
                  aria-hidden="true"
                />
                <div
                  aria-live={stall === index ? "polite" : "off"}
                  className="flex flex-col gap-[0.9em] text-[2.6cqw] leading-[1.36] text-[#2b2b33]"
                >
                  {entry.quote.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <p
        className="absolute text-center text-[3.4cqw] font-medium text-[#ffe7ac]/85"
        style={frameStyle(L.hint)}
      >
        {TESTIMONIALS_HINT_TOUCH}
      </p>

      <div className="absolute" style={frameStyle(L.arrows)}>
        <TestimonialArrows
          count={TESTIMONIALS.length}
          index={index}
          onChange={go}
        />
      </div>
    </div>
  );
};

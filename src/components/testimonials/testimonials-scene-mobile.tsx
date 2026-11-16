"use client";

import { SceneLayer } from "@/components/ui/scene-layer";
import {
  TESTIMONIALS,
  TESTIMONIALS_HINT_TOUCH,
} from "@/constants/testimonials";
import { TESTIMONIALS_MOBILE as L } from "@/constants/testimonials-layout";
import { frameStyle } from "@/lib/frame";

import { useState } from "react";

import { TestimonialArrows } from "./testimonial-arrows";

import "./testimonials.css";

/** One stall at a time on the phone, with the quote underneath. */
const STALLS = {
  pascale: { stall: L.pascaleStall, portrait: L.pascalePortrait },
  vaibhav: { stall: L.vaibhavStall, portrait: null },
  qazi: { stall: L.qaziStall, portrait: null },
} as const;

export const TestimonialsSceneMobile = () => {
  const [index, setIndex] = useState(0);
  const person = TESTIMONIALS[index];

  return (
    <div id="testimonials" className="@container relative aspect-[402/874] w-full overflow-hidden bg-[#1b1a26]">
      <SceneLayer src="/assets/testimonials/mobile-bg.webp" box={L.bg} priority />

      {TESTIMONIALS.map((entry, stall) => {
        const boxes = STALLS[entry.id];
        return (
          <div
            key={entry.id}
            aria-hidden={stall !== index}
            className="testi-art absolute inset-0"
            data-active={stall === index ? "" : undefined}
          >
            {/* The portrait sits behind the cart so the counter and the
                boxes cover its bottom edge, as in the design. */}
            {boxes.portrait && (
              <SceneLayer
                src={`/assets/testimonials/mobile-${entry.id}-portrait.webp`}
                box={boxes.portrait}
              />
            )}
            <SceneLayer
              src={`/assets/testimonials/mobile-${entry.id}.webp`}
              box={boxes.stall}
            />
          </div>
        );
      })}

      {/* Tapping the cart is the phone equivalent of picking a stall on
          desktop: it steps to the next person. */}
      <button
        type="button"
        onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
        aria-label="Next testimonial"
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

      <div className="absolute" style={{ ...frameStyle(L.card), height: "auto" }}>
        <div className="relative w-full rounded-[2.4cqw] bg-[#f6e9e9] px-[6%] py-[5%] shadow-[0_2cqw_5cqw_rgb(0_0_0_/_0.35)]">
          <span
            className="absolute top-[-2.2cqw] left-1/2 size-[4.4cqw] -translate-x-1/2 rotate-45 rounded-[0.6cqw] bg-[#f6e9e9]"
            aria-hidden="true"
          />
          <p className="text-[2.6cqw] leading-[1.36] text-[#2b2b33]">
            {person.quote}
          </p>
        </div>
      </div>

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
          onChange={setIndex}
        />
      </div>
    </div>
  );
};

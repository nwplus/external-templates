"use client";

import { SceneLayer } from "@/components/ui/scene-layer";
import { TESTIMONIALS, TESTIMONIALS_HINT, TESTIMONIALS_HINT_OPEN } from "@/constants/testimonials";
import { TESTIMONIALS_DESKTOP as L } from "@/constants/testimonials-layout";
import { frameStyle } from "@/lib/frame";
import { cn } from "@/lib/utils";

import { useRef, useState } from "react";

import { TestimonialArrows } from "./testimonial-arrows";

import "./testimonials.css";

/** Which base/scene box belongs to each person. */
const STALLS = [
  { id: "pascale", base: L.pascaleBase, selected: L.pascaleSelected },
  { id: "vaibhav", base: L.vaibhavBase, selected: L.vaibhavSelected },
  { id: "qazi", base: L.qaziBase, selected: L.qaziSelected },
] as const;
/**
 * The night market: three stalls on the street. Picking one brings it forward
 * and floats its quote card over the others; the arrows walk through all
 * three without going back to the wide shot.
 *
 * The section also arrives from a distance — see testimonials.tsx, which
 * scales this scene up as the recap's garage door finishes opening.
 */
export const TestimonialsScene = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);

  const person = selected === null ? null : TESTIMONIALS[selected];

  return (
    <div
      data-selected={selected === null ? undefined : ""}
      className="@container relative aspect-[1512/982] w-full overflow-hidden bg-[#1b1a26]"
    >
      <SceneLayer src="/assets/testimonials/bg.webp" box={L.bg} className="testi-bg" priority />

      {/* Wide shot: the three carts, each a button. */}
      {STALLS.map((stall, index) => (
        <button
          key={stall.id}
          type="button"
          onClick={() => setSelected(index)}
          aria-label={`Read ${TESTIMONIALS[index].name}'s testimonial`}
          aria-hidden={selected !== null}
          tabIndex={selected === null ? 0 : -1}
          className="testi-base testi-stall absolute cursor-pointer"
          style={frameStyle(stall.base)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/testimonials/${stall.id}-base.webp`}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="size-full select-none transition-transform duration-300 hover:-translate-y-[0.4cqw]"
          />
        </button>
      ))}

      {/* Close-up: the same art, larger, on the design's selected boxes. */}
      {STALLS.map((stall, index) => (
        <div
          key={stall.id}
          data-active={selected === index ? "" : undefined}
          aria-hidden={selected !== index}
          className="testi-art absolute"
          style={frameStyle(stall.selected)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/testimonials/${stall.id}.webp`}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="size-full select-none"
          />
        </div>
      ))}

      <div className="testi-stall absolute text-center" style={frameStyle(L.title)}>
        <h2
          ref={heading}
          className="font-display text-[3.175cqw] leading-none text-white whitespace-nowrap"
        >
          Testimonials
        </h2>
      </div>

      {/* The tail is its own shape in the design (a wide wedge from the card
          back to the cart), so it is drawn from that box rather than as a
          corner of the card. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="testi-card absolute fill-[#f6e9e9]"
        style={frameStyle(L.tail)}
        data-open={person === null ? undefined : ""}
      >
        <path d="M100 0 L100 100 L0 62 L100 22 Z" />
      </svg>

      {/* The bubble. */}
      <div
        className="testi-card absolute"
        data-open={person === null ? undefined : ""}
        aria-hidden={person === null}
        style={{ ...frameStyle(L.card), height: "auto" }}
      >
        <div
          aria-live="polite"
          className="relative w-full rounded-[1.1cqw] bg-[#f6e9e9] px-[7.8%] py-[7%] shadow-[0_1.4cqw_3.2cqw_rgb(0_0_0_/_0.28)]"
        >
          <p className="text-[1.058cqw] leading-[1.42] text-[#2b2b33]">
            {person?.quote}
          </p>
        </div>
      </div>

      <p
        className="testi-hint absolute text-center text-[1.323cqw] font-medium text-[#ffe7ac]/85"
        style={frameStyle(person === null ? L.hint : L.hintOpen)}
      >
        {person === null ? TESTIMONIALS_HINT : TESTIMONIALS_HINT_OPEN}
        {person === null && <span aria-hidden="true"> ▸</span>}
      </p>

      <div
        className={cn("absolute", person === null && "invisible")}
        style={frameStyle(L.arrows)}
      >
        <TestimonialArrows
          count={TESTIMONIALS.length}
          index={selected ?? 0}
          onChange={(next) => setSelected(next)}
        />
      </div>
    </div>
  );
};

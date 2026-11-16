"use client";

import { SceneLayer } from "@/components/ui/scene-layer";
import {
  TESTIMONIALS,
  TESTIMONIALS_HINT,
  TESTIMONIALS_HINT_OPEN,
} from "@/constants/testimonials";
import { TESTIMONIALS_DESKTOP as L } from "@/constants/testimonials-layout";
import { frameStyle } from "@/lib/frame";
import { cn } from "@/lib/utils";

import { useState } from "react";

import { TestimonialArrows } from "./testimonial-arrows";
import "./testimonials.css";

/** Which base/scene box belongs to each person. */
const STALLS = [
  { id: "pascale", base: L.pascaleBase, selected: L.pascaleSelected },
  { id: "vaibhav", base: L.vaibhavBase, selected: L.vaibhavSelected },
  { id: "qazi", base: L.qaziBase, selected: L.qaziSelected },
] as const;

/**
 * The night market: three stalls on the street. Picking one slides its
 * close-up in — from the right when you go forward, from the left when you go
 * back — while the previous one slides out the other way, and its quote card
 * floats over the street.
 *
 * The whole scene runs edge to edge; the recap opens onto the same picture.
 */
export const TestimonialsScene = ({ bare = false }: { bare?: boolean }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const person = selected === null ? null : TESTIMONIALS[selected];

  const go = (next: number, step?: 1 | -1) => {
    if (next === selected) return;
    setLeaving(selected);
    setDirection(step ?? (selected === null || next > selected ? 1 : -1));
    setSelected(next);
  };

  return (
    <div
      data-selected={selected === null ? undefined : ""}
      className={cn(
        "@container relative aspect-[1512/982] w-full overflow-hidden bg-[#1b1a26]",
        bare && "pointer-events-none"
      )}
    >
      <SceneLayer src="/assets/testimonials/bg.webp" box={L.bg} priority />

      {/* Wide shot: the three carts, each a button. */}
      {STALLS.map((stall, index) => (
        <button
          key={stall.id}
          type="button"
          onClick={() => go(index)}
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

      {/* A viewport-wide slide carries the cart, quote and tail together.
          Keep the old quote mounted until the entire slide clears the edge. */}
      {STALLS.map((stall, index) => (
        <div
          key={stall.id}
          data-active={selected === index ? "" : undefined}
          data-leaving={leaving === index ? "" : undefined}
          data-dir={direction}
          aria-hidden={selected !== index}
          className="testi-slide pointer-events-none absolute inset-0"
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget && leaving === index) {
              setLeaving(null);
            }
          }}
        >
          <div
            className="testi-cart absolute"
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
          <div style={{ opacity: "var(--market-chrome, 1)" }}>
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="testi-card absolute fill-[#f6e9e9]"
              style={frameStyle(L.tail)}
              data-open=""
            >
              <path d="M100 4 L100 100 L0 72 L100 30 Z" />
            </svg>
            <div
              className="testi-card absolute flex items-center"
              data-open=""
              style={frameStyle(L.card)}
            >
              <div
                aria-live={selected === index ? "polite" : "off"}
                className="relative w-full rounded-[1.1cqw] bg-[#f6e9e9] px-[7.8%] py-[7%] shadow-[0_1.4cqw_3.2cqw_rgb(0_0_0_/_0.28)]"
              >
                <div className="flex flex-col gap-[0.9em] text-[1.058cqw] leading-[1.42] text-[#2b2b33]">
                  {TESTIMONIALS[index].quote
                    .split("\n\n")
                    .map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ opacity: "var(--market-chrome, 1)" }}>
        {!bare && (
          <div
            className="testi-stall absolute text-center"
            style={frameStyle(L.title)}
          >
            <h2 className="font-display text-[3.175cqw] leading-none text-white whitespace-nowrap">
              Testimonials
            </h2>
          </div>
        )}

        {!bare && (
          <p
            className="testi-hint absolute text-center text-[1.323cqw] font-medium text-[#ffe7ac]/85"
            style={frameStyle(person === null ? L.hint : L.hintOpen)}
          >
            {person === null ? TESTIMONIALS_HINT : TESTIMONIALS_HINT_OPEN}
            {person === null && <span aria-hidden="true"> ▸</span>}
          </p>
        )}

        {!bare && (
          <div
            className={cn("absolute", person === null && "invisible")}
            style={frameStyle(L.arrows)}
          >
            <TestimonialArrows
              count={TESTIMONIALS.length}
              index={selected ?? 0}
              onChange={go}
            />
          </div>
        )}
      </div>
    </div>
  );
};

"use client";

import { cn } from "@/lib/utils";

/**
 * The design's pair of coral arrow buttons with the dots between them. The
 * dots double as a progress read-out: the current one stretches into a pill.
 *
 * Everything is sized off the box the caller gives it (the arrows frame is
 * 271x50 in both designs), so the same component works at 1512 and at 402.
 */
export const TestimonialArrows = ({
  count,
  index,
  onChange,
  className,
}: {
  count: number;
  index: number;
  onChange: (next: number) => void;
  className?: string;
}) => {
  const step = (delta: number) => onChange((index + delta + count) % count);

  return (
    <div className={cn("[container-type:size] flex h-full w-full items-center justify-between", className)}>
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous testimonial"
        className="testi-arrow grid h-full w-[104cqh] cursor-pointer place-items-center rounded-[18cqh] bg-[#ff5f57] shadow-[0_0.3vh_0.9vh_rgb(0_0_0_/_0.3)]"
      >
        <svg viewBox="0 0 24 24" className="w-[45%] fill-none stroke-white stroke-[2.4]">
          <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="flex items-center gap-[14cqh]">
        {Array.from({ length: count }, (_, dot) => (
          <button
            key={dot}
            type="button"
            onClick={() => onChange(dot)}
            aria-label={`Testimonial ${dot + 1}`}
            aria-current={dot === index}
            className={cn(
              "testi-dot h-[16cqh] cursor-pointer rounded-full",
              dot === index ? "w-[40cqh] bg-[#ff5f57]" : "w-[16cqh] bg-white/55"
            )}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next testimonial"
        className="testi-arrow grid h-full w-[104cqh] cursor-pointer place-items-center rounded-[18cqh] bg-[#ff5f57] shadow-[0_0.3vh_0.9vh_rgb(0_0_0_/_0.3)]"
      >
        <svg viewBox="0 0 24 24" className="w-[45%] fill-none stroke-white stroke-[2.4]">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

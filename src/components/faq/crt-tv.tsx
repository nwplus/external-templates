"use client";

import type { FaqItem } from "@/lib/faq-layout";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Ref } from "react";

type CrtTvProps = {
  selected: FaqItem | null;
  /** True when there are no questions at all; swaps the idle prompt. */
  empty: boolean;
  /** The tape slot, which the room flies a clicked tape into. */
  slotRef?: Ref<HTMLParagraphElement>;
};

/**
 * The television. `tv.svg` already draws the curved static, its glow, the
 * dials and the tape slot, so everything here is text laid over the artwork:
 * the answer inside the flat middle of the CRT, and the question on the tape
 * in the slot. Type is sized in `cqw` so it tracks the set at every width.
 */
const CrtTv = ({ selected, empty, slotRef }: CrtTvProps) => (
  <div className="relative @container w-full">
    <Image
      src="/assets/faq/tv.svg"
      alt=""
      aria-hidden="true"
      width={477}
      height={440}
      className="h-auto w-full"
    />

    {/* The set's light breathing over the bezel: above the artwork's own
        static glow, below the copy. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-[5%] left-[9%] h-[71%] w-[82%] rounded-[12%] bg-static/50 blur-2xl mix-blend-screen motion-safe:animate-glow"
    />

    {/* The flat part of the screen, inside the curve of the static. */}
    <div
      aria-live="polite"
      className="absolute top-[8.5%] left-[12.5%] h-[64%] w-[75.4%] overflow-y-auto text-tv-ink"
    >
      {selected ? (
        /* An answer is prose, and prose does not survive being set straight on
           the static — the speckle runs at the same frequency as the
           letterforms. A wash calms the texture under the words while the set
           still reads as a CRT, and the block is centred so a short answer
           does not hang off the top edge. */
        <motion.div
          key={selected.question}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="flex min-h-full items-center bg-tape-label/80 px-[4cqw] py-[3.5cqw] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        >
          <p className="font-body text-[max(1rem,3.6cqw)] leading-relaxed whitespace-pre-line">
            {selected.answer}
          </p>
        </motion.div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-[7cqw] text-center">
          <p className="font-display text-[13.4cqw] leading-none">FAQ</p>
          <p className="font-display text-[7.5cqw] leading-[1.5]">
            {empty
              ? "Questions coming soon"
              : "Click on a question to get started"}
          </p>
        </div>
      )}
    </div>

    {/* The tape in the slot carries the question being answered. */}
    <p
      ref={slotRef}
      className="absolute top-[79.5%] left-[26%] flex h-[5.9%] w-[64.6%] items-center justify-center overflow-hidden px-[1.5cqw] text-center font-body text-[max(0.625rem,1.9cqw)] leading-[1.15] text-ink"
    >
      <span className="truncate">{selected?.question}</span>
    </p>
  </div>
);

export default CrtTv;

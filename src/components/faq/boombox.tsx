"use client";

import { cn } from "@/lib/utils";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/** One beat at 120 bpm. */
const BEAT = 0.5;

/** The two speaker cones, as shares of the radio artwork (boombox.svg). */
const SPEAKERS = [
  "left-0 top-[47.4%] h-[42.5%] w-[26.5%]",
  "right-0 top-[47.4%] h-[42.5%] w-[26.5%]",
];

/** Notes that drift up out of the speakers and the handle, one after another. */
const NOTES = [
  { glyph: "♪", className: "left-[6%] top-[28%]", drift: "-50%", delay: 0 },
  { glyph: "♫", className: "left-[44%] top-[-4%]", drift: "35%", delay: 0.6 },
  { glyph: "♪", className: "right-[4%] top-[28%]", drift: "55%", delay: 1.2 },
];

const stop = { opacity: 0, transition: { duration: 0.2 } };

/**
 * The radio on the cabinet shelf, labelled with the shelf's category. Clicking
 * it plays: the set bops to the beat, rings pulse out of the speakers, the
 * display glows and notes float up. Clicking again stops it. There is no
 * sound; it is the room's, not the visitor's.
 */
export const Boombox = ({
  category,
  className,
}: {
  category?: string;
  className?: string;
}) => {
  const [playing, setPlaying] = useState(false);
  const reduceMotion = useReducedMotion();
  const moving = playing && !reduceMotion;

  return (
    <div className={cn("@container", className)}>
      <motion.div
        className="relative origin-bottom"
        initial={false}
        animate={
          moving
            ? { y: ["0%", "-2.5%", "0%"], rotate: [0, -1.5, 0, 1.5, 0] }
            : { y: "0%", rotate: 0 }
        }
        transition={
          moving
            ? {
                y: { duration: BEAT, repeat: Infinity, ease: "easeInOut" },
                rotate: {
                  duration: BEAT * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
            : { duration: 0.2 }
        }
      >
        <Image
          src="/assets/faq/boombox.svg"
          alt=""
          aria-hidden="true"
          width={282}
          height={224}
          className="pointer-events-none block h-auto w-full"
        />

        <AnimatePresence>
          {playing && (
            <motion.span
              key="display"
              aria-hidden="true"
              className="pointer-events-none absolute top-[46.2%] left-[27.2%] h-[13.4%] w-[45.7%] rounded-[4cqw] shadow-[0_0_5cqw_1.5cqw_rgba(252,230,173,0.8)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: moving ? [0.55, 1, 0.55] : 1 }}
              exit={stop}
              transition={
                moving
                  ? { duration: BEAT, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.2 }
              }
            />
          )}
          {moving &&
            SPEAKERS.map((place) => (
              <motion.span
                key={place}
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute rounded-[50%] border-2 border-cream/70",
                  place
                )}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: [0.8, 0], scale: [1, 1.45] }}
                exit={stop}
                transition={{
                  duration: BEAT,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          {moving &&
            NOTES.map((note) => (
              <motion.span
                key={note.className}
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute font-body text-[11cqw] leading-none text-cream [text-shadow:0_0_2cqw_rgba(252,230,173,0.9)]",
                  note.className
                )}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: ["0%", "-80%", "-160%", "-240%"],
                  x: ["0%", note.drift, "0%", note.drift],
                  rotate: [0, -12, 8, -6],
                }}
                exit={stop}
                transition={{
                  duration: BEAT * 4,
                  repeat: Infinity,
                  delay: note.delay,
                  ease: "easeOut",
                }}
              >
                {note.glyph}
              </motion.span>
            ))}
        </AnimatePresence>

        {category && (
          <h3 className="pointer-events-none absolute top-[46.2%] left-[27.2%] flex h-[13.4%] w-[45.7%] items-center justify-center overflow-hidden rounded-[4cqw] bg-tape-label px-[1.5cqw] text-center font-display text-[4.4cqw] leading-none text-ink uppercase">
            <span className="truncate">{category}</span>
          </h3>
        )}

        <button
          type="button"
          aria-label="Play the radio"
          aria-pressed={playing}
          onClick={() => setPlaying((on) => !on)}
          className="absolute inset-0 cursor-pointer rounded-[20%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
        />
      </motion.div>
    </div>
  );
};

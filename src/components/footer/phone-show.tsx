"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Nugget, running towards us. */
const Runner = () => (
  <svg viewBox="0 0 40 48" className="block h-auto w-full" aria-hidden="true">
    <rect
      x="13"
      y="33"
      width="5"
      height="13"
      rx="2.5"
      fill="#6d6aa8"
      className="origin-top [transform-box:fill-box] motion-safe:animate-[runner-stride_0.26s_ease-in-out_infinite_alternate]"
    />
    <rect
      x="22"
      y="33"
      width="5"
      height="13"
      rx="2.5"
      fill="#6d6aa8"
      className="origin-top [transform-box:fill-box] motion-safe:animate-[runner-stride_0.26s_ease-in-out_-0.26s_infinite_alternate]"
    />
    <circle cx="11" cy="13" r="3.6" fill="#9d9cca" />
    <circle cx="29" cy="13" r="3.6" fill="#9d9cca" />
    <ellipse cx="20" cy="25" rx="13" ry="13.5" fill="#9d9cca" />
    <circle cx="15.5" cy="21" r="1.9" fill="#22264f" />
    <circle cx="24.5" cy="21" r="1.9" fill="#22264f" />
    <ellipse cx="20" cy="26.5" rx="3.4" ry="2.2" fill="#c2ccff" />
    <path
      d="M17.5 29.5q2.5 2 5 0"
      stroke="#22264f"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const COINS = [0, 0.4, 0.8];
const SKYLINE = [
  "left-[2%] h-[9cqw] w-[10cqw]",
  "left-[13%] h-[15cqw] w-[9cqw]",
  "left-[23%] h-[7cqw] w-[8cqw]",
  "right-[23%] h-[11cqw] w-[8cqw]",
  "right-[12%] h-[17cqw] w-[10cqw]",
  "right-[2%] h-[8cqw] w-[9cqw]",
];

/**
 * The game on the bear's phone: a tiny endless runner in which Nugget dashes
 * down a railway line, hopping a barrier and scooping coins, with the score
 * ticking up. Sized in the phone's own container units; the motion switches
 * off under reduced motion.
 */
const RunnerGame = () => {
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const points = setInterval(() => setScore((s) => s + 7), 60);
    const pickups = setInterval(() => setCoins((c) => c + 1), 400);
    return () => {
      clearInterval(points);
      clearInterval(pickups);
    };
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[11cqw] bg-linear-to-b from-[#6fbfff] to-[#d9f2ff] font-display">
      {/* Skyline on the horizon. */}
      {SKYLINE.map((building) => (
        <span
          key={building}
          className={`absolute top-[42%] block -translate-y-full rounded-t-[1.5cqw] bg-[#5a6fd9] ${building}`}
        />
      ))}
      {/* Gravel, and the track running into the distance. */}
      <div className="absolute inset-x-0 top-[42%] bottom-0 bg-[#9aa0ad]" />
      <div className="absolute inset-x-0 top-[42%] bottom-0 [clip-path:polygon(40%_0,60%_0,86%_100%,14%_100%)] bg-[#6b6f7c] bg-[repeating-linear-gradient(to_bottom,transparent_0_7cqw,#8a6443_7cqw_10cqw)] bg-[length:100%_10cqw] motion-safe:animate-[runner-ground_0.32s_linear_infinite]" />
      <svg
        className="absolute inset-x-0 top-[42%] bottom-0 h-[58%] w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="44"
          y1="0"
          x2="26"
          y2="100"
          stroke="#dde2ec"
          strokeWidth="1.6"
        />
        <line
          x1="56"
          y1="0"
          x2="74"
          y2="100"
          stroke="#dde2ec"
          strokeWidth="1.6"
        />
      </svg>
      {/* Coins down the middle of the track. */}
      {COINS.map((delay) => (
        <span
          key={delay}
          className="absolute top-[42%] left-1/2 block size-[8cqw] rounded-full border-[1.2cqw] border-[#e0a100] bg-[#ffd23f] opacity-0 motion-safe:animate-[runner-coin_1.2s_linear_infinite]"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      {/* The barrier Nugget hops. */}
      <span className="absolute top-[42%] left-1/2 block h-[9cqw] w-[36cqw] rounded-[1.5cqw] bg-[repeating-linear-gradient(135deg,#e8453c_0_5cqw,#fff_5cqw_10cqw)] opacity-0 shadow-[0_1cqw_0_#8b1d17] motion-safe:animate-[runner-barrier_2.4s_ease-in_infinite]" />
      <div className="absolute bottom-[7%] left-1/2 w-[30cqw] -translate-x-1/2 motion-safe:animate-[runner-jump_2.4s_ease-in-out_infinite]">
        <div className="motion-safe:animate-[runner-bob_0.26s_ease-in-out_infinite_alternate]">
          <Runner />
        </div>
      </div>
      {/* Score and coins. */}
      <div className="absolute inset-x-[6cqw] top-[5cqw] flex items-center justify-between text-[8cqw] leading-none text-white [text-shadow:0_0.8cqw_0_#1c2b78]">
        <span className="flex items-center gap-[2cqw]">
          <span className="block size-[6cqw] rounded-full border-[1cqw] border-[#e0a100] bg-[#ffd23f]" />
          {coins}
        </span>
        <span>{score.toLocaleString("en-CA")}</span>
      </div>
      <p className="absolute inset-x-0 top-[15cqw] text-center text-[7cqw] leading-none tracking-wide text-white/90 [text-shadow:0_0.6cqw_0_#1c2b78]">
        NUGGET RUN
      </p>
    </div>
  );
};

/**
 * The bear's phone, turned round to face the room. It starts where the phone
 * sits in the bear's hand, showing its back, and flips round as it rises out
 * to the bear's side, so the screen faces out and the bear's face stays in view. Placed in the bed's own box, as a share of it.
 */
export const TurnedPhone = () => {
  const reduceMotion = useReducedMotion();
  const away = {
    x: "-50%",
    y: "-50%",
    scale: 0.35,
    rotateY: 180,
    rotate: -14,
    opacity: 0,
  };

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute top-[19.6%] left-[40.3%] w-[15%] @container xl:w-[9.5%]"
      style={{
        aspectRatio: "9 / 17",
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      initial={away}
      animate={{
        x: "-108%",
        y: "-80%",
        scale: 1,
        rotateY: 0,
        rotate: -5,
        opacity: 1,
      }}
      exit={away}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 170,
              damping: 17,
              opacity: { duration: 0.12 },
            }
      }
    >
      {/* The screen side. */}
      <div className="absolute inset-0 rounded-[16cqw] bg-[#1d1f33] p-[5cqw] shadow-[0_3cqw_8cqw_rgba(0,0,0,0.45)] [backface-visibility:hidden]">
        <div className="relative h-full w-full">
          <RunnerGame />
        </div>
      </div>
      {/* The back, as it looks in the bear's hand. */}
      <div className="absolute inset-0 flex items-center justify-center rounded-[16cqw] bg-linear-to-br from-[#bcd6fb] to-[#86aef0] [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <span className="font-display text-[34cqw] leading-none text-[#e6eeff]/80">
          N
        </span>
      </div>
    </motion.div>
  );
};

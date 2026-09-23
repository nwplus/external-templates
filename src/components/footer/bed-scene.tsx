"use client";

import { cn } from "@/lib/utils";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { BedArt } from "./bed-art";
import CloudBorder from "./cloud-border";
import "./nugget-run.css";
import { TurnedPhone } from "./phone-show";

/** Where the bed sits in the night scene: phone frame, then desktop frame. */
const BED_BOX =
  "absolute left-[-8.4%] top-[28.6%] w-[117%] max-w-none xl:left-[-1.7%] xl:top-[27.17%] xl:w-[103.4%]";

/** Set once someone has opened the phone, so the hint stops for good. */
const SEEN_KEY = "hackcamp-nugget-run-seen";

const lessMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Nugget stretches, then burrows down under the blanket up to its eyes. */
const tuckIn: Keyframe[] = [
  { transform: "translateY(0) scale(1, 1)" },
  { transform: "translateY(-6px) scale(0.98, 1.04)", offset: 0.25 },
  {
    transform: "translateY(31px) scale(1.03, 0.97) rotate(-2deg)",
    offset: 0.75,
  },
  { transform: "translateY(28px) scale(1, 1) rotate(0deg)" },
];

/** And pops back up, with a big stretch. */
const wakeUp: Keyframe[] = [
  { transform: "translateY(28px) scale(1, 1)" },
  { transform: "translateY(-10px) scale(0.96, 1.07)", offset: 0.45 },
  { transform: "translateY(2px) scale(1.02, 0.98)", offset: 0.75 },
  { transform: "translateY(0) scale(1, 1)" },
];

/**
 * The bed the two mascots sleep in. The headboard sits behind the bed, a second
 * copy of the cloud frame closes over the blanket so it settles into the
 * clouds, and the glowing stars lie on top of everything. The bear with the
 * phone turns it round to show the game it is playing, which can be played
 * with the arrow keys or by swiping, and Nugget can be tucked in, and woken
 * up again.
 *
 * Every offset is a percentage of the surrounding night scene: the base values
 * come from the phone frame, the xl ones from the desktop frame. The overlay
 * with the phone, the z's and the two click areas sits in the same box as the
 * bed, on top of the stars.
 */
const BedScene = () => {
  const bed = useRef<HTMLDivElement>(null);
  const [showing, setShowing] = useState(false);
  const [tucked, setTucked] = useState(false);
  // Off until mounted, so a returning visitor never sees it flash on.
  const [hint, setHint] = useState(false);

  useEffect(() => {
    try {
      setHint(!window.localStorage.getItem(SEEN_KEY));
    } catch {
      setHint(true);
    }
  }, []);

  const togglePhone = () => {
    setShowing((on) => !on);
    setHint(false);
    try {
      window.localStorage.setItem(SEEN_KEY, "1");
    } catch {
      // Blocked storage: the hint just comes back on the next visit.
    }
  };

  // The game decides when the phone goes back: Esc, or no run in progress.
  const putPhoneAway = useCallback(() => setShowing(false), []);

  const toggleTuck = () => {
    const nugget = bed.current?.querySelector('[data-part="nugget"]');
    const next = !tucked;
    setTucked(next);
    if (!nugget) return;
    nugget.getAnimations().forEach((animation) => animation.cancel());
    nugget.animate(next ? tuckIn : wakeUp, {
      duration: lessMotion() ? 1 : next ? 900 : 700,
      easing: "ease-in-out",
      fill: "forwards",
    });
  };

  return (
    <>
      <Image
        src="/assets/footer/backboard.svg"
        alt=""
        width={1026}
        height={450}
        className="absolute left-[21.9%] top-[29.5%] h-auto w-[60.8%] max-w-none xl:left-[14.75%] xl:top-[29.67%] xl:w-[67%]"
      />
      <div
        ref={bed}
        data-phone={showing ? "out" : "in"}
        data-hint={hint || undefined}
        className={cn("bed-art", BED_BOX)}
      >
        <BedArt className="block h-auto w-full" />
      </div>
      <CloudBorder />
      <Image
        src="/assets/footer/star-particles.svg"
        alt=""
        width={1166}
        height={578}
        className="absolute left-[16%] top-[42.9%] h-auto w-[71.8%] max-w-none xl:left-[8.67%] xl:top-[47.03%] xl:w-[78.82%]"
      />
      <div className={cn(BED_BOX, "aspect-[1583/1310] @container")}>
        <AnimatePresence>
          {showing && <TurnedPhone key="phone" onClose={putPhoneAway} />}
        </AnimatePresence>
        {tucked &&
          ["z", "z", "Z"].map((letter, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="pointer-events-none absolute top-[12%] left-[60%] block font-display leading-none text-cream-soft opacity-0 [text-shadow:0_0_0.6cqw_rgba(255,241,134,0.6)] motion-safe:animate-[zzz_2.1s_ease-out_infinite] motion-reduce:opacity-80"
              style={{
                fontSize: `max(${0.8 + i * 0.25}rem, ${1.6 + i * 0.65}cqw)`,
                animationDelay: `${i * 0.7}s`,
                marginLeft: `${i * 1.4}cqw`,
                marginTop: `${-i * 1.6}cqw`,
              }}
            >
              {letter}
            </span>
          ))}
        {/* The phone's ping, in step with its buzz (nugget-run.css). */}
        {hint && !showing && (
          <span
            aria-hidden="true"
            className="phone-ping pointer-events-none absolute top-[19.8%] left-[40%] block size-[5cqw] rounded-full border-[0.35cqw] border-[#bfe3ff] opacity-0 shadow-[0_0_1.5cqw_#bfe3ff]"
          />
        )}
        <button
          type="button"
          aria-label="Show the bear's phone"
          aria-pressed={showing}
          onClick={togglePhone}
          className={cn(
            "group pointer-events-auto absolute top-[4.4%] left-[36.9%] h-[19%] w-[14%] cursor-pointer rounded-[40%]",
            // The arrow keys that play the game would otherwise light up this
            // button's focus ring over the bear; it returns with the phone.
            showing
              ? "focus-visible:outline-none"
              : "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
          )}
        >
          {/*
            A hover (or keyboard focus) shakes a few of the game's coins out
            of the phone, jackpot style (nugget-run.css). They start at the
            phone, which sits a fifth of the way across this button and four
            fifths of the way down.
          */}
          {!showing &&
            [-1.3, -0.65, 0].map((dx, i) => (
              <span
                key={dx}
                aria-hidden="true"
                className="phone-coin pointer-events-none absolute top-[81%] left-[22%] block size-[max(0.7rem,1.8cqw)] rounded-full border-[max(0.15rem,0.3cqw)] border-[#e0a100] bg-[#ffd23f] opacity-0"
                style={
                  {
                    "--coin-dx": dx,
                    animationDelay: `${i * 70}ms`,
                  } as CSSProperties
                }
              />
            ))}
        </button>
        <button
          type="button"
          aria-label="Tuck Nugget in"
          aria-pressed={tucked}
          onClick={toggleTuck}
          className="pointer-events-auto absolute top-[12.6%] left-[52.1%] h-[10.3%] w-[15.2%] cursor-pointer rounded-[40%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
        />
      </div>
    </>
  );
};

export default BedScene;

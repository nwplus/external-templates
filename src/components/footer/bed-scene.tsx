"use client";

import { cn } from "@/lib/utils";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { BedArt } from "./bed-art";
import CloudBorder from "./cloud-border";
import "./nugget-run.css";
import { TurnedPhone } from "./phone-show";

/**
 * Where the bed sits in the night scene: phone frame, then desktop frame. The
 * art is Figma's export of "bed w/o backboard" clipped to the footer frame,
 * so on desktop it spans the scene's full width from 27.18% down.
 */
const BED_BOX =
  "absolute left-[-6.476%] top-[28.6%] w-[113.157%] max-w-none xl:left-0 xl:top-[27.183%] xl:w-full";

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
        className="absolute left-[21.9%] top-[24%] h-auto w-[60.8%] max-w-none xl:left-[14.75%] xl:top-[29.5%] xl:w-[67%]"
      />
      <div
        ref={bed}
        data-phone={showing ? "out" : "in"}
        data-hint={hint || undefined}
        className={cn(
          "bed-art",
          BED_BOX,
          // The art runs the blanket on past the bottom of the phone layout's
          // cloud frame (which ends 86.65% of the way down this box at every
          // width below xl), so there it is cut just inside the clouds.
          "max-xl:[clip-path:inset(0_0_13.5%_0)]"
        )}
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
      {/* The big star is kept apart from the rest: on the phone frame its
          place in the group lands on the bear's phone, so there it moves
          down onto the blanket. On desktop it sits where the group has it. */}
      <Image
        src="/assets/footer/star-big.svg"
        alt=""
        width={151}
        height={164}
        className="absolute left-[27.1%] top-[59.83%] h-auto w-[9.31%] max-w-none xl:left-[24.55%] xl:top-[54.32%] xl:w-[10.22%]"
      />
      <div className={cn(BED_BOX, "aspect-[1531/1504] @container")}>
        <AnimatePresence>
          {showing && <TurnedPhone key="phone" onClose={putPhoneAway} />}
        </AnimatePresence>
        {tucked &&
          ["z", "z", "Z"].map((letter, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="pointer-events-none absolute top-[22.71%] left-[57.84%] block font-display leading-none text-cream-soft opacity-0 [text-shadow:0_0_0.62cqw_rgba(255,241,134,0.6)] motion-safe:animate-[zzz_2.1s_ease-out_infinite] motion-reduce:opacity-80"
              style={{
                fontSize: `max(${0.8 + i * 0.25}rem, ${1.654 + i * 0.672}cqw)`,
                animationDelay: `${i * 0.7}s`,
                marginLeft: `${i * 1.448}cqw`,
                marginTop: `${-i * 1.654}cqw`,
              }}
            >
              {letter}
            </span>
          ))}
        {/* The phone's ping, in step with its buzz (nugget-run.css). */}
        {hint && !showing && (
          <span
            aria-hidden="true"
            className="phone-ping pointer-events-none absolute top-[29.49%] left-[37.17%] block size-[5.17cqw] rounded-full border-[0.36cqw] border-[#bfe3ff] opacity-0 shadow-[0_0_1.55cqw_#bfe3ff]"
          />
        )}
        <button
          type="button"
          aria-label="Show the bear's phone"
          aria-pressed={showing}
          onClick={togglePhone}
          className={cn(
            "pointer-events-auto absolute top-[16.08%] left-[33.96%] h-[16.55%] w-[14.47%] cursor-pointer rounded-[40%]",
            // The arrow keys that play the game would otherwise light up this
            // button's focus ring over the bear; it returns with the phone.
            showing
              ? "focus-visible:outline-none"
              : "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
          )}
        />
        <button
          type="button"
          aria-label="Tuck Nugget in"
          aria-pressed={tucked}
          onClick={toggleTuck}
          className="pointer-events-auto absolute top-[23.23%] left-[49.67%] h-[8.97%] w-[15.72%] cursor-pointer rounded-[40%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
        />
      </div>
    </>
  );
};

export default BedScene;

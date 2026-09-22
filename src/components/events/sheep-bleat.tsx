"use client";

import { play, prefersLessMotion } from "@/components/sponsors/ornament-art";
import { cn } from "@/lib/utils";

import {
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useRef,
} from "react";

/**
 * Snout up, dip, settle. `lift` is the rotation sign that raises the snout,
 * which depends on which way the sheep faces, so each head declares it.
 */
const nod = (lift: number): Keyframe[] => [
  { transform: "rotate(0deg) translateY(0)" },
  { transform: `rotate(${5 * lift}deg) translateY(-6px)`, offset: 0.25 },
  { transform: `rotate(${-3 * lift}deg) translateY(2px)`, offset: 0.55 },
  { transform: `rotate(${1.5 * lift}deg) translateY(-1px)`, offset: 0.8 },
  { transform: "rotate(0deg) translateY(0)" },
];

/** Perk up, flop back, settle. */
const flap = (lift: number): Keyframe[] => [
  { transform: "rotate(0deg)" },
  { transform: `rotate(${10 * lift}deg)`, offset: 0.2 },
  { transform: `rotate(${-7 * lift}deg)`, offset: 0.5 },
  { transform: `rotate(${3 * lift}deg)`, offset: 0.75 },
  { transform: "rotate(0deg)" },
];

/** The same float the plush's bubble does (sponsors/sheep-plush.tsx). */
const baa: Keyframe[] = [
  { opacity: 0, transform: "translateY(0) scale(0.6)" },
  { opacity: 1, transform: "translateY(-20%) scale(1)", offset: 0.3 },
  { opacity: 1, transform: "translateY(-40%) scale(1)", offset: 0.75 },
  { opacity: 0, transform: "translateY(-70%) scale(1)" },
];

const HEAD = '[data-part="head"]';

/**
 * Classes for the head group that acts as the button. Chrome's SVG stylesheet
 * draws its focus ring on plain `:focus`, so a mouse click would box the head
 * until it blurs; the ring is switched off unless focus is keyboard-visible.
 */
export const HEAD_BUTTON =
  "cursor-pointer not-focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star";

const lift = (el: Element) => Number(el.getAttribute("data-lift")) || 1;

type SheepBleatProps = {
  /** Where the bubble's bottom-centre sits, as a position over the head. */
  bubbleClassName: string;
  children: ReactNode;
};

/**
 * Makes a sheep bleat when its head is clicked: the head bobs, the ears
 * wiggle and a "baa!" floats up, in the plush's style. The sheep's SVG marks
 * the parts (`data-part="head"` / `"ear"`, each with its own pivot and a
 * `data-lift` sign) and this only drives them, so the drawing stays where it
 * is. Head clicks are caught here and stopped before they reach
 * SheepTapToggle, which would otherwise flip the description; the desktop
 * hover flip is untouched. With less motion asked for, it only says baa.
 */
export const SheepBleat = ({ bubbleClassName, children }: SheepBleatProps) => {
  const root = useRef<HTMLDivElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);

  const bleat = () => {
    if (bubble.current)
      play(bubble.current, baa, { duration: 1400, easing: "ease-out" });
    const sheep = root.current;
    if (!sheep || prefersLessMotion()) return;
    // The far side of a head can sit under the wool while the near side sits
    // over it, so a head may be more than one group; they share a pivot.
    sheep.querySelectorAll(HEAD).forEach((head) => {
      play(head, nod(lift(head)), { duration: 700, easing: "ease-in-out" });
    });
    sheep.querySelectorAll('[data-part="ear"]').forEach((ear) => {
      play(ear, flap(lift(ear)), { duration: 700, easing: "ease-in-out" });
    });
  };

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as Element;
    if (!target.closest(HEAD)) return;
    event.stopPropagation();
    bleat();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target as Element;
    if (!target.matches(`${HEAD}[role="button"]`)) return;
    // Space would otherwise scroll the page; a <g> has no default activation.
    event.preventDefault();
    event.stopPropagation();
    bleat();
  };

  return (
    <div
      ref={root}
      className="contents"
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
      <span
        className={cn(
          "pointer-events-none absolute block -translate-x-1/2 -translate-y-full",
          bubbleClassName
        )}
      >
        <span
          ref={bubble}
          aria-hidden="true"
          className="block rounded-full bg-cream-light px-[2.8cqw] py-[0.9cqw] font-display text-[3.6cqw] leading-none whitespace-nowrap text-ink opacity-0 shadow-[0_0.15cqw_0.6cqw_rgba(0,0,0,0.3)]"
          style={{ transformOrigin: "50% 100%" } as CSSProperties}
        >
          baa!
        </span>
      </span>
    </div>
  );
};

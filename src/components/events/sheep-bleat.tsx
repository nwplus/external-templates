"use client";

import { play, prefersLessMotion } from "@/components/sponsors/ornament-art";

import {
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useRef,
} from "react";

/**
 * Snout up a touch, dip, settle. `lift` is the rotation sign that raises the
 * snout, which depends on which way the sheep faces, so each head declares it.
 */
const nod = (lift: number): Keyframe[] => [
  { transform: "rotate(0deg) translateY(0)" },
  { transform: `rotate(${4 * lift}deg) translateY(-5px)`, offset: 0.25 },
  { transform: `rotate(${-2.5 * lift}deg) translateY(2px)`, offset: 0.55 },
  { transform: `rotate(${1 * lift}deg) translateY(-1px)`, offset: 0.8 },
  { transform: "rotate(0deg) translateY(0)" },
];

/** Perk up, flop back, settle. */
const flap = (lift: number): Keyframe[] => [
  { transform: "rotate(0deg)" },
  { transform: `rotate(${8 * lift}deg)`, offset: 0.2 },
  { transform: `rotate(${-6 * lift}deg)`, offset: 0.5 },
  { transform: `rotate(${2.5 * lift}deg)`, offset: 0.75 },
  { transform: "rotate(0deg)" },
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

/**
 * Makes a sheep react when its head is clicked: a small nod and an ear
 * wiggle. The sheep's SVG marks the parts (`data-part="head"` / `"ear"`, each
 * with its own pivot and a `data-lift` sign) and this only drives them, so the
 * drawing stays where it is. Head clicks are caught here and stopped before
 * they reach SheepTapToggle, which would otherwise flip the description; the
 * desktop hover flip is untouched. With less motion asked for, nothing moves.
 */
export const SheepBleat = ({ children }: { children: ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);

  const bob = () => {
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
    bob();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target as Element;
    if (!target.matches(`${HEAD}[role="button"]`)) return;
    // Space would otherwise scroll the page; a <g> has no default activation.
    event.preventDefault();
    event.stopPropagation();
    bob();
  };

  return (
    <div
      ref={root}
      className="contents"
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
};

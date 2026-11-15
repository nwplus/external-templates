"use client";

import { type RefObject, useEffect } from "react";

/**
 * The accents the scheduler can play, by the `data-accent` value of their
 * targets. Weights are relative: ordinary fish getting busy is three times
 * as likely as a fish hopping out of Nugget's box. Durations match faq.css.
 */
const ACCENTS = [
  { kind: "fish", weight: 3, ms: 1200 },
  { kind: "hop", weight: 1, ms: 850 },
] as const;

/** A new accent is considered every 2.5-5 s. */
const GAP_MS = [2500, 5000] as const;
/** At most two accents play at once. */
const MAX_AT_ONCE = 2;
/** The same fish waits at least this long before it can go again. */
const COOLDOWN_MS = 6000;

const between = ([min, max]: readonly [number, number]) =>
  min + Math.random() * (max - min);

/**
 * Sprinkles random accents over the FAQ scene's always-on loops. On each
 * tick it picks an accent kind by weight, then a random target of that kind
 * that is visible, not already playing and past its cooldown, and flags it
 * with `data-accent-on` for one run. Targets inside `[data-faq-hidden]` (the
 * giant tank and the characters once a tank is picked) or a tank whose fish
 * have bubbled away (`[data-phase="gone"]`) are skipped.
 *
 * Nothing runs while the section is off screen (MotionGate's
 * `data-onscreen`), the tab is hidden, or the visitor prefers reduced
 * motion.
 */
export const useIdleAccents = (rootRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scope = root.closest("[data-motion-scope]");
    const lastPlayed = new WeakMap<Element, number>();
    const clears = new Set<number>();
    let timer = 0;

    const canPlay = (target: Element, now: number) =>
      !target.hasAttribute("data-accent-on") &&
      !target.closest('[data-faq-hidden], [data-phase="gone"]') &&
      now - (lastPlayed.get(target) ?? -Infinity) > COOLDOWN_MS;

    const play = (target: Element, ms: number) => {
      target.setAttribute("data-accent-on", "");
      lastPlayed.set(target, performance.now());
      // A timer rather than animationend: a paused or cancelled animation
      // never ends, and the flag must not get stuck.
      const clear = window.setTimeout(() => {
        target.removeAttribute("data-accent-on");
        clears.delete(clear);
      }, ms + 50);
      clears.add(clear);
    };

    const tick = () => {
      timer = window.setTimeout(tick, between(GAP_MS));
      if (document.hidden) return;
      if (scope && !scope.hasAttribute("data-onscreen")) return;
      if (root.querySelectorAll("[data-accent-on]").length >= MAX_AT_ONCE)
        return;

      const now = performance.now();
      const pools = ACCENTS.map((accent) => ({
        ...accent,
        targets: Array.from(
          root.querySelectorAll(`[data-accent="${accent.kind}"]`)
        ).filter((target) => canPlay(target, now)),
      })).filter((pool) => pool.targets.length > 0);
      if (pools.length === 0) return;

      let roll = Math.random() * pools.reduce((sum, p) => sum + p.weight, 0);
      const pool =
        pools.find((p) => (roll -= p.weight) < 0) ?? pools[pools.length - 1];
      const target =
        pool.targets[Math.floor(Math.random() * pool.targets.length)];
      play(target, pool.ms);
    };

    timer = window.setTimeout(tick, between([1500, 3000]));
    return () => {
      window.clearTimeout(timer);
      clears.forEach((clear) => window.clearTimeout(clear));
      root
        .querySelectorAll("[data-accent-on]")
        .forEach((target) => target.removeAttribute("data-accent-on"));
    };
  }, [rootRef]);
};

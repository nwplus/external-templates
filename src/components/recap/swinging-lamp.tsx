"use client";

import { cn } from "@/lib/utils";

import Image from "next/image";
import {
  type KeyboardEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";

/**
 * Where the cord meets the ceiling in `light.webp`, as a share of the image:
 * the lamp swings about this point.
 */
const ANCHOR = { x: 51.9, y: 0.3 };
/** How far it can be pulled round either way, in radians. */
const MAX_ANGLE = (55 * Math.PI) / 180;
/**
 * The pendulum: a swing takes about 1.8 s there and back, and each swing
 * loses a little, so a good push settles in about ten seconds.
 */
const STIFFNESS = (2 * Math.PI) / 1.8;
const DAMPING = 0.55;
/** A click or a key gives it this much of a push, in radians a second. */
const NUDGE = 1.3;
/** Under this much movement a press counts as a click, not a drag, in px. */
const CLICK_SLOP = 4;

const lessMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The recap wall's pendant lamp, which can be grabbed by the shade and
 * swung. The whole picture (cord, shade and the light it throws) turns about
 * the top of the cord, so the pool of light swings with it. While held, the
 * shade follows the pointer round; let go and it swings on as a damped
 * pendulum from the speed it was let go at. A click, Enter or Space gives it a
 * push. Only the transform changes, once per frame, and only while it moves.
 * With reduced motion it can still be pulled, but it just settles back.
 */
export const SwingingLamp = ({ className }: { className?: string }) => {
  const lamp = useRef<HTMLDivElement>(null);
  const state = useRef({
    angle: 0,
    velocity: 0,
    frame: 0,
    last: 0,
    held: false,
    // Where the press started, to tell a click from a drag.
    downX: 0,
    downY: 0,
    dragged: false,
    // The last few moments of a drag, to know how fast it was let go.
    trail: [] as { t: number; angle: number }[],
    pushes: 0,
    still: false,
  });

  const draw = useCallback(() => {
    if (lamp.current)
      lamp.current.style.transform = `rotate(${state.current.angle}rad)`;
  }, []);

  const step = useCallback(
    (now: number) => {
      const s = state.current;
      s.frame = 0;
      const dt = Math.min((now - s.last) / 1000, 1 / 30);
      s.last = now;
      if (s.held) return;
      if (s.still) {
        // No swinging: ease straight back to hanging.
        s.angle *= Math.exp(-dt * 8);
        s.velocity = 0;
      } else {
        const pull = -STIFFNESS * STIFFNESS * Math.sin(s.angle);
        s.velocity += (pull - DAMPING * s.velocity) * dt;
        s.angle += s.velocity * dt;
      }
      draw();
      if (Math.abs(s.angle) < 0.0005 && Math.abs(s.velocity) < 0.002) {
        s.angle = 0;
        s.velocity = 0;
        draw();
        return;
      }
      s.frame = requestAnimationFrame(step);
    },
    [draw]
  );

  const run = useCallback(() => {
    const s = state.current;
    if (s.frame) return;
    s.still = lessMotion();
    s.last = performance.now();
    s.frame = requestAnimationFrame(step);
  }, [step]);

  useEffect(() => () => cancelAnimationFrame(state.current.frame), []);

  /** The angle that points the shade at a point on screen. */
  const aimAt = (x: number, y: number) => {
    const el = lamp.current;
    if (!el) return 0;
    // The unrotated box: the element's layout box, which a transform leaves be.
    const box = el.parentElement!.getBoundingClientRect();
    const ax = box.left + (ANCHOR.x / 100) * box.width;
    const ay = box.top + (ANCHOR.y / 100) * box.height;
    const angle = -Math.atan2(x - ax, Math.max(y - ay, 1));
    return Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, angle));
  };

  const onPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    const s = state.current;
    event.currentTarget.setPointerCapture(event.pointerId);
    s.held = true;
    s.dragged = false;
    s.downX = event.clientX;
    s.downY = event.clientY;
    s.trail = [{ t: performance.now(), angle: s.angle }];
  };

  const onPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const s = state.current;
    if (!s.held) return;
    if (
      !s.dragged &&
      Math.hypot(event.clientX - s.downX, event.clientY - s.downY) < CLICK_SLOP
    )
      return;
    s.dragged = true;
    s.angle = aimAt(event.clientX, event.clientY);
    const now = performance.now();
    s.trail.push({ t: now, angle: s.angle });
    s.trail = s.trail.filter((p) => now - p.t < 80);
    draw();
  };

  /** A push, alternating sides so repeated clicks keep it going. */
  const push = () => {
    const s = state.current;
    const side =
      s.velocity !== 0 ? Math.sign(s.velocity) : s.pushes++ % 2 ? -1 : 1;
    s.velocity += side * NUDGE;
    run();
  };

  const onPointerUp = () => {
    const s = state.current;
    if (!s.held) return;
    s.held = false;
    if (s.dragged) {
      // Let go at the speed it was moving over the last few frames.
      const first = s.trail[0];
      const last = s.trail[s.trail.length - 1];
      const span = (last.t - first.t) / 1000;
      s.velocity = span > 0.005 ? (last.angle - first.angle) / span : 0;
      s.velocity = Math.max(-8, Math.min(8, s.velocity));
    } else {
      push();
    }
    run();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    push();
  };

  return (
    <div className={cn("pointer-events-none", className)}>
      <div
        ref={lamp}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: `${ANCHOR.x}% ${ANCHOR.y}%` }}
      >
        <Image
          src="/assets/recap/light.webp"
          alt=""
          width={843}
          height={1033}
          className="h-full w-full"
        />
        {/* The shade is the handle. */}
        <button
          type="button"
          aria-label="Swing the lamp"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-[33%] left-[38%] h-[16%] w-[29%] cursor-grab touch-none rounded-[40%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star active:cursor-grabbing"
        />
      </div>
    </div>
  );
};

"use client";

import { cn } from "@/lib/utils";

import { motion, useReducedMotion } from "framer-motion";
import {
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * Nugget, running towards us: the beaver from the testimonials art
 * (testimonials/nugget.tsx), in its colours and dome shape, with the paddle
 * tail swinging out behind and the buck tooth big enough to read at game
 * size.
 */
const Runner = () => (
  <svg viewBox="0 0 40 48" className="block h-auto w-full" aria-hidden="true">
    <ellipse
      cx="31.5"
      cy="32"
      rx="6.5"
      ry="10.5"
      transform="rotate(35 31.5 32)"
      fill="#885946"
    />
    <rect
      x="13"
      y="35"
      width="5.5"
      height="11"
      rx="2.75"
      fill="#BC8F6C"
      className="origin-top [transform-box:fill-box] motion-safe:animate-[runner-stride_0.26s_ease-in-out_infinite_alternate]"
    />
    <rect
      x="21.5"
      y="35"
      width="5.5"
      height="11"
      rx="2.75"
      fill="#BC8F6C"
      className="origin-top [transform-box:fill-box] motion-safe:animate-[runner-stride_0.26s_ease-in-out_-0.26s_infinite_alternate]"
    />
    <circle cx="12.6" cy="11.4" r="2.3" fill="#F2C7A3" />
    <circle cx="27.4" cy="11.4" r="2.3" fill="#F2C7A3" />
    <path
      d="M7.5 36C7.5 20 11.5 7.5 20 7.5S32.5 20 32.5 36C32.5 40 27 41.5 20 41.5S7.5 40 7.5 36Z"
      fill="#E8BA97"
    />
    <ellipse
      cx="8"
      cy="27"
      rx="2.6"
      ry="5"
      transform="rotate(18 8 27)"
      fill="#D29F77"
    />
    <ellipse
      cx="32"
      cy="27"
      rx="2.6"
      ry="5"
      transform="rotate(-18 32 27)"
      fill="#D29F77"
    />
    <ellipse cx="15.8" cy="18.5" rx="1.5" ry="2" fill="#4F2F22" />
    <ellipse cx="24.2" cy="18.5" rx="1.5" ry="2" fill="#4F2F22" />
    <ellipse cx="20" cy="21.6" rx="1.9" ry="1.2" fill="#4F2F22" />
    <rect x="18.7" y="23.4" width="2.6" height="3" rx="0.5" fill="#fff" />
    <path
      d="M16.4 23q1.8 1.3 3.6 0q1.8 1.3 3.6 0"
      stroke="#4F2F22"
      strokeWidth="0.9"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/* The track, in shares of the phone's screen.                         */
/* ------------------------------------------------------------------ */

/** Where the track meets the sky. */
const HORIZON = 42;
/** Where things reach Nugget's feet. */
const NEAR = 88;
/** How far apart the lanes are at Nugget's feet. */
const LANE = 28;
/** How far apart they are at the horizon. */
const LANE_FAR = 3;

type Lane = -1 | 0 | 1;
type Kind = "coin" | "star" | "barrier" | "train";
type Thing = { id: number; kind: Kind; lane: Lane; d: number };
/** A little word that floats up from Nugget: "+50", "Shield!". */
type Pop = { id: number; text: string; lane: Lane; at: number };
type Status = "demo" | "playing" | "over";

/**
 * Perspective: `d` runs from 0 at the horizon to 1 at Nugget's feet, and
 * things speed up and grow as they come closer.
 */
const reach = (d: number) => Math.pow(Math.max(d, 0), 1.8);
const place = (lane: number, d: number) => {
  const p = reach(d);
  return {
    left: 50 + lane * (LANE_FAR + (LANE - LANE_FAR) * p),
    top: HORIZON + (NEAR - HORIZON) * p,
    scale: 0.18 + 0.92 * Math.pow(Math.max(d, 0), 1.4),
  };
};

/** The rails, drawn with the same perspective as the things on them. */
const RAILS = (() => {
  const bottom = (100 - HORIZON) / (NEAR - HORIZON);
  const lines: { x1: number; x2: number }[] = [];
  for (const lane of [-1, 0, 1]) {
    const top = 50 + lane * LANE_FAR;
    const low = 50 + lane * (LANE_FAR + (LANE - LANE_FAR) * bottom);
    for (const side of [-1, 1]) {
      lines.push({
        x1: top + side * 0.6,
        x2: low + side * (0.6 + 6.4 * bottom),
      });
    }
  }
  return lines;
})();

const JUMP_MS = 650;
/** How long a lane change leans Nugget into the turn. */
const LEAN_MS = 220;
/** How long a pop floats before it is gone. */
const POP_MS = 650;
/** How long the screen flashes when the shield takes a hit. */
const BUMP_MS = 260;
const BEST_KEY = "hackcamp-nugget-run-best";

const readBest = () => {
  try {
    return Number(window.localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
};
const saveBest = (score: number) => {
  try {
    window.localStorage.setItem(BEST_KEY, String(score));
  } catch {
    // Private windows and blocked storage: the best score just isn't kept.
  }
};

const random = (min: number, max: number) => min + Math.random() * (max - min);
const randomLane = () => (Math.floor(Math.random() * 3) - 1) as Lane;

const fresh = () => ({
  things: [] as Thing[],
  lane: 0 as Lane,
  jumpAt: -Infinity,
  speed: 0.55,
  distance: 0,
  coins: 0,
  nextSpawn: 0.5,
  nextId: 1,
  overAt: 0,
  shield: false,
  bumpAt: -Infinity,
  leanAt: -Infinity,
  leanDir: 0,
  pops: [] as Pop[],
  newBest: false,
});

/** What each thing on the track looks like, anchored at its base. */
const Piece = ({ kind }: { kind: Kind }) => {
  if (kind === "coin")
    return (
      <span className="block size-[9cqw] rounded-full border-[1.3cqw] border-[#e0a100] bg-[#ffd23f]" />
    );
  if (kind === "star")
    return (
      <span className="block size-[12cqw] bg-[#e0a100] p-[1.4cqw] [clip-path:polygon(50%_0,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]">
        <span className="block size-full bg-[#fff186] [clip-path:polygon(50%_0,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]" />
      </span>
    );
  if (kind === "barrier")
    return (
      <span className="block h-[10cqw] w-[26cqw] rounded-[1.5cqw] bg-[repeating-linear-gradient(135deg,#e8453c_0_5cqw,#fff_5cqw_10cqw)] shadow-[0_1cqw_0_#8b1d17]" />
    );
  return (
    <span className="flex h-[38cqw] w-[26cqw] flex-col items-center gap-[2cqw] rounded-t-[7cqw] rounded-b-[1.5cqw] bg-[#e8453c] pt-[4cqw] shadow-[inset_0_-3cqw_0_#b22e27]">
      <span className="block h-[10cqw] w-[18cqw] rounded-[2cqw] bg-[#bfe3ff]" />
      <span className="flex gap-[6cqw]">
        <span className="block size-[4cqw] rounded-full bg-[#fff186]" />
        <span className="block size-[4cqw] rounded-full bg-[#fff186]" />
      </span>
    </span>
  );
};

/**
 * The game on the bear's phone: an endless runner. Until someone plays it
 * runs a looping demo; ↑ (or a tap) starts a run. ← and → switch lanes and ↑
 * jumps, or swipe on a touch screen. Coins are collected by running through
 * them, barriers must be jumped, trains can only be dodged, and the odd star
 * gives Nugget a shield that takes one hit for it. Esc puts the
 * phone away, and so does leaving it alone for a few seconds when no run is
 * in progress. Sized in the phone's own container units.
 */
const RunnerGame = ({
  onClose,
  onCrash,
}: {
  onClose: () => void;
  onCrash: () => void;
}) => {
  const reduceMotion = useReducedMotion();
  const game = useRef(fresh());
  const [status, setStatus] = useState<Status>("demo");
  const [, setFrame] = useState(0);
  const [best, setBest] = useState(0);
  const [touch, setTouch] = useState(false);
  const [demoScore, setDemoScore] = useState(0);
  const swipe = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setBest(readBest());
    setTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // The demo's score ticks along on its own.
  useEffect(() => {
    if (status !== "demo" || reduceMotion) return;
    const points = setInterval(() => setDemoScore((s) => s + 7), 60);
    return () => clearInterval(points);
  }, [status, reduceMotion]);

  // Put the phone away when nobody is playing.
  useEffect(() => {
    if (status === "playing") return;
    const idle = setTimeout(onClose, status === "demo" ? 8000 : 12000);
    return () => clearTimeout(idle);
  }, [status, onClose]);

  const start = useCallback(() => {
    game.current = fresh();
    setStatus("playing");
  }, []);

  const act = useCallback(
    (move: "left" | "right" | "jump") => {
      const g = game.current;
      if (status === "demo") {
        start();
        return;
      }
      if (status === "over") {
        // A key still held from the crash should not start another run.
        if (move === "jump" && performance.now() - g.overAt > 450) start();
        return;
      }
      const from = g.lane;
      if (move === "left") g.lane = Math.max(-1, g.lane - 1) as Lane;
      if (move === "right") g.lane = Math.min(1, g.lane + 1) as Lane;
      if (g.lane !== from) {
        g.leanAt = performance.now();
        g.leanDir = g.lane - from;
      }
      if (move === "jump" && performance.now() - g.jumpAt > JUMP_MS)
        g.jumpAt = performance.now();
    },
    [status, start]
  );

  // Arrow keys play; the page does not scroll while the phone is out.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // The phone takes Esc; the browser's own Esc (stop loading) would
        // otherwise cut the phone's exit animation short.
        event.preventDefault();
        onClose();
        return;
      }
      const move = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "jump",
      }[event.key] as "left" | "right" | "jump" | undefined;
      if (!move) return;
      event.preventDefault();
      if (!event.repeat) act(move);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [act, onClose]);

  // The run itself.
  useEffect(() => {
    if (status !== "playing") return;
    let raf = 0;
    let last = performance.now();
    const step = (now: number) => {
      const g = game.current;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      g.speed = Math.min(1.1, g.speed + dt * 0.015);
      g.distance += g.speed * dt * 180;

      g.nextSpawn -= dt;
      if (g.nextSpawn <= 0) {
        const roll = Math.random();
        const lane = randomLane();
        if (!g.shield && roll < 0.06) {
          g.things.push({ id: g.nextId++, kind: "star", lane, d: 0 });
        } else if (roll < 0.38) {
          for (let i = 0; i < 3; i++)
            g.things.push({ id: g.nextId++, kind: "coin", lane, d: -i * 0.1 });
        } else {
          g.things.push({
            id: g.nextId++,
            kind: roll < 0.76 ? "barrier" : "train",
            lane,
            d: 0,
          });
        }
        g.nextSpawn = random(0.75, 1.2) * (0.55 / g.speed);
      }

      const since = now - g.jumpAt;
      const airborne = since > JUMP_MS * 0.1 && since < JUMP_MS * 0.85;
      let crashed = false;
      const pop = (text: string) =>
        g.pops.push({ id: g.nextId++, text, lane: g.lane, at: now });
      g.things = g.things.filter((thing) => {
        thing.d += g.speed * dt;
        if (thing.lane === g.lane && thing.d >= 0.92 && thing.d <= 1) {
          if (thing.kind === "coin") {
            g.coins += 1;
            pop("+50");
            return false;
          }
          if (thing.kind === "star") {
            g.shield = true;
            pop("Shield!");
            return false;
          }
          if (thing.kind === "train" || !airborne) {
            // The shield takes the hit, and the thing goes with it.
            if (!g.shield) {
              crashed = true;
              return true;
            }
            g.shield = false;
            g.bumpAt = now;
            pop("Saved!");
            return false;
          }
        }
        return thing.d < 1.15;
      });
      g.pops = g.pops.filter((p) => now - p.at < POP_MS);

      if (crashed) {
        g.overAt = now;
        const score = Math.floor(g.distance) + g.coins * 50;
        const previous = readBest();
        // Beating a score that was already there is worth a cheer; the first
        // run of all is a best by default.
        g.newBest = previous > 0 && score > previous;
        if (score > previous) saveBest(score);
        setBest(Math.max(previous, score));
        g.pops = [];
        onCrash();
        setStatus("over");
        return;
      }
      setFrame((n) => n + 1);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [status, onCrash]);

  const onPointerDown = (event: PointerEvent) => {
    swipe.current = { x: event.clientX, y: event.clientY };
  };
  const onPointerUp = (event: PointerEvent) => {
    const from = swipe.current;
    swipe.current = null;
    if (!from) return;
    const dx = event.clientX - from.x;
    const dy = event.clientY - from.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 12) act("jump");
    else if (Math.abs(dx) > Math.abs(dy)) act(dx < 0 ? "left" : "right");
    else if (dy < 0) act("jump");
  };

  const g = game.current;
  const score =
    status === "demo" ? demoScore : Math.floor(g.distance) + g.coins * 50;
  const coins = status === "demo" ? Math.floor(demoScore / 57) : g.coins;
  const now = performance.now();
  const since = now - g.jumpAt;
  const lift =
    status === "playing" && since < JUMP_MS
      ? Math.sin((Math.PI * since) / JUMP_MS) * 32
      : 0;
  const lean =
    status === "playing"
      ? g.leanDir * 14 * Math.max(0, 1 - (now - g.leanAt) / LEAN_MS)
      : 0;
  const bump = Math.max(0, 1 - (now - g.bumpAt) / BUMP_MS);

  return (
    <div
      className="absolute inset-0 touch-none overflow-hidden rounded-[11cqw] bg-linear-to-b from-[#6fbfff] to-[#d9f2ff] font-display select-none"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {/* Skyline on the horizon. */}
      {[
        "left-[2%] h-[9cqw] w-[10cqw]",
        "left-[13%] h-[15cqw] w-[9cqw]",
        "left-[23%] h-[7cqw] w-[8cqw]",
        "right-[23%] h-[11cqw] w-[8cqw]",
        "right-[12%] h-[17cqw] w-[10cqw]",
        "right-[2%] h-[8cqw] w-[9cqw]",
      ].map((building) => (
        <span
          key={building}
          className={`absolute top-[42%] block -translate-y-full rounded-t-[1.5cqw] bg-[#5a6fd9] ${building}`}
        />
      ))}
      {/* Gravel, the three tracks, and their rails. */}
      <div className="absolute inset-x-0 top-[42%] bottom-0 bg-[#9aa0ad]" />
      <div
        className={cn(
          "absolute inset-x-0 top-[42%] bottom-0 bg-[#6b6f7c] bg-[repeating-linear-gradient(to_bottom,transparent_0_7cqw,#8a6443_7cqw_10cqw)] bg-[length:100%_10cqw] [clip-path:polygon(45.5%_0,54.5%_0,96%_100%,4%_100%)]",
          status !== "over" &&
            "motion-safe:animate-[runner-ground_0.32s_linear_infinite]"
        )}
      />
      <svg
        className="absolute inset-x-0 top-[42%] bottom-0 h-[58%] w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {RAILS.map(({ x1, x2 }) => (
          <line
            key={`${x1}-${x2}`}
            x1={x1}
            y1="0"
            x2={x2}
            y2="100"
            stroke="#dde2ec"
            strokeWidth="1.2"
          />
        ))}
      </svg>

      {status === "demo" ? (
        <>
          {/* The looping demo down the middle lane. */}
          {[0, 0.4, 0.8].map((delay) => (
            <span
              key={delay}
              className="absolute top-[42%] left-1/2 block size-[8cqw] rounded-full border-[1.2cqw] border-[#e0a100] bg-[#ffd23f] opacity-0 motion-safe:animate-[runner-coin_1.2s_linear_infinite]"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
          <span className="absolute top-[42%] left-1/2 block h-[9cqw] w-[26cqw] rounded-[1.5cqw] bg-[repeating-linear-gradient(135deg,#e8453c_0_5cqw,#fff_5cqw_10cqw)] opacity-0 shadow-[0_1cqw_0_#8b1d17] motion-safe:animate-[runner-barrier_2.4s_ease-in_infinite]" />
          <div className="absolute bottom-[7%] left-1/2 w-[30cqw] -translate-x-1/2 motion-safe:animate-[runner-jump_2.4s_ease-in-out_infinite]">
            <div className="motion-safe:animate-[runner-bob_0.26s_ease-in-out_infinite_alternate]">
              <Runner />
            </div>
          </div>
          <p className="absolute inset-x-0 top-[27%] text-center text-[8.5cqw] leading-tight text-white [text-shadow:0_0.7cqw_0_#1c2b78]">
            {touch ? "Tap to play" : "Press ↑ to play"}
            <span className="mt-[1.5cqw] block text-[5.5cqw] text-white/90">
              {touch ? "swipe to dodge" : "← → to dodge"}
            </span>
          </p>
        </>
      ) : (
        <>
          {[...g.things]
            .filter((thing) => thing.d >= 0)
            .sort((a, b) => a.d - b.d)
            .map((thing) => {
              const { left, top, scale } = place(thing.lane, thing.d);
              return (
                <span
                  key={thing.id}
                  className="absolute block"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: `translate(-50%, -100%) scale(${scale})`,
                    transformOrigin: "50% 100%",
                  }}
                >
                  <Piece kind={thing.kind} />
                </span>
              );
            })}
          <div
            className="absolute bottom-[7%] w-[30cqw] transition-[left] duration-150 ease-out"
            style={{
              left: `${50 + g.lane * LANE}%`,
              transform: `translate(-50%, ${-lift}cqw) rotate(${status === "over" ? -80 : lean}deg)`,
              transformOrigin: "50% 90%",
            }}
          >
            <div
              className={cn(
                status === "playing" &&
                  lift === 0 &&
                  "motion-safe:animate-[runner-bob_0.26s_ease-in-out_infinite_alternate]"
              )}
            >
              <Runner />
            </div>
            {g.shield && status === "playing" && (
              <span className="absolute -inset-[3cqw] block rounded-full border-[1cqw] border-[#fff186] bg-[#fff186]/15 shadow-[0_0_3cqw_#fff186] motion-safe:animate-[runner-shield_0.5s_ease-in-out_infinite_alternate]" />
            )}
          </div>
          {g.pops.map((p) => {
            const age = (now - p.at) / POP_MS;
            return (
              <span
                key={p.id}
                className="absolute bottom-[40%] block text-[6.5cqw] leading-none whitespace-nowrap text-[#fff186] [text-shadow:0_0.6cqw_0_#1c2b78]"
                style={{
                  left: `${50 + p.lane * LANE}%`,
                  transform: `translate(-50%, ${-age * 14}cqw)`,
                  opacity: 1 - age * age,
                }}
              >
                {p.text}
              </span>
            );
          })}
          {bump > 0 && (
            <span
              className="pointer-events-none absolute inset-0 block bg-white"
              style={{ opacity: bump * 0.6 }}
            />
          )}
        </>
      )}

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

      {status === "over" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[3cqw] bg-[#101737]/55 text-center text-white">
          <p className="text-[13cqw] leading-none [text-shadow:0_1cqw_0_#1c2b78]">
            Oof!
          </p>
          <p className="text-[8cqw] leading-tight">
            {score.toLocaleString("en-CA")}
            <span className="block text-[6cqw] text-white/80">
              {g.newBest ? (
                <span className="text-[#fff186]">New best!</span>
              ) : (
                <>best {best.toLocaleString("en-CA")}</>
              )}
            </span>
          </p>
          <p className="mt-[2cqw] text-[6.5cqw] text-[#fff186]">
            {touch ? "Tap to run again" : "↑ to run again"}
          </p>
        </div>
      )}
    </div>
  );
};

/**
 * The bear's phone, turned round to face the room. It starts where the phone
 * sits in the bear's hand, showing its back, and flips round as it rises out
 * to the bear's side, so the screen faces out and the bear's face stays in
 * view. Placed in the bed's own box, as a share of it.
 */
export const TurnedPhone = ({ onClose }: { onClose: () => void }) => {
  const reduceMotion = useReducedMotion();
  const shaker = useRef<HTMLDivElement>(null);

  // A crash rattles the phone in the bear's paw (and a real one, if it can).
  const onCrash = useCallback(() => {
    if (!reduceMotion)
      shaker.current?.animate(
        [
          { transform: "translate(0, 0) rotate(0deg)" },
          { transform: "translate(-4%, 1%) rotate(-3deg)" },
          { transform: "translate(4%, -1%) rotate(3deg)" },
          { transform: "translate(-3%, 0) rotate(-2deg)" },
          { transform: "translate(2%, 1%) rotate(1deg)" },
          { transform: "translate(0, 0) rotate(0deg)" },
        ],
        { duration: 380, easing: "ease-out" }
      );
    try {
      navigator.vibrate?.(60);
    } catch {
      // Not every browser lets a page buzz the phone.
    }
  }, [reduceMotion]);
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
      className="pointer-events-auto absolute top-[29.32%] left-[37.49%] w-[15.51%] @container xl:w-[9.82%]"
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
      <div
        ref={shaker}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* The screen side. */}
        <div className="absolute inset-0 rounded-[16cqw] bg-[#1d1f33] p-[5cqw] shadow-[0_3cqw_8cqw_rgba(0,0,0,0.45)] [backface-visibility:hidden]">
          <div className="relative h-full w-full">
            <RunnerGame onClose={onClose} onCrash={onCrash} />
          </div>
        </div>
        {/* The back, as it looks in the bear's hand. */}
        <div className="absolute inset-0 flex items-center justify-center rounded-[16cqw] bg-linear-to-br from-[#bcd6fb] to-[#86aef0] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="font-display text-[34cqw] leading-none text-[#e6eeff]/80">
            N
          </span>
        </div>
      </div>
    </motion.div>
  );
};

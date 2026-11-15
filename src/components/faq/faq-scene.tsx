"use client";

import {
  FAQ_HINT,
  FAQ_TITLE,
  type FaqCategoryId,
  type FaqsByCategory,
} from "@/constants/faq";

import { type CSSProperties, useEffect, useRef, useState } from "react";

import { Characters, GiantTank, LongTank } from "./faq-aquariums";
import { Art, boxStyle, shiftStyle, u } from "./faq-art";
import {
  BRICK,
  BRICKS,
  FLOOR,
  FRAME_H,
  FRAME_W,
  JARS,
  LONG_TANK,
  QUESTIONS,
  TANKS_SHIFT,
  TITLE,
  WALL,
} from "./faq-layout";
import { FaqQuestions } from "./faq-questions";
import { type TankPhase, TopicTanks } from "./faq-tanks";
import "./faq.css";
import { useIdleAccents } from "./use-idle-accents";

const wallGradient = ({
  cx,
  cy,
  rx,
  ry,
  stops,
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  stops: readonly string[];
}) =>
  `radial-gradient(${u(rx)} ${u(ry)} at ${u(cx)} ${u(cy)}, ${stops[0]} 0%, ${stops[1]} 50%, ${stops[2]} 100%)`;

/** Figma's floor spotlight, sized to its 1682 x 337 box; the last stop's
 * colour carries on below it when the section grows. */
const FLOOR_BG = `radial-gradient(${u(879.5)} ${u(199.7)} at ${u(827.5)} ${u(118)}, rgb(194 174 119) 0%, rgb(153 146 113) 25%, rgb(112 118 106) 50%, rgb(71 90 100) 75%, rgb(51 76 96) 87.5%, rgb(30 62 93) 100%) top left / ${u(FLOOR.w)} ${u(FLOOR.h)} no-repeat, rgb(30 62 93)`;

/** The questions must end this far above the long tank's picked spot, or the
 * tank steps aside. */
const LONG_TANK_TOP = LONG_TANK.y + LONG_TANK.shift.dy - 20;

const NO_PHASES: Record<FaqCategoryId, TankPhase> = {
  general: "here",
  teams: "here",
  logistics: "here",
};

/**
 * The FAQ aquarium. Idle, the three topic tanks sit beside a long tank of
 * orange fish and a giant tank, with the deer and Nugget out front. Picking
 * a tank bursts its fish into bubbles, slides the scene aside and lists its
 * questions where the giant tank was; picking it again goes back.
 *
 * Like the hero, the scene keeps the design's proportions at every width:
 * `--u` is one design px (1/1512 of the width, in container units).
 */
export const FaqScene = ({ faqs }: { faqs: FaqsByCategory }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const [selected, setSelected] = useState<FaqCategoryId | null>(null);
  // What the list shows: stays on the last tank while it fades out.
  const [shown, setShown] = useState<FaqCategoryId | null>(null);
  const [phases, setPhases] = useState(NO_PHASES);
  const [open, setOpen] = useState<number | null>(null);
  const [pickCount, setPickCount] = useState(0);
  // From the idle scene the list waits for the slide; between tanks it
  // only waits for the burst.
  const [listDelay, setListDelay] = useState(0.45);
  const [crowded, setCrowded] = useState(false);

  useIdleAccents(rootRef);

  const pick = (id: FaqCategoryId) => {
    setOpen(null);
    if (selected === id) {
      setSelected(null);
      setPhases((p) => ({ ...p, [id]: "back" }));
      return;
    }
    setListDelay(selected ? 0.12 : 0.45);
    setPhases((p) => ({
      ...p,
      ...(selected ? { [selected]: "back" } : {}),
      [id]: "gone",
    }));
    setSelected(id);
    setShown(id);
    setPickCount((n) => n + 1);
  };

  // Long lists (more questions than the design's five) reach the long tank
  // even with every answer shut; measure rather than guess.
  useEffect(() => {
    const list = listRef.current;
    const root = rootRef.current;
    if (!list || !root) return;
    const measure = () => {
      const px = root.clientWidth / FRAME_W;
      if (px === 0) return;
      const shutHeight = Array.from(list.children).reduce(
        (sum, item, i) =>
          sum +
          (item.querySelector("button")?.offsetHeight ?? 0) +
          (i > 0 ? 20 * px : 0),
        0
      );
      setCrowded(QUESTIONS.y + shutHeight / px > LONG_TANK_TOP);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    return () => observer.disconnect();
  }, [shown, pickCount]);

  const isSelected = selected !== null;

  return (
    <div className="@container w-full">
      <div
        ref={rootRef}
        className="faq-scene relative overflow-hidden text-white"
        data-faq-state={isSelected ? "selected" : "idle"}
        style={
          {
            "--u": `calc(100cqw / ${FRAME_W})`,
            minHeight: u(FRAME_H),
          } as CSSProperties
        }
      >
        {/* Wall and floor */}
        <div
          aria-hidden="true"
          className="faq-when-idle absolute inset-0"
          style={{ background: wallGradient(WALL.idle) }}
        />
        <div
          aria-hidden="true"
          className="faq-when-selected absolute inset-0"
          style={{ background: wallGradient(WALL.selected) }}
        />
        {BRICKS.map(({ shift, bricks }, g) => (
          <div
            key={g}
            aria-hidden="true"
            className="faq-move absolute inset-0"
            style={shiftStyle(shift)}
          >
            {bricks.map(([x, y, color]) => (
              <span
                key={`${x}-${y}`}
                className="absolute"
                style={{
                  ...boxStyle({ x, y, w: BRICK.w, h: BRICK.h }),
                  background: color,
                  borderRadius: u(BRICK.radius),
                }}
              />
            ))}
          </div>
        ))}
        <div
          aria-hidden="true"
          className="faq-move absolute bottom-0"
          style={{
            left: u(FLOOR.x),
            top: u(FLOOR.y),
            width: u(FLOOR.w),
            background: FLOOR_BG,
            ...shiftStyle(FLOOR.shift),
          }}
        />

        {/* Jars on top of the stack */}
        <div
          aria-hidden="true"
          className="faq-move absolute inset-0"
          style={shiftStyle(JARS.shift)}
        >
          <Art layer={JARS.layer} />
        </div>

        <LongTank hidden={open !== null || crowded} />

        <div
          className="faq-move pointer-events-none absolute inset-0 *:pointer-events-auto"
          style={shiftStyle(TANKS_SHIFT)}
        >
          <TopicTanks selected={selected} phases={phases} onPick={pick} />
        </div>

        <GiantTank hidden={isSelected} />
        <Characters hidden={isSelected} />

        <div
          className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-center"
          style={{ top: u(TITLE.y), width: u(TITLE.w) }}
        >
          <h2
            className="font-display leading-[normal] font-normal"
            style={{ fontSize: u(48) }}
          >
            {FAQ_TITLE}
          </h2>
          <p
            className="flex items-center justify-center leading-[normal] font-normal"
            style={{ fontSize: u(20.678), gap: u(8) }}
          >
            {FAQ_HINT}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/faq/pointer.svg"
              alt=""
              aria-hidden="true"
              width={20.002}
              height={20.002}
              draggable={false}
              style={{ width: u(20.002), height: u(20.002) }}
            />
          </p>
        </div>

        <FaqQuestions
          ref={listRef}
          category={shown}
          faqs={shown ? faqs[shown] : []}
          pickCount={pickCount}
          delay={listDelay}
          active={isSelected}
          open={open}
          onToggle={(i) => setOpen((current) => (current === i ? null : i))}
        />
      </div>
    </div>
  );
};

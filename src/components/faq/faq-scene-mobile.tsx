"use client";

import {
  FAQ_HINT_TOUCH,
  FAQ_TITLE,
  type FaqCategoryId,
  type FaqsByCategory,
} from "@/constants/faq";

import { type CSSProperties, useEffect, useRef, useState } from "react";

import { u } from "./faq-art";
import type { Shift } from "./faq-layout";
import { FaqQuestions, type QuestionSizes } from "./faq-questions";
import { type TankPhase, TopicTanks } from "./faq-tanks";
import "./faq.css";
import { useIdleAccents } from "./use-idle-accents";

/** The Figma phone frames ("GENERAL QS" and the other two), 402 wide. The
 * frame is 874 tall with five questions; idle, it ends below the tanks. */
const FRAME_W = 402;

/** The phone tanks are the desktop ones at this scale, each moved to its
 * spot in the phone stack (offsets in desktop px). */
const TANK_SCALE = 0.50209;
const TANK_OFFSETS: Record<FaqCategoryId, Shift> = {
  general: { dx: 35.24, dy: 70.74 },
  teams: { dx: 89.02, dy: 65.88 },
  logistics: { dx: 46.79, dy: 64.91 },
};

/** The wall's glow (Figma's radial fill: centre and radii in design px). */
const WALL = `radial-gradient(${u(360.6)} ${u(478.5)} at ${u(194.75)} ${u(459.65)}, #135b4f 0%, #312b26 100%)`;

const BRICK = { w: 32.5, h: 16.25, radius: 2.955 };
type Brick = [x: number, y: number, color: string];
/** Top right, from the frame's top. */
const BRICKS_TOP: Brick[] = [
  [333.05, 47.25, "#7d8578"],
  [369.98, 47.25, "#354038"],
  [467.48, 47.25, "#7d8578"],
  [384.75, 4.41, "#525c4b"],
  [426.11, -13.32, "#7d8578"],
  [336, -17.75, "#7d8578"],
  [352.25, -1.5, "#646a60"],
  [417.25, 22.14, "#525c4b"],
  [353.73, 29.52, "#7d8578"],
  [402.48, 47.25, "#7d8578"],
  [287.25, 31, "#7d8578"],
  [271, 14.75, "#525c4b"],
  [466, -17.75, "#525c4b"],
  [449.75, -34, "#7d8578"],
  [271, 47.25, "#7d8578"],
  [467.48, 14.75, "#7d8578"],
];
/** Bottom left, from the frame's bottom (its top here is 773 of 874), so
 * they stay at the foot of the section as it grows and shrinks. */
const BRICKS_BOTTOM_TOP = 773;
const BRICKS_BOTTOM_H = 874 - BRICKS_BOTTOM_TOP;
const BRICKS_BOTTOM: Brick[] = [
  [2, 854.25, "#77876d"],
  [34.5, 854.25, "#64715c"],
  [165.98, 854.25, "#77876d"],
  [18.25, 838, "#4f6b4e"],
  [84.73, 838, "#77876d"],
  [100.98, 821.75, "#77876d"],
  [68.48, 789.25, "#77876d"],
  [2, 821.75, "#77876d"],
  [100.98, 854.25, "#64715c"],
  [117.23, 838, "#4f6b4e"],
  [132, 789.25, "#4f6b4e"],
  [114.27, 773, "#77876d"],
  [19.73, 773, "#77876d"],
  [68.48, 854.25, "#77876d"],
];

const Bricks = ({ bricks, top }: { bricks: Brick[]; top: number }) =>
  bricks.map(([x, y, color]) => (
    <span
      key={`${x}-${y}`}
      className="absolute"
      style={{
        left: u(x),
        top: u(y - top),
        width: u(BRICK.w),
        height: u(BRICK.h),
        background: color,
        borderRadius: u(BRICK.radius),
      }}
    />
  ));

/** The questions column: under the tanks, to the frame's bottom pad. */
const COLUMN = { x: 25, y: 492, w: 351, bottomPad: 60.5 };

/** The phone tabs ("faq tab" in the phone frames). */
const SIZES: QuestionSizes = {
  gap: 10,
  slabTop: 10.624,
  slabBelow: 8.584,
  minHeight: 41.502,
  padY: 10.75,
  padX: 17,
  radius: 8,
  textW: 267,
  fontSize: 15,
  icon: 13.609,
  glyph: 9.606,
  hover: 2,
  press: 6,
  answerSize: 14,
  answerPad: { top: 12, x: 14 },
};

/** The list's fade-out (.faq-panel in faq.css). */
const LIST_FADE_MS = 200;

const NO_PHASES: Record<FaqCategoryId, TankPhase> = {
  general: "here",
  teams: "here",
  logistics: "here",
};

/**
 * The FAQ aquarium on a phone: the three topic tanks stacked under the
 * title, and the picked tank's questions below them. As on desktop, nothing
 * is listed until a tank is tapped; tapping it bursts its fish into bubbles
 * and the questions rise in, and tapping it again puts them back. The
 * section grows to fit the list.
 *
 * `--u` is one design px of the 402px frame (in container units).
 */
export const FaqSceneMobile = ({ faqs }: { faqs: FaqsByCategory }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<FaqCategoryId | null>(null);
  // What the list shows: stays on the last tank while it fades out.
  const [shown, setShown] = useState<FaqCategoryId | null>(null);
  const [phases, setPhases] = useState(NO_PHASES);
  const [open, setOpen] = useState<number | null>(null);
  const [pickCount, setPickCount] = useState(0);

  useIdleAccents(rootRef);

  const pick = (id: FaqCategoryId) => {
    setOpen(null);
    if (selected === id) {
      setSelected(null);
      setPhases((p) => ({ ...p, [id]: "back" }));
      return;
    }
    setPhases((p) => ({
      ...p,
      ...(selected ? { [selected]: "back" } : {}),
      [id]: "gone",
    }));
    setSelected(id);
    setShown(id);
    setPickCount((n) => n + 1);
  };

  // Once a tank is put back, the list fades out (faq.css) and then leaves
  // the flow, so the section shrinks back to the tanks.
  useEffect(() => {
    if (selected) return;
    const timer = window.setTimeout(() => setShown(null), LIST_FADE_MS);
    return () => window.clearTimeout(timer);
  }, [selected]);

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
            background: WALL,
          } as CSSProperties
        }
      >
        <div aria-hidden="true" className="absolute inset-0">
          <Bricks bricks={BRICKS_TOP} top={0} />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0"
          style={{ height: u(BRICKS_BOTTOM_H) }}
        >
          <Bricks bricks={BRICKS_BOTTOM} top={BRICKS_BOTTOM_TOP} />
        </div>

        <div
          className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-center"
          style={{ top: u(55), width: u(411) }}
        >
          <h2
            className="font-display font-normal"
            style={{ fontSize: u(30), lineHeight: u(50.364) }}
          >
            {FAQ_TITLE}
          </h2>
          <p
            className="flex items-center justify-center font-medium"
            style={{ fontSize: u(18), lineHeight: u(18.325), gap: u(6) }}
          >
            {FAQ_HINT_TOUCH}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/faq/pointer.svg"
              alt=""
              aria-hidden="true"
              width={16}
              height={16}
              draggable={false}
              style={{ width: u(16.002), height: u(16.002) }}
            />
          </p>
        </div>

        <div
          className="pointer-events-none absolute inset-0 *:pointer-events-auto"
          style={
            {
              "--u": `calc(100cqw * ${TANK_SCALE} / ${FRAME_W})`,
            } as CSSProperties
          }
        >
          <TopicTanks
            selected={selected}
            phases={phases}
            onPick={pick}
            offsets={TANK_OFFSETS}
          />
        </div>

        <FaqQuestions
          category={shown}
          faqs={shown ? faqs[shown] : []}
          pickCount={pickCount}
          delay={0.12}
          active={isSelected}
          open={open}
          onToggle={(i) => setOpen((current) => (current === i ? null : i))}
          column={COLUMN}
          sizes={SIZES}
        />
      </div>
    </div>
  );
};

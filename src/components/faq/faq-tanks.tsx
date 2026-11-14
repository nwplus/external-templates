import { FAQ_CATEGORIES, type FaqCategoryId } from "@/constants/faq";

import type { CSSProperties } from "react";

import { Art, boxStyle, u } from "./faq-art";
import { bobStyle, burstBubbles, FishArt } from "./faq-fish";
import { type Tank, type TankLabel, TANKS } from "./faq-layout";

/** "here" until first picked, "gone" while picked, "back" after that. */
export type TankPhase = "here" | "gone" | "back";

/** Worked out once: the bubbles never change. */
const BURSTS = TANKS.map((tank, i) => burstBubbles(tank, i + 1));

const LABELS = Object.fromEntries(
  FAQ_CATEGORIES.map(({ id, label }) => [id, label])
) as Record<FaqCategoryId, string>;

/** The yellow tag on each tank, which is also the button's name. */
const Label = ({
  label,
  origin,
  text,
}: {
  label: TankLabel;
  origin: { x: number; y: number };
  text: string;
}) => {
  const { tag } = label;
  return (
    <span
      className="pointer-events-none absolute flex items-center justify-center"
      style={boxStyle(label, origin)}
    >
      <span
        className="flex shrink-0 items-center justify-center border-solid text-center leading-none font-bold whitespace-nowrap"
        style={{
          width: u(tag.w),
          height: u(tag.h),
          rotate: `${tag.rotate}deg`,
          background: tag.fill,
          borderColor: "#cf9f3e",
          borderWidth: u(4),
          color: tag.ink,
          fontSize: u(28),
        }}
      >
        {text}
      </span>
    </span>
  );
};

type TopicTankProps = {
  tank: Tank;
  index: number;
  phase: TankPhase;
  selected: boolean;
  onPick: (id: FaqCategoryId) => void;
};

/**
 * One topic tank, as a button: picking it shows its questions and its fish
 * burst into bubbles (faq.css); picking it again goes back to the idle
 * scene. The fish's resting bubbles go with them.
 */
const TopicTank = ({
  tank,
  index,
  phase,
  selected,
  onPick,
}: TopicTankProps) => {
  const origin = { x: tank.x, y: tank.y };
  const seed = (index + 1) * 10;

  return (
    <button
      type="button"
      className="faq-tank absolute block appearance-none border-0 bg-transparent p-0 text-left"
      style={boxStyle(tank)}
      data-phase={phase}
      aria-expanded={selected}
      aria-controls="faq-questions"
      onClick={() => onPick(tank.id)}
    >
      {tank.back.map((layer) => (
        <Art key={layer.src} layer={layer} origin={origin} />
      ))}
      {tank.bubbles && (
        <Art
          layer={tank.bubbles}
          origin={origin}
          className="faq-fish-body"
          wrap={(img) => (
            <div className="faq-bob size-full" style={bobStyle(seed)}>
              {img}
            </div>
          )}
        />
      )}
      {tank.fish.map((fish, i) => (
        <FishArt
          key={fish.src}
          fish={fish}
          origin={origin}
          seed={seed + i + 1}
          className="faq-fish-body"
        />
      ))}

      {BURSTS[index].map((bubble, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="faq-burst-bubble pointer-events-none absolute rounded-full"
          style={
            {
              left: u(bubble.x - bubble.r - origin.x),
              top: u(bubble.y - bubble.r - origin.y),
              width: u(bubble.r * 2),
              height: u(bubble.r * 2),
              background: tank.bubble,
              "--rise": u(bubble.rise),
              "--drift": u(bubble.drift),
              "--delay": `${bubble.delay}ms`,
              "--dur": `${bubble.dur}ms`,
            } as CSSProperties
          }
        />
      ))}

      <Label label={tank.label} origin={origin} text={LABELS[tank.id]} />

      {tank.fishOverLabel?.map((fish, i) => (
        <FishArt
          key={fish.src}
          fish={fish}
          origin={origin}
          seed={seed + 5 + i}
          className="faq-fish-body"
        />
      ))}
    </button>
  );
};

type TopicTanksProps = {
  selected: FaqCategoryId | null;
  phases: Record<FaqCategoryId, TankPhase>;
  onPick: (id: FaqCategoryId) => void;
};

/** The stack of three topic tanks on the left. */
export const TopicTanks = ({ selected, phases, onPick }: TopicTanksProps) => (
  <>
    {TANKS.map((tank, i) => (
      <TopicTank
        key={tank.id}
        tank={tank}
        index={i}
        phase={phases[tank.id]}
        selected={selected === tank.id}
        onPick={onPick}
      />
    ))}
  </>
);

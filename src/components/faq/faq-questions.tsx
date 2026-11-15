import {
  FAQ_CATEGORIES,
  type FaqCategoryId,
  type FaqEntry,
} from "@/constants/faq";
import { parseAnswer } from "@/lib/faq";

import { type CSSProperties, forwardRef, Fragment } from "react";

import { u } from "./faq-art";
import { QUESTIONS } from "./faq-layout";

/** A question tab's measurements in design px (the scene's `--u`). */
export type QuestionSizes = {
  /** Space between questions. */
  gap: number;
  /** The slab under the tab: where it starts, and how far below the tab it
   * shows. */
  slabTop: number;
  slabBelow: number;
  minHeight: number;
  padY: number;
  padX: number;
  radius: number;
  textW: number;
  fontSize: number;
  /** The plus / minus: its box and the glyph. */
  icon: number;
  glyph: number;
  /** How far the tab sinks on hover and when pressed. */
  hover: number;
  press: number;
  answerSize: number;
  answerPad: { top: number; x: number };
};

/** The desktop picked frames' tabs. */
const DESKTOP_SIZES: QuestionSizes = {
  gap: 20,
  slabTop: 14,
  slabBelow: 13,
  minHeight: 54.689,
  padY: 12,
  padX: 34,
  radius: 14,
  textW: 394,
  fontSize: 22,
  icon: 27.217,
  glyph: 19.212,
  hover: 3,
  press: 10,
  answerSize: 20,
  answerPad: { top: 20, x: 23 },
};

const Answer = ({ text, size }: { text: string; size: number }) => (
  <div
    className="flex flex-col leading-[1.3] font-medium text-white"
    style={{ fontSize: u(size), gap: "1.3em" }}
  >
    {parseAnswer(text).map((runs, p) => (
      <p key={p}>
        {runs.map((run, i) =>
          run.type === "link" ? (
            <a
              key={i}
              href={run.href}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-lamp focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lamp"
            >
              {run.text}
            </a>
          ) : run.type === "break" ? (
            <br key={i} />
          ) : (
            <Fragment key={i}>{run.text}</Fragment>
          )
        )}
      </p>
    ))}
  </div>
);

type QuestionProps = {
  faq: FaqEntry;
  id: string;
  index: number;
  open: boolean;
  onToggle: () => void;
  sizes: QuestionSizes;
};

/**
 * One question: a tab raised on a darker slab, like the design's buttons,
 * that opens its answer underneath.
 */
const Question = ({ faq, id, index, open, onToggle, sizes }: QuestionProps) => (
  <li
    className="faq-question"
    style={
      {
        "--i": index,
        "--hover": u(sizes.hover),
        "--press": u(sizes.press),
      } as CSSProperties
    }
  >
    <h3>
      <button
        type="button"
        id={`${id}-q`}
        aria-expanded={open}
        aria-controls={`${id}-a`}
        onClick={onToggle}
        className="group relative block w-full cursor-pointer text-left focus-visible:outline-none"
        style={{ paddingBottom: u(sizes.slabBelow) }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 bg-[#cf9f3e]"
          style={{ top: u(sizes.slabTop), borderRadius: u(sizes.radius) }}
        />
        <span
          className="relative flex items-center justify-between bg-[#f2d69f] transition-transform duration-150 group-hover:translate-y-(--hover) group-focus-visible:outline-3 group-focus-visible:outline-offset-2 group-focus-visible:outline-lamp group-active:translate-y-(--press)"
          style={{
            minHeight: u(sizes.minHeight),
            padding: `${u(sizes.padY)} ${u(sizes.padX)}`,
            borderRadius: u(sizes.radius),
          }}
        >
          <span
            className="leading-[normal] font-medium text-[#821c1d]"
            style={{ width: u(sizes.textW), fontSize: u(sizes.fontSize) }}
          >
            {faq.question}
          </span>
          <span
            aria-hidden="true"
            className="relative flex shrink-0 items-center justify-center"
            style={{ width: u(sizes.icon), height: u(sizes.icon) }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={open ? "/assets/faq/minus.svg" : "/assets/faq/plus.svg"}
              alt=""
              width={sizes.glyph}
              height={sizes.glyph}
              draggable={false}
              style={{ width: u(sizes.glyph), height: u(sizes.glyph) }}
            />
          </span>
        </span>
      </button>
    </h3>
    <div
      id={`${id}-a`}
      role="region"
      aria-labelledby={`${id}-q`}
      inert={!open}
      className="faq-answer grid"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <div
          style={{
            padding: `${u(sizes.answerPad.top)} ${u(sizes.answerPad.x)} 0`,
          }}
        >
          <Answer text={faq.answer} size={sizes.answerSize} />
        </div>
      </div>
    </div>
  </li>
);

type FaqQuestionsProps = {
  category: FaqCategoryId | null;
  faqs: FaqEntry[];
  /** Remounts the list so it animates in again on every pick. */
  pickCount: number;
  /** Seconds before the first question rises in. */
  delay: number;
  active: boolean;
  open: number | null;
  onToggle: (index: number) => void;
  /** The column in the frame (design px); the desktop picked frames'
   * unless given. */
  column?: { x: number; y: number; w: number; bottomPad: number };
  sizes?: QuestionSizes;
};

/**
 * The picked tank's questions, in the page flow so the section grows as
 * answers open. Only the list takes clicks: the column's padding sits over
 * the long tank.
 */
export const FaqQuestions = forwardRef<HTMLUListElement, FaqQuestionsProps>(
  (
    {
      category,
      faqs,
      pickCount,
      delay,
      active,
      open,
      onToggle,
      column = QUESTIONS,
      sizes = DESKTOP_SIZES,
    },
    ref
  ) => {
    const label = FAQ_CATEGORIES.find(({ id }) => id === category)?.label;
    return (
      <div
        id="faq-questions"
        role="region"
        aria-label={label ? `${label} questions` : "Questions"}
        inert={!active}
        className="faq-panel pointer-events-none relative z-10"
        style={{
          marginLeft: u(column.x),
          width: u(column.w),
          paddingTop: u(column.y),
          paddingBottom: u(column.bottomPad),
        }}
      >
        {category && (
          <ul
            key={`${category}-${pickCount}`}
            ref={ref}
            className="pointer-events-auto flex flex-col"
            style={
              {
                gap: u(sizes.gap),
                "--panel-delay": `${delay}s`,
              } as CSSProperties
            }
          >
            {faqs.map((faq, i) => (
              <Question
                key={faq.question}
                faq={faq}
                id={`faq-${category}-${i}`}
                index={i}
                open={open === i}
                onToggle={() => onToggle(i)}
                sizes={sizes}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
);

FaqQuestions.displayName = "FaqQuestions";

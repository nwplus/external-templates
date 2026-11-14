import {
  FAQ_CATEGORIES,
  type FaqCategoryId,
  type FaqEntry,
} from "@/constants/faq";
import { parseAnswer } from "@/lib/faq";

import { type CSSProperties, forwardRef, Fragment } from "react";

import { u } from "./faq-art";
import { QUESTIONS } from "./faq-layout";

const Answer = ({ text }: { text: string }) => (
  <div
    className="flex flex-col leading-[1.3] font-medium text-white"
    style={{ fontSize: u(20), gap: "1.3em" }}
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
};

/**
 * One question: a tab raised on a darker slab, like the design's buttons,
 * that opens its answer underneath.
 */
const Question = ({ faq, id, index, open, onToggle }: QuestionProps) => (
  <li className="faq-question" style={{ "--i": index } as CSSProperties}>
    <h3>
      <button
        type="button"
        id={`${id}-q`}
        aria-expanded={open}
        aria-controls={`${id}-a`}
        onClick={onToggle}
        className="group relative block w-full cursor-pointer text-left focus-visible:outline-none"
        style={{ paddingBottom: u(13) }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 bg-[#cf9f3e]"
          style={{ top: u(14), borderRadius: u(14) }}
        />
        <span
          className="relative flex items-center justify-between bg-[#f2d69f] transition-transform duration-150 group-hover:translate-y-[calc(3*var(--u))] group-focus-visible:outline-3 group-focus-visible:outline-offset-2 group-focus-visible:outline-lamp group-active:translate-y-[calc(10*var(--u))]"
          style={{
            minHeight: u(54.689),
            padding: `${u(12)} ${u(34)}`,
            borderRadius: u(14),
          }}
        >
          <span
            className="leading-[normal] font-medium text-[#821c1d]"
            style={{ width: u(394), fontSize: u(22) }}
          >
            {faq.question}
          </span>
          <span
            aria-hidden="true"
            className="relative flex shrink-0 items-center justify-center"
            style={{ width: u(27.217), height: u(27.217) }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={open ? "/assets/faq/minus.svg" : "/assets/faq/plus.svg"}
              alt=""
              width={19.212}
              height={19.212}
              draggable={false}
              style={{ width: u(19.212), height: u(19.212) }}
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
        <div style={{ padding: `${u(20)} ${u(23)} 0` }}>
          <Answer text={faq.answer} />
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
};

/**
 * The picked tank's questions, in the page flow so the section grows as
 * answers open. Only the list takes clicks: the column's padding sits over
 * the long tank.
 */
export const FaqQuestions = forwardRef<HTMLUListElement, FaqQuestionsProps>(
  ({ category, faqs, pickCount, delay, active, open, onToggle }, ref) => {
    const label = FAQ_CATEGORIES.find(({ id }) => id === category)?.label;
    return (
      <div
        id="faq-questions"
        role="region"
        aria-label={label ? `${label} questions` : "Questions"}
        inert={!active}
        className="faq-panel pointer-events-none relative z-10"
        style={{
          marginLeft: u(QUESTIONS.x),
          width: u(QUESTIONS.w),
          paddingTop: u(QUESTIONS.y),
          paddingBottom: u(QUESTIONS.bottomPad),
        }}
      >
        {category && (
          <ul
            key={`${category}-${pickCount}`}
            ref={ref}
            className="pointer-events-auto flex flex-col"
            style={
              { gap: u(20), "--panel-delay": `${delay}s` } as CSSProperties
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
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
);

FaqQuestions.displayName = "FaqQuestions";

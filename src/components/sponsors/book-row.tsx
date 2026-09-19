"use client";

import Image from "next/image";
import { type MouseEvent, useRef } from "react";

import { ORNAMENT_ART, play, prefersLessMotion } from "./ornament-art";

type Book = {
  title: string;
  /** The book's outline in its row's artwork. */
  clip: string;
  /** Where it pivots: the middle of its base, or the corner a leaning book rests on. */
  origin: string;
  /** How far a leaning book tips from upright, in degrees. */
  lean?: number;
};

/** Each book cut out of its row's artwork, left to right. */
const BOOKS: Record<"books-left" | "books-right", Book[]> = {
  "books-left": [
    {
      title: "Goodnight Nugget",
      clip: "polygon(0.00% 0.67%, 0.93% 0.00%, 23.34% 0.00%, 24.51% 0.84%, 24.51% 99.16%, 23.53% 100.00%, 0.93% 100.00%, 0.00% 99.33%)",
      origin: "12.2% 100%",
    },
    {
      title: "nwPlus Yearbook",
      clip: "polygon(26.76% 27.69%, 27.54% 27.35%, 43.73% 27.35%, 44.90% 28.19%, 44.70% 99.66%, 43.92% 100.00%, 26.95% 100.00%, 26.37% 99.32%)",
      origin: "35.6% 100%",
    },
    {
      title: "The HackCampers",
      clip: "polygon(36.01% 7.91%, 37.76% 6.90%, 55.30% 0.84%, 56.47% 1.51%, 100.00% 91.58%, 99.91% 92.76%, 81.60% 99.66%, 79.46% 98.82%, 36.01% 9.26%)",
      origin: "80.5% 99.3%",
      lean: 22.8,
    },
  ],
  "books-right": [
    {
      title: "Sleepy Sheep",
      clip: "polygon(0.14% 12.30%, 0.92% 11.75%, 26.41% 12.12%, 26.80% 12.85%, 26.80% 99.08%, 25.82% 100.00%, 0.92% 100.00%, 0.00% 99.26%)",
      origin: "13.4% 100%",
    },
    {
      title: "Nugget and Pals",
      clip: "polygon(30.00% 0.37%, 30.78% 0.00%, 49.65% 0.00%, 50.23% 0.55%, 50.23% 99.45%, 49.26% 100.00%, 30.39% 100.00%, 29.81% 99.26%)",
      origin: "40.0% 100%",
    },
    {
      title: "Starry Night",
      clip: "polygon(50.66% 28.11%, 51.64% 27.19%, 63.91% 21.84%, 65.27% 22.02%, 100.00% 92.44%, 99.72% 93.91%, 86.88% 99.62%, 85.52% 99.44%, 50.66% 29.21%)",
      origin: "86.1% 99.4%",
      lean: 25.2,
    },
  ],
};

const REST = "translateY(0) rotate(0deg)";

/** An upright book is pulled halfway out, wiggled, and dropped back in. */
const pullOut: Keyframe[] = [
  { transform: REST },
  { transform: "translateY(-16%) rotate(-4deg)", offset: 0.25 },
  { transform: "translateY(-13%) rotate(4deg)", offset: 0.4 },
  { transform: "translateY(-16%) rotate(-2deg)", offset: 0.55 },
  { transform: REST, offset: 0.8, easing: "ease-in" },
  { transform: "translateY(-1.5%) rotate(0deg)", offset: 0.9 },
  { transform: REST },
];

/** A leaning book is stood up on its corner, holds, then flops back. */
const standUp = (lean: number): Keyframe[] => [
  { transform: "rotate(0deg)" },
  { transform: `rotate(${lean + 4}deg)`, offset: 0.22 },
  { transform: `rotate(${lean - 2}deg)`, offset: 0.32 },
  { transform: `rotate(${lean}deg)`, offset: 0.42 },
  { transform: `rotate(${lean}deg)`, offset: 0.6 },
  { transform: "rotate(-3deg)", offset: 0.8, easing: "ease-in" },
  { transform: "rotate(1.5deg)", offset: 0.9 },
  { transform: "rotate(0deg)" },
];

/** The rest of the row jumps when a book lands. */
const jolt: Keyframe[] = [
  { transform: "translateY(0)" },
  { transform: "translateY(-1.5%)" },
  { transform: "translateY(0)" },
];

/** A finger run along the spines. */
const ripple: Keyframe[] = [
  { transform: "translateY(0)" },
  { transform: "translateY(-3%)" },
  { transform: "translateY(0)" },
];

/**
 * A row of books standing on a shelf. Hovering runs a ripple along the
 * spines; clicking a book pulls it out and drops it back with a thud that
 * jolts its neighbours, or stands the leaning one up before it flops back.
 * From the keyboard the whole row takes a turn, left to right. Only the
 * books themselves take the pointer, not the gaps between them.
 */
export const BookRow = ({ kind }: { kind: "books-left" | "books-right" }) => {
  const art = ORNAMENT_ART[kind];
  const books = BOOKS[kind];
  const row = useRef<HTMLSpanElement>(null);
  const busyUntil = useRef(0);

  const spines = () => [
    ...(row.current?.querySelectorAll<HTMLElement>("[data-book]") ?? []),
  ];

  const move = (el: HTMLElement, book: Book, delay: number, thud: boolean) => {
    const duration = book.lean ? 1500 : 1000;
    play(el, book.lean ? standUp(book.lean) : pullOut, {
      duration,
      delay,
      easing: "ease-in-out",
    });
    busyUntil.current = Math.max(
      busyUntil.current,
      performance.now() + delay + duration
    );
    if (!thud) return;
    // It lands 80% of the way through its move.
    for (const other of spines().filter((spine) => spine !== el)) {
      play(other, jolt, {
        duration: 220,
        delay: delay + duration * 0.8,
        easing: "ease-out",
      });
    }
  };

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (prefersLessMotion()) return;
    const picked = (event.target as Element).closest<HTMLElement>(
      "[data-book]"
    );
    if (picked) {
      move(picked, books[Number(picked.dataset.book)], 0, true);
      return;
    }
    spines().forEach((el, i) => move(el, books[i], i * 180, false));
  };

  const onPointerEnter = () => {
    if (prefersLessMotion() || performance.now() < busyUntil.current) return;
    spines().forEach((el, i) =>
      play(el, ripple, { duration: 320, delay: i * 70, easing: "ease-out" })
    );
  };

  return (
    <button
      type="button"
      aria-label="Books"
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      className="pointer-events-none block w-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
    >
      <span
        ref={row}
        className="relative block w-full"
        style={{ aspectRatio: `${art.width} / ${art.height}` }}
      >
        {books.map((book, i) => (
          <span
            key={book.title}
            data-book={i}
            className="pointer-events-auto absolute inset-0 block cursor-pointer"
            style={{ clipPath: book.clip, transformOrigin: book.origin }}
          >
            <Image
              src={art.src}
              alt=""
              width={art.width}
              height={art.height}
              className="pointer-events-none block h-full w-full"
            />
          </span>
        ))}
      </span>
    </button>
  );
};

"use client";

import CrtTv from "@/components/faq/crt-tv";
import VhsTape from "@/components/faq/vhs-tape";
import type { FaqGroup, FaqLayout } from "@/lib/faq-layout";
import type { FAQDoc } from "@/lib/firestore";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { type CSSProperties, useRef, useState } from "react";

/** Letters badged onto the tapestry tapes at indices 1..7 (index 0 has none). */
const BADGE_LETTERS = "HACKING";
const BADGE_COLORS = ["#4f497c", "#a68a44", "#5f999a", "#a27baa"];
const MOBILE_QUERY = "(max-width: 767px)";

/** Alternating −8px / +8px horizontal offset, desktop only. */
const staggerClass = (position: number) =>
  position % 2 === 0 ? "md:-translate-x-2" : "md:translate-x-2";

type SelectProps = {
  selected: FAQDoc | null;
  onSelect: (faq: FAQDoc) => void;
};

/**
 * The first category's tapes piled in front of the tapestry. The image and
 * the list share one grid cell so the column is as tall as the taller of the
 * two, with the tapes sitting on the bottom edge.
 */
const TapestryStack = ({
  group,
  selected,
  onSelect,
}: SelectProps & { group: FaqGroup | null }) => (
  <div className="grid w-full">
    <Image
      src="/assets/faq/tapestry.svg"
      alt=""
      aria-hidden="true"
      width={515}
      height={365}
      className="col-start-1 row-start-1 h-auto w-full max-w-[515px] self-start justify-self-center"
    />
    {group && (
      <ul
        aria-label={group.category}
        className="relative col-start-1 row-start-1 flex w-full flex-col gap-1.5 self-end pt-10 md:items-center"
      >
        {group.faqs.map((faq, i) => (
          <li
            key={faq.question}
            className={cn("flex w-full justify-center", staggerClass(i))}
          >
            <VhsTape
              faq={faq}
              selected={selected === faq}
              badge={i > 0 ? BADGE_LETTERS[i - 1] : undefined}
              badgeColor={
                i > 0 ? BADGE_COLORS[(i - 1) % BADGE_COLORS.length] : undefined
              }
              onSelect={onSelect}
            />
          </li>
        ))}
      </ul>
    )}
  </div>
);

/**
 * One open-cabinet band: the boombox labelled with the category, then its
 * tapes. Below md the tapes are a single column in document order; from md
 * up they split into two bottom-aligned columns (1st, 3rd, 5th... left,
 * 2nd, 4th... right) via explicit grid placement so the DOM order never
 * changes.
 */
const CabinetBand = ({
  shelf,
  selected,
  onSelect,
}: SelectProps & { shelf: FaqGroup }) => {
  const count = shelf.faqs.length;
  // When the left column has one more tape, start the right column one row
  // down so both columns end on the cabinet floor.
  const rightOffset = count % 2 === 1 ? 1 : 0;

  return (
    <div className="relative bg-cabinet">
      <Image
        src="/assets/faq/cabinet.svg"
        alt=""
        aria-hidden="true"
        width={1440}
        height={285}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 py-6 md:flex-row md:items-end md:gap-10 md:py-8">
        <h3 className="font-display text-2xl tracking-wider text-cream uppercase md:hidden">
          {shelf.category}
        </h3>
        <div className="relative hidden shrink-0 md:block">
          <Image
            src="/assets/faq/boombox.svg"
            alt=""
            aria-hidden="true"
            width={255}
            height={225}
            className="h-auto w-[255px]"
          />
          <h3 className="absolute top-[42%] left-1/2 max-w-[80%] -translate-x-1/2 -translate-y-1/2 truncate rounded bg-tv-ink/80 px-3 py-1 font-display text-lg tracking-[0.2em] text-cream uppercase">
            {shelf.category}
          </h3>
        </div>
        <ul
          aria-label={shelf.category}
          className="flex min-w-0 flex-1 flex-col gap-1.5 md:grid md:grid-cols-2 md:items-end md:gap-x-8 md:gap-y-1.5"
        >
          {shelf.faqs.map((faq, i) => {
            const column = i % 2; // 0 left, 1 right
            const row = Math.floor(i / 2) + (column === 1 ? rightOffset : 0);
            return (
              <li
                key={faq.question}
                style={
                  {
                    "--tape-col": column + 1,
                    "--tape-row": row + 1,
                  } as CSSProperties
                }
                className={cn(
                  "flex w-full justify-center md:col-start-(--tape-col) md:row-start-(--tape-row)",
                  staggerClass(row)
                )}
              >
                <VhsTape
                  faq={faq}
                  selected={selected === faq}
                  onSelect={onSelect}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

/** Decorative wall shelf to the right of the television. Desktop only. */
const RightShelf = () => (
  <div className="hidden md:flex md:flex-col md:items-center md:gap-4">
    <Image
      src="/assets/faq/shelf-frames.svg"
      alt=""
      aria-hidden="true"
      width={335}
      height={260}
      className="h-auto w-full max-w-[335px]"
    />
    <div className="flex items-end justify-center gap-6">
      <Image
        src="/assets/faq/teddy.svg"
        alt=""
        aria-hidden="true"
        width={140}
        height={155}
        className="h-auto w-[140px] max-w-[40%]"
      />
      <Image
        src="/assets/faq/lava-lamp.svg"
        alt=""
        aria-hidden="true"
        width={90}
        height={255}
        className="h-auto w-[90px] max-w-[30%]"
      />
    </div>
  </div>
);

/**
 * The VHS room. Renders the whole `#faq` section: the wall row (tapestry
 * stack, television, right shelf), the desk with one cabinet band per shelf
 * category, and the cloth band that leads into Sponsors.
 */
const FaqRoom = ({ layout }: { layout: FaqLayout }) => {
  const [selected, setSelected] = useState<FAQDoc | null>(null);
  const tvRef = useRef<HTMLDivElement>(null);
  const empty = layout.tapestry === null && layout.shelves.length === 0;

  const handleSelect = (faq: FAQDoc) => {
    setSelected(faq);
    if (window.matchMedia(MOBILE_QUERY).matches) {
      tvRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-x-clip bg-linear-to-b from-wall from-80% to-night-top text-cream"
    >
      <h2 className="sr-only">FAQ</h2>

      {/* Row 1: everything sits on the desk. */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 pt-16 md:grid md:grid-cols-[36fr_32fr_32fr] md:items-end md:gap-6 md:pt-24 lg:gap-10">
        <TapestryStack
          group={layout.tapestry}
          selected={selected}
          onSelect={handleSelect}
        />
        <div
          ref={tvRef}
          className="order-first flex w-full justify-center md:order-none"
        >
          <CrtTv selected={selected} empty={empty} />
        </div>
        <RightShelf />
      </div>

      {/* Row 2: the desk and the open cabinet. */}
      <Image
        src="/assets/faq/desk-top.svg"
        alt=""
        aria-hidden="true"
        width={1440}
        height={24}
        className="block h-auto w-full"
      />
      {layout.shelves.map((shelf) => (
        <CabinetBand
          key={shelf.category}
          shelf={shelf}
          selected={selected}
          onSelect={handleSelect}
        />
      ))}

      {/* Row 3: the cloth band; Sponsors starts right after it. */}
      <Image
        src="/assets/faq/cloth-band.svg"
        alt=""
        aria-hidden="true"
        width={1440}
        height={150}
        className="block h-auto w-full"
      />
    </section>
  );
};

export default FaqRoom;

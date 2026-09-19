"use client";

import { Boombox } from "@/components/faq/boombox";
import CrtTv from "@/components/faq/crt-tv";
import { LavaLamp } from "@/components/faq/lava-lamp";
import { TeddyBear } from "@/components/faq/teddy-bear";
import VhsTape from "@/components/faq/vhs-tape";
import {
  type FaqGroup,
  type FaqItem,
  type FaqLayout,
  positionFromTop,
  splitTapeStacks,
} from "@/lib/faq-layout";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useRef, useState } from "react";

/**
 * Letters badged onto the wall tapes at positions 1..7, counted from the top
 * of the pile (the top tape has none).
 */
const BADGE_LETTERS = "HACKING";
const BADGE_COLORS = [
  "#4f497c",
  "#a68a44",
  "#5f999a",
  "#a27baa",
  "#bd6b3c",
] as const;
const MOBILE_QUERY = "(max-width: 767px)";

/** Alternating −8px / +8px horizontal offset, the way the design stacks tapes. */
const staggerClass = (position: number) =>
  position % 2 === 0 ? "-translate-x-2" : "translate-x-2";

const badgeFor = (position: number) =>
  position > 0 && position <= BADGE_LETTERS.length
    ? {
        badge: BADGE_LETTERS[position - 1],
        badgeColor: BADGE_COLORS[(position - 1) % BADGE_COLORS.length],
      }
    : {};

type SelectProps = {
  selected: FaqItem | null;
  onSelect: (faq: FaqItem) => void;
};

type StackProps = SelectProps & {
  faqs: FaqItem[];
  label: string;
  /** Start index, so a split stack keeps one running stagger and badge order. */
  offset?: number;
  className?: string;
  badged?: boolean;
  /**
   * Draw the first question at the bottom and pile the rest on top of it, so
   * the stack stands on whatever it is anchored to however many tapes it
   * holds. The list keeps question order for screen readers and the Tab key;
   * only the drawing is flipped.
   */
  fromBottom?: boolean;
};

/** A pile of tapes, each as wide as its question, centred on its own column. */
const TapeStack = ({
  faqs,
  label,
  offset = 0,
  className,
  badged = false,
  fromBottom = false,
  selected,
  onSelect,
}: StackProps) => (
  <ul
    aria-label={label}
    className={cn(
      // Only the tapes take clicks; the rest of the stack's box lets them
      // through to whatever stands behind it, like the phone shelf's lamp.
      "pointer-events-none flex items-center gap-0.5",
      fromBottom ? "flex-col-reverse" : "flex-col",
      className
    )}
  >
    {faqs.map((faq, i) => {
      const position = positionFromTop(i, faqs.length, fromBottom) + offset;
      return (
        <li
          key={`${faq.question}-${i}`}
          className={cn(
            "pointer-events-auto flex max-w-full",
            staggerClass(position)
          )}
        >
          <VhsTape
            faq={faq}
            selected={selected === faq}
            {...(badged ? badgeFor(position) : {})}
            onSelect={onSelect}
          />
        </li>
      );
    })}
  </ul>
);

/**
 * The bedroom wall, laid out as one fixed-ratio canvas so every prop lands
 * where geo-faq.json puts it: the tapestry and its tape pile on the left, the
 * window behind the television in the middle, and the hanging frames, teddy
 * and lava lamp on the right. Desktop only — the mobile design has no wall.
 *
 * The pile stands on the cabinet top, its bottom tape 25px into the cabinet's
 * top face as in the design, and grows upward from the first question, so a
 * short category never leaves a tape hanging in mid-air.
 */
const RoomWall = ({
  group,
  empty,
  selected,
  onSelect,
}: SelectProps & {
  group: FaqGroup<FaqItem> | null;
  empty: boolean;
}) => (
  <div className="relative z-40 aspect-[1531/592] w-full">
    <Image
      src="/assets/faq/tapestry.svg"
      alt=""
      aria-hidden="true"
      width={573}
      height={402}
      className="pointer-events-none absolute top-0 left-[2.16%] h-auto w-[37.43%]"
    />
    <Image
      src="/assets/faq/window.svg"
      alt=""
      aria-hidden="true"
      width={543}
      height={366}
      className="pointer-events-none absolute top-[12.99%] left-[41.53%] h-auto w-[35.47%]"
    />
    <Image
      src="/assets/faq/shelf-frames.webp"
      alt=""
      aria-hidden="true"
      width={677}
      height={654}
      className="pointer-events-none absolute top-[21.79%] left-[74.66%] h-auto w-[22.08%]"
    />
    <TeddyBear className="absolute top-[77.2%] left-[73.61%] w-[10.25%]" />
    <LavaLamp className="absolute top-[38.85%] left-[77.33%] w-[19.73%]" />
    <div className="absolute top-[30.07%] left-[41.99%] w-[31.16%]">
      <CrtTv selected={selected} empty={empty} />
    </div>
    {group && (
      <TapeStack
        faqs={group.faqs}
        label={group.category}
        badged
        fromBottom
        className="absolute bottom-[-4.22%] left-[24.17%] w-[36%] -translate-x-1/2"
        selected={selected}
        onSelect={onSelect}
      />
    )}
  </div>
);

/**
 * One open cabinet: `cabinet.svg` sets the band's height, and the radio, the
 * two tape stacks and the blanket draped over the shelf edge are placed on it
 * as fractions of that artwork. The radio and blanket are always there; the
 * stacks and the radio's label only when a category sits on the shelf.
 * Desktop only.
 */
const Cabinet = ({
  shelf,
  selected,
  onSelect,
}: SelectProps & { shelf?: FaqGroup<FaqItem> }) => {
  const { left, right } = shelf
    ? splitTapeStacks(shelf.faqs)
    : { left: [], right: [] };

  return (
    <div className="relative z-30 w-full">
      <Image
        src="/assets/faq/cabinet.svg"
        alt=""
        aria-hidden="true"
        width={1519}
        height={472}
        className="block h-auto w-full"
      />
      <Image
        src="/assets/faq/shelf-blanket.svg"
        alt=""
        aria-hidden="true"
        width={1390}
        height={168}
        className="pointer-events-none absolute top-[64.4%] left-[4.15%] h-auto w-[91.5%]"
      />
      {/* The radio is part of the furniture, so it stays when the shelf is empty. */}
      <Boombox
        category={shelf?.category}
        className="absolute top-[20.55%] left-[10.53%] w-[18.56%]"
      />
      {shelf && (
        <>
          <TapeStack
            faqs={left}
            label={shelf.category}
            className="absolute bottom-[33.26%] left-[28.97%] w-[28%]"
            selected={selected}
            onSelect={onSelect}
          />
          <TapeStack
            faqs={right}
            label={shelf.category}
            offset={left.length}
            className="absolute bottom-[27.12%] left-[57.67%] w-[33.1%]"
            selected={selected}
            onSelect={onSelect}
          />
        </>
      )}
    </div>
  );
};

/**
 * One mobile shelf: a plank along the top, the tapes stacked in a single
 * column below it, closed by the blanket hanging over its front edge. The
 * mobile design keeps every category on a shelf like this, so there is no
 * wall and no tapestry. The heading sits on the first plank, which keeps it
 * clear of the lava lamp when the first shelf is also the last.
 */
const MobileShelf = ({
  group,
  badged,
  title,
  lamp,
  selected,
  onSelect,
}: SelectProps & {
  group: FaqGroup<FaqItem>;
  badged: boolean;
  /** The first shelf carries the section's heading. */
  title: boolean;
  /**
   * The last shelf stands the lava lamp at its left edge, and its blanket
   * drapes over the cloud band that closes the section.
   */
  lamp: boolean;
}) => (
  <div className={cn("relative", lamp ? "z-30" : "bg-cabinet")}>
    {/* On the last shelf the wall stops under the blanket's top, so the
        blanket hangs over the clouds instead of over more wall. */}
    {lamp && (
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 bottom-[8vw] -z-10 bg-cabinet"
      />
    )}
    {/* The plank along the top of the shelf, which carries the heading. */}
    <div className="flex h-[10.4vw] items-center bg-[#a98469] px-4">
      {title && (
        <p
          aria-hidden="true"
          className="font-display text-[6.6vw] leading-none text-cream-soft"
        >
          FAQ
        </p>
      )}
    </div>
    <div className="flex justify-end px-4 pt-2">
      <h3 className="w-fit max-w-[52%] rotate-3 rounded-xs bg-cream-soft px-3 py-1.5 font-display text-sm tracking-wide text-ink">
        {group.category}
      </h3>
    </div>
    {/* The lamp stands behind the tapes, as in the phone frame, so a tape
        that reaches over it still takes the tap. */}
    {lamp && <LavaLamp className="absolute bottom-[8%] -left-[17%] w-[58%]" />}
    {/* The lamp shelf is kept tall enough for the lamp to stand under the
        plank even when the category has only a question or two; the tapes
        stand on the shelf at the bottom of it rather than hanging from the
        top, so a short category never leaves a tape floating. */}
    <TapeStack
      faqs={group.faqs}
      label={group.category}
      badged={badged}
      className={cn(
        "relative w-full justify-end pt-2 pr-3 pb-1",
        lamp ? "min-h-[78vw] pl-14" : "pl-3"
      )}
      selected={selected}
      onSelect={onSelect}
    />
    <Image
      src="/assets/faq/shelf-blanket.svg"
      alt=""
      aria-hidden="true"
      width={1390}
      height={168}
      className="pointer-events-none relative block h-auto w-full"
    />
  </div>
);

/**
 * The VHS room. Above md it is the design's bedroom: wall, cabinet, cloud
 * band. Below md the design drops the wall and stacks every category on its
 * own wooden shelf, with the television kept above them so a tapped question
 * still has somewhere to play.
 */
const FaqRoom = ({ layout }: { layout: FaqLayout<FaqItem> }) => {
  const [selected, setSelected] = useState<FaqItem | null>(null);
  const mobileTvRef = useRef<HTMLDivElement>(null);
  const empty = layout.tapestry === null && layout.shelves.length === 0;
  const groups = layout.tapestry
    ? [layout.tapestry, ...layout.shelves]
    : layout.shelves;

  const handleSelect = (faq: FaqItem) => {
    setSelected(faq);
    if (window.matchMedia(MOBILE_QUERY).matches) {
      mobileTvRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <>
      {/* Desktop: the room itself. */}
      <div className="hidden w-full @container xl:-mt-[60.3%] xl:block">
        <RoomWall
          group={layout.tapestry}
          empty={empty}
          selected={selected}
          onSelect={handleSelect}
        />
        {layout.shelves.length > 0 ? (
          layout.shelves.map((shelf) => (
            <Cabinet
              key={shelf.category}
              shelf={shelf}
              selected={selected}
              onSelect={handleSelect}
            />
          ))
        ) : (
          <Cabinet selected={selected} onSelect={handleSelect} />
        )}
        {/* The cloud band starts behind the cabinet and closes the section. */}
        <Image
          src="/assets/faq/cloth-band.svg"
          alt=""
          aria-hidden="true"
          width={1531}
          height={351}
          className="relative z-20 -mt-[19.62%] block h-auto w-full"
        />
      </div>

      {/* Mobile: shelves only, with the television above them. */}
      <div className="xl:hidden">
        <div
          ref={mobileTvRef}
          className="mx-auto w-[92%] max-w-[520px] scroll-mt-6 pt-10 pb-8"
        >
          <CrtTv selected={selected} empty={empty} />
        </div>
        {groups.map((group, i) => (
          <MobileShelf
            key={group.category}
            group={group}
            badged={i === 0}
            title={i === 0}
            lamp={i === groups.length - 1}
            selected={selected}
            onSelect={handleSelect}
          />
        ))}
        {/* Tucked up behind the last shelf's blanket, as in the phone frame,
            and above the Sponsors band, which slides up under it, so its
            string lights hang out of the clouds as they do on desktop. */}
        <Image
          src="/assets/faq/cloth-band.svg"
          alt=""
          aria-hidden="true"
          width={1531}
          height={351}
          className="relative z-20 -mt-[16%] block h-auto w-full"
        />
      </div>
    </>
  );
};

export default FaqRoom;

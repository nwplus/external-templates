"use client";

import CrtTv from "@/components/faq/crt-tv";
import VhsTape from "@/components/faq/vhs-tape";
import {
  type FaqGroup,
  type FaqItem,
  type FaqLayout,
  splitTapeStacks,
} from "@/lib/faq-layout";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useRef, useState } from "react";

/** Letters badged onto the wall tapes at indices 1..7 (index 0 has none). */
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
};

/** A pile of tapes, each as wide as its question, centred on its own column. */
const TapeStack = ({
  faqs,
  label,
  offset = 0,
  className,
  badged = false,
  selected,
  onSelect,
}: StackProps) => (
  <ul
    aria-label={label}
    className={cn("flex flex-col items-center gap-0.5", className)}
  >
    {faqs.map((faq, i) => (
      <li
        key={`${faq.question}-${i}`}
        className={cn("flex max-w-full", staggerClass(i + offset))}
      >
        <VhsTape
          faq={faq}
          selected={selected === faq}
          {...(badged ? badgeFor(i + offset) : {})}
          onSelect={onSelect}
        />
      </li>
    ))}
  </ul>
);

/**
 * The bedroom wall, laid out as one fixed-ratio canvas so every prop lands
 * where geo-faq.json puts it: the tapestry and its tape pile on the left, the
 * window behind the television in the middle, and the hanging frames, teddy
 * and lava lamp on the right. Desktop only — the mobile design has no wall.
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
  <div className="relative z-20 aspect-[1531/592] w-full">
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
    <Image
      src="/assets/faq/teddy.svg"
      alt=""
      aria-hidden="true"
      width={158}
      height={161}
      className="pointer-events-none absolute top-[77.2%] left-[73.61%] h-auto w-[10.25%]"
    />
    <Image
      src="/assets/faq/lava-lamp.svg"
      alt=""
      aria-hidden="true"
      width={302}
      height={381}
      className="pointer-events-none absolute top-[38.85%] left-[77.33%] h-auto w-[19.73%]"
    />
    <div className="absolute top-[30.07%] left-[41.99%] w-[31.16%]">
      <CrtTv selected={selected} empty={empty} />
    </div>
    {group && (
      <TapeStack
        faqs={group.faqs}
        label={group.category}
        badged
        className="absolute top-[59.63%] left-[24.17%] w-[36%] -translate-x-1/2 -translate-y-1/2"
        selected={selected}
        onSelect={onSelect}
      />
    )}
  </div>
);

/**
 * One open cabinet: `cabinet.svg` sets the band's height, and the radio, the
 * two tape stacks and the blanket draped over the shelf edge are placed on it
 * as fractions of that artwork. Desktop only.
 */
const Cabinet = ({
  shelf,
  selected,
  onSelect,
}: SelectProps & { shelf: FaqGroup<FaqItem> }) => {
  const { left, right } = splitTapeStacks(shelf.faqs);

  return (
    <div className="relative z-10 w-full">
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
      <div className="absolute top-[20.55%] left-[10.53%] @container w-[18.56%]">
        <Image
          src="/assets/faq/boombox.svg"
          alt=""
          aria-hidden="true"
          width={282}
          height={224}
          className="h-auto w-full"
        />
        <h3 className="absolute top-[46.2%] left-[27.2%] flex h-[13.4%] w-[45.7%] items-center justify-center overflow-hidden rounded-[4cqw] bg-tape-label px-[1.5cqw] text-center font-display text-[4.4cqw] leading-none text-ink uppercase">
          <span className="truncate">{shelf.category}</span>
        </h3>
      </div>
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
    </div>
  );
};

/**
 * One mobile shelf: a wooden band with the tapes stacked in a single column,
 * closed by the blanket hanging over its front edge. The mobile design keeps
 * every category on a shelf like this, so there is no wall and no tapestry.
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
  /** The last shelf stands the lava lamp at its left edge. */
  lamp: boolean;
}) => (
  <div className="relative bg-cabinet">
    <Image
      src="/assets/faq/desk-top.svg"
      alt=""
      aria-hidden="true"
      width={1519}
      height={34}
      className="block h-[10.4vw] w-full object-fill"
    />
    <div className="flex items-start justify-between gap-3 px-4 pt-2">
      {title && (
        <p aria-hidden="true" className="font-display text-3xl text-cream">
          FAQ
        </p>
      )}
      <h3 className="ml-auto w-fit max-w-[52%] rotate-3 rounded-xs bg-cream-soft px-3 py-1.5 font-display text-sm tracking-wide text-ink">
        {group.category}
      </h3>
    </div>
    <TapeStack
      faqs={group.faqs}
      label={group.category}
      badged={badged}
      className={cn("relative w-full pt-2 pr-3 pb-6", lamp ? "pl-14" : "pl-3")}
      selected={selected}
      onSelect={onSelect}
    />
    {lamp && (
      <Image
        src="/assets/faq/lava-lamp.svg"
        alt=""
        aria-hidden="true"
        width={302}
        height={381}
        className="pointer-events-none absolute bottom-[8%] -left-[17%] h-auto w-[58%]"
      />
    )}
    <Image
      src="/assets/faq/shelf-blanket.svg"
      alt=""
      aria-hidden="true"
      width={1390}
      height={168}
      className="relative block h-auto w-full"
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
      <div className="hidden w-full @container md:block">
        <RoomWall
          group={layout.tapestry}
          empty={empty}
          selected={selected}
          onSelect={handleSelect}
        />
        {layout.shelves.map((shelf) => (
          <Cabinet
            key={shelf.category}
            shelf={shelf}
            selected={selected}
            onSelect={handleSelect}
          />
        ))}
        {/* The cloud band starts behind the cabinet and closes the section. */}
        <Image
          src="/assets/faq/cloth-band.svg"
          alt=""
          aria-hidden="true"
          width={1531}
          height={351}
          className="relative z-0 -mt-[19.62%] block h-auto w-full"
        />
      </div>

      {/* Mobile: shelves only, with the television above them. */}
      <div className="md:hidden">
        <div
          ref={mobileTvRef}
          // The Ten Years section above is z-20 as a whole and its grass
          // buffer hangs 18vw past its own bottom edge, so the television
          // starts below that reach rather than fighting it for z-order.
          className="mx-auto w-[92%] scroll-mt-6 pt-[20vw] pb-8"
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
        <Image
          src="/assets/faq/cloth-band.svg"
          alt=""
          aria-hidden="true"
          width={1531}
          height={351}
          className="block h-auto w-full"
        />
      </div>
    </>
  );
};

export default FaqRoom;

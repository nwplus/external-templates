"use client";

import { Boombox } from "@/components/faq/boombox";
import CrtTv from "@/components/faq/crt-tv";
import { LavaLamp } from "@/components/faq/lava-lamp";
import { TeddyBear } from "@/components/faq/teddy-bear";
import VhsTape from "@/components/faq/vhs-tape";
import { LightboxGallery, LightboxTrigger } from "@/components/ui/lightbox";
import { ResponsiveArt } from "@/components/ui/responsive-art";
import {
  FAQ_FRAME_CAPTIONS,
  type FaqFrame,
} from "@/constants/faq-frame-captions";
import {
  type FaqGroup,
  type FaqItem,
  type FaqLayout,
  positionFromTop,
  splitTapeStacks,
  stackByLength,
} from "@/lib/faq-layout";
import { cn } from "@/lib/utils";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { type RefObject, useRef, useState } from "react";
import { createPortal } from "react-dom";

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
/**
 * The desktop room shows from `xl` up and the mobile shelves below it, so one
 * query decides both, with no width left between them.
 */
const DESKTOP_QUERY = "(min-width: 1280px)";

/** How long a picked tape takes to fly into the television's slot, in s. */
const FLIGHT_DURATION = 0.55;

/** The sheet the six framed pictures on the wall are drawn on. */
const SHELF_FRAMES_SHEET = {
  src: "/assets/faq/shelf-frames.webp",
  width: 677,
  height: 654,
};

/**
 * How wide the sheet is drawn when a frame is opened: its own 677px, about
 * twice its size on the wall at 1440, and as sharp as the export allows.
 */
const SHELF_FRAMES_ENLARGED_WIDTH = 677;

/**
 * Each frame's box as fractions of the sheet, measured from the export's
 * alpha channel, in the wall's reading order.
 */
const SHELF_FRAMES: {
  id: FaqFrame;
  alt: string;
  box: [x: number, y: number, w: number, h: number];
  round?: boolean;
}[] = [
  {
    id: "cross-stitch",
    alt: "A round cross-stitch of a tent",
    box: [0.7548, 0.026, 0.1935, 0.1988],
    round: true,
  },
  {
    id: "campfire",
    alt: "The mascots around a campfire, one strumming a guitar",
    box: [0.0118, 0.2095, 0.5052, 0.4602],
  },
  {
    id: "astronaut",
    alt: "An astronaut plush drifting through space",
    box: [0.5465, 0.211, 0.2127, 0.2844],
  },
  {
    id: "selfie",
    alt: "The deer and the bear taking a selfie",
    box: [0.5598, 0.5535, 0.4269, 0.3303],
  },
  {
    id: "aurora-bear",
    alt: "A small bear under the northern lights",
    box: [0.1285, 0.7125, 0.1581, 0.1407],
  },
  {
    id: "pterodactyl",
    alt: "A pterodactyl gliding over the clouds",
    box: [0.3146, 0.7125, 0.2142, 0.2875],
  },
];

/**
 * Alternating −4px / +4px horizontal offset, the way the design stacks tapes,
 * kept small so a tape never hangs past the wider one it rests on.
 */
const staggerClass = (position: number) =>
  position % 2 === 0 ? "-translate-x-1" : "translate-x-1";

const badgeFor = (position: number) =>
  position > 0 && position <= BADGE_LETTERS.length
    ? {
        badge: BADGE_LETTERS[position - 1],
        badgeColor: BADGE_COLORS[(position - 1) % BADGE_COLORS.length],
      }
    : {};

type SelectProps = {
  selected: FaqItem | null;
  /** The tape on its way to the television, dimmed in its stack meanwhile. */
  flying: FaqItem | null;
  onSelect: (faq: FaqItem, el: HTMLElement) => void;
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
   * holds. The list keeps its given order for screen readers and the Tab key;
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
  flying,
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
            taken={flying === faq}
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
 * top face as in the design, and grows upward from the longest question to
 * the shortest, so a short category never leaves a tape hanging in mid-air
 * and no tape overhangs the one it rests on.
 */
const RoomWall = ({
  group,
  empty,
  shown,
  slotRef,
  selected,
  flying,
  onSelect,
}: SelectProps & {
  group: FaqGroup<FaqItem> | null;
  empty: boolean;
  /** The question on the television, which lags `selected` by the flight. */
  shown: FaqItem | null;
  slotRef: RefObject<HTMLParagraphElement | null>;
}) => (
  <div className="relative z-40 aspect-[1531/592] w-full">
    <ResponsiveArt
      base="/assets/faq/tapestry"
      widths={[600, 1000, 1440]}
      width={573}
      height={402}
      sizes="37.43vw"
      media="(min-width: 1280px)"
      aria-hidden="true"
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
      src={SHELF_FRAMES_SHEET.src}
      alt=""
      aria-hidden="true"
      width={SHELF_FRAMES_SHEET.width}
      height={SHELF_FRAMES_SHEET.height}
      className="pointer-events-none absolute top-[21.79%] left-[74.66%] h-auto w-[22.08%]"
    />
    {/* A button over each frame, in the sheet's own box, opens that picture
        large. Placed before the lamp so its glass still takes the click where
        it stands in front of the frames. */}
    <div className="absolute top-[21.79%] left-[74.66%] aspect-[677/654] w-[22.08%]">
      {SHELF_FRAMES.map(({ id, alt, box: [x, y, w, h], round }) => (
        <LightboxTrigger
          key={id}
          photo={{
            ...SHELF_FRAMES_SHEET,
            alt,
            caption: FAQ_FRAME_CAPTIONS[id],
            crop: { x, y, w, h, sheetWidth: SHELF_FRAMES_ENLARGED_WIDTH },
          }}
          className={cn("absolute", round ? "rounded-full" : "rounded-xs")}
          style={{
            left: `${x * 100}%`,
            top: `${y * 100}%`,
            width: `${w * 100}%`,
            height: `${h * 100}%`,
          }}
        />
      ))}
    </div>
    <TeddyBear className="absolute top-[77.2%] left-[73.61%] w-[10.25%]" />
    <LavaLamp className="absolute top-[38.85%] left-[77.33%] w-[19.73%]" />
    <div className="absolute top-[30.07%] left-[41.99%] w-[31.16%]">
      <CrtTv selected={shown} empty={empty} slotRef={slotRef} />
    </div>
    {group && (
      <TapeStack
        faqs={stackByLength(group.faqs)}
        label={group.category}
        badged
        fromBottom
        className="absolute bottom-[-4.22%] left-[24.17%] w-[36%] -translate-x-1/2"
        selected={selected}
        flying={flying}
        onSelect={onSelect}
      />
    )}
  </div>
);

/**
 * One open cabinet: `cabinet.svg` sets the band's height, and the radio, the
 * two tape stacks and the blanket draped over the shelf edge are placed on it
 * as fractions of that artwork. The radio and blanket are always there; the
 * stacks only when a category sits on the shelf. Both stacks stand on their
 * longest tape. Desktop only.
 */
const Cabinet = ({
  shelf,
  selected,
  flying,
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
      {/* The radio is part of the furniture, so it stays when the shelf is
          empty. It names the picked question's category, wherever that
          question sits, and the shelf's own until one is picked. */}
      <Boombox
        category={selected?.category ?? shelf?.category}
        active={!!selected}
        className="absolute top-[20.55%] left-[10.53%] w-[18.56%]"
      />
      {shelf && (
        <>
          <TapeStack
            faqs={left}
            label={shelf.category}
            fromBottom
            className="absolute bottom-[33.26%] left-[28.97%] w-[28%]"
            selected={selected}
            flying={flying}
            onSelect={onSelect}
          />
          <TapeStack
            faqs={right}
            label={shelf.category}
            offset={left.length}
            fromBottom
            className="absolute bottom-[27.12%] left-[57.67%] w-[33.1%]"
            selected={selected}
            flying={flying}
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
  flying,
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
        top, so a short category never leaves a tape floating. The column is
        drawn top-down, so it runs shortest to longest and the longest tape
        lies on the shelf. */}
    <TapeStack
      faqs={stackByLength(group.faqs).reverse()}
      label={group.category}
      badged={badged}
      className={cn(
        "relative w-full justify-end pt-2 pr-3 pb-1",
        lamp ? "min-h-[78vw] pl-14" : "pl-3"
      )}
      selected={selected}
      flying={flying}
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

type Flight = {
  /** Bumped per click, so a new pick replaces a tape still in the air. */
  id: number;
  faq: FaqItem;
  from: DOMRect;
  to: DOMRect;
  desktop: boolean;
};

/** Whether at least half of a box lies inside the viewport. */
const mostlyInView = (box: DOMRect) => {
  const w = Math.min(box.right, window.innerWidth) - Math.max(box.left, 0);
  const h = Math.min(box.bottom, window.innerHeight) - Math.max(box.top, 0);
  return w > 0 && h > 0 && w * h >= 0.5 * box.width * box.height;
};

/**
 * A copy of the picked tape flying from its stack into the television's slot:
 * a small arc up with a slight tilt, shrinking to the slot and fading as it
 * goes in. It is drawn on the page itself, in viewport coordinates, so no
 * layer of the room can clip it on the way.
 */
const TapeFlight = ({
  flight: { faq, from, to },
  onLand,
}: {
  flight: Flight;
  onLand: () => void;
}) => (
  <motion.div
    aria-hidden="true"
    className="pointer-events-none fixed top-0 left-0 z-[800] flex items-center gap-2 overflow-hidden rounded-md bg-tape py-1.5 pr-2.5 pl-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
    initial={{
      x: from.left,
      y: from.top,
      width: from.width,
      height: from.height,
    }}
    animate={{
      x: [from.left, (from.left + to.left) / 2, to.left],
      y: [from.top, Math.min(from.top, to.top) - 32, to.top],
      width: [from.width, (from.width + to.width) / 2, to.width],
      height: [from.height, (from.height + to.height) / 2, to.height],
      rotate: [0, -4, 0],
      opacity: [1, 1, 0],
    }}
    transition={{
      default: {
        duration: FLIGHT_DURATION,
        times: [0, 0.45, 1],
        ease: "easeInOut",
      },
      opacity: { duration: FLIGHT_DURATION, times: [0, 0.8, 1] },
    }}
    onAnimationComplete={onLand}
  >
    <span className="shrink-0 rotate-180 font-body text-[9px] tracking-[0.2em] text-tape-label/60 uppercase [writing-mode:vertical-rl]">
      VHS
    </span>
    <span className="min-w-0 flex-1 truncate rounded-xs border-y border-muted-cream/60 bg-cream-soft px-3 py-1 text-center font-body text-sm leading-snug text-ink">
      {faq.question}
    </span>
  </motion.div>
);

/**
 * The VHS room. From xl it is the design's bedroom: wall, cabinet, cloud
 * band. Below xl the design drops the wall and stacks every category on its
 * own wooden shelf, with the television kept above them so a tapped question
 * still has somewhere to play.
 *
 * A picked tape is marked at once, but the television only plays it once its
 * copy has flown into the slot. The flight is skipped for reduced motion and
 * when the slot is off screen, where the tape could not be seen landing.
 */
const FaqRoom = ({ layout }: { layout: FaqLayout<FaqItem> }) => {
  const [selected, setSelected] = useState<FaqItem | null>(null);
  const [shown, setShown] = useState<FaqItem | null>(null);
  const [flight, setFlight] = useState<Flight | null>(null);
  const flying = flight?.faq ?? null;
  const flights = useRef(0);
  const reduceMotion = useReducedMotion();
  const mobileTvRef = useRef<HTMLDivElement>(null);
  const desktopSlotRef = useRef<HTMLParagraphElement>(null);
  const mobileSlotRef = useRef<HTMLParagraphElement>(null);
  const empty = layout.tapestry === null && layout.shelves.length === 0;
  const groups = layout.tapestry
    ? [layout.tapestry, ...layout.shelves]
    : layout.shelves;

  const show = (faq: FaqItem, desktop: boolean) => {
    setShown(faq);
    setFlight(null);
    if (!desktop) {
      mobileTvRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handleSelect = (faq: FaqItem, el: HTMLElement) => {
    setSelected(faq);
    const desktop = window.matchMedia(DESKTOP_QUERY).matches;
    const to = (
      desktop ? desktopSlotRef : mobileSlotRef
    ).current?.getBoundingClientRect();
    if (reduceMotion || !to || !mostlyInView(to)) {
      show(faq, desktop);
      return;
    }
    flights.current += 1;
    setFlight({
      id: flights.current,
      faq,
      from: el.getBoundingClientRect(),
      to,
      desktop,
    });
  };

  return (
    <>
      {/* Desktop: the room itself. */}
      <div className="hidden w-full @container xl:-mt-[60.3%] xl:block">
        <LightboxGallery>
          <RoomWall
            group={layout.tapestry}
            empty={empty}
            shown={shown}
            slotRef={desktopSlotRef}
            selected={selected}
            flying={flying}
            onSelect={handleSelect}
          />
        </LightboxGallery>
        {layout.shelves.length > 0 ? (
          layout.shelves.map((shelf) => (
            <Cabinet
              key={shelf.category}
              shelf={shelf}
              selected={selected}
              flying={flying}
              onSelect={handleSelect}
            />
          ))
        ) : (
          <Cabinet
            selected={selected}
            flying={flying}
            onSelect={handleSelect}
          />
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
          className="mx-auto w-[92%] max-w-[520px] scroll-mt-6 pt-16 pb-8"
        >
          <CrtTv selected={shown} empty={empty} slotRef={mobileSlotRef} />
        </div>
        {groups.map((group, i) => (
          <MobileShelf
            key={group.category}
            group={group}
            badged={i === 0}
            title={i === 0}
            lamp={i === groups.length - 1}
            selected={selected}
            flying={flying}
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

      {flight &&
        createPortal(
          <TapeFlight
            key={flight.id}
            flight={flight}
            onLand={() => show(flight.faq, flight.desktop)}
          />,
          document.body
        )}
    </>
  );
};

export default FaqRoom;

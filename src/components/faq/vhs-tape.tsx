import type { FaqItem } from "@/lib/faq-layout";
import { cn } from "@/lib/utils";

type VhsTapeProps = {
  faq: FaqItem;
  selected: boolean;
  /** Optional single letter shown in a small circle to the left of the label. */
  badge?: string;
  badgeColor?: string;
  /** Dimmed while a copy of this tape flies to the television's slot. */
  taken?: boolean;
  /** Also passes the tape's button, so the room can fly the tape from it. */
  onSelect: (faq: FaqItem, el: HTMLElement) => void;
};

/**
 * One tape in a stack: a black shell with "VHS" down its spine and a written
 * label. Tapes are as wide as their question, which is what makes a stack
 * ragged the way the design has it.
 */
const VhsTape = ({
  faq,
  selected,
  badge,
  badgeColor,
  taken = false,
  onSelect,
}: VhsTapeProps) => (
  <button
    type="button"
    aria-pressed={selected}
    onClick={(e) => onSelect(faq, e.currentTarget)}
    className={cn(
      "flex max-w-full cursor-pointer items-center gap-2 rounded-md bg-tape py-1.5 pr-2.5 pl-2 text-left transition-[transform,box-shadow,opacity] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star xl:gap-[0.5cqw] xl:py-[0.45cqw] xl:pr-[0.65cqw] xl:pl-[0.5cqw]",
      selected
        ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_16px_8px_rgba(252,230,173,0.8)]"
        : "shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]",
      taken && "opacity-40"
    )}
  >
    <span
      aria-hidden="true"
      className="shrink-0 rotate-180 font-body text-[9px] tracking-[0.2em] text-tape-label/60 uppercase [writing-mode:vertical-rl] xl:text-[max(0.5rem,0.62cqw)]"
    >
      VHS
    </span>
    {badge && (
      <span
        aria-hidden="true"
        className="flex size-5 shrink-0 items-center justify-center rounded-full font-body text-xs leading-none font-bold text-cream xl:size-[max(1.5rem,1.96cqw)] xl:text-[max(0.875rem,1.18cqw)]"
        style={{ backgroundColor: badgeColor }}
      >
        {badge}
      </span>
    )}
    <span
      className={cn(
        "line-clamp-2 min-w-0 rounded-xs border-y border-muted-cream/60 px-3 py-1 text-center font-body text-sm leading-snug text-ink xl:px-[0.85cqw] xl:py-[0.3cqw] xl:text-[max(1rem,1.31cqw)] xl:leading-normal",
        selected ? "bg-cream-soft" : "bg-tape-label"
      )}
    >
      {faq.question}
    </span>
  </button>
);

export default VhsTape;

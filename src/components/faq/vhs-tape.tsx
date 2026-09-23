import type { FaqItem } from "@/lib/faq-layout";
import { cn } from "@/lib/utils";

type VhsTapeProps = {
  faq: FaqItem;
  selected: boolean;
  /** Optional single letter shown in a small circle to the left of the label. */
  badge?: string;
  badgeColor?: string;
  onSelect: (faq: FaqItem) => void;
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
  onSelect,
}: VhsTapeProps) => (
  <button
    type="button"
    aria-pressed={selected}
    onClick={() => onSelect(faq)}
    className={cn(
      "flex max-w-full cursor-pointer items-center gap-2 rounded-md bg-tape py-1.5 pr-2.5 pl-2 text-left transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star xl:gap-[0.5cqw] xl:py-[0.45cqw] xl:pr-[0.65cqw] xl:pl-[0.5cqw]",
      selected
        ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_18px_var(--color-star)]"
        : "shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
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
        className="flex size-5 shrink-0 items-center justify-center rounded-full font-body text-xs leading-none font-bold text-cream xl:size-[max(1.15rem,1.7cqw)] xl:text-[max(0.7rem,1cqw)]"
        style={{ backgroundColor: badgeColor }}
      >
        {badge}
      </span>
    )}
    <span
      className={cn(
        "line-clamp-2 min-w-0 rounded-xs border-y border-muted-cream/60 px-3 py-1 text-center font-body text-sm leading-snug text-ink xl:px-[0.85cqw] xl:py-[0.3cqw] xl:text-[max(0.8rem,1.15cqw)]",
        selected ? "bg-cream-soft" : "bg-tape-label"
      )}
    >
      {faq.question}
    </span>
  </button>
);

export default VhsTape;

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
      "flex w-full items-center gap-2 rounded-xl bg-tape py-1.5 pr-3 pl-2 text-left transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star md:w-auto md:max-w-full",
      selected
        ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_18px_var(--color-star)]"
        : "shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
    )}
  >
    <span
      aria-hidden="true"
      className="shrink-0 rotate-180 font-body text-[9px] tracking-[0.2em] text-tape-label/60 uppercase [writing-mode:vertical-rl]"
    >
      VHS
    </span>
    {badge && (
      <span
        aria-hidden="true"
        className="flex size-5 shrink-0 items-center justify-center rounded-full font-body text-xs leading-none font-bold text-white"
        style={{ backgroundColor: badgeColor }}
      >
        {badge}
      </span>
    )}
    <span
      className={cn(
        "line-clamp-2 min-w-0 flex-1 rounded-sm px-3 py-1 text-center font-body text-sm leading-snug text-ink",
        selected ? "bg-white" : "bg-tape-label"
      )}
    >
      {faq.question}
    </span>
  </button>
);

export default VhsTape;

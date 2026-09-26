import { Cursor } from "@/components/events/cursor";
import { cn } from "@/lib/utils";

import "./hint-bubble.css";

type HintBubbleProps = {
  touch: string;
  pointer: string;
  // size it w/ font-size, top/left is where the tail points
  className?: string;
};

// aria-hidden bc whatever it points at is already a labelled button
export const HintBubble = ({ touch, pointer, className }: HintBubbleProps) => (
  <p
    aria-hidden="true"
    className={cn(
      "hint-bubble pointer-events-none absolute flex items-center gap-1.5 rounded-full bg-cream-soft px-[0.9em] py-[0.45em] font-display leading-none whitespace-nowrap text-ink shadow-[0_0_18px_rgba(250,203,107,0.45)]",
      className
    )}
  >
    <span className="[@media(hover:hover)]:hidden">{touch}</span>
    <span className="hidden [@media(hover:hover)]:inline">{pointer}</span>
    <Cursor className="size-[1.1em]" />
  </p>
);

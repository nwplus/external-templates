import { cn } from "@/lib/utils";

import { Cursor } from "./cursor";

export type SheepContent = {
  title: string;
  subtitle: string;
  description: string;
};

type SheepOverlayProps = SheepContent & {
  className?: string;
};

/**
 * Copy centred on a sheep's body. The summary swaps for the description on
 * hover (desktop) or tap (mobile, via SheepTapToggle's `data-open`).
 */
export const SheepOverlay = ({
  title,
  subtitle,
  description,
  className,
}: SheepOverlayProps) => (
  <div
    className={cn(
      "absolute -translate-x-1/2 -translate-y-1/2 text-[#071074] text-center pointer-events-none select-none",
      className
    )}
  >
    <div className="grid items-center justify-items-center">
      <div className="col-start-1 row-start-1 flex flex-col items-center gap-0.5 md:gap-1 transition-opacity duration-200 group-hover:opacity-0 group-data-[open=true]:opacity-0">
        <h3 className="font-title text-3xl md:text-6xl leading-none">
          {title}
        </h3>
        <p className="text-base md:text-2xl font-semibold leading-snug">
          {subtitle}
        </p>
        <p className="flex items-center justify-center gap-1 md:gap-2 text-sm md:text-2xl pt-1">
          <span className="md:hidden">Tap to learn more</span>
          <span className="hidden md:inline">Hover to learn more</span>
          <Cursor className="size-4 md:size-5" />
        </p>
      </div>
      <p className="col-start-1 row-start-1 text-xs leading-snug md:text-lg md:leading-normal opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-data-[open=true]:opacity-100 whitespace-pre-line">
        {description}
      </p>
    </div>
  </div>
);

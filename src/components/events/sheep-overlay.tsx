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
 * hover or tap (via SheepTapToggle's `data-open`), and the hint names
 * whichever the device can do.
 *
 * From md up the type is sized against the sheep (SheepTapToggle is the
 * container): full size on the 773px-wide desktop sheep, shrinking with it on
 * tablets so the copy stays on the wool, down to the phone sizes.
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
        <h3 className="font-title text-3xl md:text-[clamp(1.875rem,7.77cqw,3.75rem)] leading-none">
          {title}
        </h3>
        <p className="text-base md:text-[clamp(1rem,3.11cqw,1.5rem)] font-semibold leading-snug">
          {subtitle}
        </p>
        <p className="flex items-center justify-center gap-1 md:gap-2 text-sm md:text-[clamp(0.875rem,3.11cqw,1.5rem)] pt-1">
          <span className="[@media(hover:hover)]:hidden">
            Tap to learn more
          </span>
          <span className="hidden [@media(hover:hover)]:inline">
            Hover to learn more
          </span>
          <Cursor className="size-4 md:size-[clamp(1rem,2.6cqw,1.25rem)]" />
        </p>
      </div>
      <p className="col-start-1 row-start-1 text-xs leading-snug md:text-[clamp(0.75rem,2.33cqw,1.125rem)] md:leading-normal opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-data-[open=true]:opacity-100 whitespace-pre-line">
        {description}
      </p>
    </div>
  </div>
);

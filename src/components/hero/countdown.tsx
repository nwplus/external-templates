"use client";

import { useCountdown } from "@/hooks/use-countdown";
import { cn } from "@/lib/utils";

/**
 * "Applications close in" countdown. Every size inside is em-based, so scale
 * the whole block by setting a font-size (and colour) on `className`.
 */
export const Countdown = ({ className }: { className?: string }) => {
  const { days, minutes, seconds } = useCountdown();

  const units = [
    ["Days", days],
    ["Minutes", minutes],
    ["Seconds", seconds],
  ] as const;

  return (
    <div
      className={cn("flex flex-col gap-[0.08em] w-max items-center", className)}
    >
      <div className="font-title text-[0.37em]">Applications close in</div>
      <div className="flex gap-[0.37em]">
        {units.map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <div className="leading-none">{value}</div>
            <div className="text-[0.185em]">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

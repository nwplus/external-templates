"use client";

import { useCountdown } from "@/hooks/use-countdown";
import { cn } from "@/lib/utils";

const PLACEHOLDER = { days: "0", hours: "00", minutes: "00", seconds: "00" };

type CountdownProps = {
  className?: string;
  /**
   * Show at most three columns: Days / Hours / Minutes while days remain,
   * then Hours / Minutes / Seconds on the final day. Without it, Seconds
   * are always shown (four columns while days remain).
   */
  compact?: boolean;
};

/**
 * "Applications close in" countdown. Every size inside is em-based, so scale
 * the whole block by setting a font-size (and colour) on `className`.
 */
export const Countdown = ({ className, compact = false }: CountdownProps) => {
  const countdown = useCountdown();
  // Before mount there's no "now" yet; reserve the usual days-remaining
  // layout with hidden zeros so nothing shifts when the real values land.
  const { days, hours, minutes, seconds } = countdown ?? PLACEHOLDER;
  const hasDays = countdown === null || Number(days) > 0;

  const units: [label: string, value: string][] = [
    ...(hasDays ? [["Days", days] as [string, string]] : []),
    ["Hours", hours],
    ["Minutes", minutes],
    ...(compact && hasDays ? [] : [["Seconds", seconds] as [string, string]]),
  ];

  return (
    <div
      className={cn("flex flex-col gap-[0.08em] w-max items-center", className)}
    >
      <div className="font-title text-[0.37em]">Applications close in</div>
      <div
        className={cn("flex gap-[0.37em]", countdown === null && "invisible")}
      >
        {units.map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <div className="leading-none font-countdown">
              {/*
                The font's numerals are all different widths (a 1 is three
                quarters of a 7), so each digit sits in a slot as wide as the
                widest one and the block stays still as the numbers tick.
              */}
              {[...value].map((digit, i) => (
                <span key={i} className="inline-block w-[0.62em] text-center">
                  {digit}
                </span>
              ))}
            </div>
            <div className="text-[0.185em]">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

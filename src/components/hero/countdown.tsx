"use client";

import { useCountdown } from "@/hooks/use-countdown";
import { cn } from "@/lib/utils";

const PLACEHOLDER = { days: "00", hours: "00", minutes: "00" };

/**
 * "Applications close in:" with days / hrs / min (Figma "timer"). Every size
 * inside is em-based off the 29px heading, so scale the whole block with a
 * font-size on `className`. Until the deadline arrives from Firestore (there
 * is no fallback date) the whole block keeps its space but stays hidden, so
 * nothing shifts when it lands.
 */
export const Countdown = ({ className }: { className?: string }) => {
  const countdown = useCountdown();
  const { days, hours, minutes } = countdown ?? PLACEHOLDER;

  const units: [label: string, value: string][] = [
    ["days", days],
    ["hrs", hours],
    ["min", minutes],
  ];

  return (
    <div
      aria-hidden={countdown === null || undefined}
      className={cn(
        "flex w-max flex-col items-center gap-[0.137em] font-medium text-white",
        countdown === null && "invisible",
        className
      )}
    >
      <p className="leading-[1.78] tracking-[-0.0144em]">
        Applications close in:
      </p>
      <div className="flex items-end gap-[0.506em] pb-[0.308em]">
        {units.map(([label, value]) => (
          <div key={label} className="flex w-[2.417em] flex-col items-center">
            <span className="font-display text-[1.889em] leading-[1.15] tracking-[-0.0144em]">
              {/*
                Knewave's numerals are different widths, so each digit gets a
                slot as wide as the widest one and the row stays still as the
                minutes tick.
              */}
              {[...value].map((digit, i) => (
                <span key={i} className="inline-block w-[0.63em] text-center">
                  {digit}
                </span>
              ))}
            </span>
            <span className="text-[0.6577em] leading-[1.2] tracking-[-0.0182em]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

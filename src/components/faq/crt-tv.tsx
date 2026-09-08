import type { FaqItem } from "@/lib/faq-layout";

import Image from "next/image";
import { useId } from "react";

type CrtTvProps = {
  selected: FaqItem | null;
  /** True when there are no questions at all; swaps the idle prompt. */
  empty: boolean;
};

const CrtTv = ({ selected, empty }: CrtTvProps) => {
  // useId can contain characters that are awkward inside url(#...).
  const filterId = `crt-static-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div className="relative w-full max-w-[455px]">
      <Image
        src="/assets/faq/tv.svg"
        alt=""
        aria-hidden="true"
        width={455}
        height={440}
        className="h-auto w-full"
      />

      {/* Screen: the bezel's inner rect. */}
      <div className="absolute top-[14%] left-[12%] h-[62%] w-[76%] overflow-hidden rounded-2xl bg-static">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
        >
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#${filterId})`} />
        </svg>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.07)_0px,rgba(0,0,0,0.07)_1px,transparent_1px,transparent_3px)]"
        />
        <div
          aria-live="polite"
          className="relative h-full overflow-y-auto p-4 text-tv-ink md:p-6"
        >
          {selected ? (
            <p className="font-body text-sm leading-relaxed whitespace-pre-line md:text-base">
              {selected.answer}
            </p>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <p className="font-display text-4xl md:text-5xl">FAQ</p>
              <p className="font-body text-base md:text-xl">
                {empty
                  ? "Questions coming soon"
                  : "Click on a question to get started"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Label strip and dial dots under the screen. */}
      <div className="absolute top-[79%] left-[16%] flex w-[68%] flex-col items-center gap-2">
        <p className="min-h-5 w-full truncate rounded-sm bg-tape-label px-2 py-0.5 text-center font-body text-xs leading-4 text-ink">
          {selected?.question}
        </p>
        <div aria-hidden="true" className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-boombox" />
          <span className="size-2 rounded-full bg-boombox" />
          <span className="size-3 rounded-full bg-boombox" />
        </div>
      </div>
    </div>
  );
};

export default CrtTv;

import { Parallax } from "@/components/ui/parallax";
import { PRIZING_PARAGRAPHS, PRIZING_TITLE } from "@/constants/prizing";
import { withEmphasis } from "@/lib/emphasis";

import Image from "next/image";

export const DesktopPrizing = () => (
  <div className="relative w-full aspect-928/609">
    {/* Illustration */}
    <Parallax
      speed={0.2}
      className="absolute z-0 pt-30 w-full h-full pointer-events-none"
    >
      <Image
        src="/assets/prizing/desktop-sparkles.svg"
        alt=""
        width={1528}
        height={559}
        className="block w-full h-auto"
      />
    </Parallax>

    {/* Content: 1200px wide, or the window's width below xl */}
    <div className="relative z-10 h-full top-0 left-0">
      <div className="mx-auto w-300 max-xl:w-full max-xl:px-6 text-white pt-50 pb-100">
        <h2 className="font-title text-6xl leading-none pb-10">
          {PRIZING_TITLE}
        </h2>
        <div className="w-1/2 text-[20px] flex flex-col gap-5 pb-40">
          {PRIZING_PARAGRAPHS.map((paragraph, i) => (
            <p key={i}>{withEmphasis(paragraph)}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

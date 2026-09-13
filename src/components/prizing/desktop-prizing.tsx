import { PRIZING_PARAGRAPHS, PRIZING_TITLE } from "@/constants/prizing";

import { DesktopSparkles } from "./desktop-sparkles";

export const DesktopPrizing = () => (
  <div className="relative w-full aspect-928/609">
    {/* Illustration */}
    <div className="absolute z-0 pt-30 w-full h-full pointer-events-none">
      <DesktopSparkles />
    </div>

    {/* Content */}
    <div className="relative z-10 h-full top-0 left-0">
      <div className="mx-auto w-300 text-white pt-50 pb-100">
        <h2 className="font-title text-6xl leading-none pb-10">
          {PRIZING_TITLE}
        </h2>
        <div className="w-1/2 text-lg flex flex-col gap-5 pb-40">
          {PRIZING_PARAGRAPHS.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

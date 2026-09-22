import { ResponsiveArt } from "@/components/ui/responsive-art";
import { PRIZING_PARAGRAPHS, PRIZING_TITLE } from "@/constants/prizing";

import Image from "next/image";

// TODO(mobile): replace mobile-house-hill.svg (cropped from the desktop tall
// clouds) with the Figma export that includes the deer on the roof, and swap
// the scaled desktop sparkles for a mobile export
export const MobilePrizing = () => (
  <div className="relative overflow-hidden text-white">
    {/* Sparkles */}
    <Image
      src="/assets/prizing/desktop-sparkles.svg"
      alt=""
      width={1528}
      height={559}
      className="pointer-events-none absolute bottom-[12%] left-1/2 z-0 w-[220%] max-w-none h-auto -translate-x-1/2"
    />

    {/* Copy */}
    <div className="relative z-10 flex flex-col gap-4 px-6 pt-16">
      <h2 className="font-title text-4xl leading-none pb-2">{PRIZING_TITLE}</h2>
      {PRIZING_PARAGRAPHS.map((paragraph, i) => (
        <p key={i} className="text-base">
          {paragraph}
        </p>
      ))}
    </div>

    {/* House on the hill closing out the section; the negative bottom margin lets the section
        edge (overflow-hidden) cut the hill just above the art's ragged bottom edge */}
    <ResponsiveArt
      base="/assets/prizing/mobile-house-hill"
      widths={[800, 1200, 1600]}
      width={1011}
      height={1270}
      sizes="100vw"
      media="(max-width: 767px)"
      className="pointer-events-none relative z-10 block w-full h-auto mt-2 -mb-[6%] [mask-image:linear-gradient(to_bottom,transparent,black_18%)]"
    />
  </div>
);

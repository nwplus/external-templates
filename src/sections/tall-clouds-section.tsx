import { ResponsiveArt } from "@/components/ui/responsive-art";

import { type ReactNode } from "react";

export default function TallCloudsSection({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative bg-linear-to-b from-[#12204D] to-[#28418D]">
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block">
        {/* The art's canvas is 1897 wide, but the artwork is laid out on the
            site's 1531 design width: the clouds start 106.78 units in and the
            canvas runs 259 units past the design's right edge. Scale the image
            so 1531 canvas units span the section (1897/1531) and pull it left
            by the 106.78-unit gutter (106.78/1531); the overflow clips the rest. */}
        <div className="absolute -bottom-40 -left-[6.974%] w-[123.906%]">
          <ResponsiveArt
            base="/assets/tall-clouds-section/desktop-tall-clouds"
            widths={[1200, 1900, 2800, 3800]}
            width={1897}
            height={2651}
            sizes="124vw"
            media="(min-width: 768px)"
            className="block w-full h-auto"
          />
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

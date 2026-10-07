import type { SponsorDoc } from "@/lib/firestore";
import { cn } from "@/lib/utils";

import SponsorLogo from "./sponsor-logo";

/**
 * The wooden mat around a sponsor's artwork. The padding is a share of the
 * width so the mat keeps its thickness as the frame scales.
 */
export const matClass = "block p-[4.5%] shadow-[0_12px_28px_rgba(0,0,0,0.35)]";

/** The cream mount the mat holds, lit from its edges. */
export const mountClass =
  "flex h-full w-full items-center justify-center bg-cream-light shadow-[inset_0_0_18px_rgba(0,0,0,0.2)]";

const PictureFrame = ({ sponsor }: { sponsor: SponsorDoc }) => {
  const frame = (
    <div
      className={cn(
        matClass,
        "aspect-[160/102] w-full bg-desk transition-transform duration-200 xl:aspect-[275/224] hover:-translate-y-1"
      )}
    >
      <div className={mountClass}>
        <SponsorLogo
          key={sponsor.imgURL}
          sponsor={sponsor}
          className="h-full w-full p-[4%]"
        />
      </div>
    </div>
  );

  if (!sponsor.link) return frame;

  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {frame}
    </a>
  );
};

export default PictureFrame;

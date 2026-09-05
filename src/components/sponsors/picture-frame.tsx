import type { SponsorDoc } from "@/lib/firestore";

import SponsorLogo from "./sponsor-logo";

export const frameClass =
  "block rounded-sm border-[10px] border-wood bg-cream-light shadow-[inset_0_0_14px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-1";

const TIER_WIDTH: Record<SponsorDoc["tier"], number> = {
  title: 240,
  platinum: 240,
  gold: 220,
  silver: 180,
  bronze: 150,
  startup: 150,
  inkind: 150,
};

const PictureFrame = ({ sponsor }: { sponsor: SponsorDoc }) => {
  const width = TIER_WIDTH[sponsor.tier] ?? 150;
  const frame = (
    <div
      className={frameClass}
      style={{ width: `min(${width}px, 40vw)`, aspectRatio: "5 / 4" }}
    >
      <SponsorLogo sponsor={sponsor} className="h-full w-full p-3" />
    </div>
  );

  if (!sponsor.link) return frame;

  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sponsor.name}
    >
      {frame}
    </a>
  );
};

export default PictureFrame;

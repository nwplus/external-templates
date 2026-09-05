import type { SponsorDoc } from "@/lib/firestore";
import { cn } from "@/lib/utils";

import { frameClass } from "./picture-frame";
import SponsorLogo from "./sponsor-logo";

const ChalkboardCard = ({ sponsor }: { sponsor: SponsorDoc }) => {
  const card = (
    <div
      className={cn(
        frameClass,
        "flex w-full max-w-[540px] flex-col items-center gap-4 p-6 text-center md:p-8"
      )}
    >
      <SponsorLogo
        sponsor={sponsor}
        className="h-16 w-auto max-w-[70%] md:h-20"
      />
      <p className="font-body text-sm leading-relaxed text-ink md:text-base">
        {sponsor.blurb}
      </p>
    </div>
  );

  if (!sponsor.link) return card;

  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sponsor.name}
      className="flex w-full justify-center"
    >
      {card}
    </a>
  );
};

export default ChalkboardCard;

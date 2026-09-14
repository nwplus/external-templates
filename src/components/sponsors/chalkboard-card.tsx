import type { SponsorDoc } from "@/lib/firestore";
import { cn } from "@/lib/utils";

import { matClass, mountClass } from "./picture-frame";
import SponsorLogo from "./sponsor-logo";

/** How much of its shelf the card takes up, narrow layout then wide. */
const cardWidth = "w-[92.6%] xl:w-[48.5%]";

const ChalkboardCard = ({ sponsor }: { sponsor: SponsorDoc }) => {
  const card = (
    <div className={cn(matClass, "w-full bg-wood")}>
      <div
        className={cn(
          mountClass,
          "flex-col gap-[4%] px-[6%] py-[5%] text-center"
        )}
      >
        <SponsorLogo
          key={sponsor.imgURL}
          sponsor={sponsor}
          className="h-auto max-h-[22%] w-[45%] max-w-[70%]"
        />
        <p className="font-body text-base leading-snug text-ink xl:text-xl">
          {sponsor.blurb}
        </p>
      </div>
    </div>
  );

  if (!sponsor.link) return <div className={cardWidth}>{card}</div>;

  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardWidth}
    >
      {card}
    </a>
  );
};

export default ChalkboardCard;

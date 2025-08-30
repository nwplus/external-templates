import Contact from "@/components/sponsor-footer/contact";
import TeamGallery from "@/components/sponsor-footer/team-gallery";
import {
  CURRENT_HACKATHON,
  getSponsorsByHackathon,
  groupSponsorsByTier,
  type SponsorDoc,
} from "@/lib/firestore";

import Image from "next/image";

const SponsorFooter = async () => {
  // Fetch sponsors from Firestore
  const sponsors = await getSponsorsByHackathon(CURRENT_HACKATHON);
  const sponsorsByTier = groupSponsorsByTier(sponsors);

  // Tier configuration for size and layout
  const TIER_ORDER = [
    "platinum",
    "gold",
    "silver",
    "bronze",
    "inkind",
  ] as const;
  const TIER_CONFIG = {
    platinum: {
      width: 300,
      height: 200,
      gap: "gap-12",
    },
    gold: { width: 240, height: 160, gap: "gap-12" },
    silver: { width: 180, height: 120, gap: "gap-8" },
    bronze: { width: 140, height: 93, gap: "gap-4" },
    inkind: { width: 120, height: 80, gap: "gap-4" },
  } as const;

  // Only render tiers that have sponsors
  const activeTiers = TIER_ORDER.filter(
    (tier) => sponsorsByTier[tier] && sponsorsByTier[tier].length > 0
  );

  // Container min-height based on background image aspect ratio (2660÷1920 = 138.54vw)
  return (
    <div className="relative flex flex-col w-full h-[138.54vw]">
      {/* Background gradient */}
      <div className="sticky top-0 min-h-screen bg-footer-radial z-0 -mb-[100vh]" />
      {/* Background graphic */}
      <div className="absolute inset-0">
        <Image
          src="/assets/sponsor-footer/background.svg"
          alt="Background pattern"
          fill
          priority
        />
      </div>

      <div className="z-10 flex flex-col items-center justify-between h-full pt-40 px-16 text-white">
        <div className="flex flex-col items-center gap-20">
          {activeTiers.map((tier) => (
            <div
              key={tier}
              className={`flex justify-center items-center ${TIER_CONFIG[tier].gap}`}
            >
              {sponsorsByTier[tier].map(
                (sponsor: SponsorDoc, index: number) => (
                  <a
                    key={index}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={sponsor.imgURL}
                      alt={sponsor.name}
                      width={TIER_CONFIG[tier].width}
                      height={TIER_CONFIG[tier].height}
                      className="object-contain"
                    />
                  </a>
                )
              )}
            </div>
          ))}
        </div>
        <div className="grow flex flex-col justify-end gap-[30dvw]">
          <Contact />
          <div className="flex flex-col items-center">
            <TeamGallery />
            <p className="font-bold my-4">Copyright © HackCamp 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorFooter;

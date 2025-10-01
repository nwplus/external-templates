import Contact from "@/components/sponsor-footer/contact";
import SponsorBlurbs from "@/components/sponsor-footer/sponsor-blurbs";
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
  const sponsorsWithBlurbs = sponsors.filter((sponsor) => sponsor.blurb);
  const sponsorsWithoutBlurbs = sponsors.filter((sponsor) => !sponsor.blurb);
  const sponsorsByTier = groupSponsorsByTier(sponsorsWithoutBlurbs);

  // Tier configuration for size and layout
  const TIER_ORDER = [
    "title",
    "platinum",
    "gold",
    "silver",
    "bronze",
    "startup",
    "inkind",
  ] as const;
  const TIER_CONFIG = {
    title: { width: 300, height: 200, gap: "gap-6 md:gap-12" },
    platinum: { width: 300, height: 200, gap: "gap-6 md:gap-12" },
    gold: { width: 240, height: 160, gap: "gap-6 md:gap-12" },
    silver: { width: 140, height: 100, gap: "gap-4 md:gap-8" },
    bronze: { width: 120, height: 90, gap: "gap-4 md:gap-6" },
    startup: { width: 120, height: 80, gap: "gap-4 md:gap-6" },
    inkind: { width: 120, height: 80, gap: "gap-4 md:gap-6" },
  } as const;

  // Only render tiers that have sponsors
  const activeTiers = TIER_ORDER.filter(
    (tier) => sponsorsByTier[tier] && sponsorsByTier[tier].length > 0
  );

  return (
    <div className="relative flex flex-col w-full" id="sponsors">
      {/* Background gradient */}
      <div className="sticky top-0 min-h-screen bg-footer-radial z-0 -mb-[100vh]" />
      {/* Background graphic */}
      <div className="absolute inset-x-0 bottom-0">
        <Image
          src="/assets/sponsor-footer/background.svg"
          alt="Background pattern"
          width={1920}
          height={2660}
          priority
          className="hidden md:block w-full"
        />
        <Image
          src="/assets/sponsor-footer/background-mobile.png"
          alt="Background pattern"
          width={393}
          height={1197}
          priority
          className="block md:hidden w-full"
        />
      </div>

      <div className="z-10 flex flex-col gap-8 items-center justify-between h-full md:pt-12 md:px-16 text-white overflow-y-clip">
        <SponsorBlurbs sponsors={sponsorsWithBlurbs} />
        <div className="flex flex-col items-center gap-12 md:gap-20">
          {activeTiers.map((tier) => (
            <div
              key={tier}
              className={`flex justify-center items-center flex-wrap ${TIER_CONFIG[tier].gap}`}
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
          {Array.from({
            length: TIER_ORDER.length - activeTiers.length - 1,
          }).map((_, i) => (
            <div className="h-10" key={i} />
          ))}
        </div>
        <div className="grow flex flex-col justify-end w-full gap-[25dvw] md:gap-[12dvw] xl:gap-[50dvw]">
          <Contact />
          <div className="flex flex-col items-center">
            <TeamGallery />
            <p className="p-2 md:w-[70vw] text-center my-4 text-xs md:text-base">
              nwPlus acknowledges that our members have the privilege of living,
              learning and facilitating hackathons on the traditional,
              ancestral, and stolen territory of the xʷməθkʷəy̓əm (Musqueam) and
              səlilwətaɬ (Tsleil-Waututh) peoples. As members of nwPlus, we play
              an active role in reconciliation and are working to learn and
              expand our knowledge on the history of Indigenous peoples. To
              learn more, visit{" "}
              <a
                href="https://guides.library.ubc.ca/xwi7xwaresearchguide"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                xwi7xwa&apos;s Research Guide
              </a>
              .
            </p>
            <p className="text-sm font-bold mb-4">Copyright © HackCamp 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorFooter;

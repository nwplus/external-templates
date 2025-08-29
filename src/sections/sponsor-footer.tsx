import Contact from "@/components/social/contact";
import TeamGallery from "@/components/team-gallery";

import Image from "next/image";

const SponsorFooter = () => {
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
        <div className="grid grid-cols-2 gap-20">
          {[...Array(6)].map((_, i) => (
            <Image
              src="/assets/sponsor-footer/image 162.png"
              alt="Sponsor Footer"
              width={200}
              height={200}
              key={i}
            />
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

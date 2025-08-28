import Contact from "@/components/social/contact";

import Image from "next/image";

const SponsorFooter = () => {
  return (
    <div className="relative flex flex-col w-full min-h-[140rem]">
      {/* Gradient that stays pinned to viewport top - positioned at start but not affecting layout */}
      <div className="sticky top-0 h-[100vh] bg-footer-radial z-0 -mb-[100vh]" />
      {/* Background graphic */}
      <div className="absolute inset-0">
        <Image
          src="/assets/sponsor-footer/background.svg"
          alt="Background pattern"
          fill
          priority
        />
      </div>

      <div className="z-10 flex flex-col items-center pt-40 px-16 text-white">
        <div className="grid grid-cols-2 gap-20">
          {[...Array(6)].map((i) => (
            <Image
              src="/assets/sponsor-footer/image 162.png"
              alt="Sponsor Footer"
              width={400}
              height={400}
              key={i}
            />
          ))}
        </div>
        <div className="h-[38rem]"></div>
        <Contact />
      </div>
    </div>
  );
};

export default SponsorFooter;

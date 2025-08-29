import Contact from "@/components/social/contact";

import Image from "next/image";

const SponsorFooter = () => {
  // Container min-height based on background image aspect ratio (2660÷1920 = 138.54vw)
  return (
    <div className="relative flex flex-col w-full min-h-[138.54vw]">
      {/* Background gradient */}
      <div className="sticky top-0 h-screen bg-footer-radial z-0 -mb-[100vh]" />
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
          {[...Array(6)].map((_, i) => (
            <Image
              src="/assets/sponsor-footer/image 162.png"
              alt="Sponsor Footer"
              width={400}
              height={400}
              key={i}
            />
          ))}
        </div>
        <div className="h-[34rem]"></div>
        <Contact />
      </div>
    </div>
  );
};

export default SponsorFooter;

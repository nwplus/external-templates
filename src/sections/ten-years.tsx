"use client";

import TenYearsMobile from "@/components/mobile/ten-years-mobile";
import ImageCarousel from "@/components/ten-years/image-carousel";

import Image from "next/image";
import Link from "next/link";

/**
 * Desktop version of Ten Years page
 */
const panelClassName =
  "relative min-h-screen flex items-center py-16 bg-center bg-no-repeat";

function TenYearsDesktop() {
  return (
    <div className="relative z-20">
      <div
        className={panelClassName}
        style={{
          backgroundColor: "#769854",
          backgroundImage: "url(/assets/ten-years/graphics/backdrop-1.png)",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="w-full max-w-7xl ml-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center text-white">
            <div className="hidden lg:block"></div>

            <div className="lg:col-span-2 space-y-4">
              <div>
                <div className="relative">
                  <Image
                    src="/assets/ten-years/graphics/10-years-title.svg"
                    alt="10 Years of HackCamp!"
                    width={410}
                    height={90}
                    className="w-full max-w-md"
                  />
                </div>

                <div className="space-y-6">
                  <div className="relative w-full max-w-md" id="10-years">
                    <Image
                      src="/assets/ten-years/graphics/image-background.svg"
                      alt="Image background"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 p-3 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src="/assets/ten-years/10-years-1.png"
                          alt="HackCamp participants"
                          fill
                          className="object-cover rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 max-w-2xl text-white">
                <h2 className="text-4xl font-title">
                  HackCamp has come a long way.
                </h2>
                <p className="text-md leading-relaxed">
                  It all began with Local Hack Day, a global initiative by Major
                  League Hacking where campuses around the world hosted a
                  beginner-friendly 12-hour hackathon - all on the same day!
                </p>
                <p className="text-md leading-relaxed">
                  At UBC, the very first Local Hack Day was organized in 2016 by
                  just two passionate students, <em>Kristen</em> and{" "}
                  <em>Charmaine</em>, under the UBC Hacks club, with a goal to
                  make hackathons more accessible and inclusive for everyone in
                  the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={panelClassName}
        style={{
          backgroundColor: "#233E25",
          backgroundImage: "url(/assets/ten-years/graphics/backdrop-2.png)",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="w-full max-w-7xl ml-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center text-white">
            <div className="hidden lg:block"></div>

            <div className="lg:col-span-2 space-y-4 text-md">
              <div className="space-y-6">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/assets/ten-years/graphics/image-background.svg"
                    alt="Image background"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 p-3 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <ImageCarousel
                        images={[
                          "/assets/ten-years/10-years-2-1.png",
                          "/assets/ten-years/10-years-2-2.svg",
                          "/assets/ten-years/10-years-2-3.svg",
                        ]}
                        alt="HackCamp event photo"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="leading-relaxed max-w-xl">
                  In 2018, Local Hack Day and UBC Hacks merged with the team
                  behind nwHacks to form the club you now know as nwPlus. That
                  same year, nwPlus went on to host the largest Local Hack Day
                  in North America, welcoming over 350 attendees!
                </p>

                <div className="space-y-4">
                  <p className="font-semibold">
                    By 2019, the event had grown so much that it evolved into
                    three seasonal editions:
                  </p>
                  <ul className="list-disc text-base ml-8">
                    <li>Learn Day (October)</li>
                    <li>Build Week (November/December)</li>
                    <li>
                      Share Day (planned for April 2020, but later cancelled due
                      to the pandemic)
                    </li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Then in 2020, Local Hack Day officially transformed into what
                  we now call HackCamp, a weekend-long bootcamp hackathon
                  designed for beginners and tech lovers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={panelClassName}
        style={{
          backgroundColor: "#07171C",
          backgroundImage: "url(/assets/ten-years/graphics/backdrop-3.png)",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="w-full max-w-7xl ml-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center text-white">
            <div className="hidden lg:block"></div>

            <div className="lg:col-span-2 space-y-4">
              <div className="space-y-6">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/assets/ten-years/graphics/image-background.svg"
                    alt="Image background"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 p-3 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <ImageCarousel
                        images={[
                          "/assets/ten-years/10-years-3-1.svg",
                          "/assets/ten-years/10-years-3-2.svg",
                          "/assets/ten-years/10-years-3-3.png",
                        ]}
                        alt="HackCamp anniversary image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 max-w-2xl text-md">
                <p className="leading-relaxed max-w-lg">
                  This November, HackCamp returns for its{" "}
                  <strong>10th anniversary!</strong> While the name has changed
                  throughout the years, the mission remains the same.
                </p>

                <div className="space-y-4">
                  <p className="font-semibold">
                    To promote diversity, inclusivity, and accessibility by:
                  </p>
                  <ul className="list-disc text-base ml-8">
                    <li>
                      Bringing students together to tackle real-world challenges
                    </li>
                    <li>
                      Creating a beginner-friendly space for students from all
                      backgrounds, disciplines, and experience levels to learn,
                      build, and connect
                    </li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  We can&apos;t wait to see what you&apos;ll create at this
                  milestone edition of HackCamp. Come celebrate a decade of
                  hacking with us!
                </p>

                <p className="mb-4">
                  Read more about HackCamp&apos;s history{" "}
                  <Link
                    href="https://medium.com/nwplusubc/the-evolution-of-hackcamp-526d32592641"
                    className="text-blue-300 hover:text-blue-200 underline"
                  >
                    here
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://kristen.dev/blog/2018-12-20/"
                    className="text-blue-300 hover:text-blue-200 underline"
                  >
                    here
                  </Link>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TenYears() {
  return (
    <>
      <div className="block md:hidden">
        <TenYearsMobile />
      </div>

      <div className="hidden md:block">
        <TenYearsDesktop />
      </div>
    </>
  );
}

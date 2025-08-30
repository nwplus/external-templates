"use client";

import ImageCarousel from "@/components/ten-years/image-carousel";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/**
 * Ten Years page
 */
export default function TenYears() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundColor1 = "#769854";
  const backgroundColor2 = "#233E25";
  const backgroundColor3 = "#07171C";

  const section1Progress = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const section2Progress = useTransform(
    scrollYProgress,
    [0.15, 0.4, 0.6],
    [0, 1, 0]
  );
  const section3Progress = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);

  const backgroundOpacity1 = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const backgroundOpacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [0, 1, 1, 0]
  );
  const backgroundOpacity3 = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);

  const activeDot = useTransform(scrollYProgress, (progress) => {
    if (progress > 0.45) return 2;
    if (progress > 0.15) return 1;
    return 0;
  });

  return (
    // Container min-height based on background image aspect ratio * 3 background images (1080÷1920 = 56.25vw * 3 = 168.75vw)
    <div ref={containerRef} className="relative h-[168.75vw]">
      <div className="sticky top-0 h-[56.25vw] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundColor: useTransform(
              scrollYProgress,
              [0, 0.2, 0.3, 0.5, 0.6, 1],
              [
                backgroundColor1,
                backgroundColor1,
                backgroundColor2,
                backgroundColor2,
                backgroundColor3,
                backgroundColor3,
              ]
            ),
          }}
        />

        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/ten-years/backdrop-1.png)",
            opacity: backgroundOpacity1,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/ten-years/backdrop-2.png)",
            opacity: backgroundOpacity2,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/ten-years/backdrop-3.png)",
            opacity: backgroundOpacity3,
          }}
        />

        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              style={{ opacity: section1Progress }}
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full max-w-7xl ml-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center text-white">
                  <div className="hidden lg:block"></div>

                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <div className="relative">
                        <Image
                          src="/ten-years/10-years-title.svg"
                          alt="10 Years of HackCamp!"
                          width={410}
                          height={90}
                          className="w-full max-w-md"
                        />
                      </div>

                      <div className="space-y-6">
                        <div className="relative w-full max-w-md">
                          <Image
                            src="/ten-years/image-background.svg"
                            alt="Image background"
                            width={400}
                            height={300}
                            className="w-full h-auto"
                          />
                          <div className="absolute inset-0 p-3 flex items-center justify-center">
                            <div className="relative w-full h-full">
                              <Image
                                src="/assets/10-years-1.png"
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
                      <p className="text-lg leading-relaxed">
                        It all began with Local Hack Day, a global initiative by
                        Major League Hacking where campuses around the world
                        hosted a beginner-friendly 12-hour hackathon - all on
                        the same day!
                      </p>
                      <p className="text-lg leading-relaxed">
                        At UBC, the very first Local Hack Day was organized in
                        2016 by just two passionate students, <em>Kristen</em>{" "}
                        and <em>Charmaine</em>, under the UBC Hacks club, with a
                        goal to make hackathons more accessible and inclusive
                        for everyone in the community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: section2Progress }}
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full max-w-7xl ml-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center text-white">
                  <div className="hidden lg:block"></div>

                  <div className="lg:col-span-2 space-y-8 text-md">
                    <div className="space-y-6">
                      <div className="relative w-full max-w-md">
                        <Image
                          src="/ten-years/image-background.svg"
                          alt="Image background"
                          width={400}
                          height={300}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 p-3 flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <ImageCarousel
                              images={[
                                "/assets/10-years-2-1.png",
                                "/assets/10-years-2-2.svg",
                                "/assets/10-years-2-3.svg",
                              ]}
                              alt="HackCamp event photo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 max-w-2xl">
                      <p className="leading-relaxed max-w-xl">
                        In 2018, Local Hack Day and UBC Hacks merged with the
                        team behind nwHacks to form the club you now know as
                        nwPlus. That same year, nwPlus went on to host the
                        largest Local Hack Day in North America, welcoming over
                        350 attendees!
                      </p>

                      <div className="space-y-4">
                        <p className="font-semibold">
                          By 2019, the event had grown so much that it evolved
                          into three seasonal editions:
                        </p>
                        <ul className="list-disc text-base ml-8">
                          <li>Learn Day (October)</li>
                          <li>Build Day (November/December)</li>
                          <li>
                            Share Day (planned for April 2020, but later
                            cancelled due to the pandemic)
                          </li>
                        </ul>
                      </div>

                      <p className="leading-relaxed">
                        Then in 2020, Local Hack Day officially transformed into
                        what we now call HackCamp***, a weekend-long bootcamp
                        hackathon designed for beginners and tech lovers
                        worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: section3Progress }}
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full max-w-7xl ml-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center text-white">
                  <div className="hidden lg:block"></div>

                  <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-6">
                      <div className="relative w-full max-w-md">
                        <Image
                          src="/ten-years/image-background.svg"
                          alt="Image background"
                          width={400}
                          height={300}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 p-3 flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <ImageCarousel
                              images={[
                                "/assets/10-years-3-1.svg",
                                "/assets/10-years-3-2.svg",
                                "/assets/10-years-3-3.png",
                              ]}
                              alt="HackCamp anniversary image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 max-w-2xl text-md">
                      <p className="leading-relaxed max-w-lg">
                        This November 16- 17, HackCamp returns for its{" "}
                        <strong>10th anniversary!</strong> While the name has
                        changed throughout the years, the mission remains the
                        same.
                      </p>

                      <div className="space-y-4">
                        <p className="font-semibold">
                          To promote diversity, inclusivity, and accessibility
                          by:
                        </p>
                        <ul className="list-disc text-base ml-8">
                          <li>
                            Bringing students together to tackle real-world
                            challenges
                          </li>
                          <li>
                            Creating a beginner-friendly space for students from
                            all backgrounds, disciplines, and experience levels
                            to learn, build, and connect
                          </li>
                        </ul>
                      </div>

                      <p className="leading-relaxed">
                        We can&apos;t wait to see what you&apos;ll create at
                        this milestone edition of HackCamp. Come celebrate a
                        decade of hacking with us!
                      </p>

                      <div className="pt-4">
                        <p className="mb-4">
                          Read more about HackCamp&apos;s history{" "}
                          <Link
                            href="#"
                            className="text-blue-300 hover:text-blue-200 underline"
                          >
                            here
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="#"
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
            </motion.div>
          </div>
        </div>
        {/* <BufferGrassTop className=" w-full" /> */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-40 -translate-y-8 z-20">
          <div className="flex flex-col space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Dot key={index} index={index} active={activeDot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot({
  index,
  active,
}: {
  index: number;
  active: MotionValue<0 | 1 | 2>;
}) {
  return (
    <motion.div
      key={index}
      className="w-3 h-3 rounded-full border-2 border-white cursor-pointer"
      style={{
        backgroundColor: useTransform(active, (active) =>
          index === active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)"
        ),
        scale: useTransform(active, (active) => (index === active ? 1.2 : 1)),
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    />
  );
}

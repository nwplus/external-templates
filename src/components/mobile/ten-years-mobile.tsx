"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Mobile view for Ten Years section
 */
export default function TenYearsMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["0%", "100%"]
  );
  const canoePosition = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9, 1],
    ["3%", "50%", "84%", "84%"]
  );

  // Fix: we shouldn't need this but canoe gets compressed by the mobile container across progress bar
  const canoeScale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const section1Opacity = useTransform(
    scrollYProgress,
    [0, 0.33, 0.38, 0.43],
    [1, 1, 0.5, 0]
  );
  const section2Opacity = useTransform(
    scrollYProgress,
    [0.38, 0.43, 0.79, 0.84],
    [0, 1, 1, 0]
  );
  const section3Opacity = useTransform(scrollYProgress, [0.81, 0.86], [0, 1]);

  const circle0Background = useTransform(
    scrollYProgress,
    [0, 0.02],
    ["#FFE4D0", "#D94713"]
  );
  const circle1Background = useTransform(
    scrollYProgress,
    [0.41, 0.43],
    ["#FFE4D0", "#D94713"]
  );
  const circle2Background = useTransform(
    scrollYProgress,
    [0.84, 0.85],
    ["#FFE4D0", "#D94713"]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] pb-[5vh]"
      style={{
        background:
          "linear-gradient(to bottom, #bfa28b 0%, #769854 6%, #233E25 59%, #081C20 100%)",
      }}
      id="10-years-mobile"
    >
      <div className="sticky top-6 h-[100vh] flex flex-col justify-between px-4 z-20">
        <Image
          src="/assets/ten-years/graphics/10-years-title.svg"
          alt="10 Years of HackCamp!"
          width={300}
          height={60}
          className="mx-auto mb-6"
        />

        <div className="w-full max-w-md">
          <div className="relative mb-4">
            <motion.div
              className="absolute -top-6"
              style={{
                left: canoePosition,
                transform: "translateX(-50%)",
                scale: canoeScale,
              }}
            >
              <Image
                src="/assets/ten-years/graphics/10-years-canoe.svg"
                alt="Canoe progress indicator"
                width={60}
                height={35}
                className="opacity-100"
              />
            </motion.div>
          </div>

          <div className="relative max-w-xs mx-auto">
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
              <div className="w-full h-1 bg-[#FFE4D0] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#D94713] rounded-full"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center relative z-10">
              {[0, 1, 2].map((index) => {
                return (
                  <motion.div
                    key={index}
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:
                        index === 0
                          ? circle0Background
                          : index === 1
                            ? circle1Background
                            : circle2Background,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <motion.div
              style={{ opacity: section1Opacity }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white"
            >
              <div className="relative w-full max-w-xs mb-6 px-4">
                <Image
                  src="/assets/ten-years/graphics/image-background.svg"
                  alt="Image background"
                  width={240}
                  height={180}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 p-3 flex items-center justify-center">
                  <div className="relative w-[90%] h-[100%]">
                    <Image
                      src="/assets/ten-years/10-years-1.png"
                      alt="HackCamp founders"
                      fill
                      className="object-cover rounded-md"
                      sizes="240px"
                    />
                  </div>
                </div>
              </div>

              <div className="text-left space-y-3 px-10 text-[13.5px]">
                <h3 className="text-2xl font-title font-bold text-center">
                  HackCamp has come a long way.
                </h3>
                <p className="leading-relaxed">
                  It all began with Local Hack Day, a global initiative by Major
                  League Hacking where campuses around the world hosted a
                  beginner-friendly 12-hour hackathon - all on the same day!
                </p>
                <p className="leading-relaxed">
                  At UBC, the very first Local Hack Day was organized in 2016 by
                  just two passionate students, <em>Kristen</em> and{" "}
                  <em>Charmaine</em>, under the UBC Hacks club, with a goal to
                  make hackathons more accessible and inclusive for everyone in
                  the community.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: section2Opacity }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white pt-20"
            >
              <div className="relative w-full max-w-xs mb-6 px-4">
                <Image
                  src="/assets/ten-years/graphics/image-background.svg"
                  alt="Image background"
                  width={240}
                  height={180}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 p-3 flex items-center justify-center">
                  <div className="relative w-[90%] h-[100%]">
                    <Image
                      src="/assets/ten-years/10-years-2-1.png"
                      alt="HackCamp growth"
                      fill
                      className="object-cover rounded-md"
                      sizes="240px"
                    />
                  </div>
                </div>
              </div>

              <div className="text-left space-y-3 px-10 text-[13px]">
                <p className="leading-relaxed">
                  In 2018, Local Hack Day and UBC Hacks merged with the team
                  behind nwHacks to form the club you now know as nwPlus. That
                  same year, nwPlus went on to host the largest Local Hack Day
                  in North America, welcoming over 350 attendees!
                </p>

                <div className="space-y-2">
                  <p className="font-semibold">
                    By 2019, the event had grown so much that it evolved into
                    three seasonal editions:
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Learn Day (October)</li>
                    <li>Build Day (November/December)</li>
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
            </motion.div>

            <motion.div
              style={{ opacity: section3Opacity }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white pt-20"
            >
              <div className="relative w-full max-w-xs mb-6 px-4">
                <Image
                  src="/assets/ten-years/graphics/image-background.svg"
                  alt="Image background"
                  width={240}
                  height={180}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 p-3 flex items-center justify-center">
                  <div className="relative w-[90%] h-[100%]">
                    <Image
                      src="/assets/ten-years/10-years-3-3.png"
                      alt="HackCamp anniversary"
                      fill
                      className="object-cover rounded-md"
                      sizes="240px"
                    />
                  </div>
                </div>
              </div>

              <div className="text-left space-y-3 px-10 text-[13px]">
                <p className="leading-relaxed">
                  This November, HackCamp returns for its{" "}
                  <strong>10th anniversary!</strong> While the name has changed
                  throughout the years, the mission remains the same.
                </p>

                <div className="space-y-2">
                  <p className="font-semibold">
                    To promote diversity, inclusivity, and accessibility by:
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
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

                <div className="space-y-2">
                  Read more about HackCamp&apos;s history{" "}
                  <Link
                    href="https://medium.com/nwplusubc/the-evolution-of-hackcamp-526d32592641"
                    className="text-blue-300 hover:text-blue-200 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://kristen.dev/blog/2018-12-20/"
                    className="text-blue-300 hover:text-blue-200 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </Link>
                  !
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[18vw] left-0 right-0 z-10">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_grass_buffer.svg"
          alt="Grass buffer"
          width={393}
          height={153}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

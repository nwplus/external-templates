"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

/**
 * Mobile view for Ten Years section
 */
export default function TenYearsMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "99%"]);
  const canoePosition = useTransform(scrollYProgress, [0, 1], ["4%", "85%"]);

  const section1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.35], [1, 1, 0.5, 0]);
  const section2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const section3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.85, 1], [0, 1, 1, 0.8]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.3) setCurrentSection(0);
      else if (latest < 0.6) setCurrentSection(1);
      else setCurrentSection(2);
    });
  }, [scrollYProgress]);

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh]"
      style={{
        background: "linear-gradient(to bottom, #bfa28b 0%, #769854 6%, #233E25 59%, #081C20 100%)"
      }}
      id="10-years"
    >

      <div className="text-center pt-8 pb-4">
        <Image
          src="/assets/ten-years/graphics/10-years-title.svg"
          alt="10 Years of HackCamp!"
          width={300}
          height={60}
          className="mx-auto"
        />
      </div>

      <div className="sticky top-6 h-screen flex flex-col justify-between p-4">

        <div className="w-full max-w-xs mx-auto mb-8">
          <div className="relative mb-4">
            <motion.div
              className="absolute -top-6"
              style={{
                left: canoePosition,
                transform: "translateX(-50%) scale(1)",
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

          <div className="relative">
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
                const circleThreshold = index === 2 ? 0.98 : index * 0.5;
                const isReached = useTransform(
                  scrollYProgress,
                  [circleThreshold, circleThreshold + 0.01],
                  [0, 1]
                );

                return (
                  <motion.div
                    key={index}
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: useTransform(
                        isReached,
                        [0, 1],
                        ['#FFE4D0', '#D94713']
                      )
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

              <div className="text-left space-y-3 px-8">
                <h3 className="text-xl font-title font-bold text-center">HackCamp has come a long way.</h3>
                <p className="text-xs leading-relaxed">
                  It all began with Local Hack Day, a global initiative by Major League Hacking where campuses around the world hosted a beginner-friendly 12-hour hackathon - all on the same day!
                </p>
                <p className="text-xs leading-relaxed">
                  At UBC, the very first Local Hack Day was organized in 2016 by just two passionate students, <em>Kristen</em> and <em>Charmaine</em>, under the UBC Hacks club, with a goal to make hackathons more accessible and inclusive for everyone in the community.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: section2Opacity }}
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
                      src="/assets/ten-years/10-years-2-1.png"
                      alt="HackCamp growth"
                      fill
                      className="object-cover rounded-md"
                      sizes="240px"
                    />
                  </div>
                </div>
              </div>

              <div className="text-left space-y-3 px-8">
                <p className="text-xs leading-relaxed">
                  In 2018, Local Hack Day and UBC Hacks merged with the team behind nwHacks to form the club you now know as nwPlus. That same year, nwPlus went on to host the largest Local Hack Day in North America, welcoming over 350 attendees!
                </p>

                <div className="space-y-2">
                  <p className="font-semibold text-xs">
                    By 2019, the event had grown so much that it evolved into three seasonal editions:
                  </p>
                  <ul className="list-disc text-xs ml-6 space-y-1">
                    <li>Learn Day (October)</li>
                    <li>Build Day (November/December)</li>
                    <li>Share Day (planned for April 2020, but later cancelled due to the pandemic)</li>
                  </ul>
                </div>

                <p className="text-xs leading-relaxed">
                  Then in 2020, Local Hack Day officially transformed into what we now call HackCamp, a weekend-long bootcamp hackathon designed for beginners and tech lovers worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: section3Opacity }}
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
                      src="/assets/ten-years/10-years-3-3.png"
                      alt="HackCamp anniversary"
                      fill
                      className="object-cover rounded-md"
                      sizes="240px"
                    />
                  </div>
                </div>
              </div>

              <div className="text-left space-y-3 px-8">
                <p className="text-xs leading-relaxed">
                  This November, HackCamp returns for its <strong>10th anniversary!</strong> While the name has changed throughout the years, the mission remains the same.
                </p>

                <div className="space-y-2">
                  <p className="font-semibold text-xs">
                    To promote diversity, inclusivity, and accessibility by:
                  </p>
                  <ul className="list-disc text-xs ml-6 space-y-1">
                    <li>Bringing students together to tackle real-world challenges</li>
                    <li>Creating a beginner-friendly space for students from all backgrounds, disciplines, and experience levels to learn, build, and connect</li>
                  </ul>
                </div>

                <p className="text-xs leading-relaxed">
                  We can't wait to see what you'll create at this milestone edition of HackCamp. Come celebrate a decade of hacking with us!
                </p>

                <div className="space-y-2">
                  <p className="text-xs">
                    Read more about HackCamp's history{" "}
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
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </div>
  );
}

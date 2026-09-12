"use client";

import StatsTestimonialsMobile from "@/components/mobile/stats-testimonials-mobile";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/**
 * Desktop version of Stats and testimonials page
 */
function StatsTestimonialsDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const nuggetX = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const nuggetY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Container min-height based on background image aspect ratio (2459÷1920 = 128.07vw)
  return (
    <motion.div
      ref={containerRef}
      className="relative w-screen h-[128.07vw]"
      id="stats"
    >
      <Image
        src={"/assets/stats-and-testimonials/graphics/grasstents.png"}
        alt="Stats background"
        width={1000}
        height={100}
        className="absolute inset-0 w-[100vw] h-[47.25vw] top-[9.56vw] z-30 -left-[19vw]"
      />

      <Image
        src={"/assets/stats-and-testimonials/graphics/mountains-and-sun.png"}
        alt="Stats background"
        width={1000}
        height={100}
        className="absolute inset-0 w-[100vw] h-[32.63vw] left-[3.6vw] top-[3.38vw] z-5"
      />

      {/* covers up the weird river edge from recap section */}
      <div className="absolute top-[53.44vw] left-[2vw] bg-[#b4eaf2] w-[7.5vw] h-[7.5vw] rounded-full  z-50"></div>

      <div className="absolute inset-0 z-0 min-h-[28.13vw] max-h-[40.5vw]">
        <Image
          src="/assets/stats-and-testimonials/graphics/sky.svg"
          alt="Sky background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* <motion.div
        style={{ y: mountainsY }}
        className="absolute top-[10vh] left-0 w-full h-[100vh] z-5"
      >
        <Image
          src="/assets/stats-and-testimonials/graphics/stats-backdrop-255-participants-sign.png"
          alt="Mountains background"
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div> */}

      <div className="absolute top-[30.94vw] left-0 w-full h-[120vw] z-10">
        <Image
          src="/assets/stats-and-testimonials/graphics/river.svg"
          alt="River background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="absolute -right-[0.83vw] top-[2.81vw] bottom-0 z-30">
        <Image
          src="/assets/stats-and-testimonials/graphics/waterfall-60-projects-sign.svg"
          alt="Waterfall with mist"
          height={600}
          width={900}
          className="w-[46.88vw] h-auto object-cover object-right"
        />
      </div>

      <div className="absolute top-[27vw] left-[0.42vw] z-40">
        <div className="relative">
          <Image
            src="/assets/stats-and-testimonials/graphics/boats-and-stat.svg"
            alt="Boats with participants"
            width={850}
            height={580}
            className="w-[31.25vw] h-auto"
          />
        </div>
      </div>

      <motion.div className="absolute right-0 top-[39.38vw] z-30 h-1/2">
        <Image
          src="/assets/stats-and-testimonials/graphics/first-island-300-raised-for-charity-sign.svg"
          alt="First island"
          height={600}
          width={900}
          className="w-[46.88vw] h-auto object-cover object-bottom"
        />
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="absolute right-0 -top-[11.67vw] z-50"
          >
            <Image
              src="/assets/stats-and-testimonials/graphics/deer w binoculars.svg"
              alt="Deer with binoculars"
              width={175}
              height={300}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute right-[2.5vw] -top-[5vw] z-50"
          >
            <Image
              src="/assets/stats-and-testimonials/graphics/bear pointing.svg"
              alt="Bear pointing"
              width={250}
              height={300}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="absolute top-[61.88vw] right-0 z-30 h-1/3">
        <Image
          src="/assets/stats-and-testimonials/graphics/middle island.svg"
          alt="Middle island"
          height={600}
          width={750}
          className="w-[39.06vw] h-auto object-contain object-bottom"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ x: nuggetX, y: nuggetY }}
        className="absolute top-[59.06vw] left-[10vw] z-20"
      >
        <Image
          src="/assets/stats-and-testimonials/graphics/nugget tube.svg"
          alt="Nugget floating in tube"
          width={550}
          height={350}
          className="w-[21.67vw] h-auto"
        />
      </motion.div>

      <motion.div className="relative z-40 min-h-[56.25vw]">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-title absolute top-[1.67vw] left-[5vw] text-[3.13vw] font-bold text-gray-800 z-50"
        >
          Last Year We Had...
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}

/**
 * Page switches between mobile/desktop components to create responsive view
 */
export default function StatsTestimonials() {
  return (
    <>
      <div className="block md:hidden">
        <StatsTestimonialsMobile />
      </div>

      <div className="hidden md:block">
        <StatsTestimonialsDesktop />
      </div>
    </>
  );
}

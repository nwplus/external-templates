"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/**
 * Mobile view for the Stats section
 */
export default function StatsTestimonialsMobile() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const nuggetY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const nuggetX = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div ref={containerRef} className="relative min-h-[200vw]">
      <div className="absolute inset-0 h-[97.4vw]">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_sky.svg"
          alt="Mobile sky background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 top-[21.64vw] overflow-hidden z-1">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_stats_backdrop.svg"
          alt="Mobile stats backdrop"
          width={1000}
          height={100}
          className="object-cover object-center"
        />
      </div>

      <div className="absolute top-[86.56vw] left-0 w-full h-[302.96vw] z-0">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_river.svg"
          alt="Mobile river background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="absolute top-[17.31vw] right-0 w-[70%] z-2">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_waterfall.svg"
          alt="Mobile waterfall"
          width={1000}
          height={300}
          className="object-contain object-right"
        />
      </div>

      <div className="absolute top-[18.5%] -left-[5.13vw] z-10">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_stat_canoe.svg"
          alt="Stats canoe"
          width={342}
          height={312}
          className="w-[85vw] h-auto object-contain"
        />
      </div>

      <div className="absolute top-[25%] right-0 w-[65%] z-10">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_300_sign_island.svg"
          alt="Mobile island with sign"
          width={1000}
          height={300}
          className="object-contain"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ y: nuggetY, x: nuggetX }}
        className="absolute top-[30%] -left-[5.13vw] w-[45vw] h-[40vw] z-10"
      >
        <Image
          src="/assets/stats-and-testimonials/graphics/nugget tube.svg"
          alt="Nugget tube"
          fill
          className="object-contain object-bottom scale-x-[-1]"
        />
      </motion.div>

      <div className="relative z-10 pt-[12.31vw] ml-[4.1vw]" id="mobile-stats">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-title text-[7.69vw] font-bold text-gray-800 mb-[8.21vw]"
        >
          Last Year We Had...
        </motion.h2>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[30vw] overflow-hidden z-30">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_testimonial_ground.svg"
          alt="River bank closing the stats scene"
          width={900}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

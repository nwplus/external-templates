"use client";

import CarouselControls from "@/components/stats-testimonials/carousel-controls";
import { testimonials } from "@/sections/stats-testimonials";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/**
 * Mobile view for Stats and Testimonials section
 */
export default function StatsTestimonialsMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative min-h-[415vw]">
      <div className="absolute inset-0 h-[45vh]">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_sky.svg"
          alt="Mobile sky background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 top-[10vh] overflow-hidden z-1">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_stats_backdrop.svg"
          alt="Mobile stats backdrop"
          width={1000}
          height={100}
          className="object-cover object-center"
        />
      </div>

      <div className="absolute top-[40vh] left-0 w-full h-[140vh] z-0">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_river.svg"
          alt="Mobile river background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="absolute top-[8vh] right-0 w-[70%] z-2">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_waterfall.svg"
          alt="Mobile waterfall"
          width={1000}
          height={300}
          className="object-contain object-right"
        />
      </div>

      <div className="absolute top-[18.5%] -left-5 z-10">
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
        className="absolute top-[30%] -left-5 w-[45vw] h-[40vw] z-10"
      >
        <Image
          src="/assets/stats-and-testimonials/graphics/nugget tube.svg"
          alt="Nugget tube"
          fill
          className="object-contain object-bottom scale-x-[-1]"
        />
      </motion.div>

      <div className="relative z-10 pt-12 ml-4" id="mobile-stats">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-title text-3xl font-bold text-gray-800 mb-8"
        >
          Last Year We Had...
        </motion.h2>
      </div>

      <motion.div className="absolute top-[44.5%] left-1/2 transform -translate-x-1/2 z-40">
        <div className="relative w-[75vw] h-[50vw]">
          <Image
            src="/assets/stats-and-testimonials/graphics/mobile_testimonial_tube.svg"
            alt="Testimonial tube"
            fill
            className="object-contain"
          />

          <div className="absolute -top-[30%] left-[25%] w-[140px] h-[170px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Image
                  src={testimonials[currentSlide].photo}
                  alt={`${testimonials[currentSlide].name} profile picture`}
                  fill
                  className="object-contain object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 flex justify-center">
          <CarouselControls
            totalSlides={testimonials.length}
            currentSlide={currentSlide}
            onSlideChange={setCurrentSlide}
            className="justify-center"
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full z-30">
        <Image
          src="/assets/stats-and-testimonials/graphics/mobile_testimonial_ground.svg"
          alt="Testimonial ground background"
          width={900}
          height={600}
          className="w-full h-auto object-bottom"
        />
        <div
          className="absolute top-[6%] left-1/2 transform -translate-x-1/2"
          id="testimonials-mobile"
        >
          <h3 className="font-title text-4xl font-bold text-gray-800 text-center">
            Testimonials
          </h3>
        </div>
        <div className="absolute top-[20%] text-left left-1/2 transform -translate-x-1/2 w-full max-w-sm px-8">
          <div className="mb-3">
            <h4 className="text-2xl font-semibold text-gray-800 mb-1">
              {testimonials[currentSlide].name} (
              {testimonials[currentSlide].pronouns})
            </h4>
            <p className="text-lg font-medium">
              {testimonials[currentSlide].role} |{" "}
              {testimonials[currentSlide].program} |{" "}
              {testimonials[currentSlide].year}
            </p>
          </div>
          <div className="mb-4 text-[15px] leading-relaxed">
            &quot;{testimonials[currentSlide].testimonial}&quot;
          </div>

          <p className="text-lg text-center font-medium">
            {testimonials[currentSlide].devpost && (
              <a
                href={testimonials[currentSlide].devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Devpost
              </a>
            )}{" "}
            |{" "}
            {testimonials[currentSlide].linkedin && (
              <a
                href={testimonials[currentSlide].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

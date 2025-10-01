"use client";

import { SponsorDoc } from "@/lib/firestore";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import CarouselControls from "../stats-testimonials/carousel-controls";
import { Button } from "../ui/button";

const SponsorBlurbs = ({ sponsors }: { sponsors: SponsorDoc[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative flex justify-center py-20">
      <div className="absolute -top-[38vw] left-[55%] -translate-x-1/2 w-full -z-10">
        <Image
          src="/assets/sponsor-footer/blurbs-background.svg"
          alt="Sponsor Blurbs background"
          width={1561}
          height={442}
          priority
          className="w-full max-w-full! hidden xl:block"
        />
      </div>
      <div className="flex flex-col md:flex-row relative gap-8 md:gap-8 w-3/4 xl:w-1/2">
        <div className="flex flex-col justify-between items-center gap-8 basis-1/3 shrink-0">
          <div className="flex flex-col gap-8">
            <h2 className="font-title text-2xl text-center uppercase">
              Proudly Sponsored By
            </h2>
            <motion.div
              key={`image-${currentSlide}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Image
                src={sponsors[currentSlide].imgURL}
                alt={sponsors[currentSlide].name}
                width={400}
                height={400}
              />
            </motion.div>
          </div>
          <CarouselControls
            totalSlides={sponsors.length}
            currentSlide={currentSlide}
            onSlideChange={setCurrentSlide}
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <motion.p
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-xs"
          >
            {sponsors[currentSlide].blurb}
          </motion.p>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default SponsorBlurbs;

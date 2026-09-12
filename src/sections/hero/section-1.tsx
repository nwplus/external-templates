"use client";

import EntranceSign from "@/components/hero/entrance-sign";
import Sign from "@/components/hero/sign";
import { useCountdown } from "@/lib/useCountdown";

import Image from "next/image";
import { useEffect, useState } from "react";

import Navbar from "../../components/hero/navbar";
import { HeroClouds } from "@/components/hero/clouds";
import { HeroDecals } from "@/components/hero/decals";
import { HeroCloudsInner } from "@/components/hero/clouds-inner";

const carImages = [
  {
    src: "/assets/hero/car1.svg",
    alt: "First car",
    left: "43vw",
    top: "34vw",
    width: "13vw",
    scrollRange: [0, 0.25], // Show from 0% to 30% scroll
  },
  {
    src: "/assets/hero/car2.svg",
    alt: "Second car",
    left: "50vw",
    top: "41vw",
    width: "24vw",
    scrollRange: [0.25, 0.5], // Show from 0% to 30% scroll
  },
  {
    src: "/assets/hero/car3.svg",
    alt: "Third car",
    left: "67vw",
    top: "56vw",
    width: "27vw",
    scrollRange: [0.5, 0.75], // Show from 0% to 30% scroll
  },
  {
    src: "/assets/hero/car4.svg",
    alt: "Fourth car",
    left: "70vw",
    top: "82vw",
    width: "24vw",
    scrollRange: [0.75, 1], // Show from 0% to 30% scroll
  },
];

const Section1 = () => {
  const { days, hours, minutes } = useCountdown();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionStart = 0;
      const sectionHeight = window.innerHeight * 1.1;
      const sectionEnd = sectionStart + sectionHeight;

      if (scrollTop < sectionStart) {
        setScrollProgress(0);
      } else if (scrollTop > sectionEnd) {
        setScrollProgress(1);
      } else {
        const progress = (scrollTop - sectionStart) / sectionHeight;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCarOpacity = (scrollRange: number[]) => {
    const [start, end] = scrollRange;

    if (scrollProgress < start || scrollProgress > end) {
      return 0;
    }
    return 1;
  };

  // Container min-height based on background image aspect ratio (2238÷1920 = 116.56vw)
  return (
    <div className="bg-linear-to-b from-[#0B0F27] to-[#28418D]">
      <Navbar />
      <div className="relative w-full">
        <HeroClouds />
        <div className="absolute inset-x-0 top-0">
          <HeroCloudsInner />
        </div>
        {/* <HeroDecals /> */}
      </div>
    </div>
  );
};

export default Section1;

"use client";

import { useCountdown } from "@/lib/useCountdown";

import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import Navbar from "../../components/hero/navbar";
import { TopCloudScrim } from "@/components/hero/top-cloud-scrim";
import { TopCloudInnerScrim } from "@/components/hero/top-cloud-inner-scrim";

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

const CtaLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "bg-[#EEB62A] text-2xl font-bold rounded-md px-4 py-2.5 hover:opacity-80 transition-opacity",
      className
    )}
  >
    {children}
  </a>
);

const Section1 = () => {
  const { days, minutes, seconds } = useCountdown();
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

  return (
    <div className="bg-linear-to-b from-[#0B0F27] to-[#28418D]">
      <Navbar />

      {/* Hero wrapper */}
      <div className="relative top-0 w-full">

        {/* Cloud decal */}
        <div className="absolute top-0 left-0 w-full">
          <TopCloudScrim />
        </div>

        {/* Inner cloud decal */}
        <div className="absolute top-0 left-0 w-full">
          <TopCloudInnerScrim />
        </div>

        {/* Hero content */}
        <div className="relative z-20 min-h-screen pt-50">

          {/* Hero text */}
          <div className=" mx-auto w-[80vw] flex flex-col items-center">
            <h1 className='font-title text-9xl uppercase text-white'>HackCamp</h1>
            <h3 className="text-white text-2xl">Canada's largest beginner friendly hackathon</h3>
            <div className="flex gap-4 items-center pt-8">
              <CtaLink href="#">Register Now</CtaLink>
              <CtaLink href="#">
                Become a Mentor
              </CtaLink>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex flex-col gap-2 text-white">
            <div>
              Applications close in
            </div>
            <div className="flex">
              <div>
                <div>{days}</div>
                <div>
                  Days
                </div>
              </div>
              <div>
                <div>{minutes}</div>
                <div>
                  Minutes
                </div>
              </div>
              <div>
                <div>{seconds}</div>
                <div>
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};


export default Section1;

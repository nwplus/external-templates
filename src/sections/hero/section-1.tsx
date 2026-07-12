"use client";

import EntranceSign from "@/components/hero/entrance-sign";
import Sign from "@/components/hero/sign";
import { useCountdown } from "@/lib/useCountdown";

import Image from "next/image";
import { useEffect, useState } from "react";

import Navbar from "../../components/hero/navbar";

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
    <div className="relative flex flex-col bg-hero-1 bg-cover bg-center bg-no-repeat h-[116.56vw] pt-4">
      <Navbar />
      <div className="absolute left-1/2 -translate-x-1/2 top-[10vw] w-[65vw]">
        <EntranceSign />
        <Image
          src="/assets/hero/hackathon-info-left.svg"
          alt="In-person event"
          title="In-person event"
          width={350}
          height={200}
          className="absolute left-0 bottom-0 w-[35%]"
        />
        <Image
          src="/assets/hero/hackathon-info-right.svg"
          alt="Nov 7: Learn Day; Nov 7-8: Build Night"
          title="Nov 7: Learn Day; Nov 7-8: Build Night"
          width={400}
          height={400}
          className="absolute -right-[5vw] -bottom-[5vw] w-[35%]"
        />
      </div>
      <Sign
        number={days}
        unit="days"
        className="absolute left-[8vw] top-[38vw] w-[9vw]"
      />
      <Sign
        number={hours}
        unit="hours"
        className="absolute left-[15.5vw] top-[41vw] w-[9vw]"
      />
      <Sign
        number={minutes}
        unit="minutes"
        className="absolute left-[23vw] top-[45vw] w-[9vw]"
      />
      {carImages.map((car, index) => (
        <Image
          key={index}
          src={car.src}
          alt={car.alt}
          className="absolute"
          width={250}
          height={250}
          style={{
            left: car.left,
            top: car.top,
            width: car.width,
            opacity: getCarOpacity(car.scrollRange),
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}
      <div className="absolute left-[7.5vw] top-[62.5vw] w-[37vw] flex flex-col gap-[1.5vw]">
        <h2 className="text-[3.5vw] font-title leading-none text-shadow-bold">
          Welcome to HackCamp
        </h2>
        <p className="text-[1.2vw]">
          HackCamp provides a space for hundreds of first-time hackers curious
          about technology to explore the field further through hands-on
          learning, regardless of whether you have coding experience or not!
        </p>
        <p className="text-[1.2vw]">
          Over the past 11 years, HackCamp has revolved around accessibility,
          inclusivity, and diversity. We strive to help people break into
          hackathon spaces by providing beginner-oriented workshops, industry
          connections, encouraging you to bring your unique perspectives and
          experiences to build your own project.
        </p>
      </div>
    </div>
  );
};

export default Section1;

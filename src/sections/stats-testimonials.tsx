"use client";

import CarouselControls from "@/components/stats-testimonials/carousel-controls";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

interface Testimonial {
  name: string;
  pronouns: string;
  role: string;
  year: string;
  program: string;
  testimonial: string;
  photo: string;
  devpost?: string;
  linkedin?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jonathan Cai",
    pronouns: "he/him",
    role: "Dev",
    year: "2nd year",
    program: "Computer Science • Statistics",
    testimonial:
      "This hackathon was the first time I properly built something all the way through, and that experience gave me a real boost in confidence. It made me feel like I could take on harder problems and actually follow through on ideas I had. That early success encouraged me to join more hackathons and keep exploring things I was curious about. The lessons I learned and the momentum I gained from that project helped me land my first internship. More than anything, it showed me the value of trying new things, even if I don't have everything figured out at the start.",
    photo: "/assets/stats-and-testimonials/testimonials-jonathan.png",
    devpost: "https://devpost.com/software/selectelect",
    linkedin: "https://www.linkedin.com/in/jonathan-cai-843873314/",
  },
  {
    name: "Abdul Khalifa",
    pronouns: "he/him",
    role: "Software/Product",
    year: "1st year",
    program: "BCS",
    testimonial:
      "First hackathon, so things were a bit ambiguous. Once we started tackling the project, and failing quickly - we then got the ball rolling on learning new tech stacks and trying different solutions to get something going. Helped me grow because it was the first experience working collaboratively with a group on a software project - it taught me how to prioritize tasks under a time crunch and how dynamic a software project can be in such a short time. Things change quick. I recommend any beginner to attend as you will be forced to learn new technologies, meet cool people and potentially network your way into a job or interesting role.",
    photo: "/assets/stats-and-testimonials/testimonials-abdul.png",
    devpost: "https://devpost.com/software/sign-mate",
    linkedin: "https://www.linkedin.com/in/abdulkhalifa/",
  },
  {
    name: "Isabella Linde",
    pronouns: "she/her",
    role: "Designer/Developer",
    year: "2nd year",
    program: "Integrated Engineering",
    testimonial:
      "As someone who had been self-learning coding alone up until this hackathon, HackCamp gave me the opportunity to finally work on a project with others, put to practice the concepts I had been learning, and make some really good friends, too! Thank you nwPlus for giving me such an encouraging first hackathon experience!",
    photo: "",
    devpost: "https://devpost.com/software/capcap-8xjrw7",
    linkedin: "https://www.linkedin.com/in/isabellalinde/",
  },
];

/**
 * Stats and testimonials page
 */
export default function StatsTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const nuggetX = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const nuggetY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.95]);

  const containerOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [1, 0.2, 0]
  );

  // Container min-height based on background image aspect ratio (2459÷1920 = 128.07vw)
  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity: containerOpacity }}
      className="relative w-screen h-[128.07vw]"
    >
      <Image
        src={"/assets/stats-and-testimonials/graphics/grasstents.png"}
        alt="Stats background"
        width={1000}
        height={100}
        className="absolute inset-0 w-[100vw] h-[84vh] top-[17vh] z-30 -left-[19vw]"
        id="stats"
      />

      <Image
        src={"/assets/stats-and-testimonials/graphics/mountains-and-sun.png"}
        alt="Stats background"
        width={1000}
        height={100}
        className="absolute inset-0 w-[100vw] h-[58vh] left-[7vh] top-[6vh] z-5"
      />

      {/* covers up the weird river edge from recap section */}
      <div className="absolute top-[95vh] left-[2vw] bg-[#b4eaf2] w-36 h-36 rounded-full  z-50"></div>

      <div className="absolute inset-0 z-0 min-h-[50vh] max-h-[72vh]">
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

      <div className="absolute top-[55vh] left-0 w-full h-[120vw] z-10">
        <Image
          src="/assets/stats-and-testimonials/graphics/river.svg"
          alt="River background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="absolute right-0 lg:-right-4 top-[5vh] bottom-0 z-30">
        <Image
          src="/assets/stats-and-testimonials/graphics/waterfall-60-projects-sign.svg"
          alt="Waterfall with mist"
          height={600}
          width={900}
          className="object-cover object-right"
        />
      </div>

      <div className="absolute top-[48vh] left-2 z-40">
        <div className="relative">
          <Image
            src="/assets/stats-and-testimonials/graphics/boats-and-stat.svg"
            alt="Boats with participants"
            width={850}
            height={580}
            className="w-60 md:w-80 lg:w-150 h-auto"
          />
        </div>
      </div>

      <motion.div className="absolute right-0 top-[70vh] z-30 h-1/2">
        <Image
          src="/assets/stats-and-testimonials/graphics/first-island-300-raised-for-charity-sign.svg"
          alt="First island"
          height={600}
          width={900}
          className="object-cover object-bottom"
        />
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="absolute right-0 -top-56 z-50"
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
            className="absolute right-12 -top-24 z-50"
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

      <motion.div className="absolute top-[110vh] right-0 z-30 h-1/3">
        <Image
          src="/assets/stats-and-testimonials/graphics/middle island.svg"
          alt="Middle island"
          height={600}
          width={750}
          className="object-contain object-bottom"
        />
      </motion.div>

      {/* Testimonials body text */}
      <motion.div className="absolute bottom-0 right-0 translate-y-[10vh] z-30">
        <Image
          src="/assets/stats-and-testimonials/graphics/testimonial-ground.svg"
          alt="Testimonial ground background"
          height={600}
          width={900}
          className="object-cover"
        />
        <div className="absolute top-[5rem] left-1/2 transform -translate-x-1/2 text-6xl font-title text-center">
          Testimonials
        </div>
        <div className="absolute top-[15rem] left-1/4 transform w-full max-w-2/3 px-8">
          <div className="space-y-4">
            <div className="text-3xl">
              <span>{testimonials[currentSlide].name}</span> (
              {testimonials[currentSlide].pronouns})
            </div>
            <div className="text-xl">
              {testimonials[currentSlide].role} |{" "}
              {testimonials[currentSlide].year} |{" "}
              {testimonials[currentSlide].program}
            </div>
            <div
              className="text-md leading-relaxed max-w-3xl"
              id="testimonials"
            >
              {testimonials[currentSlide].testimonial}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonial carousel controls */}
      <div className="absolute bottom-[5rem] left-1/5 transform -translate-x-1/2 z-[9999] pointer-events-auto">
        <CarouselControls
          totalSlides={testimonials.length}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
          className="justify-center"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ x: nuggetX, y: nuggetY }}
        className="absolute top-[105vh] left-[12rem] z-20"
      >
        <Image
          src="/assets/stats-and-testimonials/graphics/nugget tube.svg"
          alt="Nugget floating in tube"
          width={550}
          height={350}
          className="w-12 md:w-[16rem] lg:w-[26rem] h-auto"
        />
      </motion.div>

      <motion.div className="absolute left-0 bottom-[10vh] z-20">
        <div className="relative">
          <Image
            src="/assets/stats-and-testimonials/graphics/testimonial-tube.svg"
            alt="Testimonial tube"
            height={450}
            width={700}
            className="object-cover object-bottom"
          />

          <div className="absolute -top-[12%] left-[25%] w-[280px] h-[340px] overflow-hidden">
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
      </motion.div>

      <motion.div className="relative z-40 min-h-screen">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-title absolute top-0 left-8 md:top-8 md:left-24 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 z-50"
        >
          Last Year We Had...
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

interface CarouselControlsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  className?: string;
}

/**
 * Carousel controls; currently only used for testimonials
 * @param totalSlides - total number of slides
 * @param currentSlide - current slide index
 * @param onSlideChange - function to handle slide change
 */
export default function CarouselControls({
  totalSlides,
  currentSlide,
  onSlideChange,
  className = "",
}: CarouselControlsProps) {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <div className="md:hidden bg-neutral-500/30 backdrop-blur-sm rounded-full">
        <button
          onClick={() =>
            onSlideChange(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)
          }
          className="p-2 hover:scale-110 hover:cursor-pointer rounded-full transition duration-200 disabled:opacity-50"
          aria-label="Previous testimonial"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>
      </div>

      <button
        onClick={() =>
          onSlideChange(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)
        }
        className="hidden md:block p-2 hover:cursor-pointer rounded-full transition duration-200 disabled:opacity-50"
        aria-label="Previous testimonial"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600"
        >
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className="w-3 h-3 rounded-full transition-all duration-200"
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <motion.div
              className="w-full h-full rounded-full"
              animate={{
                backgroundColor:
                  index === currentSlide ? "#374151" : "rgba(55, 65, 81, 0.3)",
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            />
          </button>
        ))}
      </div>

      <div className="md:hidden bg-neutral-500/30 backdrop-blur-sm rounded-full">
        <button
          onClick={() =>
            onSlideChange(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)
          }
          className="p-2 hover:scale-110 hover:cursor-pointer rounded-full transition duration-200 disabled:opacity-50"
          aria-label="Next testimonial"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
      <button
        onClick={() =>
          onSlideChange(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)
        }
        className="hidden md:block p-2 hover:scale-110 hover:cursor-pointer rounded-full transition duration-200 disabled:opacity-50"
        aria-label="Next testimonial"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600"
        >
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>
    </div>
  );
}

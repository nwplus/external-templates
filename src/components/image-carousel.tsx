"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  alt: string;
  className?: string;
  sizes?: string;
}

/**
 * Image carousel for 10 years page
 * @param images - array of image path strings to iterate through
 * @param interval - interval in milliseconds between images
 */
export default function ImageCarousel({
  images,
  interval = 3000,
  alt,
  className = "object-cover rounded-md",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isVisible && images.length > 1) {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isVisible, images.length, interval]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setCurrentIndex(0);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {images.map((imageSrc, index) => (
        <motion.div
          key={imageSrc}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src={imageSrc}
            alt={`${alt} ${index + 1}`}
            fill
            className={className}
            sizes={sizes}
          />
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import React from "react";

export default function HorizontalScrollSection({
  children,
  panelClassName = "",
  height = "h-screen",
}: {
  children: React.ReactNode[];
  panelClassName?: string;
  height?: string;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Total horizontal width we need to traverse:
  // (numberOfPanels * viewportWidth) - viewportWidth
  // We map vertical scroll through the section to that horizontal distance.
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Section starts when its top hits the top of viewport,
      // ends when its bottom hits the top of viewport
      const totalScroll = el.offsetHeight - viewportH; // vertical distance available for pin
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);

      const p = totalScroll > 0 ? scrolled / totalScroll : 0;
      setProgress(p);
    };

    // Use rAF for smoother updates
    let ticking = false;
    const handle = () => {
      ticking = false;
      onScroll();
    };
    const onScrollRaf = () => {
      if (!ticking) {
        requestAnimationFrame(handle);
        ticking = true;
      }
    };

    onScroll(); // initial
    window.addEventListener("scroll", onScrollRaf, { passive: true });
    window.addEventListener("resize", onScrollRaf);
    return () => {
      window.removeEventListener("scroll", onScrollRaf);
      window.removeEventListener("resize", onScrollRaf);
    };
  }, []);

  // Compute horizontal translation
  const trackTranslateX = (() => {
    const n = React.Children.count(children);
    if (n <= 1) return 0;
    const totalX = (n - 1) * 100; // percent of viewport width
    return -progress * totalX; // in vw
  })();

  return (
    // The outer section is tall enough to capture vertical scroll equal to the horizontal distance we want.
    // Rule of thumb: height = numberOfPanels * 100vh
    <div
      ref={sectionRef}
      className={`relative ${height}`}
      style={{ height: `calc(${React.Children.count(children) * 100}vh)` }}
    >
      {/* Sticky viewport-height container */}
      <div ref={stickyRef} className="sticky top-0 h-screen">
        {/* Track that moves horizontally */}
        <div
          className="flex h-full will-change-transform"
          style={{
            width: `${React.Children.count(children) * 100}vw`,
            transform: `translateX(${trackTranslateX}vw)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className={`w-screen h-full ${panelClassName}`}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

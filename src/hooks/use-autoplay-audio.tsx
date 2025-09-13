import { useEffect, useRef, useState } from "react";

export const useAutoplayAudio = (
  elementRef: React.RefObject<HTMLElement | null>,
  audioSrc: string
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const fadeAudio = (targetVolume: number, onComplete?: () => void) => {
    if (!audioRef.current) return;
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }

    const step = targetVolume > audioRef.current.volume ? 0.05 : -0.05;
    fadeIntervalRef.current = setInterval(() => {
      if (!audioRef.current) {
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        return;
      }

      if (
        (step > 0 && audioRef.current.volume < targetVolume) ||
        (step < 0 && audioRef.current.volume > targetVolume)
      ) {
        audioRef.current.volume = Math.max(
          0,
          Math.min(1, audioRef.current.volume + step)
        );
      } else {
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
        audioRef.current.volume = targetVolume;
        onComplete?.();
      }
    }, 75);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!elementRef.current) return;

        const entry = entries[0];
        if (entry?.isIntersecting) {
          // Element is visible, start playing audio
          if (!audioRef.current) {
            audioRef.current = new Audio(audioSrc);
            audioRef.current.volume = 0;
            audioRef.current.loop = true;
          }

          setIsPlaying(true);
          audioRef.current.play().catch(() => setIsPlaying(false));

          // Fade in
          fadeAudio(1);
        } else if (audioRef.current && !audioRef.current.paused) {
          const elementRect = elementRef.current.getBoundingClientRect();
          const elementCenter = elementRect.top + elementRect.height / 2;
          const elementIsBelowViewport = elementCenter > window.innerHeight;

          // Only stop audio if element center is below the viewport (user scrolled back up)
          if (elementIsBelowViewport) {
            // Fade out before pausing
            fadeAudio(0, () => {
              if (audioRef.current) {
                audioRef.current.pause();
                setIsPlaying(false);
              }
            });
          }
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [elementRef, audioSrc]);

  return { isPlaying };
};

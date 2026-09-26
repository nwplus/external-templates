import { APPLICATION_DEADLINE } from "@/constants/hero";

import { useEffect, useState } from "react";

const FALLBACK_DEADLINE_MS = new Date(APPLICATION_DEADLINE).getTime();

const twoify = (num: number) => num.toString().padStart(2, "0");

const getReturnValues = (countdown: number) => {
  if (countdown < 0) {
    return { days: "0", hours: "00", minutes: "00", seconds: "00" };
  }

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24)).toString();
  const hours = twoify(
    Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = twoify(
    Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = twoify(Math.floor((countdown % (1000 * 60)) / 1000));

  return { days, hours, minutes, seconds };
};

/**
 * Time remaining until applications close, refreshed every second.
 *
 * Starts from {@link APPLICATION_DEADLINE} so the hero renders immediately,
 * then live-follows `InternalWebsites/Portal.applicationDeadline` in
 * Firestore (the CMS source of truth) once it loads — no redeploy needed.
 */
export const useCountdown = () => {
  const [deadlineMs, setDeadlineMs] = useState(FALLBACK_DEADLINE_MS);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let unsubscribe: (() => void) | undefined;

    const follow = async () => {
      try {
        const { subscribeToApplicationDeadline } =
          await import("@/lib/firestore");
        if (cancelled) return;
        unsubscribe = subscribeToApplicationDeadline(setDeadlineMs);
      } catch (error) {
        console.error(
          "Error subscribing to application deadline, keeping fallback:",
          error
        );
      }
    };

    void follow();

    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, []);

  return getReturnValues(deadlineMs - now);
};

import { LEARN_DAY_START } from "@/constants/hero";

import { useEffect, useState } from "react";

const TARGET_MS = new Date(LEARN_DAY_START).getTime();

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
 * Time remaining until {@link LEARN_DAY_START}, refreshed every second.
 *
 * Returns `null` until mounted: the site is a static export, so anything
 * computed from `Date.now()` during render would be frozen at build time in
 * the HTML and never corrected on hydration.
 */
export const useCountdown = () => {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return now === null ? null : getReturnValues(TARGET_MS - now);
};

import { APPLICATION_DEADLINE } from "@/constants/hero";

import { useEffect, useState } from "react";

const DEADLINE_MS = new Date(APPLICATION_DEADLINE).getTime();

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

/** Time remaining until {@link APPLICATION_DEADLINE}, refreshed every second. */
export const useCountdown = () => {
  const [countDown, setCountDown] = useState(DEADLINE_MS - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(DEADLINE_MS - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return getReturnValues(countDown);
};

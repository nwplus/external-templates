export interface CountdownParts {
  days: string;
  hours: string;
  minutes: string;
}

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const twoify = (num: number) => num.toString().padStart(2, "0");

/**
 * Splits the time left into the hero's days / hrs / min columns, each at
 * least two digits wide ("08"). Once the deadline has passed it holds at zero.
 */
export const toCountdownParts = (remainingMs: number): CountdownParts => {
  if (remainingMs <= 0) return { days: "00", hours: "00", minutes: "00" };
  return {
    days: twoify(Math.floor(remainingMs / DAY)),
    hours: twoify(Math.floor((remainingMs % DAY) / HOUR)),
    minutes: twoify(Math.floor((remainingMs % HOUR) / MINUTE)),
  };
};

"use client";

import { type CountdownParts, toCountdownParts } from "@/lib/countdown";

import { useEffect, useState } from "react";

/**
 * Time left until applications close, live-following
 * `InternalWebsites/Portal.applicationDeadline.nwhacks` in Firestore (the CMS
 * source of truth), so a new deadline shows without a redeploy.
 *
 * There is deliberately no hardcoded fallback date: until Firestore answers
 * (or if it never does) this returns `null` and the hero keeps the slot empty.
 * It is also `null` before mount, since the site is a static export and a
 * `Date.now()` taken during render would be frozen into the HTML.
 */
export const useCountdown = (): CountdownParts | null => {
  const [deadlineMs, setDeadlineMs] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    let cancelled = false;
    // Firebase loads after the page is interactive rather than in the
    // hero's first bundle.
    import("@/lib/firestore")
      .then(({ subscribeToApplicationDeadline }) => {
        if (cancelled) return;
        unsubscribe = subscribeToApplicationDeadline(setDeadlineMs);
      })
      .catch((error) => {
        console.error("Couldn't load the application deadline:", error);
      });
    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    setNow(Date.now());
    // Minutes are the smallest unit shown; a second's lag is plenty.
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (deadlineMs === null || now === null) return null;
  return toCountdownParts(deadlineMs - now);
};

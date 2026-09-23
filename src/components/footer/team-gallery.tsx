"use client";

import { teamMembers } from "@/constants/team-members";

import { animate as anime, JSAnimation } from "animejs";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Member = (typeof teamMembers)[number];

/** How fast the row of faces drifts, in px a second. */
const SPEED = 28;

const toHref = (social: string) => {
  const value = social.trim();
  if (!value) return undefined;
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
};

const TeamGallery = () => {
  const [animator, setAnimator] = useState<JSAnimation>();
  const [selectedProfile, setSelectedProfile] = useState<Member | null>(null);
  const hovering = useRef(false);
  // With reduced motion the row does not scroll itself; it can be scrolled by
  // hand instead (see `motion-reduce:overflow-x-auto` below).
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const row = document.getElementById("anim-profiles");
    const frame = row?.parentElement;
    if (!row || !frame) return;

    let animation: JSAnimation | undefined;
    let onScreen = false;
    // The row holds the team twice; sliding it along by exactly one set's
    // width and starting over loops without a seam. The tiles are sized with
    // the viewport, so the distance is measured, and measured again whenever
    // the frame changes size.
    const start = () => {
      animation?.revert();
      const tiles = row.children;
      const set =
        (tiles[teamMembers.length] as HTMLElement).offsetLeft -
        (tiles[0] as HTMLElement).offsetLeft;
      animation = anime(row, {
        ease: "linear",
        loop: true,
        translateX: [-set, 0],
        duration: (set / SPEED) * 1000,
        autoplay: onScreen && !hovering.current,
      });
      setAnimator(animation);
    };
    const resize = new ResizeObserver(start);
    resize.observe(frame);

    // The marquee only runs while it is on screen. This watches the frame,
    // not the row: the row is slid a set's width off to the left, where its
    // own box is never on screen at all.
    const visible = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (!onScreen) animation?.pause();
      else if (!hovering.current) animation?.play();
    });
    visible.observe(frame);

    return () => {
      resize.disconnect();
      visible.disconnect();
      animation?.revert();
    };
  }, [reduceMotion]);

  return (
    <div className="flex w-full flex-col items-center gap-1 xl:gap-[max(1rem,1.045vw)]">
      <h2 className="font-display text-2xl text-cream-soft xl:text-[length:max(2.5rem,2.613vw)]">
        Meet the minds behind HackCamp
      </h2>

      <div className="w-full overflow-x-hidden whitespace-nowrap motion-reduce:overflow-x-auto">
        {/* Profiles are duplicated so the marquee loops seamlessly. */}
        <div
          className="flex gap-6 py-2 will-change-transform xl:gap-[max(1.75rem,1.829vw)] xl:py-[max(1rem,1.045vw)]"
          id="anim-profiles"
        >
          {[...teamMembers, ...teamMembers].map((profile, i) => {
            const href = toHref(profile.social);
            const className =
              "inline-block size-16 shrink-0 rounded-md bg-white transition-transform duration-100 ease-in-out hover:scale-110 xl:size-[max(5rem,5.225vw)]";
            const onMouseEnter = () => {
              hovering.current = true;
              setSelectedProfile(profile);
              animator?.pause();
            };
            const onMouseLeave = () => {
              hovering.current = false;
              setSelectedProfile(null);
              animator?.play();
            };
            const tile = (
              <Image
                src={profile.img}
                alt={profile.name}
                width={100}
                height={100}
                className="size-full rounded-md object-cover"
              />
            );

            if (href) {
              return (
                <a
                  href={href}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {tile}
                </a>
              );
            }

            return (
              <div
                key={i}
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {tile}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hidden on mobile because there is no hover state there. */}
      <p className="hidden h-6 font-body xl:block xl:h-[max(1.5rem,1.568vw)] xl:text-[length:max(1rem,1.045vw)]">
        {selectedProfile && (
          <>
            <b className="mr-2">{selectedProfile.name}</b>
            <span className="mr-2">{selectedProfile.emoji}</span>
            {selectedProfile.title}
          </>
        )}
      </p>
    </div>
  );
};

export default TeamGallery;

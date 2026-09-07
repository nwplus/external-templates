"use client";

import { teamMembers } from "@/constants/team-members";

import { animate as anime, JSAnimation } from "animejs";
import Image from "next/image";
import { useEffect, useState } from "react";

type Member = (typeof teamMembers)[number];

const TeamGallery = () => {
  const [animator, setAnimator] = useState<JSAnimation>();
  const [selectedProfile, setSelectedProfile] = useState<Member | null>(null);

  useEffect(() => {
    setAnimator(
      anime("#anim-profiles", {
        easing: "linear",
        loop: true,
        translateX: [-(40 * teamMembers.length), 0],
        duration: 1500 * teamMembers.length,
        autoplay: true,
      })
    );
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h2 className="font-display text-2xl text-cream md:text-4xl">
        Meet the minds behind HackCamp
      </h2>

      <div className="w-full overflow-x-hidden whitespace-nowrap">
        {/* Profiles are duplicated so the marquee loops seamlessly. */}
        <div
          className="flex gap-6 py-4 will-change-transform"
          id="anim-profiles"
        >
          {[...teamMembers, ...teamMembers].map((profile, i) => (
            <a
              href={profile.social}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block size-16 shrink-0 rounded-md bg-white transition-transform duration-100 ease-in-out hover:scale-110 md:size-20"
              onMouseEnter={() => {
                setSelectedProfile(profile);
                animator?.pause();
              }}
              onMouseLeave={() => {
                setSelectedProfile(null);
                animator?.play();
              }}
            >
              <Image
                src={profile.img}
                alt={profile.name}
                width={100}
                height={100}
                className="size-full rounded-md object-cover"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Hidden on mobile because there is no hover state there. */}
      <p className="hidden h-6 font-body md:block">
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

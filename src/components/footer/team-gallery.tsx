"use client";

import { teamMembers } from "@/constants/team-members";

import Image from "next/image";
import { useState } from "react";

type Member = (typeof teamMembers)[number];

const toHref = (social: string) => {
  const value = social.trim();
  if (!value) return undefined;
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
};

const TeamGallery = () => {
  const [selectedProfile, setSelectedProfile] = useState<Member | null>(null);

  return (
    <div className="flex w-full flex-col items-center gap-1 xl:gap-[max(1rem,1.045vw)]">
      <h2 className="font-display text-2xl text-cream-soft xl:text-[length:max(2.5rem,2.613vw)]">
        Meet the minds behind HackCamp
      </h2>

      <div className="w-full overflow-x-hidden whitespace-nowrap motion-reduce:overflow-x-auto">
        <div
          className="flex w-max gap-6 py-2 pr-6 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none xl:gap-[max(1.75rem,1.829vw)] xl:py-[max(1rem,1.045vw)] xl:pr-[max(1.75rem,1.829vw)]"
          style={{ animationDuration: `${teamMembers.length * 3.5}s` }}
        >
          {[...teamMembers, ...teamMembers].map((profile, i) => {
            const href = toHref(profile.social);
            const className =
              "inline-block size-16 shrink-0 rounded-md bg-white transition-transform duration-100 ease-in-out hover:scale-110 xl:size-[max(5rem,5.225vw)]";
            const onMouseEnter = () => setSelectedProfile(profile);
            const onMouseLeave = () => setSelectedProfile(null);
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

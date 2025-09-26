"use client";

import { teamMembers } from "@/constants/team-members";

import { animate as anime, JSAnimation } from "animejs";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Member {
  img: string;
  name: string;
  emoji: string;
  color: string;
  title: string;
  social: string;
}

const Team = () => {
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
    <div className="flex flex-col items-center gap-2">
      <h2 className="font-bold text-white lg:text-2xl">
        Made with 💖 by the nwPlus Team
      </h2>

      <div className="overflow-x-hidden whitespace-nowrap">
        {
          // will-change enables hardware acceleration for smoother animations
          // duplicate profile maps so that the carousel can loop infinitely
        }
        <div
          className="py-4 flex gap-6 will-change-transform"
          id="anim-profiles"
        >
          {[...teamMembers, ...teamMembers].map((profile, i) => (
            <a
              href={profile.social}
              key={i}
              className="inline-block hover:scale-110 rounded-md w-16 h-16 transition-transform duration-100 ease-in-out"
            >
              <Image
                src={profile.img}
                alt={profile.name}
                onClick={() => setSelectedProfile(profile)}
                onMouseEnter={() => {
                  setSelectedProfile(profile);
                  animator?.pause();
                }}
                onMouseLeave={() => {
                  setSelectedProfile(null);
                  animator?.play();
                }}
                width={100}
                height={100}
                className="hover:opacity-100 rounded-md object-cover transition-all duration-100 ease-in-out opacity-42 w-full h-full"
                style={{ backgroundColor: profile.color }}
              />
            </a>
          ))}
        </div>
      </div>
      {/* This section is hidden on mobile because we can't have hover states */}
      <p className="hidden md:block">
        <span className="mr-2">
          <b className="mr-2">{selectedProfile?.name}</b>{" "}
          {selectedProfile?.emoji}
        </span>{" "}
        {selectedProfile?.title}
      </p>
    </div>
  );
};

export default Team;

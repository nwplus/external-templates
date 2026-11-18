"use client";

import { teamMembers } from "@/constants/team-members";

import { useState, type CSSProperties } from "react";

function profileHref(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  try {
    const url = new URL(
      /^[a-z][a-z\d+.-]*:/i.test(trimmed) ? trimmed : `https://${trimmed}`
    );
    return url.protocol === "https:" && !url.username && !url.password
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}

/** Repository portraits occupy the reference design's original team slots. */
export function FooterTeam({ style }: { style: CSSProperties }) {
  const [selectedProfile, setSelectedProfile] = useState<(typeof teamMembers)[number] | null>(null);
  return (
    <>
    <div
      className="footer-team"
      style={style}
      role="region"
      aria-label="Meet the nwHacks team; scroll horizontally for more portraits"
      tabIndex={0}
    >
      <div
        className="footer-team-track"
        style={{ animationDuration: `${teamMembers.length * 3.5}s` }}
      >
        {[...teamMembers, ...teamMembers].map((member, index) => {
          const label = `${member.name}, ${member.title}`;
          const href = profileHref(member.social);
          const portrait = (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={member.img} alt={label} width={86} height={86} />
          );
          const style = {
            backgroundColor: /^#[\da-f]{3}(?:[\da-f]{3})?$/i.test(member.color)
              ? member.color
              : "#888888",
          };
          return href ? (
            <a
              key={`${member.name}-${index}`}
              aria-hidden={index >= teamMembers.length ? true : undefined}
              tabIndex={index >= teamMembers.length ? -1 : undefined}
              className="footer-team-portrait"
              style={style}
              href={href}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setSelectedProfile(member)}
              onMouseLeave={() => setSelectedProfile(null)}
              onFocus={() => setSelectedProfile(member)}
              onBlur={() => setSelectedProfile(null)}
            >
              {portrait}
            </a>
          ) : (
            <span
              key={`${member.name}-${index}`}
              aria-hidden={index >= teamMembers.length ? true : undefined}
              className="footer-team-portrait"
              style={style}
              title={label}
              tabIndex={index >= teamMembers.length ? -1 : 0}
              onMouseEnter={() => setSelectedProfile(member)}
              onMouseLeave={() => setSelectedProfile(null)}
              onFocus={() => setSelectedProfile(member)}
              onBlur={() => setSelectedProfile(null)}
            >
              {portrait}
            </span>
          );
        })}
      </div>
    </div>
    <p
      className="footer-team-caption"
      style={{ top: `calc(${style.top} + ${style.height})` }}
    >
      {selectedProfile && <><b>{selectedProfile.name}</b>{" "}{selectedProfile.emoji}{" "}{selectedProfile.title}</>}
    </p>
    </>
  );
}

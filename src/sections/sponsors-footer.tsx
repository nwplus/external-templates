"use client";

import { useCollectFood } from "@/components/food-collection";
import { FooterTeam } from "@/components/footer-team";
import { ResponsiveScene } from "@/components/responsive-scene";
import { sceneBox, SectionArt } from "@/components/section-art";
import {
  MOBILE_DINING,
  MOBILE_RIDER,
  TEAM_HEADINGS,
} from "@/constants/market-interactions";
import { SPONSORS_DESKTOP, SPONSORS_MOBILE } from "@/constants/section-art";
import { DESKTOP_ROAD_LAYERS, MOBILE_ROAD_LAYERS } from "@/constants/footer-road";

import { useId, useState } from "react";

import "./market-sections.css";

const INTRO =
  "nwHacks is more than just a hackathon; it's a place that supports and fosters a community for the next generation of tech leaders.";
const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nwplusubc/",
    icon: "instagram",
    width: 32.188911,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nwplus/",
    icon: "linkedin",
    width: 31.282816,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/nwPlusUBC",
    icon: "youtube",
    width: 41.446209,
  },
  {
    name: "Medium",
    href: "https://medium.com/nwplusubc",
    icon: "medium",
    width: 44.46191,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nwplusubc/",
    icon: "facebook",
    width: 32.140633,
  },
] as const;

function FooterContact() {
  const emailId = useId();
  return (
    <div className="footer-contact">
      <nav className="footer-socials" aria-label="Social media">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: `0 0 ${(social.width / 272) * 100}%` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/sponsors/social/${social.icon}.svg`}
              alt=""
              width={44}
              height={33}
            />
          </a>
        ))}
      </nav>
      <nav className="footer-links" aria-label="Contact and policies">
        <a href="mailto:info@nwplus.io">Email Us</a>
        <a href="mailto:sponsorship@nwplus.io">Become a Sponsor</a>
        <a
          href="https://hackp.ac/coc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code of Conduct
        </a>
      </nav>
      {/* TODO: Connect the newsletter provider before enabling submission. */}
      <form
        className="newsletter"
        onSubmit={(event) => event.preventDefault()}
        aria-label="Newsletter signup"
      >
        <label className="sr-only" htmlFor={emailId}>
          Email address
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          placeholder="Enter your email to sign up for our newsletter!"
        />
        <button
          type="submit"
          disabled
          title="Newsletter signup is not available yet"
        >
          Submit
        </button>
      </form>
      <p className="land-acknowledgement">
        nwHacks 2026 will be taking place on xʷməθkʷəy̓əm (Musqueam) and
        səlilwətaɬ (Tsleil-Waututh) territory. As we build tomorrow&apos;s tech
        community, we recognize our responsibility to understand and respect
        Indigenous histories. To learn more, visit{" "}
        <a
          href="https://guides.library.ubc.ca/xwi7xwaresearchguide"
          target="_blank"
          rel="noopener noreferrer"
        >
          xwi7xwa&apos;s Research Guide
        </a>
        .
      </p>
    </div>
  );
}

function SponsorsScene({ mobile }: { mobile: boolean }) {
  const collectFood = useCollectFood();
  const [slide, setSlide] = useState(0);
  const selectSlide = (index: number) => {
    setSlide(index);
    if (index === 5) collectFood("laksa");
  };
  const width = mobile ? 402 : 1512;
  const height = mobile ? 2450 : 4139;
  const box = (x: number, y: number, w: number, h: number) =>
    sceneBox(x, y, w, h, width, height);
  const rider = mobile
    ? MOBILE_RIDER
    : SPONSORS_DESKTOP.find(
        (layer) => layer.name === "Mascot / Nugget on Bike"
      )!;
  const artwork = mobile
    ? SPONSORS_MOBILE.flatMap((layer) =>
        layer.name === "Mascots / Dining Scene" ? MOBILE_DINING : [layer]
      )
    : SPONSORS_DESKTOP.filter(
        (layer) => layer.name !== "Mascot / Nugget on Bike"
      );
  const road = mobile ? MOBILE_ROAD_LAYERS : DESKTOP_ROAD_LAYERS;
  const shadow = road.find((layer) => layer.name === "moped and nugget shadow")!;
  const centerline = road.find((layer) => layer.name === "Vector 4643")!;
  return (
    <div
      className={`market-scene sponsors-scene ${mobile ? "market-mobile" : "market-desktop"}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <SectionArt
        layers={artwork
          .filter((layer) => layer.name !== "Team / Portrait Row")
          .flatMap((layer) =>
            layer.name === "Footer / Road"
              ? road.filter((part) => part !== shadow && part !== centerline)
              : [layer]
          )}
        width={width}
        height={height}
      />
      <div className="footer-team-heading-art" aria-hidden="true">
        <SectionArt
          layers={[TEAM_HEADINGS[mobile ? 1 : 0]]}
          width={width}
          height={height}
        />
      </div>
      <div className="rider-loop" aria-hidden="true">
        <SectionArt layers={[shadow]} width={width} height={height} />
      </div>
      <SectionArt layers={[centerline]} width={width} height={height} />
      <FooterTeam
        style={
          mobile
            ? box(0, 2379.435546875, 402, 38.48500061035156)
            : box(0, 4006, 1512, 86)
        }
      />
      <div className="rider-loop rider-body" aria-hidden="true">
        <SectionArt layers={[rider]} width={width} height={height} />
      </div>
      <h2
        className="market-heading"
        style={mobile ? box(70, 117, 263, 51) : box(343, 322, 826, 78)}
      >
        Sponsors
      </h2>
      <div
        className="sponsor-introduction"
        style={mobile ? box(70, 180, 263, 169) : box(343, 425, 826, 169)}
      >
        <p>
          {mobile ? (
            <>
              nwHacks is more than just a<br />
              hackathon; it&apos;s a place that supports
              <br />
              and fosters a community for the next
              <br />
              generation of tech leaders.
            </>
          ) : (
            INTRO
          )}
        </p>
        <p>
          {mobile ? (
            <>
              If you&apos;re interested in collaborating
              <br />
              with us or speaking at one of our
              <br />
              events, please reach out at
              <br />
            </>
          ) : (
            <>
              If you&apos;re interested in collaborating with us or speaking at
              one of our events, please reach
              <br />
              out at{" "}
            </>
          )}
          <a href="mailto:sponsorship@nwplus.io">sponsorship@nwplus.io</a>.
        </p>
      </div>
      <div
        className="sponsor-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured sponsors"
        style={
          mobile ? box(8, 417, 386.837, 254.16) : box(327, 590, 858.2, 563.856)
        }
      >
        {/* TODO: Supply the approved featured-sponsor slide content. */}
        <button
          className="sponsor-next"
          type="button"
          aria-label="Next featured sponsor"
          onClick={() => selectSlide((slide + 1) % 6)}
        />
        <div className="sponsor-dots">
          {Array.from({ length: 6 }, (_, index) => (
            <button
              key={index}
              className={slide === index ? "active" : undefined}
              type="button"
              aria-label={`Featured sponsor slide ${index + 1}`}
              aria-pressed={slide === index}
              onClick={() => selectSlide(index)}
            />
          ))}
        </div>
        <span className="sr-only" aria-live="polite">
          Featured sponsor slide {slide + 1} of 6
        </span>
      </div>
      <div className="sr-only">
        Sponsors: Amazon, Meta, Jane Street, TD Bank,{" "}
        {mobile
          ? "Figma, Citadel, Breka"
          : "EA, Microsoft, Google, Figma, Citadel, IBM, Breka"}
        .
      </div>
      <footer
        className="scene-footer"
        style={mobile ? box(0, 1508, 402, 942) : box(0, 2750, 1512, 1389)}
      >
        <FooterContact />
        <h2 className="sr-only">Meet the minds behind nwHacks</h2>
        <p className="footer-copyright">Copyright © nwHacks 2026</p>
      </footer>
    </div>
  );
}

/** Lantern sponsors and illustrated footer, matching both supplied layouts. */
export default function SponsorsFooter() {
  return (
    <section
      id="sponsors"
      className="sponsors-wrapper"
      aria-label="Sponsors and footer"
      data-motion-scope
    >
      <span id="contact" className="contact-anchor" aria-hidden="true" />
      <ResponsiveScene
        desktop={<SponsorsScene mobile={false} />}
        mobile={<SponsorsScene mobile />}
      />
    </section>
  );
}

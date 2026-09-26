import BedScene from "@/components/footer/bed-scene";
import CloudBorder from "@/components/footer/cloud-border";
import Contact from "@/components/footer/contact";
import StarField from "@/components/footer/star-field";
import TeamGallery from "@/components/footer/team-gallery";

const Footer = () => {
  return (
    <footer
      id="footer"
      data-motion-scope
      className="relative z-10 -mt-[26.6%] w-full overflow-hidden bg-night-bottom text-cream-soft"
    >
      {/*
        The night scene keeps the proportions it has in the design: a box as
        wide as the footer and roughly 1.35x as tall, pinned to the bottom edge.
        It grows with the screen past the design's 1531px, like the room above.
        Everything inside is placed as a percentage of that box, so the clouds,
        the bed and the stars never drift apart from one another. The scene
        takes no clicks except on the two mascots.
      */}
      <div className="pointer-events-none absolute bottom-[13vw] left-0 aspect-[1531/2065] w-full xl:bottom-0">
        <CloudBorder />
        <BedScene />
        <StarField />
      </div>

      {/*
        The phone frame puts the land acknowledgement above the bed and the
        desktop frame puts it below, so the two orders are set with `order`
        rather than duplicated markup.
      */}
      <div className="pointer-events-none relative z-10 flex min-h-[145vw] w-full flex-col items-center px-6 pt-[22%] xl:min-h-0 xl:px-[max(1.5rem,1.568vw)] xl:pt-[17.2%] [&>*:not([aria-hidden])]:pointer-events-auto">
        <Contact />

        <p className="order-2 max-w-[85%] text-center font-body text-base leading-relaxed xl:order-4 xl:max-w-[93%] xl:text-[length:max(1rem,1.2vw)]">
          nwPlus acknowledges that our members live, learn, work, and host
          hackathons on the traditional, ancestral, and stolen territory of the
          xʷməθkʷəy̓əm (Musqueam) Peoples. We recognize that this land was taken
          and is currently occupied through the dispossession and displacement
          of Indigenous peoples. As a club, we are committed to reconciliation
          and decolonization, integrating these values into our operations and
          continuously learning about the land and its original stewards. We
          acknowledge the historical exclusion of Indigenous ways of knowing in
          the tech industry and are dedicated to uplifting these communities and
          bridging this gap. To learn more, visit{" "}
          <a
            href="https://guides.library.ubc.ca/xwi7xwaresearchguide"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Xwi7xwa&apos;s Research Guide
          </a>
          .
        </p>

        {/* Holds open the space the bed fills in the scene behind, and lets
            clicks through to the mascots in it. On the phone frame the text
            above keeps its size while the bed grows with the width, so from
            about 450px up it needs extra room to keep the headboard clear of
            the land acknowledgement. */}
        <div
          aria-hidden
          className="order-3 w-full flex-1 pb-[calc(84%_+_max(0px,22vw_-_99px))] xl:flex-none xl:pb-[72.8%]"
        />

        <div className="order-5 mt-[2%] w-full xl:mt-[2.5%]">
          <TeamGallery />
        </div>

        <p className="order-6 mb-[5.1%] mt-[3.4%] font-body text-lg font-bold text-white xl:mt-[0.5%] xl:mb-[2.2%] xl:text-[length:max(1.125rem,1.176vw)]/[1.5556]">
          Copyright © HackCamp 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;

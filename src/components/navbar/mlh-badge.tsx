import Image from "next/image";

export const MlhBadge = () => (
  <a
    id="mlh-trust-badge"
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2027-season&utm_content=white"
    target="_blank"
    rel="noreferrer"
    className="fixed top-0 left-[25px] z-[1000] block w-[clamp(60px,6.614vw,120px)] md:right-[5.291vw] md:left-auto"
  >
    <Image
      src="/assets/images/mlhTrustBadgeWhite.svg"
      alt="Major League Hacking 2027 Hackathon Season"
      width={100}
      height={176}
      className="w-full h-auto"
    />
  </a>
);

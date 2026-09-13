import Image from "next/image";

export const MlhBadge = () => (
  <a
    id="mlh-trust-badge"
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2027-season&utm_content=white"
    target="_blank"
    rel="noreferrer"
    className="block fixed top-0 right-[50px] w-[5%] min-w-[60px] max-w-[100px] z-[1000] left-[25px] md:left-auto md:right-[50px]"
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

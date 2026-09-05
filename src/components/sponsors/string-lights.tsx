import Image from "next/image";

const ASSETS = {
  top: {
    src: "/assets/sponsors/string-lights-top.svg",
    width: 1440,
    height: 420,
  },
  bottom: {
    src: "/assets/sponsors/string-lights-bottom.svg",
    width: 1200,
    height: 300,
  },
} as const;

const StringLights = ({ variant }: { variant: "top" | "bottom" }) => {
  const asset = ASSETS[variant];
  return (
    <div aria-hidden className="pointer-events-none flex w-full justify-center">
      <Image
        src={asset.src}
        alt=""
        width={asset.width}
        height={asset.height}
        className="h-auto w-full"
      />
    </div>
  );
};

export default StringLights;

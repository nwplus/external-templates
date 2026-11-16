/* eslint-disable @next/next/no-img-element */
const imgGlow =
  "/assets/sponsors/desktop/02-red-round-lantern-right-part-1.svg";
const imgLantern =
  "/assets/sponsors/desktop/02-red-round-lantern-right-part-2.svg";

export default function RedRoundLanternRight() {
  return (
    <div className="contents">
      <div className="absolute h-[20.568783cqw] left-[81.415344cqw] top-[59.193122cqw] w-[24.73545cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgGlow}
        />
      </div>
      <div className="absolute h-[25.132275cqw] left-[85.05291cqw] top-[59.722222cqw] w-[17.791005cqw]">
        <div className="absolute inset-[-0.53%_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLantern} />
        </div>
      </div>
    </div>
  );
}

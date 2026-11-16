/* eslint-disable @next/next/no-img-element */
const imgGlow =
  "/assets/sponsors/desktop/16-red-round-lantern-top-left-part-1.svg";
const imgLantern =
  "/assets/sponsors/desktop/16-red-round-lantern-top-left-part-2.svg";
const imgMaskGroup =
  "/assets/sponsors/desktop/16-red-round-lantern-top-left-part-3.svg";
const imgLantern1 =
  "/assets/sponsors/desktop/16-red-round-lantern-top-left-part-4.svg";

export default function RedRoundLanternTopLeft() {
  return (
    <div className="contents">
      <div className="absolute h-[20.568783cqw] left-[4.100529cqw] top-[-0.198413cqw] w-[24.73545cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgGlow}
        />
      </div>
      <div className="absolute h-[13.710847cqw] left-[8.399471cqw] top-[3.174603cqw] w-[15.806878cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgLantern}
        />
      </div>
      <div className="absolute h-[12.492923cqw] left-[8.399471cqw] top-[4.031746cqw] w-[15.806878cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgMaskGroup}
        />
      </div>
      <div className="absolute h-[24.669312cqw] left-[7.407407cqw] top-[0.992063cqw] w-[17.791005cqw]">
        <div className="absolute inset-[-0.54%_0_0_0]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgLantern1}
          />
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
const imgGlow =
  "/assets/sponsors/mobile/11-red-round-lantern-top-left-part-1.svg";
const imgLantern =
  "/assets/sponsors/mobile/11-red-round-lantern-top-left-part-2.svg";
const imgMaskGroup =
  "/assets/sponsors/mobile/11-red-round-lantern-top-left-part-3.svg";
const imgLantern1 =
  "/assets/sponsors/mobile/11-red-round-lantern-top-left-part-4.svg";

export default function RedRoundLanternTopLeft() {
  return (
    <div className="contents">
      <div className="absolute h-[18.334826cqw] left-[4.477612cqw] top-[9.950249cqw] w-[22.048756cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgGlow}
        />
      </div>
      <div className="absolute h-[12.221642cqw] left-[8.310945cqw] top-[12.957711cqw] w-[14.09005cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgLantern}
        />
      </div>
      <div className="absolute h-[11.13607cqw] left-[8.310945cqw] top-[13.721393cqw] w-[14.09005cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgMaskGroup}
        />
      </div>
      <div className="absolute h-[21.990299cqw] left-[7.425373cqw] top-[11.00995cqw] w-[15.858706cqw]">
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

/* eslint-disable @next/next/no-img-element */
const imgBoothTent = "/assets/past-projects/desktop/01-background-part-1.svg";
const imgFoodTruck = "/assets/past-projects/desktop/01-background-part-2.svg";

export default function Background() {
  return (
    <div className="contents">
      <div className="absolute h-[39.68254cqw] left-[0.727513cqw] opacity-70 top-[12.23545cqw] w-[45.282209cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgBoothTent}
        />
      </div>
      <div className="absolute h-[33.068783cqw] left-[53.306878cqw] opacity-70 top-[16.997354cqw] w-[76.322817cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgFoodTruck}
        />
      </div>
    </div>
  );
}

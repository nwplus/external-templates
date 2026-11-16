/* eslint-disable @next/next/no-img-element */
const imgEmptyBasketType1 =
  "/assets/past-projects/desktop/07-basket-group-1-part-1.svg";
const imgEmptyBasketType5 =
  "/assets/past-projects/desktop/07-basket-group-1-part-2.svg";

export default function BasketGroup1() {
  return (
    <div className="contents">
      <div className="absolute h-[7.936508cqw] left-[14.351852cqw] top-[45.171958cqw] w-[14.550265cqw]">
        <div className="absolute inset-[-40%_0_0_0]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgEmptyBasketType1}
          />
        </div>
      </div>
      <div className="absolute h-[7.936508cqw] left-[14.351852cqw] top-[47.28836cqw] w-[14.550265cqw]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgEmptyBasketType5}
        />
      </div>
    </div>
  );
}

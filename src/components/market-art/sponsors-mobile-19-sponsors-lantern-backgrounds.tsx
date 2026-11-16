/* eslint-disable @next/next/no-img-element */
const imgImage20 =
  "/assets/sponsors/mobile/19-sponsors-lantern-backgrounds-part-1.png";
const imgMetaLogo =
  "/assets/sponsors/mobile/19-sponsors-lantern-backgrounds-part-2.png";
const imgJaneStreetLogo =
  "/assets/sponsors/mobile/19-sponsors-lantern-backgrounds-part-3.png";
const imgAmazonLanternBackground =
  "/assets/sponsors/mobile/19-sponsors-lantern-backgrounds-part-4.svg";
const imgMetaLanternBackground =
  "/assets/sponsors/mobile/19-sponsors-lantern-backgrounds-part-5.svg";
const imgJaneStreetLanternBackground =
  "/assets/sponsors/mobile/19-sponsors-lantern-backgrounds-part-6.svg";

export default function SponsorsLanternBackgrounds() {
  return (
    <div className="contents">
      <div className="absolute contents left-[25.686567cqw] top-[196.517413cqw]">
        <div className="-translate-x-1/2 absolute h-[36.900746cqw] left-[calc(50%+0.243781cqw)] top-[196.517413cqw] w-[49.114179cqw]">
          <div className="absolute inset-[-1.28%_0_0_0]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgAmazonLanternBackground}
            />
          </div>
        </div>
        <div className="absolute contents left-[32.402985cqw] right-[32.261194cqw] top-[212.437811cqw]">
          <div className="absolute contents left-[32.402985cqw] right-[32.261194cqw] top-[212.437811cqw]">
            <div className="absolute aspect-[603/182] left-[32.402985cqw] right-[32.261194cqw] top-[212.437811cqw]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgImage20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between leading-[0] left-[calc(50%+0.131841cqw)] top-[243.283582cqw] w-[87.199005cqw]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          <div className="col-1 h-[26.453483cqw] ml-0 mt-0 relative row-1 w-[35.208955cqw]">
            <div className="absolute inset-[-1.79%_0_0_0]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgMetaLanternBackground}
              />
            </div>
          </div>
          <div className="col-1 h-[16.985323cqw] ml-[2.487562cqw] mt-[5.472637cqw] relative row-1 w-[30.19602cqw]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgMetaLogo}
            />
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
            <div className="col-1 h-[26.453234cqw] ml-0 mt-0 relative row-1 w-[35.208955cqw]">
              <div className="absolute inset-[-1.79%_0_0_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgJaneStreetLanternBackground}
                />
              </div>
            </div>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[6.218905cqw] mt-[8.955224cqw] place-items-start relative row-1">
              <div className="col-1 h-[9.662935cqw] ml-0 mt-0 relative row-1 w-[24.463184cqw]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgJaneStreetLogo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

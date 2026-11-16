/* eslint-disable @next/next/no-img-element */
const imgArrow1 = "/assets/past-projects/mobile/14-labels-part-1.svg";
const imgArrow2 = "/assets/past-projects/mobile/14-labels-part-2.svg";
const imgArrow3 = "/assets/past-projects/mobile/14-labels-part-3.svg";

export default function Labels() {
  return (
    <div className="contents">
      <div className="absolute flex h-[10.468159cqw] items-center justify-center left-[38.017413cqw] top-[134.577114cqw] w-[11.769154cqw]">
        <div className="flex-none rotate-[142.35deg]">
          <div className="h-[4.332836cqw] relative w-[11.521642cqw]">
            <div className="absolute inset-[-5.74%_-2.16%_-3.05%_-1.83%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgArrow1}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['HK_Grotesk:Medium'] leading-[normal] left-[54.228856cqw] not-italic text-[3.9801cqw] text-white top-[141.044776cqw] whitespace-nowrap">
        Debuggy Ducky
      </p>
      <div className="absolute flex h-[14.800995cqw] items-center justify-center left-[68.905473cqw] top-[147.885572cqw] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14.800995cqw]">
            <div className="absolute inset-[-1.830846cqw_-1.68%_-1.830846cqw_0]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgArrow2}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['HK_Grotesk:Medium'] leading-[normal] left-[43.283582cqw] not-italic text-[3.9801cqw] text-white top-[151.243781cqw] whitespace-nowrap">
        Braillearn
      </p>
      <div className="absolute flex h-[8.313433cqw] items-center justify-center left-[52.487562cqw] top-[156.00995cqw] w-[3.564428cqw]">
        <div className="flex-none rotate-[100.89deg]">
          <div className="h-[2.078358cqw] relative w-[8.06592cqw]">
            <div className="absolute inset-[-19.5%_-3.08%_-18.22%_-1.26%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgArrow3}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['HK_Grotesk:Medium'] leading-[normal] left-[38.308458cqw] not-italic text-[3.9801cqw] text-white top-[128.358209cqw] whitespace-nowrap">
        Red Squid Dead Squid
      </p>
    </div>
  );
}

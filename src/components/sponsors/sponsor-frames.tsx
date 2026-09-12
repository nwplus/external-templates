import type { SponsorDoc } from "@/lib/firestore";
import { frameRows } from "@/lib/shelves";
import { cn } from "@/lib/utils";

import PictureFrame from "./picture-frame";

const FrameRow = ({
  sponsors,
  className,
}: {
  sponsors: SponsorDoc[];
  className?: string;
}) => (
  <div
    className={cn(
      "flex w-full justify-center gap-[7.5%] xl:gap-[3.3%]",
      className
    )}
  >
    {sponsors.map((sponsor) => (
      <div key={sponsor.name} className="w-[42.8%] xl:w-[21.7%]">
        <PictureFrame sponsor={sponsor} />
      </div>
    ))}
  </div>
);

/**
 * One shelf's worth of sponsor frames. The design hangs the first of three on
 * the wall above the pair that stands on the plank, and leaves the whole
 * pyramid floating a little clear of the wood.
 */
const SponsorFrames = ({ sponsors }: { sponsors: SponsorDoc[] }) => {
  const { raised, standing } = frameRows(sponsors);

  return (
    <div className="mb-[7.8%] flex w-full flex-col items-center xl:mb-[4.1%]">
      {raised.length > 0 && <FrameRow sponsors={raised} />}
      {standing.length > 0 && (
        <FrameRow
          sponsors={standing}
          className={cn(raised.length > 0 && "mt-[5.1%] xl:mt-[2.6%]")}
        />
      )}
    </div>
  );
};

export default SponsorFrames;

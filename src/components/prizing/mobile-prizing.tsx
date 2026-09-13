import { PRIZING_PARAGRAPHS, PRIZING_TITLE } from "@/constants/prizing";

// TODO(mobile): add sparkle / illustration layers once assets land
export const MobilePrizing = () => (
  <div className="relative text-white">
    <div className="relative z-10 flex flex-col gap-4 px-6 py-24">
      <h2 className="font-title text-4xl leading-none pb-4">{PRIZING_TITLE}</h2>
      {PRIZING_PARAGRAPHS.map((paragraph, i) => (
        <p key={i} className="text-base">
          {paragraph}
        </p>
      ))}
    </div>
  </div>
);

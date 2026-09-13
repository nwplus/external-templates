import { SheepLeft } from "@/components/events/sheep-left";
import { SheepRight } from "@/components/events/sheep-right";

export default function Events() {
  return (
    <div className="bg-linear-to-b from-[#12204D] to-[#192758]">
      <div className="mx-auto w-300 items-end grid grid-cols-2 text-white gap-20 overflow-visible">
        <div className="flex flex-col gap-3">
          {/* Copy */}
          <div className="pt-10">
            <h2 className="font-title text-6xl">Our Events</h2>
            <p>
              This year, HackCamp is celebrating 11 years! And we are bringing you a week of workshops and a 24-hour, in-person hackathon where you’ll learn new skills, connect with like-minded enthusiasts, and build solutions to tackle challenges together. Hopefully you’ll leave with a newfound passion for tech!
            </p>
          </div>

          {/* Sheep */}
          <div className="w-[138%] -ml-[38%]">
            <SheepLeft
              title="Build Day"
              subtitle="Nov. 7/8, 2026"
              description={"A 24-hour overnight hackathon that starts after Learn Week, focused around creating projects centred around accessibility, inclusivity, and diversity.\nFor each project submission, HackCamp will donate $5 to one of these charities:Canadian Centre for Arts + Technology (CanCat), Food Stash Foundation, and Aunt Leah's"}
            />
          </div>
        </div>
        <div className="w-[138%] -translate-y-46">
          <SheepRight
            title="Learn Week"
            subtitle="Nov. 2-6, 2026"
            description="A week of workshops and skill building in preparation for Build Day. With topics ranging from web development to design, participants will have the opportunity to learn new skills and gain hands-on experience before the hackathon."
          />
        </div>
      </div>
    </div>
  );
}

import { WebBgStars } from "@/components/prizing/web-bg-stars";

export default function Prizing() {
  return (
    <div className="relative w-full aspect-928/609">
      {/* Illustration */}
      <div className="absolute z-0 pt-30 w-full h-full pointer-events-none">
        <WebBgStars />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full top-0 left-0">
        <div className="mx-auto w-300 text-white pt-50 pb-100">
          <h2 className="font-title text-6xl leading-none pb-10">Prizing</h2>
          <div className="w-1/2 text-lg flex flex-col gap-5 pb-40">
            <p>
              At HackCamp, our goal is to celebrate both learning and innovation. This year, we will feature two project categories: the Beginner Prize and the Overall Prize.
            </p>
            <p>
              The Beginner Prize is designed to recognize teams that are made up primarily of beginner hackers. To be eligible, at least two-thirds (66%) of a team's members must be beginner hackers. This prize celebrates creativity, growth, and the learning journey throughout the event.
            </p>
            <p>
              The Overall Prize is open to all teams and recognizes the project that best demonstrates innovation, execution, and impact across all submissions. Teams eligible for the Beginner Prize are also eligible for the Overall Prize, but each team may only receive one major prize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

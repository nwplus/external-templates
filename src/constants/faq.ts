export const FAQ_TITLE = "FAQs";
export const FAQ_HINT = "Click on a tank to learn more";

/** The three topic tanks, top to bottom, with the Firestore `category` each
 * one shows. */
export const FAQ_CATEGORIES = [
  { id: "general", label: "General", categories: ["General"] },
  {
    id: "teams",
    label: "Teams & Projects",
    categories: ["Teams & Projects", "Teams", "Projects"],
  },
  { id: "logistics", label: "Logistics", categories: ["Logistics"] },
] as const;

export type FaqCategoryId = (typeof FAQ_CATEGORIES)[number]["id"];

/** One question as the scene renders it. Answers use the CMS's light
 * markdown: blank lines between paragraphs and `[text](url)` links. */
export interface FaqEntry {
  question: string;
  answer: string;
}

export type FaqsByCategory = Record<FaqCategoryId, FaqEntry[]>;

/**
 * Shown for any tank Firestore has nothing for (no FAQ docs are tagged
 * nwHacks2027 yet). The questions follow the Figma frames. "What is a
 * hackathon?" uses the design's answer; the rest copy the nwHacks 2025 docs.
 */
export const FAQ_FALLBACK: FaqsByCategory = {
  general: [
    {
      question: "What is a hackathon?",
      answer:
        'A hackathon is an event where teams collaborate on a project (or "hack") within a tight time limit. At nwHacks, teams of 1-4 collaborate over 24 hours to develop creative solutions, tackle prize challenges, and create meaningful impact. Hackathons are open to everyone, regardless of experience level, and offer a unique opportunity to learn new skills, experiment with new technologies, and bring unique ideas to life.\n\nAt our hackathon, mentors from the local community also provide guidance by helping participants refine their projects and gain valuable insights. The winners will be chosen by judges comprised of industry professionals and experienced mentors.\n\nTo learn more about what to expect at a hackathon, check out our article on [Medium](https://medium.com/nwplusubc/nwchats-what-is-a-hackathon-7b5032011487).',
    },
    {
      question: "How much does it cost?",
      // TODO(content): eligibility dates are still the 2025 ones.
      answer:
        "nwHacks is 100% free for all participants. However, registration is strictly limited to high school students, university students, and recent graduates i.e. students with an expected graduation date later than January 2025 or anyone who graduated within one year of January 2025.",
    },
    {
      question: "What if I don't have any experience?",
      answer:
        "Have no fear! Hackathons are really a place for learning and one of the best ways to do so. We'll host a series of workshops to bootstrap you for hacking. When you run into any problems or questions, mentors will be happy to help you out. By the time you walk out, you will have new skills, friends, and a project under your belt!",
    },
    {
      question: "Is nwHacks just for developers?",
      answer:
        "nwHacks is open to students of all roles, whether that's dev, design, PM, and more!",
    },
    {
      question: "I’m a high schooler/new graduate - can I attend?",
      // TODO(content): graduation cut-off is still the 2025 one.
      answer:
        "Yes, we are excited to invite high school students and post-secondary students from all disciplines! Great projects are more than just their code. New graduates are welcome as long as your graduation date is within one year of January 2025.",
    },
  ],
  teams: [
    {
      question: "How big can my team be?",
      answer:
        "nwHacks accepts submissions from team of 1-4 people in size. Although we strongly recommend that you join a team, you may participate by yourself as a solo team.",
    },
    {
      question: "Is there a theme for nwHacks?",
      answer:
        "We do not have themes or tracks for projects this year. There are several event and sponsor prizes that a team may win, but the sky is the limit!",
    },
    {
      question: "What happens if I don't have a team?",
      answer:
        "Don't worry! A lot of hackers are in the same position as you. There will be a team-formation event before the hackathon for you to meet new friends and create a team (after you have RSVP’d).",
    },
    {
      question: "When can I start hacking?",
      // TODO(content): the 2025 date and time; 2027 runs January 16-17.
      answer:
        "Hacking is only allowed to begin after Opening Ceremonies on January 18th at 12:00pm PST. Before that time, you are welcome to brainstorm ideas and create a GitHub repository, but nothing can be designed, coded, or initialized for the project prior to the start of the hacking period.",
    },
    {
      question: "Can I work on previous projects?",
      answer:
        "No, all projects must be built from scratch. Nothing can be designed, coded, or initialized for the project prior to the hackathon. However, you are welcome to brainstorm ideas beforehand. This rule is strictly adhered to at nwHacks and any team found working on previous projects will be automatically disqualified in the event.\n\nIf you are using libraries or tools that you have made in the past, don't worry as this does not apply. Make sure to cite this work in your code repository.",
    },
  ],
  logistics: [
    {
      question: "What should I bring?",
      answer:
        "nwHacks is a 24hr hackathon (24hr+ event in total). Hackers who plan to stay overnight should come prepared with the equipment needed to be comfortable (e.g. pillow, blanket, sleeping bag, warm clothes, etc.). Please note that it is not mandatory to stay overnight at nwHacks.\n\nWe’ll also share a packing list with hackers before the weekend to get ready. All meals and snacks will be provided free of charge, so don’t worry about that!",
    },
    {
      question: "Do I need to stay overnight?",
      answer:
        "No, staying overnight is not required! Hackers are free to leave the event whenever they like. However, if you plan to stay overnight, please bring what you need to be comfortable, such as a pillow, blanket, sleeping bag, or warm clothes. We’ll provide a packing list before the event to help you prepare.\n\nFor safety, our team will enforce a strict curfew and lock the venue doors overnight, so there will be no entry or exit during this period.",
    },
    {
      question:
        "Is nwHacks in-person or virtual? What if I want to join virtually?",
      answer:
        "nwHacks 2027 will be an in-person event, hosted at the University of British Columbia. We believe that our community and event is best experienced in-person, so virtual participation is not offered at this time.",
    },
    {
      question: "Do you offer travel reimbursements?",
      answer: "Unfortunately, we are unable to provide travel reimbursements.",
    },
    {
      question: "Do you have COVID-19 regulations?",
      answer:
        "nwHacks follows the University of British Columbia’s [disease prevention policies](https://srs.ubc.ca/health-safety/safety-programs/communicable-disease-prevention-framework/). Hackers are advised to practice health and safety precautions at the event. However, all participants must assume full responsibility for their own health.\n\nIf you are feeling under the weather, we kindly urge you to prioritize the safety of others by not attending the event.",
    },
  ],
};

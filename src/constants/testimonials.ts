export interface Testimonial {
  /** Also the art's file name in public/assets/testimonials. */
  id: "pascale" | "vaibhav" | "qazi";
  name: string;
  role: string;
  /** As written in the Figma quote card. */
  quote: string;
}

/**
 * The three stalls' people, in the design's order: sponsor, mentor, hacker.
 * Quotes are copied from the "Final for dev" frames.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "pascale",
    name: "Pascale Walters (she/her)",
    role: "Sponsor",
    quote:
      "One idea that the developer relations and marketing teams [at Mappedin] had was to reach out to hackathons and have students use our products to get some initial feedback and show what potential use cases could be. nwHacks in particular is a Canadian hackathon and it’s a good size, so it worked out for me since I was in Vancouver and I could pop down to UBC and say hi.\n\nI truly value mentoring other people. I always jumped at the opportunity when I was an undergrad student, and in grad school, I participated as a hacker and then also as a mentor. So, coming back as a sponsor is pretty cool and it feels like I’m giving back because I’ve been there — I can offer some advice on what it’s like.\n\nnwHacks has been fantastic. The engagement and enthusiasm of the hackers have been so inspiring to me, and I’ve been encouraging people to reach out to me or connect with me on LinkedIn.",
  },
  {
    id: "vaibhav",
    name: "Vaibhav Sharma (he/him)",
    role: "Mentor",
    quote:
      "“I believe that I’ve done enough hackathons, so I thought, ‘Why not try this new field of mentoring?’. I feel really great helping people — during HackCamp, I helped a lot of teams and even someone who ended up being a winner. Today in the opening ceremony, he recognized me and thanked me for helping him, so that was a great moment.\n\nI like sharing my knowledge; I even have a course on YouTube on full-stack web development.”",
  },
  {
    id: "qazi",
    name: "Qazi Omair Ahmed (he/him)",
    role: "Hacker",
    quote:
      "“For the first hour, I did feel very overwhelmed because it’s such a big hackathon, and there’s people from outside of Canada too — I met people from Michigan, Washington, and all parts of North America. But I would say that it was very engaging. The organizers are really friendly, there’s a lot of resources, and it’s very accessible.\n\nEven if you don’t win, I feel like you do learn a lot.”",
  },
];

export const TESTIMONIALS_HINT = "Click on a stall to learn more";
export const TESTIMONIALS_HINT_OPEN = "Click, navigate, and view other testimonials";
export const TESTIMONIALS_HINT_TOUCH = "Tap, navigate, and view other testimonials";

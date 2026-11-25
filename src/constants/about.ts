export const ABOUT_TITLE = "One for the history books";

const WELCOME =
  "Welcome to the 12th iteration of nwHacks, one of Western Canada’s largest hackathons!";
const FESTIVAL =
  "This year we are welcoming you to a vibrant festival of creativity, community and discovery. Whether you’re taking your first steps into tech or you’re already a seasoned builder, you’re invited to wander through a space buzzing with energy, inspiration, and possibility.";
const HAPPENING =
  "Happening in‑person from January 16-17, 2027, this 24‑hour experience brings together hundreds of curious minds to explore new skills, build meaningful projects, and connect with people who care about innovation as much as you do.";
const NIGHT_MARKET =
  "Like a night market, nwHacks thrives on diversity, collaboration, and shared joy, every booth, every team, every idea adding its own light to the atmosphere.";

/** The copy as the desktop design breaks it. */
export const ABOUT_PARAGRAPHS = [
  `${WELCOME} ${FESTIVAL}`,
  HAPPENING,
  NIGHT_MARKET,
];

/** The phone design gives the welcome its own line and, for room, leaves out
 * the night market. */
export const ABOUT_PARAGRAPHS_MOBILE = [WELCOME, FESTIVAL, HAPPENING];

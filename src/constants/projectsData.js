// Data used to render the different project cards and populate the modal
export const PROJECTS = [
  {
    title: "Amigo",
    subtitle: "Full stack travel companion app devised to meet the brief: 'build an app that fixes a problem'. Full software development lifecycle completed over month-long agile project in team of six. ",
    writeup:
      "MDamigo",
    image: "amigo",
    stack: "| Next.js | Tailwind | Firebase | Node.js | PostgreSQL |",
    link: "https://amigostravel.netlify.app/",
    github:
      "https://github.com/SchoolOfCode/bc13_final-project_back-end-3-amigos",
    description:
      "With the Amigo app, users can access left-of-field city sightseeing recommendations from around the world, save them in a private favourites dashboard for future reference, and record their memories in a private journal.",
  },
  {
    title: "Nostrami",
    subtitle: "Nostr client currently in development: subscribes to a global relay of long-form content as part of the decentralised Nostr project. ",
    writeup:
      "MDnostrami",
    image: "nostrami",
    link: "https://nostrami.netlify.app/",
    github: "https://github.com/vglampard/nostr-client-test",
    stack: "| JavaScript | React | Tailwind | Nostr |",
    description:
      "Simple Nostr client (work in progress) that pulls NIP-23 events from the Damus relay and displays them as pop-out cards (with an additional and highly rudimentary translation tool for foreign language posts).",
  },
  {
    title: "The PayBack Machine",
    subtitle: "Scripting exercise that solves the issue of how to manage more complex bill settlements: when money's already been paid, and you can't be bothered to do more than one transaction. ",
    writeup:
      "MDpayback",
    image: "payback",
    link: "https://payback-machine.netlify.app/",
    github: "https://github.com/vglampard/bill-splitter",
    stack: "| JavaScript | React | Tailwind |",
    description:
      "When a group of you have various debts to settle between you (someone paid for dinner, someone paid for drinks, a someone paid for taxi?), everyone owes and is owed a bit in turn. Crunching the numbers is finicky, error-prone, and no one wants to be making multiple transfers. This app consolidates all these various payings-back into a single transfer for each person. Accurate to about a penny.",
  },
  {
    title: "BetterPassword",
    subtitle: "Scripting and research exercise: it's a tool allowing users to create and easily retrieve secure passwords that incorporate SHA-256 hashing, salting, and peppering. ",
    writeup:
      "MDpassword",
    image: "password",
    link: "https://your-better-password.netlify.app/",
    github: "https://github.com/vglampard/better-password",
    stack: "| JavaScript | React | Tailwind |",
    description:
      "Simple tool allowing users to generate and retrieve complex and secure passwords, but all they need to remember is a simple keyword and a personal salt. Intended as a sort of password manager for myself and others using shared or public devices.",
  },
  {
    title: "WeatherVisuals",
    subtitle: "Weather app that renders dynamic visuals to accompany weather data from across the globe. ",
    writeup:
      "MDweather",
    image: "weather",
    link: "https://weathervisuals.netlify.app/",
    github: "https://github.com/vglampard/weather-app",
    stack: "| TypeScript | TSParticles | React | CSS |",
    description:
      "Classic TypeScript weather app pulling information from OpenWeatherMap. Spiced up with a bit of dynamic weather display (I added some buttons to help users find snowy/rainy places because I wanted to show off the effects, but adding an onClick to turn on the weather effects felt like cheating).",
  },
  {
    title: "Otta Internal Tool",
    subtitle: "Simple tool that automates away monotonous parts of the research process for the Otta content team.  ",
    writeup:
      "MDotta",
    image: "otta",
    link: "https://company-research.netlify.app/",
    github:"https://github.com/vglampard/company-research",
    stack: "| JavaScript | React | CSS |",
    description:
      "Removing the cumbersome legwork from the Otta content team 'take' writers' role.",
  },
];

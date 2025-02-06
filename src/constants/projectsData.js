// Data used to render the different project cards and populate the modal
export const PROJECTS = [

  {
    title: "Nostrami",
    subtitle: "An exercise researching decentralised social networks; this is a simple Nostr client that subscribes to a global relay of long-form content. ",
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
    subtitle: "I was proud of this bill consolidation concept (everyone owes and is owed different amounts, and it's all settled with a single transfer!) until a friend introduced me to Splitwise. ",
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
    title: "Poképedia",
    subtitle: "Classic project delivering a searchable, browsable collection of Pokékemon from the PokéAPI that detail their specific attributes, skills, and locations. ",
    writeup:
      "MDpokepedia",
    image: "pokepedia",
    link: "https://pokepedia-angular.netlify.app/",
    github: "https://github.com/vglampard/pokemon-angular",
    stack: "| TypeScript | Angular | Bootstrap |",
    description:
      "It's a classic project, allowing users to browse, search, and find out more details about specific pokemon. ",
  },
  {
    title: "BetterPassword",
    subtitle: "Research exercise after looking into encryption: it's a tool allowing users to create and easily retrieve secure passwords that incorporate SHA-256 hashing, salting, and peppering. Created as a neat alternative to me writing down passwords on scraps of paper. ",
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
    title: "Otta Internal Tool",
    subtitle: "Tool I developed for the Otta content team after my time there; it helps automate the company research and vetting process.  ",
    writeup:
      "MDotta",
    image: "otta",
    link: "https://company-research.netlify.app/",
    github:"https://github.com/vglampard/company-research",
    stack: "| JavaScript | React | CSS |",
    description:
      "Removing the cumbersome legwork from the Otta content team 'take' writers' role.",
  },
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
    title: "WeatherVisuals",
    subtitle: "Weather app that renders dynamic visuals to accompany weather data from across the globe. ",
    writeup:
      "MDweather",
    image: "weather",
    link: "https://weathervisuals.netlify.app/",
    github: "https://github.com/vglampard/weather-app",
    stack: "| TypeScript | TSParticles | React | CSS |",
    description:
      "Classic TypeScript weather app pulling information from OpenWeatherMap. I added some buttons to help users find snowy/rainy places because I wanted to show off the ts particles effects.",
  }
];

export const PROJECTS = [

  {
    title: "Amigo",
    subtitle: "Personalised travel companion",
    writeup:
      "- Four week end-to-end app development from user research right through to building out additional features. - Agile team of six working on all aspects of development lifecycle. This project was an exercise in simulating commercial product development. We outlined a clear MVP, planned out detailed sprints, kanban ticketing, and distributed roles, conducted user research and design principles, and followed this right through to two demo days in front of industry professionals. Key obstacles were our initial decision to code this in TypeScript. It wasn't playing well with Next.js, and given the tight timeframe we decided to code it all in JavaScript. It was great to pick up Tailwind, and I earmarked it as a tech skill to build on further (see Nostrami and BetterPassword).",
      image: "amigo",
      stack:  "| Next.js | Tailwind | Firebase | Node.js | PostgreSQL |",
      link: "https://amigostravel.netlify.app/",
      description: "Users can access left-of-field city sightseeing recommendations, save them in a private favourites dashboard, and privately journal about their travels."
  },
  {
    title: "Nostrami",
    subtitle: "Nostr client (in development)",
    writeup:
      "This one is very much in experimental stages yet, but V1 (desktop only please!) is looking alright. It's a simple client for long-form content. I'm subscribing here to one of the biggest Nostr relays to scalp off as many long-form events as I can find, whilst balancing it out with good quality. There's a lot of spam floating around for now The relays are remarkably easy to link up - what's been interesting about this is working with complex data structures that aren't uniform - the protocol is decentralised and very new, meaning for example that values like titles and tags aren't always labelled correctly and some filtering is required. I also needed to convert MD into presentable format. And, whilst I was developing this client there was a sudden influx of hefty Portuguese posts which, frustratingly, I couldn't read. So I spent a while throwing together a rudimentary translation 'tool' (I've yet to find a decent and free translation API) that pulls out the first 5,000 charcters and pushes the user to DeepL for them to handle the language detection and translation. It's cumbersome, but it's an OK stopgap solution - this is a global relay, with good content, so a better solution will be needed in the long run. More interesting, however, will be linking this up with Nostr's encrypted messaging events and adding signin/out functionality.  ",
      image: "nostrami",
      link: "https://nostrami.netlify.app/",
      stack: "| JavaScript | React | Tailwind | Nostr |", 
      description:"Simple Nostr client (work in progress) that pulls NIP-23 events from the Damus relay and displays them as pop-out cards (with an additional and highly rudimentary translation tool for foreign language posts!).", 
  },
  {
    title: "The PayBack Machine",
    subtitle: "Advanced bill settlements",
    writeup:
      "This was essentially an opportunity for me to put some of my advanced algorithms and data structures studying into practice. I'd also had this idea in the back of my  mind ever since building an elaborate spreadsheet one summer to do almost precisely this, and felt it was a good opportunity to automate it. I knew the basic mechanics already, so it was just a matter of implementing it. The hardest bit was working out an efficient way to build the 'billing' object (a record of who owes how much to who) and then translating that into the final consolidation amount. This involved a lot of mapping and object manipulation, which was a fun knot to untangle (and debug!). The visual design is a bit kitsch, but I wanted to try out something simple and homespun looking that reminded me of the very early desktops I remeber from computers when I was a kid - where the home screen was, quite literally, a desk.",
      image: "payback",
      link: "https://payback-machine.netlify.app/",
      stack: "| JavaScript | React | Tailwind |", 
      description:"When a group of you have various debts to settle between you (someone paid for dinner, someone paid for drinks, a someone paid for taxi?), everyone owes and is owed a bit in turn. Crunching the numbers is finicky, error-prone, and noone wants to be making multiple transfers. This app consolidates all these arious payings-back into a single transfer for each person. Accurate to about a penny.", 
  },
  {
    title: "BetterPassword",
    subtitle: "SHA-256 password retrieval tool",
    writeup:
    "I was looking at salting, hashing, peppering, and encryption, and it struck me that the techniques used to protext uers could be taken advantage of by users themselves. As in, the guaranteed digests you get from hashing functions could prove a neat way of guaranteed password recall - something I was finding tricky as I was signing up to a number of different websites at the time. It was interesting to explore the different hashing algorithms - SHA256 was a no-brainer, and I played around with ways of making the has digest more appropriate for a password: - Adding special characters, upper case, lower case, and numbers - Scripting a sort of 'riffle shuffle' to blend these into the digest The user adds their own salt each time, and I realised something approximating 'pepper' could be used if I take advantage of environmental variables. It was also nice to add a nice touch of JS Particles - I'd been wrangling it on other projects as the layering wasn't working out quite right. I like the way this turned out. All in all, this was a nice toy project to dive into a bit of security research, make a little tool that I actually am using quite frequetntly, as well as practice my design. ",
    image: "password",
    link: "betterPassword",
    stack: "| JavaScript | React | Tailwind |", 
    description:"Simple tool allowing users to generate and retrieve complec and secure passwords, but all they need to remember is a simple keyword and a personal salt. Intended as a sort of password manager for myself and others using shared or public devices.", 
  },
  {
    title: "WeatherVisuals",
    subtitle: "Dynamic weather display",
    writeup:
      "This was an interesting foray into TypeScript, and a fun extensio of the classic weather app project. The background renders different light qualities for sunny or overcast areas, and there's TS Particles effects for snowy and rainy locations as well as different icons for each weather type. This made for a lot of conditional rendering, and I'm sure there's space here to revisit and refactor. But I'm especially pleased with the solution for identifying the correct icon to use. Because there's dozens and dozens that come through from the API data, and here we're using a regex filter to check for specific patterns (cloudy, rainy, etc) and assign a single generic icon based on that. Typescripting for the weather particles options was a head-scratcher, but evntually we found that applying ISourceOptions was an easier fix than specifying a type dozens of lines long. ",
      image: "weather",
      link: "https://weathervisuals.netlify.app/",
      stack: "| TypeScript | TSParticles | React | CSS |", 
      description:"Classic TypeScript weather app pulling information from OpenWeatherMap. Spiced up with a bit of dynamic weather display (I added some buttons to help users find snowy/rainy places because I desparately wanted to show off the effects, but adding an onClick to turn on the weather effects felt like cheating).", 
  },
];

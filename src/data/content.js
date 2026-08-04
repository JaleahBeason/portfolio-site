export const profile = {
  name: "Ja'Leah Beason",
  title: "CS graduate turned product manager",
  bio: "CS degree from Bellarmine University. Spent the last few months proving to myself I could actually build things, not just study them. Somewhere in there I noticed I kept asking who this is for and why it works this way, more than whether it worked at all. Turns out that's the job I actually want.",
  contact: {
    email: "jaleah.beason9@gmail.com",
    github: "https://github.com/JaleahBeason",
    linkedin: "https://www.linkedin.com/in/jaleah-beason-a82a11220/",
    resume: "",
  },
}

export const bridgeSkills = {
  technical: ["Python", "SQL", "React", "REST APIs", "Relational databases"],
  product: ["PRDs", "User journey mapping", "Success metrics", "RICE prioritization", "Roadmapping"],
}

export const education = {
  degree: "B.A. Computer Science",
  school: "Bellarmine University",
}

export const expertiseTags = [
  "Product strategy",
  "Technical feasibility",
  "Data analysis",
  "Wireframing",
  "Cross-functional communication",
  "CS-driven problem solving",
]

export const experience = [
  {
    role: "Product Manager",
    org: "Broadway Apparel",
    dates: "Jun 2021 to Oct 2024",
    bullets: [
      "Owned product lifecycle across four lines, making restocking and discontinuation decisions based on sell-through data and customer feedback",
      "Managed supplier relationships, negotiating shipping timelines, order quantities, and cost, and switched suppliers when reliability or pricing fell short",
      "Used customer feedback and sell-through patterns to adjust order volume, reducing stockouts on high-demand items and avoiding overstock on slow movers",
      "Redesigned store layout based on foot traffic and product performance to improve visibility for underperforming lines",
    ],
  },
  {
    role: "Software/Product Intern",
    org: "Tridna",
    dates: "Dec 2025 to May 2026",
    bullets: [
      "Retrieved, cleaned, and inputted sports analytics data to support development of an emerging betting application",
      "Collaborated with cross-functional teams on platform development, feature organization, and workflow analysis",
      "Integrated and evaluated live data within testing environments to support application functionality",
      "Participated in Agile-style collaboration and technical problem-solving discussions",
    ],
  },
  {
    role: "Data Analytics Intern",
    org: "Essential Innovations",
    dates: "Jan 2026 to Jun 2026",
    bullets: [
      "Analyzed operational data to support system planning and workflow optimization",
      "Evaluated data accuracy and tagging structures for database organization",
      "Presented analytical findings and recommendations to support platform development decisions",
    ],
  },
  {
    role: "Administrative Student Assistant",
    org: "Bellarmine University",
    dates: "Aug 2020 to May 2024",
    bullets: [
      "Coordinated event logistics and designed promotional materials for identity and inclusion programming",
      "Built and maintained spreadsheets using formulas and pivot tables to support administrative decision-making",
      "Maintained and organized student intake records, rosters, and departmental data using Excel",
    ],
  },
]

export const otherExperience = [
  { role: "Client Services Representative, 401(k) Division", org: "ADP", dates: "Apr 2025 to Sep 2025" },
  { role: "Patient Associate", org: "Norton Healthcare", dates: "Oct 2021 to Sep 2022" },
]

export const folders = [
  { id: "devmetrics", label: "01. DevMetrics", kind: "case-study" },
  { id: "bakersparadise", label: "02. BakersParadise", kind: "case-study" },
  { id: "parking-tag", label: "03. Parking Tag Detection", kind: "external", url: "https://github.com/JaleahBeason/Parking-Tag-Detection" },
  { id: "more-projects", label: "04. More Technical Work", kind: "list" },
]

export const otherProjects = [
  { name: "loglens", desc: "CLI tool for parsing web server logs", url: "https://github.com/JaleahBeason/loglens" },
  { name: "devmetrics-api", desc: "REST API built on loglens's analysis logic", url: "https://github.com/JaleahBeason/devmetrics-api" },
  { name: "devmetrics-dashboard", desc: "React dashboard for the API", url: "https://github.com/JaleahBeason/devmetrics-dashboard" },
  { name: "ASMBytecode_JRB", desc: "Java bytecode analyzer built with the ASM framework", url: "https://github.com/JaleahBeason/ASMBytecode_JRB" },
]

export const caseStudies = {
  devmetrics: {
    name: "DevMetrics",
    tagline: "Log analysis, clarified",
    github: "https://github.com/JaleahBeason/devmetrics-dashboard",
    live: "https://devmetrics-dashboard-five.vercel.app",
    productSpec: {
      problem: "Anyone running a website ends up with log files that hold useful information, but that information is hard to get to. Reading through logs by hand works for a few hundred lines, then it stops being realistic. Full monitoring platforms solve this well, but often cost money and do more than a solo developer needs.",
      goals: [
        "Parse standard web server logs and surface the numbers that matter most: error rate, busiest endpoint, top IPs, traffic by hour.",
        "Offer two ways to use it: a CLI for scripts and CI pipelines, a web dashboard for a quick visual check.",
      ],
      metrics: [
        "How many new users successfully run their first analysis within 5 minutes of installing it.",
        "How often active users come back and run another analysis.",
        "Whether people use the CLI or the dashboard more.",
      ],
    },
    userFlow: {
      who: "A solo developer or small team without dedicated monitoring tools, who wants a fast answer to \"what's going wrong and where\" from a log file they already have.",
      flow: [
        "Paste or upload raw log text into the CLI or the web dashboard.",
        "loglens parses each line and classifies requests, errors, and timestamps.",
        "The analyzer computes error rate, busiest path, top IPs, and hourly traffic.",
        "Results render instantly in the dashboard, or print to the terminal for CI use.",
      ],
    },
    technicalArchitecture: {
      stack: ["Python (loglens core + FastAPI)", "React + Vite (dashboard)", "pytest (both layers)"],
      notes: "Three repos share one core: loglens is a standalone parsing/analysis package, devmetrics-api wraps it in a REST API with zero duplicated logic, and devmetrics-dashboard is a React frontend that consumes that API. The CLI was built first, deliberately, to prove the analysis itself was useful before any UI existed.",
      tradeoffs: [
        "Only the standard Apache/Nginx log format is supported, in exchange for a faster path to a working version.",
        "No saved history: every request is stateless, which kept v1 simple but means no trend-over-time view yet.",
      ],
    },
  },
  bakersparadise: {
    name: "BakersParadise",
    tagline: "Recipe analytics for beginner bakers",
    github: "https://github.com/JaleahBeason/bakersparadise-capstone",
    live: "https://bakersparadise-capstone-j5tydpwqujx9xjvysuegff.streamlit.app/",
    productSpec: {
      problem: "Most recipe sites hand you a huge list of results and leave you to figure out the rest. There's no easy way to tell which recipes are actually simple, quick, or right for your skill level.",
      goals: [
        "Automatically pull recipe data from an API instead of entering it by hand.",
        "Classify recipes as beginner-friendly using an explainable rule, not a black-box model.",
        "Let users save recipes and leave feedback on real difficulty, closing the loop on that rule.",
      ],
      metrics: [
        "How often people who start on a beginner-friendly recipe actually finish it.",
        "How often the system's difficulty label matches what a user reports afterward.",
        "How many saved recipes get revisited later.",
      ],
    },
    userFlow: {
      who: "Beginner bakers who want a faster, less overwhelming way to pick a recipe, and can save a name-tagged list of recipes to come back to without creating an account.",
      flow: [
        "Recipe data is pulled from TheMealDB API and stored in SQLite.",
        "Ingredient count and prep time drive a simple, explainable beginner-friendly / complexity label.",
        "The Streamlit dashboard surfaces analytics (top ingredients, complexity mix) and a recipe explorer.",
        "Anyone can enter a name in the sidebar and save recipes to a dedicated saved-recipes page.",
      ],
    },
    technicalArchitecture: {
      stack: ["Python", "SQLite", "Streamlit", "TheMealDB API"],
      notes: "Split into four single-purpose pieces: API collection, storage, analysis queries, and the Streamlit UI, so each part could be built and tested independently.",
      tradeoffs: [
        "Beginner-friendly labeling uses ingredient count and prep time, not a trained difficulty model, trading some accuracy for something a user can sanity-check themselves.",
        "Prep time is estimated with a formula, not measured from real cooking, and the app says so explicitly rather than presenting a guess as fact.",
      ],
    },
  },
}

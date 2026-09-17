export const profile = {
  name: "Ja'Leah Beason",
  title: "CS graduate turned product manager",
  bio: "CS degree from Bellarmine University. Spent the last few months proving to myself I could actually build things, not just study them. Somewhere in there I noticed I kept asking who this is for and why it works this way, more than whether it worked at all. Turns out that's the job I actually want.",
  contact: {
    email: "jaleah.beason9@gmail.com",
    github: "https://github.com/JaleahBeason",
    linkedin: "https://www.linkedin.com/in/jaleah-beason-a82a11220/",
    resume: "/portfolio-site/JaLeah_Beason_Resume_2026.pdf",
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
    role: "Owner",
    org: "Le Sucre (Baking Business)",
    dates: "Dec 2022 to Jul 2026",
    bullets: [
      "Ran a cookie, brownie, and cinnamon roll business solo end-to-end: buying, production, quality control, pricing, and customer fulfillment",
      "Sourced ingredients through bulk buying at Restaurant Depot and Costco, balancing cost against quality through hands-on taste and quality testing",
      "Owned the full customer relationship, from order to delivery, in a fast-paced, deadline-driven environment",
    ],
  },
  {
    role: "Data Analytics Intern",
    org: "Essential Innovations",
    dates: "Jan 2026 to Jun 2026",
    bullets: [
      "Queried and evaluated data and tagging structures across three integrated government benefits systems (TANF, SNAP, Medicaid) using SQL, independently identifying root causes of data-quality discrepancies and resolving them",
      "Owned recurring reporting for stakeholders, building and maintaining data structures in Excel and documenting findings for technical and non-technical audiences",
      "Supported consolidation of multiple benefits applications into a single unified intake system, improving downstream data quality and eligibility routing",
    ],
  },
  {
    role: "Software/Product Intern",
    org: "Tridna",
    dates: "Dec 2025 to May 2026",
    bullets: [
      "Partnered with the product team to gather stakeholder requirements and translate them into specifications and backlog items the engineering team could build against",
      "Used usage-metric and user-behavior data insights to recognize what made features valuable and prioritize a roadmap centered on user experience",
      "Participated in Agile ceremonies including sprint planning and backlog grooming, collaborating closely with engineers and designers",
    ],
  },
  {
    role: "Client Service Representative, 401(k) Division",
    org: "ADP",
    dates: "Apr 2025 to Sep 2025",
    bullets: [
      "Served as a trusted point of contact for enterprise clients, diagnosing account issues and escalating to internal technical teams with full context for resolution under deadline pressure",
      "Investigated and documented client-reported issues, building and sustaining professional relationships while translating technical detail into plain-language explanations",
    ],
  },
  {
    role: "Merchandising Associate",
    org: "Broadway Apparel",
    dates: "Jun 2021 to Oct 2024",
    bullets: [
      "Used sell-through data and customer feedback across four product lines to inform restocking, discontinuation, and merchandising decisions",
      "Negotiated shipping timelines, order quantities, and cost directly with suppliers, switching vendors when reliability or pricing no longer held up",
      "Tracked performance metrics across product lines and flagged risks early to support planning",
    ],
  },
  {
    role: "Sales Associate",
    org: "Kia",
    dates: "Jan 2024 to Apr 2024",
    bullets: [
      "Guided customers through product and financing comparisons on the sales floor, translating options into clear recommendations that closed sales",
      "Built rapport quickly with a broad customer base in a fast-paced, target-driven retail environment",
    ],
  },
  {
    role: "Warehouse Associate (Seasonal)",
    org: "Amazon",
    dates: "2022",
    bullets: [
      "Gained first-hand exposure to Amazon's fulfillment network and operational standards while supporting high-volume picking, packing, and sorting during peak season",
      "Met throughput and accuracy targets in a fast-paced, deadline-driven fulfillment environment",
    ],
  },
]

export const otherExperience = []

export const folders = [
  { id: "devmetrics", label: "01. DevMetrics", kind: "case-study" },
  { id: "bakersparadise", label: "02. BakersParadise", kind: "case-study" },
  { id: "parking-tag", label: "03. Parking Tag Detection", kind: "external", url: "https://github.com/JaleahBeason/Parking-Tag-Detection" },
  { id: "tableau", label: "04. Tableau Workspace", kind: "tableau-list" },
  { id: "more-projects", label: "05. More Technical Work", kind: "list" },
]

export const tableauProjects = [
  { name: "Recipe Data", desc: "BakersParadise recipe analytics dashboard", url: "https://public.tableau.com/app/profile/jaleah.beason/viz/BakersParadise/BakersParadiseAnalysis" },
  { name: "Retail Analytics", desc: "UK online retail sales dashboard, 2010 to 2011", url: "https://public.tableau.com/app/profile/jaleah.beason/viz/OnlineRetailAnalysis10-11/OnlineRetailAnalysis2010-2011" },
  { name: "Pre-K Cost vs. Outcomes", desc: "State Pre-K spending and quality vs. NAEP reading and math scores", url: "https://public.tableau.com/app/profile/jaleah.beason/viz/Pre-KCostvs_Outcomes/StatePre-KCostvs_Outcomes" },
]

export const otherProjects = [
  { name: "loglens", desc: "CLI tool for parsing web server logs", url: "https://github.com/JaleahBeason/loglens" },
  { name: "devmetrics-api", desc: "REST API built on loglens's analysis logic", url: "https://github.com/JaleahBeason/devmetrics-api" },
  { name: "devmetrics-dashboard", desc: "React dashboard for the API", url: "https://github.com/JaleahBeason/devmetrics-dashboard" },
  { name: "ASMBytecode_JRB", desc: "Java bytecode analyzer built with the ASM framework", url: "https://github.com/JaleahBeason/ASMBytecode_JRB" },
  { name: "Pre-K Pivot Tables (Excel)", desc: "Practice workbook: 4 pivot tables analyzing state Pre-K spending, enrollment, and quality data", url: "/portfolio-site/PreK_Pivot_Tables.xlsx" },
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

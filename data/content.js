// Edit this one file to update the site.

export const profile = {
  name: "Laxmy Narayan",
  image: "/profile.jpeg",
  role: "Full Stack Developer & AI Engineer",
  tagline:
    "I build enterprise full-stack applications and production-grade Generative AI systems on .NET, Python and Azure.",
  location: "Bengaluru, India",
  email: "narayanlakshmi721@gmail.com",
  resumeUrl: "/Laxmy_Narayan_Resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/narine01" },
    { label: "LinkedIn", href: "https://linkedin.com/in/laxmy-narayan" },
  ],
};

// Quick facts shown beside the hero headline, all from the resume.
export const highlights = [
  { value: "5+", label: "years building enterprise software" },
  { value: "~70%", label: "less manual effort from document intelligence" },
  { value: "3", label: "enterprise GenAI systems: RAG, search, extraction" },
];

export const about = [
  "I'm a Senior Software Engineer with 5+ years of experience building enterprise-scale full-stack applications, backend services, cloud-native solutions and AI-powered systems.",
  "My core stack is C#, .NET, Angular, Python, SQL Server, Cosmos DB and Microsoft Azure. Lately I focus on Generative AI: RAG architectures, vector and semantic search, and document intelligence with Azure OpenAI, Azure AI Search and LangChain.",
  "I like owning work end to end, from requirements and architecture to deployment and production support, and I enjoy mentoring other developers along the way.",
];

// Personal projects, taken from github.com/narine01
export const projects = [
  {
    title: "TraceForge",
    image: "/projects/traceforge.svg",
    description:
      "An in-progress workflow automation control plane for authoring, running and monitoring reliable workflows. Includes a visual workflow editor, versioned definitions, live run monitoring, analytics and workspace access controls.",
    tags: ["React", "Node.js", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Docker"],
  },
  {
    title: "SpendSense",
    description:
      "An offline-first Android expense tracker built to explore modern Android development, with two generative AI features: bill scanning that extracts merchant, amount, date and category from a photo or PDF for review before saving, and plain-language Q&A over your own spending.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "Gemini API"],
    repo: "https://github.com/narine01/SpendSense",
  },
  {
    title: "SpendSense Backend",
    image: "/projects/backend.svg",
    description:
      "A small FastAPI service, deployed on Render, that sits between the SpendSense app and the Gemini API so the API key never ships inside the APK.",
    tags: ["Python", "FastAPI", "Gemini API", "Render"],
    repo: "https://github.com/narine01/spendsense-backend",
  },
  {
    title: "Netflix Clone",
    image: "/projects/netflix.svg",
    description:
      "A Netflix-style streaming UI built with Next.js, TypeScript and Tailwind CSS, with Prisma for data access, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
    live: "https://ln-netflix-clone-deploy.vercel.app",
    repo: "https://github.com/narine01/LN-netflix-clone-deploy",
  },
];

// SpendSense app screens (design previews with sample data), served from /public/screens
export const spendsenseScreens = [
  { title: "Expenses", file: "/screens/expenses.html" },
  { title: "Monthly summary", file: "/screens/summary.html" },
  { title: "Add expense", file: "/screens/add-expense.html" },
  { title: "Scan a bill (AI)", file: "/screens/scan-bill.html" },
  { title: "Ask your spending (AI)", file: "/screens/ask-ai.html" },
];

export const aiWork = [
  {
    title: "Enterprise RAG Platform",
    image: "/projects/rag.svg",
    description:
      "An enterprise RAG platform built with LangChain and LangGraph to orchestrate document ingestion, retrieval and grounded answer generation. Combines vector and semantic search with web search, source citations and confidence scoring, with evaluation workflows to measure answer quality and retrieval relevance.",
    tags: ["Python", "LangChain", "LangGraph", "Azure OpenAI", "Azure AI Search", "RAG Evaluation", "Confidence Scoring"],
  },
  {
    title: "Enterprise Document Intelligence",
    image: "/projects/doc-intelligence.svg",
    description:
      "Automated extraction of structured data from PDF and Excel documents, reducing manual processing effort by roughly 70%.",
    tags: ["Python", "Azure AI Document Intelligence"],
  },
  {
    title: "Enterprise Search",
    image: "/projects/enterprise-search.svg",
    description:
      "Semantic and vector search across enterprise document repositories: index and indexer design, skillsets, embeddings, metadata filtering and retrieval optimization.",
    tags: ["Azure AI Search", "Vector Search", "Embeddings"],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Maistering India Pvt Ltd",
    period: "Jan 2024 – Present",
    points: [
      "Lead end-to-end development of enterprise applications, from requirements and architecture to deployment and production support.",
      "Design and build production-grade GenAI solutions with Python, Azure OpenAI, Azure AI Search and LangChain.",
      "Engineer prompt templates, chunking strategies, retrieval workflows and metadata filtering to improve response quality and relevance.",
      "Provide Level 3 production support, resolving critical application, API, database and integration issues.",
      "Mentor junior developers and run knowledge-sharing sessions on Python, debugging, GenAI and engineering best practices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Maistering India Pvt Ltd",
    period: "May 2022 – Dec 2023",
    points: [
      "Built scalable REST APIs with C#, .NET, Python, SQL Server and Azure Cosmos DB for core enterprise workflows.",
      "Created reusable Angular components and frontend services for consistency and maintainability.",
      "Integrated Azure Key Vault, Storage, OpenAI and AI Search into secure, cloud-native solutions.",
      "Tuned SQL queries and data-access patterns for noticeably faster API response times.",
      "Added validation, structured logging, monitoring and centralized error handling, and contributed to CI/CD pipelines.",
    ],
  },
  {
    role: "Junior Software Engineer Intern",
    company: "Idea Elan",
    period: "Dec 2021 – May 2022",
    points: [
      "Developed reusable UI components and supported feature implementation across web applications.",
      "Investigated and resolved defects to improve stability and user experience.",
    ],
  },
];

export const skills = {
  Languages: ["C#", "Python", "SQL", "JavaScript", "TypeScript"],
  Backend: [
    ".NET Core",
    "ASP.NET Core",
    "Web API",
    "REST APIs",
    "Entity Framework Core",
    "Microservices",
  ],
  Frontend: ["Angular", "React", "HTML5", "CSS3", "Bootstrap"],
  Cloud: ["Microsoft Azure", "Azure Key Vault", "Azure Storage", "Azure Functions"],
  "Generative AI": [
    "Azure OpenAI",
    "LangChain",
    "RAG",
    "LLM Applications",
    "Prompt Engineering",
  ],
  "AI & Search": [
    "Azure AI Search",
    "Vector Search",
    "Semantic Search",
    "Embeddings",
    "Azure AI Document Intelligence",
  ],
  Databases: ["SQL Server", "Azure Cosmos DB", "MongoDB"],
  "DevOps & Tools": ["Git", "GitHub", "Azure DevOps", "CI/CD", "Agile", "Scrum"],
};

export const education = [
  {
    degree: "M.Sc. in Computer Science",
    school: "Christ (Deemed to be University), Bengaluru",
    period: "2020 – 2022",
    score: "74%",
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "Christ (Deemed to be University), Bengaluru",
    period: "2017 – 2020",
    score: "68%",
  },
];

export const certifications = [
  "Python Programming – Coursera",
  "Oracle SQL – Udemy",
  "React JS – Udemy",
  "JavaScript – Udemy",
  "MongoDB Basics",
];

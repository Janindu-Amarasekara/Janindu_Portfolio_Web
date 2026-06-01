/**
 * Edit this file to personalize copy, links, and résumé path.
 * Safe to commit; keep employer-identifying details out if under NDA.
 */

export const siteConfig = {
  /** Used in metadata and JSON-LD. */
  title: "Janindu Amarasekara — Software Engineer",
  /** Short tagline for OG / meta description. */
  description:
    "Full-Stack Developer with 3 years of experience delivering reliable .NET and React/Next.js products for enterprise teams. Based in Australia with full work rights.",
  /** Canonical site URL — set NEXT_PUBLIC_SITE_URL in production (see README). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en-AU",
  person: {
    name: "Janindu Amarasekara",
    jobTitle: "Software Engineer · Backend & Full Stack",
    location: "Melbourne, Australia",
    yearsExperience: 3,
    /**
     * Headshot for the hero and social previews. Add a file under `public/`
     * (e.g. `public/avatar.jpg`) and set this to `"/avatar.jpg"`. Use `null` until then.
     */
    avatarSrc: "/avatar.jpeg" as string | null,
    /** Optional public résumé in /public (e.g. "/cv.pdf"). */
    cvPath: null as string | null,
    social: {
      /** Display format; used for tel: links (spaces stripped). */
      phone: "+61 481 102 326",
      github: "https://github.com/Janindu-Amarasekara",
      linkedin: "https://www.linkedin.com/in/janindu-amarasekara-680282164/",
      email: "janindu9887@gmail.com",
    },
  },
} as const;

export type SocialLinks = typeof siteConfig.person.social;

export const heroContent = {
  /**
   * The headline renders as `lead` + a gradient-highlighted `highlight` + `trail`.
   * Edit each part; leave `trail` empty if the highlight ends the sentence.
   */
  headline: {
    lead: "Software Engineer building ",
    highlight: "reliable products",
    trail: " end to end.",
  },
  subline:
    "Experienced in building scalable APIs, enterprise workflows, and modern web applications using .NET, React, Next.js, and SQL technologies.",
  /**
   * Shown under the hero subline. Helps hiring managers and recruiters who need
   * eligibility context at a glance (edit or set to null to hide).
   */
  eligibilityLine:
    "Full working rights in Australia and available for full-time opportunities in Melbourne.",
  /** Small badge shown above the headline. Set to null to hide. */
  availability: "Available for full-time roles",
  /** Quick-glance highlights rendered under the hero CTAs. */
  stats: [
    { value: "3+ yrs", label: "Commercial experience" },
    { value: ".NET · React", label: "Core stack" },
    { value: "Melbourne", label: "Australia · work rights" },
  ],
  primaryCta: { label: "Get in touch", href: "#contact" },
  secondaryCta: { label: "View experience", href: "#experience" },
};

export const aboutParagraphs = [
  "I work across the stack using ASP.NET Core, React and Next.js, SQL Server, PostgreSQL, and Supabase. My focus is clear architecture, reliable delivery, and maintainable systems. I'm based in Australia with full work rights and available for full-time opportunities.",
  "Most of my commercial work is in private repositories. These case studies are written to explain scope, technical decisions, and measurable outcomes while respecting confidentiality.",
  "I am also publishing focused public projects that demonstrate secure authentication, scalable APIs, and production-ready application architecture.",
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: ".NET",
    items: [
      "ASP.NET Core Web APIs",
      "C#",
      "Entity Framework Core",
      "REST API integration & background jobs",
      "Layered architecture & service design",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "Reusable component architecture & responsive UI development",
    ],
  },
  {
    title: "Data & platform",
    items: [
      "SQL Server (T-SQL, indexing, migrations)",
      "Supabase / Postgres",
      "RESTful API design & integration",
    ],
  },
  {
    title: "Delivery",
    items: [
      "Git, code review, CI pipelines",
      "Azure DevOps workflows & deployment support",
      "Collaboration with product and QA",
    ],
  },
];

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "FINAP - Fintechnology Asia Pacific Lanka Private Limited",
    role: "Software Engineer",
    period: "Sep 2023 — Oct 2025",
    summary:
      "Worked on enterprise supply chain and operational management systems using .NET and SQL Server. Contributed to backend services, API development, SQL optimisation, debugging, and production support across business-critical workflows.",
    highlights: [
      "Developed and maintained ASP.NET Core backend services and internal APIs.",
      "Optimised SQL queries and execution performance for operational workflows.",
      "Investigated and resolved production issues in enterprise systems",
      "Collaborated with QA and business stakeholders during feature delivery.",
      "Contributed across development, deployment, and support phases.",
    ],
    tech: ["ASP.NET Core", "C#", "SQL Server", "REST APIs", "Azure DevOps"],
  },
  {
    org: "SLT Digital Services (Pvt) Ltd",
    role: "Software developer",
    period: "Oct 2022 — Apr 2023",
    summary:
      "Worked on internal business applications and reporting systems with strong SQL Server usage and operational data handling.",
    highlights: [
      "Built reporting and admin features using React and backend services.",
      "Improved SQL-based workflows and operational reporting.",
      "Assisted with debugging, testing, and production support",
      "Worked within Agile delivery teams on business application improvements",
    ],
    tech: ["React", "SQL Server", "Reporting", "Agile"],
  },
  {
    org: "Affordable Dumpster Rental (US) — Freelance Developer",
    role: "Software developer",
    period: "2024 — 2025",
    summary:
      "Contributed to an operational management platform using Next.js, NestJS, and Supabase.",
    highlights: [
      "Developed frontend workflows and responsive interfaces using Next.js.",
      "Built backend APIs and business logic using NestJS.",
      "Worked with Supabase and PostgreSQL for operational data management.",
      "Participated in deployment and production support activities.",
    ],
    tech: ["Next.js", "NestJS", "Supabase", "PostgreSQL", "TypeScript"],
  },
];

export type CaseStudy = {
  title: string;
  problem: string;
  role: string;
  approach: string;
  stack: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Stabilizing a high-traffic integration path",
    problem:
      "Downstream timeouts and duplicate side effects were eroding trust in a customer-facing workflow backed by a legacy integration.",
    role: "Implemented defensive patterns in the API layer and coordinated with ops on observability.",
    approach:
      "Introduced structured retries with backoff, idempotency keys, and clearer failure taxonomy; added metrics and alerts around queue depth and error rates.",
    stack: ["ASP.NET Core", "SQL Server", "React", "Azure monitoring"],
    outcome:
      "Cut timeout-related incidents materially and gave support a single place to trace failures end-to-end.",
  },
  {
    title: "Faster admin experiences over large datasets",
    problem:
      "Internal operators waited on slow grids and ad-hoc exports that pushed the database harder than necessary.",
    role: "Owned query shaping, paging strategy, and UI loading states for the heaviest screens.",
    approach:
      "Indexed for real filter paths, avoided N+1 access patterns, and moved expensive aggregations behind batched jobs where appropriate.",
    stack: ["SQL Server", "EF Core", "React"],
    outcome:
      "Reduced median page-ready time and lowered peak CPU on the reporting instance during business hours.",
  },
  {
    title: "Greenfield module with Supabase-style constraints",
    problem:
      "A new product surface needed authenticated multi-user access with row-level guarantees without standing up a full custom auth stack on day one.",
    role: "Designed schema, policies, and API boundaries alongside the frontend.",
    approach:
      "Modelled ownership in Postgres, enforced RLS policies, and kept the Next.js app thin—calling edge-safe endpoints with short-lived credentials.",
    stack: ["Next.js", "Supabase (Postgres + Auth)", "TypeScript"],
    outcome:
      "Shipped an auditable MVP path that could evolve toward stricter compliance requirements.",
  },
];

export type Project = {
  name: string;
  description: string;
  status: "coming_soon" | "in_progress";
  href: string | null;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Supabase task workspace",
    description:
      "Next.js app with Supabase Auth, RLS policies, and optimistic UI—demonstrates how I think about secure multi-tenant data.",
    status: "in_progress",
    href: null,
    tags: ["Next.js", "Supabase", "TypeScript"],
  },
  {
    name: ".NET minimal API + React admin",
    description:
      "Small vertical slice: JWT-secured API, integration tests, and a React console for operators.",
    status: "coming_soon",
    href: null,
    tags: ["ASP.NET Core", "React", "SQL Server"],
  },
];

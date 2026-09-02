/**
 * Single source of truth for all portfolio content.
 * Fork this repo and edit ONLY this file to make the site your own.
 */

export type Social = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  href?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type PortfolioConfig = {
  meta: {
    siteTitle: string;
    siteDescription: string;
    /** Absolute https URL to a social preview image, or leave empty. */
    ogImage?: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    availability?: string;
    resumeUrl?: string;
  };
  about: {
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
  certifications: Certification[];
  contact: {
    email: string;
    blurb: string;
    socials: Social[];
  };
};

export const portfolio: PortfolioConfig = {
  meta: {
    siteTitle: "Alex Doe — Software Engineer Resume & Portfolio",
    siteDescription:
      "Resume and project portfolio of Alex Doe, a software engineer building reliable web platforms with TypeScript, React and Node.",
  },
  hero: {
    name: "Alex Doe",
    role: "Software Engineer",
    tagline:
      "I build fast, accessible web products and the developer tooling that keeps them shipping.",
    location: "Berlin, Germany",
    availability: "Open to senior frontend & full-stack roles",
    resumeUrl: "/resume.pdf",
  },
  about: {
    paragraphs: [
      "I'm a software engineer with 7 years of experience across product teams and platform work. I care about clear interfaces, small dependencies, and code that the next person can read without a guide.",
      "Most of my work sits between design systems and backend APIs: shipping accessible UI, tightening build pipelines, and turning slow pages into fast ones.",
    ],
    facts: [
      { label: "Experience", value: "7 years" },
      { label: "Focus", value: "Frontend & platform" },
      { label: "Stack", value: "TypeScript, React, Node" },
      { label: "Timezone", value: "CET (UTC+1)" },
    ],
  },
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"],
    },
    {
      category: "Frontend",
      items: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Accessibility (WCAG)"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PostgreSQL", "REST", "GraphQL", "Redis"],
    },
    {
      category: "Tooling",
      items: ["Git", "GitHub Actions", "Docker", "Vitest", "Playwright"],
    },
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "Northwind Labs",
      period: "2022 — Present",
      location: "Berlin, Germany",
      summary: "Design system and web performance for a B2B analytics suite.",
      highlights: [
        "Led a design-system rewrite adopted by 6 product teams, cutting UI bug reports by 40%.",
        "Reduced median page load from 3.1s to 1.2s by code-splitting and trimming bundle size 55%.",
        "Introduced automated accessibility checks in CI, reaching WCAG 2.1 AA on all core flows.",
      ],
    },
    {
      role: "Full-Stack Engineer",
      company: "Kite & Co.",
      period: "2019 — 2022",
      location: "Remote",
      highlights: [
        "Built a multi-tenant billing dashboard serving 20k monthly active users.",
        "Migrated a legacy jQuery app to React and TypeScript with zero downtime.",
        "Mentored 4 junior engineers through structured code review and pairing.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Bitworks",
      period: "2017 — 2019",
      highlights: [
        "Shipped internal tooling that removed ~10 hours of manual reporting per week.",
        "Owned the public API client libraries in TypeScript and Python.",
      ],
    },
  ],
  projects: [
    {
      name: "Resume Portfolio Template",
      description:
        "An open-source, config-driven resume portfolio for developers. Edit one file, deploy to GitHub Pages.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      github: "https://github.com/your-username/resume-portfolio",
      demo: "https://your-username.github.io/resume-portfolio/",
      featured: true,
    },
    {
      name: "Queryscope",
      description:
        "A local-first SQL explorer that profiles slow Postgres queries and suggests indexes from EXPLAIN output.",
      tech: ["TypeScript", "Node.js", "PostgreSQL"],
      github: "https://github.com/your-username/queryscope",
      demo: "https://queryscope.example.com",
      featured: true,
    },
    {
      name: "a11y-audit-action",
      description:
        "GitHub Action that runs accessibility audits on every pull request and comments a diff of new violations.",
      tech: ["TypeScript", "GitHub Actions", "Playwright"],
      github: "https://github.com/your-username/a11y-audit-action",
    },
    {
      name: "Tinybus",
      description:
        "A 1.2 kB typed event bus with zero dependencies, used in production by several small teams.",
      tech: ["TypeScript", "Vitest"],
      github: "https://github.com/your-username/tinybus",
      demo: "https://tinybus.example.com",
    },
  ],
  education: [
    {
      degree: "B.Sc. Computer Science",
      school: "Technical University of Munich",
      period: "2013 — 2017",
      detail: "Thesis on incremental static analysis for JavaScript build tools.",
    },
  ],
  certifications: [
    {
      name: "Certified Kubernetes Application Developer",
      issuer: "Cloud Native Computing Foundation",
      year: "2024",
      href: "https://www.cncf.io/training/certification/ckad/",
    },
    {
      name: "Web Accessibility Specialist",
      issuer: "IAAP",
      year: "2023",
    },
  ],
  contact: {
    email: "hello@example.com",
    blurb:
      "The fastest way to reach me is email. I reply to most messages within a couple of days.",
    socials: [
      { label: "GitHub", href: "https://github.com/your-username" },
      { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
      { label: "Website", href: "https://example.com" },
    ],
  },
};

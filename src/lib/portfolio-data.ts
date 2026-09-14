import {
  Rocket, Boxes, Sparkles, Radio,
  Terminal, Database, Cpu, Cloud,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  name: string;
  role: string;
  icon: LucideIcon;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Zinga",
    role: "Technical Co-Founder",
    icon: Rocket,
    description:
      "Mobile-first booking platform for stylists, barbers, salons, and independent service providers. Live on iOS, Android, and web with booking, mobile calendar, client management, payments, and multilingual flows.",
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "Firebase Auth", "Stripe", "Vercel"],
    links: [
      { label: "zingaapp.com", href: "https://zingaapp.com" },
      { label: "zingaapp.ai", href: "https://zingaapp.ai" },
    ],
  },
  {
    name: "LagosMailer",
    role: "Multi-Tenant SaaS",
    icon: Boxes,
    description:
      "Multi-tenant email/SMS campaign platform. Architecture: Campaign → Run → Stage → Batch → Recipient → Attempt → Event. Staged rollouts, batching, retries, quotas, idempotent execution, provider abstraction. Supports lead datasets of 63K+ records.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Resend", "SMTP", "Vercel"],
    links: [{ label: "github", href: "https://github.com/bara080" }],
  },
  {
    name: "Zinga OS",
    role: "Agentic Runtime",
    icon: Sparkles,
    description:
      "Agentic automation + communications platform. AI proposes → policy engine evaluates → human approves → provider adapter executes → result audited. AI never holds unrestricted credentials. Multi-tenant with job + agent-action state machines.",
    stack: ["n8n", "TypeScript", "PostgreSQL", "AWS", "Node.js", "Docker"],
    links: [{ label: "github", href: "https://github.com/bara080" }],
  },
  {
    name: "AV Security Research",
    role: "Radar Spoofing · CUNY",
    icon: Radio,
    description:
      "Radar-spoofing attack research on radar-camera fusion systems (CenterFusion, CRN, SparseBEV) using the nuScenes dataset. Modified radar preprocessing pipelines and evaluated 3D detection / localization degradation under structured attack configurations.",
    stack: ["PyTorch", "CUDA", "nuScenes", "CenterFusion", "CRN", "SparseBEV", "MMDetection3D"],
    links: [{ label: "github", href: "https://github.com/bara080" }],
  },
];

export type Experience = {
  title: string;
  organization: string;
  date: string;
  current?: boolean;
  description: string;
};

export const experience: Experience[] = [
  {
    title: "AI Trainer — CS / Software Engineering Expert",
    organization: "Handshake AI Fellowship",
    date: "Sep 2026 — Present",
    current: true,
    description:
      "Developing and evaluating CS + software-engineering prompts for LLM assessment. Reviewing model outputs against rubric-based correctness, reasoning, and code-quality dimensions.",
  },
  {
    title: "Research Assistant — AV Security",
    organization: "Research Foundation of CUNY",
    date: "2024 — Present",
    current: true,
    description:
      "Radar-spoofing attack research on radar-camera fusion (CenterFusion / CRN / SparseBEV) using nuScenes. Reproduced 3D perception pipelines, designed structured attack configurations, and built clean-vs-attacked evaluation harnesses.",
  },
  {
    title: "Data Engineer",
    organization: "Simpu",
    date: "Jun 2022 — Jan 2024",
    description:
      "Cut customer-data ETL latency 50% by re-architecting batch SQL into a Python + AWS streaming pipeline on Postgres. Led a 5-engineer cloud migration to production with zero-downtime cutover.",
  },
  {
    title: "AI Product Engineer (Intern)",
    organization: "RadicalX",
    date: "Oct 2023 — Dec 2023",
    description:
      "Shipped an OpenAI-API conversational agent (Rex) with real-time streaming, prompt design, and UX wireframing across frontend, API, and inference layers.",
  },
  {
    title: "Fullstack Engineer (Intern)",
    organization: "Evisions",
    date: "Oct 2023 — Dec 2023",
    description:
      "Built React + Node + Express features against Postgres for a production app serving 1,000+ users. Improved dashboard query latency 30% via SQL rewrites and indexed materialized views.",
  },
];

export const sites = [
  "zingaapp.com",
  "zingaapp.ai",
  "clickbuild.tech",
  "passtimeapp.com",
  "irtaxcenter.com",
  "native125th.com",
];

export type SkillGroup = { title: string; icon: LucideIcon; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    icon: Terminal,
    items: ["Node.js · Express", "Python · Flask", "REST APIs · Workers", "Workflow orchestration", "Distributed processing"],
  },
  {
    title: "Data",
    icon: Database,
    items: ["PostgreSQL · Supabase", "MongoDB · MySQL", "ETL · Pipelines", "Spark · Pandas", "Data warehousing"],
  },
  {
    title: "AI / ML",
    icon: Cpu,
    items: ["PyTorch · TensorFlow", "OpenAI · Transformers", "OpenCV · sentence-transformers", "LLM evaluation", "3D perception · Multimodal"],
  },
  {
    title: "Cloud / Infra",
    icon: Cloud,
    items: ["AWS · Google Cloud", "Docker · Vercel", "GitHub Actions · CI/CD", "Linux · n8n", "CUDA · GPU compute"],
  },
];

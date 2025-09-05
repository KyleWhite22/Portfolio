// src/pages/Skills.tsx
import React from "react";
import {
  Code2,
  MonitorSmartphone,
  Server,
  Cloud,
  Database,
  Wrench,
  Gamepad2,
  Cpu,
} from "lucide-react";

type SkillItem = {
  name: string;
  /** Optional tooltip for extra context */
  hint?: string;
};

type SkillGroup = {
  title: string;
  icon: React.ElementType;
  items: SkillItem[];
};

const groups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    items: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "C#" , hint: "MonoGame" },
      { name: "C/C++" },
      { name: "Python" },
      { name: "x86-64 (asm)", hint: "Coursework + projects" },
    ],
  },
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: [
      { name: "React" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Recharts", hint: "Data viz" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    items: [
      { name: "Node.js / Express" },
      { name: "Serverless Framework" },
      { name: "OpenAI API" },
      { name: "Steam Web API" },
      { name: "REST / JSON" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      { name: "AWS Amplify" },
      { name: "Amazon Cognito" },
      { name: "DynamoDB" },
      { name: "S3 + CloudFront + Route 53", hint: "Hosting + CDN + DNS" },
      { name: "EC2 + Nginx" },
      { name: "GitHub Actions (CI/CD)" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [{ name: "MongoDB" }, { name: "DynamoDB" }],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git & GitHub" },
      { name: "Postman / Thunder Client" },
      { name: "Docker", hint: "Basic usage" },
      { name: "VS Code / Visual Studio" },
    ],
  },
  {
    title: "Game Dev",
    icon: Gamepad2,
    items: [
      { name: "MonoGame (C#)" },
      { name: "GameMaker" },
      { name: "Sprite/Pixel Art" },
      { name: "State Machines & AI" },
    ],
  },
  {
    title: "Systems / Architecture",
    icon: Cpu,
    items: [
      { name: "Software Design (SE)", hint: "State pattern, factories" },
      { name: "Auth & Sessions", hint: "Cognito, tokens" },
      { name: "Caching & CDNs" },
      { name: "Observability (basic)" },
    ],
  },
];

function GroupCard({ title, icon: Icon, items }: SkillGroup) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
      <header className="mb-3 flex items-center gap-2">
        <Icon className="h-5 w-5 text-white/80" aria-hidden="true" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </header>

      {/* Pill list—compact, no meters */}
      <ul className="flex flex-wrap gap-2">
        {items.map((s) => (
          <li key={s.name}>
            <span
              className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 hover:bg-white/15 transition"
              title={s.hint || s.name}
            >
              {s.name}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      // Distinct background vs Work/Education
      className="bg-zinc-900 text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-6 md:mb-8">
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold">
            Skills
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Core stack, tools, and areas I work in.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {groups.map((g) => (
            <GroupCard key={g.title} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
}

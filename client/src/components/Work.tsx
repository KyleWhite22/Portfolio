// src/pages/Work.tsx
import React from "react";
import krogerLogo from "../assets/krogerLogo.png";
import cincinnatiLogo from "../assets/cincinnatiLogo.png";
import siemensLogo from "../assets/siemensLogo.png"; // add this asset
import osuLogo from "../assets/ohioStateLogo.png";

type WorkItem = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  bullets?: string[];
  logoSrc?: string;
  logoAlt?: string;
  link?: string;
};

const work: WorkItem[] = [
   {
    company: "Cincinnati Insurance Companies",
    role: "Software Developer Intern",
    dates: "Summer 2024 (Full-time); Spring 2025 & Fall 2025 (Part-time)",
    location: "Fairfield, OH",
    bullets: [
      "Built automation scripts in Python, PowerShell, and C# to migrate off BMC TrueSight after a 700% price increase.",
      "Engineered ETL pipelines to ingest and standardize events/metrics from Nagios, Dynatrace, and Splunk into a unified schema, integrating with REST APIs to populate the replacement platform",
      "Debugged and optimized SQL queries using SQL Server Management Studio to improve monitoring data accuracy",
      "Performed software maintenance and debugging on the in-house monitoring/alerting platform to improve user experience",
    ],
    logoSrc: cincinnatiLogo,
    logoAlt: "Cincinnati Insurance Companies logo",
    link: "https://www.cinfin.com/",
  },
   {
    company: "Kroger",
    role: "Software Developer Intern — Locations & Geospatial",
    dates: "Summer 2025",
    location: "Cincinnati, OH",
    bullets: [
  "Increased unit test coverage from 60% to over 90% across all 6 Locations and Geospatial service repositories",
  "Implemented CI/CD coverage gates in GitHub Actions to block merges below the 90% test coverage threshold",
  "Updated Helm charts, deployed to Kubernetes, and validated REST APIs with Postman collections",
  "Participated in Scrum ceremonies (daily stand-ups, sprint planning, backlog refinement, retrospectives)"
],
    logoSrc: krogerLogo,
    logoAlt: "Kroger logo",
    link: "https://www.thekrogerco.com/",
  },
  {
    company: "The Ohio State University",
    role: "Teaching Assistant — Foundations 1: Discrete Structures",
    dates: "Fall 2024, Fall 2025",
    location: "Columbus, OH",
    bullets: [
      "Led weekly office hours for 30+ students to explain Big-O/asymptotic analysis, recursion, and proof techniques"
    ],
    logoSrc: osuLogo,
    logoAlt: "Ohio State logo",
    link: "https://cse.osu.edu/"
  },
  // --- Siemens entries ---
  {
    company: "Siemens",
    role: "Ambassador Intern Software Developer",
    dates: "Summer 2023",
    location: "Milford, OH",
    bullets: [
      "Optimized performance, implemented features and fixed bugs for Siemens intern social media app (100+ users)",
    ],
    logoSrc: siemensLogo,
    logoAlt: "Siemens logo",
    link: "https://www.siemens.com/",
  },
  {
    company: "Siemens",
    role: "Technical Marketing Intern",
    dates: "Summer 2022",
    location: "Milford, OH",
    bullets: [
      "Built app for tracking intern progress and reviews, used by the intern program team for 70+ interns each rotation",
    ],
    logoSrc: siemensLogo,
    logoAlt: "Siemens logo",
    link: "https://www.siemens.com/",
  }
];

function WorkRow({
  company,
  role,
  dates,
  location,
  bullets,
  logoSrc,
  logoAlt,
  link,
}: WorkItem) {
  return (
    <li className="py-5 md:py-6 border-b border-white/10 last:border-b-0">
      <div className="flex items-start gap-5 md:gap-6">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={logoAlt || `${company} logo`}
            className="h-16 w-16 md:h-20 md:w-20 object-contain shrink-0"
          />
        ) : (
          <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 rounded-md bg-white/10 flex items-center justify-center text-base text-white/70">
            {company[0]}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="text-lg md:text-2xl font-semibold leading-tight truncate tracking-tight">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {company}
                </a>
              ) : (
                company
              )}
            </h3>
            <span className="text-sm md:text-base text-zinc-400">{dates}</span>
          </div>

          <div className="text-base md:text-lg text-zinc-300 leading-snug mt-0.5">
            {role}
            {location ? <span className="text-zinc-500"> • {location}</span> : null}
          </div>

          {bullets?.length ? (
            <ul className="mt-3 md:mt-4 list-disc space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-zinc-300">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-zinc-950 text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24 text-[16px] md:text-[17px]"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2
          id="work-heading"
          className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight"
        >
          Work Experience
        </h2>

        <ol>
          {work.map((w, idx) => (
            <WorkRow key={`${w.company}-${idx}`} {...w} />
          ))}
        </ol>
      </div>
    </section>
  );
}

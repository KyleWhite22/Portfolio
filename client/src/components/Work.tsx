// src/pages/Work.tsx
import React from "react";
import krogerLogo from "../assets/krogerLogo.png";
import cincinnatiLogo from "../assets/cincinnatiLogo.png";
// import siemensLogo from "../assets/siemensLogo.png"; // example

type WorkItem = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  bullets?: string[];
  logoSrc?: string;
  logoAlt?: string;
  link?: string; // optional company link
};

const work: WorkItem[] = [
  {
    company: "Kroger",
    role: "IT Infrastructure Software Developer Intern",
    dates: "Summer 2025",
    location: "Cincinnati, OH",
    bullets: [
      "Built internal tooling and automation to improve developer workflows.",
      "Contributed to CI/CD and monitoring improvements alongside infra team.",
    ],
    logoSrc: krogerLogo,
    logoAlt: "Kroger logo",
    link: "https://www.thekrogerco.com/",
  },
  {
    company: "Cincinnati Insurance Companies",
    role: "Software Developer Intern",
    dates: "Summer 2024",
    location: "Fairfield, OH",
    bullets: [
      "Implemented features and bug fixes across a full-stack codebase.",
      "Wrote unit tests and helped streamline deployment steps.",
    ],
    logoSrc: cincinnatiLogo,
    logoAlt: "Cincinnati Insurance Companies logo",
    link: "https://www.cinfin.com/",
  },
  // {
  //   company: "Siemens",
  //   role: "Software Intern",
  //   dates: "2023–2024",
  //   location: "—",
  //   bullets: ["Add your bullet points here."],
  //   logoSrc: siemensLogo,
  //   logoAlt: "Siemens logo",
  //   link: "https://www.siemens.com/",
  // },
];

function WorkCard({
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
    <li className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
      {/* Header: logo to the left of the company name */}
      <div className="flex items-start gap-3 md:gap-4">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={logoAlt || `${company} logo`}
            className="h-9 w-9 md:h-11 md:w-11 rounded-md object-contain bg-white p-1"
          />
        ) : (
          <div className="h-9 w-9 md:h-11 md:w-11 rounded-md bg-white/10 flex items-center justify-center text-xs text-white/70">
            {company[0]}
          </div>
        )}

        <div className="flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="text-base md:text-lg font-semibold">
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
            <span className="text-xs md:text-sm text-zinc-400">{dates}</span>
          </div>
          <div className="text-sm md:text-base text-zinc-300">
            {role}
            {location ? <span className="text-zinc-500"> • {location}</span> : null}
          </div>
          {bullets?.length ? (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
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
      className="bg-zinc-950 text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 id="work-heading" className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          Work Experience
        </h2>

        <ol className="space-y-4 md:space-y-5">
          {work.map((w, idx) => (
            <WorkCard key={`${w.company}-${idx}`} {...w} />
          ))}
        </ol>
      </div>
    </section>
  );
}

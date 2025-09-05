// src/pages/Education.tsx
import React from "react";
import osuLogo from "../assets/ohioStateLogo.png";
// import someOtherLogo from "../assets/someOtherLogo.png";

type EducationItem = {
  school: string;
  degree: string;
  dates: string;
  location?: string;
  gpa?: string;            // e.g., "3.8"
  bullets?: string[];      // coursework, honors, activities
  logoSrc?: string;
  logoAlt?: string;
  link?: string;           // optional school/program link
};

const education: EducationItem[] = [
  {
    school: "The Ohio State University",
    degree: "B.S. Computer Science & Engineering",
    dates: "Aug 2023 – May 2026 (expected)",
    location: "Columbus, OH",
    gpa: "3.8",
    bullets: [
      "Relevant coursework: Algorithms, Data Structures, Software Engineering, AI/ML, Computer Architecture (x86-64), Operating Systems.",
      "Projects: GameGeniusAI, Pickleball Analysis, Portfolio site, OSU Degree Audit Parser.",
    ],
    logoSrc: osuLogo,
    logoAlt: "Ohio State University logo",
    link: "https://www.osu.edu/",
  },
];

function EducationCard({
  school,
  degree,
  dates,
  location,
  gpa,
  bullets,
  logoSrc,
  logoAlt,
  link,
}: EducationItem) {
  return (
    <li className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
      <div className="flex items-start gap-3 md:gap-4">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={logoAlt || `${school} logo`}
            className="h-9 w-9 md:h-11 md:w-11 rounded-md object-contain bg-white p-1"
          />
        ) : (
          <div className="h-9 w-9 md:h-11 md:w-11 rounded-md bg-white/10 flex items-center justify-center text-xs text-white/70">
            {school[0]}
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
                  {school}
                </a>
              ) : (
                school
              )}
            </h3>
            <span className="text-xs md:text-sm text-zinc-400">{dates}</span>
          </div>

          <div className="text-sm md:text-base text-zinc-300">
            {degree}
            {location ? <span className="text-zinc-500"> • {location}</span> : null}
            {gpa ? <span className="text-zinc-500"> • GPA {gpa}</span> : null}
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

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-black text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 id="education-heading" className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          Education
        </h2>

        <ol className="space-y-4 md:space-y-5">
          {education.map((e, idx) => (
            <EducationCard key={`${e.school}-${idx}`} {...e} />
          ))}
        </ol>
      </div>
    </section>
  );
}

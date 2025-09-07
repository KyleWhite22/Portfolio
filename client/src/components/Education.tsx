// src/pages/Education.tsx
import React from "react";
import osuLogo from "../assets/ohioStateLogo.png";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-black text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2
          id="education-heading"
          className="text-3xl md:text-4xl font-bold mb-6 md:mb-8"
        >
          Education
        </h2>

        {/* Single row — no container/card */}
        <div className="flex items-start gap-5 md:gap-6">
          <img
            src={osuLogo}
            alt="Ohio State University logo"
            className="h-16 w-16 md:h-20 md:w-20 object-contain shrink-0"
          />

          <div className="flex-1 min-w-0">
            {/* School + dates */}
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-lg md:text-2xl font-semibold leading-tight truncate">
                <a
                  href="https://www.osu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  The Ohio State University
                </a>
              </h3>
              <span className="text-sm md:text-base text-zinc-400">
                Aug 2023 – May 2026 (expected)
              </span>
            </div>

            {/* Degree / location / GPA */}
            <div className="text-base md:text-lg text-zinc-300 leading-snug mt-0.5">
              B.S. Computer Science &amp; Engineering
              <span className="text-zinc-500"> • Columbus, OH</span>
              <span className="text-zinc-500"> • GPA 3.8</span>
            </div>

            {/* Bullets */}
            <ul className="mt-3 md:mt-4 list-disc space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-zinc-300">
              <li>
                Relevant coursework: Algorithms, Data Structures, Software
                Engineering, AI/ML, Computer Architecture (x86-64), Operating
                Systems.
              </li>
              <li>
                Projects: GameGeniusAI, Pickleball Analysis, Portfolio site, OSU
                Degree Audit Parser.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

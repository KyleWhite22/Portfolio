// src/pages/Education.tsx
import React from "react";
import osuLogo from "../assets/ohioStateLogo.png";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-zinc-950 text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24 text-[16px] md:text-[17px]"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 id="education-heading" className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          Education
        </h2>

        <div className="flex items-start gap-5 md:gap-6">
          <img
            src={osuLogo}
            alt="Ohio State University logo"
            className="h-16 w-16 md:h-20 md:w-20 object-contain shrink-0"
          />

          <div className="flex-1 min-w-0">
            {/* School + GPA (plain text) + dates */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl md:text-3xl font-semibold leading-tight truncate">
                <a
                  href="https://www.osu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  The Ohio State University
                </a>
              </h3>

              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-base md:text-lg font-semibold text-white">
                  GPA 3.8
                </span>
                <span className="hidden md:inline text-zinc-600">•</span>
                <span className="text-sm md:text-base text-zinc-400">
                  Aug 2022 – May 2026 (expected)
                </span>
              </div>
            </div>

            {/* Degree / location */}
            <div className="mt-1 text-base md:text-lg text-zinc-300 leading-snug">
              B.S. Computer Science &amp; Engineering
              <span className="text-zinc-500"> • Columbus, OH</span>
            </div>

            {/* Coursework */}
            <h4 className="mt-5 text-base md:text-lg font-semibold text-white/90">
              Selected CS Coursework
            </h4>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3">
              {[
                "Intro to Database Systems",
                "Intro to Artificial Intelligence",
                "Computer Networking",
                "Software Engineering Requirements",
                "Project: Interactive Systems",
                "Principles of Programming Languages",
                "Software Engineering Techniques",
                "Data Structures and Algorithms",
                "Operating Systems",
                "Low-Level Programming & Computer Organization",
                "Discrete Structures",
                "Software Development and Design",
                "Software Components",
              ].map((c) => (
                <li key={c}>
                  <span className="inline-block w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm md:text-base text-zinc-100">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

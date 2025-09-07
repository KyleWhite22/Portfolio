import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  link?: string; // optional project link
};

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="p-6 bg-zinc-100 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-700">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-blue-600 hover:underline font-medium"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-900 text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Projects</h2>

        {/* Centered content like Education */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            title="GameGeniusAI"
            description="A Steam-powered game recommender using AI."
            link="https://game.kyle-white.com"
          />
          <ProjectCard
            title="Pickleball Analysis"
            description="A sports analytics app with AWS backend + Tailwind frontend."
            link="https://pickle.kyle-white.com"
          />
          {/* Add more <ProjectCard /> as needed */}
        </div>
      </div>
    </section>
  );
}


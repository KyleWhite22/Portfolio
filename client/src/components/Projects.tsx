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
      className="min-h-screen bg-white text-black p-10 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-6">
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
    </section>
  );
}

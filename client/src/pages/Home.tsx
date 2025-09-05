// src/pages/Home.tsx
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Projects />
     <Work />
      {/* EDUCATION */}
      <section id="education" className="min-h-screen bg-white text-black p-10 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <p>Ohio State University — B.S. Computer Science & Engineering (2026)</p>
        <ul className="mt-4 list-disc pl-6">
          <li>Artificial Intelligence</li>
          <li>Software Engineering Techniques</li>
          <li>Computer Graphics</li>
        </ul>
      </section>

      {/* SKILLS */}
      <section id="skills" className="min-h-screen bg-zinc-800 text-white p-10 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <span className="px-3 py-2 bg-zinc-700 rounded-lg">React</span>
          <span className="px-3 py-2 bg-zinc-700 rounded-lg">TypeScript</span>
          <span className="px-3 py-2 bg-zinc-700 rounded-lg">AWS</span>
          <span className="px-3 py-2 bg-zinc-700 rounded-lg">C# / MonoGame</span>
        </div>
      </section>
    </div>
  );
}

// src/pages/Home.tsx
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Projects />
      {/* WORK */}
      <section id="work" className="min-h-screen bg-zinc-900 text-white p-10 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold">Kroger – Software Intern</h3>
            <p>Summer 2025 | IT Infrastructure Developer</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Cincinnati Insurance Co.</h3>
            <p>Summer 2024 | Software Intern</p>
          </li>
        </ul>
      </section>

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

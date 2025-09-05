import kyleImg from '../assets/kyleBW.JPG'
import cincyBW from '../assets/cincinnatiImageBW.JPG'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-white"
      >
        {/* Background image */}
       <div
  aria-hidden="true"
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${cincyBW})`,
    backgroundAttachment: "fixed",   // <- parallax trick
  }}
/>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <img
            src={kyleImg}
            alt="Kyle White"
            className="w-[clamp(220px,28vw,360px)] rounded border-4 border-white shadow-xl shadow-black/40 mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Kyle White
          </h1>
          <p className="mt-3 text-lg md:text-2xl text-zinc-200 drop-shadow">
            Full-stack Developer @ OSU
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="btn btn-primary">Projects</a>
            <a href="#work" className="btn">Work Experience</a>
            <a href="#education" className="btn">Classes</a>
            <a href="#skills" className="btn">Skills</a>
          </div>
        </div>

        {/* Subtle gradient fade at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen bg-white text-black p-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        {/* Map over projects */}
        <div className="space-y-6">
          <div className="p-6 bg-zinc-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold">GameGeniusAI</h3>
            <p>A Steam-powered game recommender using AI.</p>
          </div>
          <div className="p-6 bg-zinc-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Pickleball Analysis</h3>
            <p>A sports analytics app with AWS backend + Tailwind frontend.</p>
          </div>
          {/* Add more */}
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="min-h-screen bg-zinc-900 text-white p-10">
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

      {/* Classes / Education */}
      <section id="education" className="min-h-screen bg-white text-black p-10">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <p>Ohio State University — B.S. Computer Science & Engineering (2026)</p>
        <ul className="mt-4 list-disc pl-6">
          <li>Artificial Intelligence</li>
          <li>Software Engineering Techniques</li>
          <li>Computer Graphics</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen bg-zinc-800 text-white p-10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <span className="px-3 py-2 bg-zinc-700 rounded-lg">React</span>
          <span className="px-3 py-2 bg-zinc-700 rounded-lg">TypeScript</span>
          <span className="px-3 py-2 bg-zinc-700 rounded-lg">AWS</span>
          <span className="px-3 py-2 bg-zinc-700 rounded-lg">C# / MonoGame</span>
        </div>
      </section>
    </div>
  )
}
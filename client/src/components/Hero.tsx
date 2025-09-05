import { Github, Linkedin, Mail } from "lucide-react";
import kyleImg from "../assets/kyleBW.JPG";
import cincyBW from "../assets/cincinnatiImageBW.JPG";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white scroll-mt-24"
      style={{
        backgroundImage: `url(${cincyBW})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-12">
        {/* Left: photo */}
        <div className="flex justify-center md:justify-start items-center">
          <img
            src={kyleImg}
            alt="Kyle White"
            className="w-[clamp(220px,28vw,400px)] rounded-xl border-4 border-white shadow-xl shadow-black/40"
          />
        </div>

        {/* Right: text + links */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Kyle White</h1>
          <p className="mt-4 text-lg md:text-2xl text-zinc-200 drop-shadow">
            Full-stack Developer @ OSU
          </p>

          {/* Section nav buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <a href="#projects" className="btn btn-primary">Projects</a>
            <a href="#work" className="btn">Work</a>
            <a href="#education" className="btn">Classes</a>
            <a href="#skills" className="btn">Skills</a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center md:justify-start gap-5 text-zinc-300">
            <a
              href="https://github.com/kewhite900"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/kyle-white-/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:kewhite900@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

// Hero.tsx
import { Github, Linkedin, Mail } from "lucide-react";
import kyleImg from "../assets/kyleBW.JPG";
import cincyBW from "../assets/cincinnatiImageBW.JPG";

// Small inline paddle icon
function PaddleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Pickleball"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(-20 28 28)">
        <rect x="12" y="8" width="32" height="28" rx="12" ry="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="25" y="34" width="6" height="16" rx="3" fill="currentColor" />
        <rect x="23" y="32" width="10" height="4" rx="2" fill="currentColor" />
      </g>
      <g>
        <circle cx="47" cy="18" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="47" cy="18" r="1.4" fill="currentColor" />
        <circle cx="43.8" cy="18" r="1.2" fill="currentColor" />
        <circle cx="50.2" cy="18" r="1.2" fill="currentColor" />
        <circle cx="47" cy="15" r="1.2" fill="currentColor" />
        <circle cx="47" cy="21" r="1.2" fill="currentColor" />
      </g>
    </svg>
  );
}

function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-2,-8)">
        <path
          d="M16 28c-6 0-10 5-10 12s4 12 10 12c2.5 0 4.5-1.2 6-3l2-2c1-1 2.3-1.5 3.7-1.5h8.6c1.4 0 2.7.5 3.7 1.5l2 2c1.5 1.8 3.5 3 6 3 6 0 10-5 10-12s-4-12-10-12H16Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

// Add this next to PaddleIcon/GamepadIcon
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Degree Audit Parser"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="14" y="10" width="36" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="20" y1="24" x2="44" y2="24" />
        <line x1="20" y1="32" x2="44" y2="32" />
        <line x1="20" y1="40" x2="38" y2="40" />
        <line x1="20" y1="48" x2="32" y2="48" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      // ✅ Use dynamic viewport height so mobile chrome/safari toolbars don't cause overflow
      className="relative h-[100dvh] md:min-h-screen overflow-hidden flex items-center justify-center text-white scroll-mt-24"
      style={{
        backgroundImage: `url(${cincyBW})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      {/* Tighter spacing on mobile so everything fits without scroll */}
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-10 md:px-12">
        {/* Left: photo */}
        <div className="flex justify-center md:justify-start items-center">
          <img
            src={kyleImg}
            alt="Kyle White"
            // Smaller on mobile, larger on md+; tight border to save space
            className="w-[clamp(150px,36vw,340px)] rounded-xl border-2 md:border-4 border-white shadow-xl shadow-black/40"
          />
        </div>

        {/* Right: text + links */}
        <div className="flex flex-col justify-center text-center md:text-left">
          {/* Slightly smaller fonts + tighter leading on mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">Kyle White</h1>
<p className="mt-2 md:mt- -ml-1 sm:-ml-2 md:-ml-8 text-sm sm:text-base md:text-2xl text-zinc-200 leading-snug drop-shadow">
  CS student @ Ohio State University
</p>

          {/* Single-row bubble with CENTERED labels + tighter spacing */}
          <div className="mt-4 md:mt-8 flex justify-center md:justify-start">
            <div
              className="w-fit mx-auto md:mx-0 flex items-start gap-3 md:gap-4 rounded-2xl
                  bg-black/70 border border-white/10 px-3 py-2 md:px-4 md:py-3 shadow-lg shadow-black/30
                  backdrop-blur-sm overflow-x-auto"
            >
              {/* Socials group */}
              <div className="flex flex-col items-center">
                <span className="mb-0.5 md:mb-1 text-[9px] md:text-[10px] uppercase tracking-wider text-zinc-400 text-center">
                  Socials
                </span>
                <div className="flex items-center gap-3 md:gap-4 text-zinc-300">
                  <a
                    href="https://github.com/kylewhite22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github className="h-6 w-6 md:h-7 md:w-7" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kylewhite22/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 md:h-7 md:w-7" />
                  </a>
                  <a
                    href="mailto:kewhite900@gmail.com"
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md"
                    aria-label="Email"
                    title="Email"
                  >
                    <Mail className="h-6 w-6 md:h-7 md:w-7" />
                  </a>
                </div>
              </div>

              {/* Slim vertical divider */}
              <div className="self-stretch mx-2 w-px bg-white/10" aria-hidden="true" />

              {/* Projects group */}
              <div className="flex flex-col items-center">
                <span className="mb-0.5 md:mb-1 text-[9px] md:text-[10px] uppercase tracking-wider text-zinc-400 text-center">
                  Live Projects
                </span>
                <div className="flex items-center gap-3 md:gap-4">
                  <a
                    href="https://pickle.kyle-white.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 rounded-md"
                    aria-label="Pickleball Analytics"
                    title="Pickleball Analytics"
                  >
                    <PaddleIcon className="h-6 w-6 md:h-7 md:w-7" />
                  </a>

                  <a
                    href="https://game.kyle-white.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/40 rounded-md"
                    aria-label="GameGeniusAI"
                    title="GameGeniusAI"
                  >
                    <GamepadIcon className="h-6 w-6 md:h-7 md:w-7 -translate-y-[1px]" />
                  </a>

                  <a
                    href="https://degreeauditparse.kyle-white.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/40 rounded-md"
                    aria-label="Degree Audit Parser"
                    title="Degree Audit Parser"
                  >
                    <DocumentIcon className="h-6 w-6 md:h-7 md:w-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide extra decoration on small screens so it never steals vertical space/overlaps content */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent hidden md:block" />
    </section>
  );
}

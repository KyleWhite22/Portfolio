import { useEffect, useRef } from "react";
import kyleImg from "../assets/kyleBW.JPG";
import cincyBW from "../assets/cincinnatiImageBW.JPG";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // progress 0..1 while section is in view
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
      );
      const y = progress * 40; // subtle parallax
      bgRef.current.style.transform = `translateY(${y}px) scale(1.06)`; // scale hides edges
    };

    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-white scroll-mt-24"
    >
      {/* Background image as an actual <img> for iOS reliability */}
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
        <img
          src={cincyBW}
          alt=""
          className="h-full w-full object-cover select-none pointer-events-none"
          loading="eager"
          decoding="async"
        />
        {/* Blur only on md+ to avoid iOS perf bugs */}
        <div className="absolute inset-0 bg-black/60 md:backdrop-blur-[2px]" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <img
          src={kyleImg}
          alt="Kyle White"
          className="mb-6 w-[clamp(220px,28vw,360px)] rounded border-4 border-white shadow-xl shadow-black/40"
        />
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Kyle White</h1>
        <p className="mt-3 text-lg md:text-2xl text-zinc-200 drop-shadow">
          Full-stack Developer @ OSU
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="btn btn-primary">Projects</a>
          <a href="#work" className="btn">Work Experience</a>
          <a href="#education" className="btn">Classes</a>
          <a href="#skills" className="btn">Skills</a>
        </div>
      </div>

      {/* Soft fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

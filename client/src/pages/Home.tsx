// src/pages/Home.tsx
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Education from "../components/Education";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Projects />
     <Work />
     <Education />
     <Skills />
    </div>
  );
}

// src/pages/Home.tsx
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Education from "../components/Education";
import Skills from "../components/Skills";

export default function ProfessionalHome() {
  return (
    <div className="w-full">
      <Profile />
        <Work />
      <Projects />
     <Education />
     <Skills />
    </div>
  );
}

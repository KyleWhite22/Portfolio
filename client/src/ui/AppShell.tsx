import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import kyleLogo from "../assets/kyleLogo.png";
import useActiveSection from "../hooks/useActiveSection";

function HashScroll() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    // always ensure smooth behavior even when coming from other routes
    if (pathname !== "/") return;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, pathname]);
  return null;
}

export default function AppShell() {
  // Order matters: this order must match your page sections
  const sectionIds = useMemo(
    () => ["hero", "projects", "work", "education", "skills"],
    []
  );

  // Compensate for sticky header height via rootMargin in the hook if needed
  const activeId = useActiveSection({
    ids: sectionIds,
    rootMargin: "-88px 0px -55% 0px", // tweak for your header height
  });

  const navItem = (to: string, label: string, id: string) => (
    <Link
      to={to}
      // aria-current helps screen readers
      aria-current={activeId === id ? "page" : undefined}
      className={[
        "rounded-lg px-3 py-2 font-semibold transition-colors",
        activeId === id ? "bg-white/15" : "hover:bg-white/10"
      ].join(" ")}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-dvh bg-black text-white scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="flex w-full items-center justify-between gap-4 px-8 py-4">
          {/* Logo -> back to top (hero) */}
          <Link to="/#hero" className="flex items-center gap-2">
            <img src={kyleLogo} alt="Kyle Logo" className="h-8 w-auto" />
          </Link>

          {/* Hash nav -> jump on the one-page layout */}
          <nav className="flex items-center gap-2 md:gap-6 overflow-x-auto">
            {navItem("/#hero", "Top", "hero")}
            {navItem("/#projects", "Projects", "projects")}
            {navItem("/#work", "Work", "work")}
            {navItem("/#education", "Classes", "education")}
            {navItem("/#skills", "Skills", "skills")}

            {/* External link unchanged */}
            <a
              href="https://game.kyle-white.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10"
            >
              GameGeniusAI
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="w-full min-h-[calc(100dvh-64px)]">
        <HashScroll />
        <Outlet />
      </main>
    </div>
  );
}

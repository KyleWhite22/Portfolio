import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import kyleLogo from "../assets/kyleLogo.png";
import useActiveSection from "../hooks/useActiveSection";

function HashScroll() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") return;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, pathname]);
  return null;
}

export default function AppShell() {
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(
    () => ["hero", "projects", "work", "education", "skills"],
    []
  );
  const activeId = useActiveSection({
    ids: sectionIds,
    rootMargin: "-88px 0px -55% 0px",
  });

  const NavLinkBtn = (to: string, label: string, id: string, onClick?: () => void) => (
    <Link
      to={to}
      onClick={onClick}
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
      <header className="sticky top-0 z-30 w-full border-b border-white/10
                   bg-zinc-950 shadow-lg shadow-black/20
                   md:bg-black/60 md:backdrop-blur">
        <div className="flex w-full items-center justify-between gap-4 px-4 md:px-8 py-3">
          {/* Logo to Top */}
          <Link to="/#hero" className="flex items-center gap-2">
            <img src={kyleLogo} alt="Kyle Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            {NavLinkBtn("/#hero", "Top", "hero")}
            {NavLinkBtn("/#work", "Work", "work")}
            {NavLinkBtn("/#projects", "Projects", "projects")}
            {NavLinkBtn("/#education", "Education", "education")}
            {NavLinkBtn("/#skills", "Skills", "skills")}
            <a
              href="https://pickle.kyle-white.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10"
            >
              PickleballAnalysis
            </a>
            <a
              href="https://game.kyle-white.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10"
            >
              GameGeniusAI
            </a>
            <a
              href="https://degreeauditparse.kyle-white.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10"
            >
              AuditParser
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 hover:bg-white/10"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden fixed inset-0 z-40">
            {/* backdrop */}
            <button
              className="absolute inset-0 bg-black/70"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />

            {/* sheet container (no fixed height) */}
            <div className="absolute right-0 top-0 w-[78%] max-w-sm p-3">
              {/* panel: only as tall as its contents */}
              <div
                role="dialog"
                aria-label="Menu"
                className="bg-zinc-950 text-white border-l border-white/10
                   rounded-l-2xl rounded-b-2xl shadow-2xl
                   p-4 flex flex-col gap-2
                   h-auto max-h-[85dvh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">Menu</span>
                  <button
                    className="rounded-lg p-2 hover:bg-white/10"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    ✕
                  </button>
                </div>

                {NavLinkBtn("/#hero", "Top", "hero", () => setOpen(false))}
                {NavLinkBtn("/#work", "Work", "work", () => setOpen(false))}
                {NavLinkBtn("/#projects", "Projects", "projects", () => setOpen(false))}
                {NavLinkBtn("/#education", "Education", "education", () => setOpen(false))}
                {NavLinkBtn("/#skills", "Skills", "skills", () => setOpen(false))}
                 <a
              href="https://pickle.kyle-white.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10"
            >
              PickleballAnalysis
            </a>
            <a
              href="https://game.kyle-white.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10"
            >
              GameGeniusAI
            </a>
            <a
              href="https://degreeauditparse.kyle-white.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10"
            >
              AuditParser
            </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="w-full min-h-[calc(100dvh-64px)]">
        <HashScroll />
        <Outlet />
      </main>
    </div>
  );
}

import { Link, NavLink, Outlet } from 'react-router-dom'
import kyleLogo from '../assets/kyleLogo.png'

export default function AppShell() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={kyleLogo} alt="Kyle Logo" className="h-8 w-auto" />
          </Link>

          <nav className="flex items-center gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
            <style>{`.nav::-webkit-scrollbar{display:none;}`}</style>
            <NavLink to="/education" className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10">
              Education
            </NavLink>
            <NavLink to="/work" className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10">
              Work
            </NavLink>
            <NavLink to="/personal" className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10">
              Personal
            </NavLink>
            <a
              href="https://game.kyle-white.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10 whitespace-nowrap"
            >
              GameGeniusAI
            </a>
          </nav>
        </div>
      </header>

      <main className="min-h-[calc(100dvh-64px)]">
        <Outlet />
      </main>
    </div>
  )
}

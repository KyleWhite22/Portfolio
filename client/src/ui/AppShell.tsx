import { Link, NavLink, Outlet } from 'react-router-dom'
import kyleLogo from '../assets/kyleLogo.png'

export default function AppShell() {
  return (
    <div className="min-h-dvh bg-black text-white">
      {/* full-width header */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="flex w-full items-center justify-between gap-4 px-8 py-4">
          {/* logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={kyleLogo} alt="Kyle Logo" className="h-8 w-auto" />
          </Link>

          {/* nav links */}
          <nav className="flex items-center gap-6 overflow-x-auto">
            <NavLink to="/education" className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10">
              Education
            </NavLink>
            <NavLink to="/work" className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10">
              Work
            </NavLink>
            <NavLink to="/personal" className="rounded-lg px-3 py-2 font-semibold hover:bg-white/10">
              Personal
            </NavLink>
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

      {/* full-width main */}
      <main className="w-full min-h-[calc(100dvh-64px)]">
        <Outlet />
      </main>
    </div>
  )
}

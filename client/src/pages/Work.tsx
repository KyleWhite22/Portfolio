import krogerLogo from '../assets/krogerLogo.png'
import siemensLogo from '../assets/siemensLogo.png'
import cincinnatiLogo from '../assets/cincinnatiLogo.png'

export default function Work() {
  return (
    <section className="w-full min-h-dvh bg-black px-6 py-16 text-cyan-300">
      <h1 className="mx-auto mb-16 max-w-5xl text-center text-4xl font-extrabold tracking-tight drop-shadow">
        Work Experience
      </h1>

      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {/* Kroger – earliest */}
        <div className="group flex w-full items-center gap-6 rounded-xl border-l-4 border-cyan-300 bg-cyan-300/5 p-6 shadow-[0_0_20px_rgba(34,211,238,0.10)] transition-transform duration-300 ease-out hover:scale-[1.02]">
          <img
            src={krogerLogo}
            alt="Kroger Logo"
            className="
              h-24 w-auto flex-shrink-0
              invert-[.05] saturate-[1.0] hue-rotate-[120deg]
              [filter:brightness(0)_saturate(100%)]
              animate-[pulseGlow_2.5s_ease-in-out_infinite]
            "
          />
          <div className="flex-1">
            <h2 className="m-0 text-2xl font-bold text-cyan-300">Kroger</h2>
            <p className="mt-1 text-sm italic text-zinc-400">Summer 2025</p>
          </div>
        </div>

        {/* Cincinnati Insurance – most recent */}
        <div className="group flex w-full items-center gap-6 rounded-xl border-l-4 border-cyan-300 bg-cyan-300/5 p-6 shadow-[0_0_20px_rgba(34,211,238,0.10)] transition-transform duration-300 ease-out hover:scale-[1.02]">
          <img
            src={cincinnatiLogo}
            alt="Cincinnati Insurance Logo"
            className="
              h-24 w-auto flex-shrink-0
              invert-[.05] saturate-[1.0] hue-rotate-[120deg]
              [filter:brightness(0)_saturate(100%)]
              animate-[pulseGlow_2.5s_ease-in-out_infinite]
            "
          />
          <div className="flex-1">
            <h2 className="m-0 text-2xl font-bold text-cyan-300">Cincinnati Insurance</h2>
            <p className="mt-1 text-sm italic text-zinc-400">Summer 2024</p>
          </div>
        </div>

        {/* Siemens – next */}
        <div className="group flex w-full items-center gap-6 rounded-xl border-l-4 border-cyan-300 bg-cyan-300/5 p-6 shadow-[0_0_20px_rgba(34,211,238,0.10)] transition-transform duration-300 ease-out hover:scale-[1.02]">
          <img
            src={siemensLogo}
            alt="Siemens Logo"
            className="
              h-24 w-auto flex-shrink-0
              invert-[.05] saturate-[1.0] hue-rotate-[120deg]
              [filter:brightness(0)_saturate(100%)]
              animate-[pulseGlow_2.5s_ease-in-out_infinite]
            "
          />
          <div className="flex-1">
            <h2 className="m-0 text-2xl font-bold text-cyan-300">Siemens</h2>
            <p className="mt-1 text-sm italic text-zinc-400">Summer 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}

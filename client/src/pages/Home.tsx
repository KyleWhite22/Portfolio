import kyleImg from '../assets/kyleBW.JPG'
import cincyBW from '../assets/cincinnatiImageBW.JPG'

export default function Home() {
  return (
    <div className="w-full">                        {/* changed from w-screen */}
      <section className="relative min-h-[min(92vh,900px)] w-full overflow-hidden">
        {/* Left/Top background (faded) */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 right-1/2 opacity-30"
          style={{
            backgroundImage: `url(${cincyBW})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Soft fade edge (desktop) */}
        <span className="pointer-events-none absolute right-[-1px] top-0 hidden h-full w-[clamp(80px,10vw,180px)] bg-gradient-to-r from-transparent to-black md:block" />

        {/* Mobile vertical fade */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 block h-[clamp(60px,12vh,160px)] bg-gradient-to-b from-transparent to-black md:hidden" />

        {/* Foreground content */}
        <div className="relative z-10 grid h-full place-items-center px-[clamp(2rem,8vw,5rem)] py-[clamp(1.25rem,4vw,2rem)] md:grid-cols-[minmax(280px,340px)_1fr] md:gap-[clamp(3rem,8vw,12rem)]">
          {/* Avatar */}
          <div className="grid place-items-center md:translate-x-[clamp(0px,2vw,18px)]">
            <img
              src={kyleImg}
              alt="Kyle White"
              className="w-[clamp(260px,28vw,420px)] rounded border-4 border-white"
            />
          </div>

          {/* Text */}
          <div className="max-w-[70ch] text-center">
            <h1 className="text-[clamp(2.2rem,4.2vw,3.7rem)] font-extrabold tracking-tight">Kyle White</h1>
            <p className="mt-2 text-[clamp(1rem,1.9vw,1.35rem)] text-zinc-300">Full-stack developer at OSU</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="/work" className="btn btn-primary">View Work</a>
              <a href="/education" className="btn">Education</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

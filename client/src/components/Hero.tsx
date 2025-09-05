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
            {/* Rotate whole paddle a bit */}
            <g transform="rotate(-20 28 28)">
                {/* Paddle head */}
                <rect
                    x="12"
                    y="8"
                    width="32"
                    height="28"
                    rx="12"
                    ry="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                />
                {/* Handle */}
                <rect
                    x="25"
                    y="34"
                    width="6"
                    height="16"
                    rx="3"
                    fill="currentColor"
                />
                {/* Small end-cap where handle meets head */}
                <rect
                    x="23"
                    y="32"
                    width="10"
                    height="4"
                    rx="2"
                    fill="currentColor"
                />
            </g>

            {/* Pickleball (with holes) */}
            <g>
                <circle cx="47" cy="18" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
                {/* holes */}
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
        <svg
            viewBox="0 0 64 64"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
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
            {/* Document outline */}
            <rect
                x="14"
                y="10"
                width="36"
                height="48"
                rx="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
            />
            {/* Horizontal lines */}
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
            className="relative min-h-screen flex items-center justify-center text-white scroll-mt-24"
            style={{
                backgroundImage: `url(${cincyBW})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-12">
                {/* Left: photo */}
                <div className="flex justify-center md:justify-start items-center">
                    <img
                        src={kyleImg}
                        alt="Kyle White"
                        className="w-[clamp(220px,28vw,400px)] rounded-xl border-4 border-white shadow-xl shadow-black/40"
                    />
                </div>

                {/* Right: text + links */}
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Kyle White</h1>
                    <p className="mt-4 text-lg md:text-2xl text-zinc-200 drop-shadow">
                        Full-stack Developer @ OSU
                    </p>

                    {/* Social links */}
                    <div className="mt-8 flex justify-center md:justify-start gap-5 text-zinc-300">
                        <a
                            href="https://github.com/kylewhite22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <Github className="h-7 w-7" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kylewhite22/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <Linkedin className="h-7 w-7" />
                        </a>
                        <a
                            href="mailto:kewhite900@gmail.com"
                            className="hover:text-white transition-colors"
                        >
                            <Mail className="h-7 w-7" />
                        </a>
                        <a
                            href="https://pickle.kyle-white.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform text-orange-500"
                            aria-label="Pickleball Analytics"
                            title="Pickleball Analytics"
                        >
                            <PaddleIcon className="h-7 w-7" />
                        </a>

                        <a
                            href="https://game.kyle-white.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform text-green-500"
                            aria-label="GameGeniusAI"
                            title="GameGeniusAI"
                        >
                            <GamepadIcon className="h-7 w-7" />
                        </a>
                        <a
                            href="https://degreeauditparse.kyle-white.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform text-red-500"
                            aria-label="OSU Degree Audit Parser"
                            title="OSU Degree Audit Parser"
                        >
                            <DocumentIcon className="h-7 w-7" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}

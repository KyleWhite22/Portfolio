// src/pages/Projects.tsx
import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

type Screenshot = { src: string; alt?: string; label?: string };

type ProjectCardProps = {
  title: string;
  description: string;
  tools?: string[];                 // pills row
  screenshots?: Screenshot[];       // 1–3 images supported
  link?: string;                    // explicit link (card itself is NOT clickable)
  linkLabel?: string;               // optional display label for the URL
  github?: string;                  // NEW: GitHub repo URL (shows icon)
  Logo?: React.ComponentType<{ className?: string }>;
  logoSrc?: string;
  logoAlt?: string;
  logoClassName?: string;           // e.g., "text-emerald-400"
  badge?: string;                   // e.g., "MonoGame", "Private"
};

function ProjectCard({
  title,
  description,
  tools,
  screenshots,
  link,
  linkLabel,
  github,             // NEW
  Logo,
  logoSrc,
  logoAlt,
  logoClassName,
  badge,
}: ProjectCardProps) {
  const count = Math.min(screenshots?.length ?? 0, 3);
  const gridCols =
    count === 3 ? "sm:grid-cols-3"
    : count === 2 ? "sm:grid-cols-2"
    : "sm:grid-cols-1";

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
      {/* Header: logo + title/badge (left) and links (right) */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {/* LOGO (no container) */}
          {Logo ? (
            <Logo className={`h-8 w-8 ${logoClassName ?? "text-white/80"}`} />
          ) : logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt ?? `${title} logo`}
              className="h-8 w-8 object-contain"
            />
          ) : null}

          <div className="flex items-center gap-2 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold leading-tight truncate">
              {title}
            </h3>
            {badge && (
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">
                {badge}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
  {link && (
    <div className="flex items-center gap-2">
      <span className="text-xs md:text-sm text-zinc-400">Live site:</span>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm md:text-base underline underline-offset-4 decoration-white/50 hover:decoration-white break-all"
        aria-label={`Open ${linkLabel ?? link}`}
        title={linkLabel ?? link}
      >
        <span>{linkLabel ?? link.replace(/^https?:\/\//, "")}</span>
        <ArrowUpRight className="h-4 w-4 opacity-80" />
      </a>
    </div>
  )}

  {github && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-md p-1.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
      aria-label={`Open GitHub repo for ${title}`}
      title="GitHub Repository"
    >
      <Github className="h-5 w-5 text-white/85" />
    </a>
  )}
</div>
      </div>

      {/* Tools pills */}
      {tools?.length ? (
        <ul className="mt-2 flex flex-wrap gap-2">
          {tools.map((t) => (
            <li key={t}>
              <span className="inline-block rounded-full bg-white/10 px-2.5 py-1 text-xs md:text-sm text-white/80">
                {t}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Description */}
      <p className="mt-2 text-sm md:text-base text-zinc-300">{description}</p>

      {/* Screenshots (1–3), with optional centered labels */}
      {count > 0 && (
        <div className={`mt-4 grid grid-cols-1 ${gridCols} gap-3 md:gap-4`}>
          {screenshots!.slice(0, 3).map((img, i) => (
            <figure key={`${title}-ss-${i}`} className="w-full">
              <img
                src={img.src}
                alt={img.alt ?? `${title} screenshot ${i + 1}`}
                className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-lg border border-white/10 bg-black/20"
                loading="lazy"
              />
              {img.label && (
                <figcaption className="mt-1 text-[11px] md:text-xs leading-tight text-white/70 text-center">
                  {img.label}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

/* Inline outline logos (use your own or keep these) */
function PaddleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Pickleball">
      <g transform="rotate(-20 28 28)">
        <rect x="12" y="8" width="32" height="28" rx="12" ry="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="25" y="34" width="6" height="16" rx="3" fill="currentColor" />
        <rect x="23" y="32" width="10" height="4" rx="2" fill="currentColor" />
      </g>
      <g>
        <circle cx="47" cy="18" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
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
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="GameGeniusAI">
      <g transform="translate(-2,-8)">
        <path
          d="M16 28c-6 0-10 5-10 12s4 12 10 12c2.5 0 4.5-1.2 6-3l2-2c1-1 2.3-1.5 3.7-1.5h8.6c1.4 0 2.7.5 3.7 1.5l2 2c1.5 1.8 3.5 3 6 3 6 0 10-5 10-12s-4-12-10-12H16Z"
          fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Degree Audit Parser">
      <rect x="14" y="10" width="36" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="20" y1="24" x2="44" y2="24" />
        <line x1="20" y1="32" x2="44" y2="32" />
        <line x1="20" y1="40" x2="38" y2="40" />
        <line x1="20" y1="48" x2="32" y2="48" />
      </g>
    </svg>
  );
}
function PoolWavesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pool Waves"
    >
      <g stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M8 32c4 4 8 4 12 0s8-4 12 0 8 4 12 0 8-4 12 0" />
        <path d="M8 44c4 4 8 4 12 0s8-4 12 0 8 4 12 0 8-4 12 0" />
      </g>
    </svg>
  );
}

/* Zelda MonoGame outline logo (Triforce) */
function TriforceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Zelda MonoGame">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <path d="M32 14 L22 33 H42 Z" />
        <path d="M22 36 L12 54 H32 Z" />
        <path d="M42 36 L32 54 H52 Z" />
      </g>
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-900 text-white px-4 md:px-8 py-10 md:py-14 scroll-mt-24 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Projects</h2>

        {/* One project per row */}
        <div className="space-y-5 md:space-y-6">
            <ProjectCard
            title="Lifeguard Rotation Manager"
            description="Developed and deployed a full-stack web app for the Hilliard Family Aquatic Center to manage rotations, breaks, and
 queues for over 50 lifeguards, with dynamic scheduling logic involving randomized guard assignments and age restrictions. Designed AWS architecture using API Gateway, Lambda, DynamoDB, S3, and CloudFront with CI/CD via GitHub Actions."
            tools={["React", "JavaScript", "Vite", "OpenAI API", "Steam API", "MongoDB", "Node/Express"]}
            Logo={PoolWavesIcon}
            logoClassName="text-sky-400"
            link="https://app.hilliardguardmanager.com/"
            linkLabel="app.hilliardguardmanager.com"
            github="https://github.com/KyleWhite22/PoolRotation"
          />
          <ProjectCard
            title="GameGeniusAI"
            description="Full-stack web app that ingests a user's library via the Steam Web API and generates similar-game
 suggestions using OpenAI API. Designed REST endpoints in Express and persisted user/game metadata in MongoDB. Deployed on AWS EC2 behind Nginx (reverse proxy, SSL/TLS) with frontend CI/CD via GitHub Actions"
            tools={["React", "JavaScript", "Vite", "OpenAI API", "Steam API", "MongoDB", "Node/Express"]}
            Logo={GamepadIcon}
            logoClassName="text-emerald-400"
            link="https://game.kyle-white.com"
            linkLabel="game.kyle-white.com"
            github="https://github.com/KyleWhite22/GameGeniusAI"
          />
          <ProjectCard
            title="Pickleball Analysis"
            description="Web app that computes and visualizes metrics from logged matches (point differential, streaks, standings). Implemented using secure auth and league management with AWS Cognito; built REST endpoints via API Gateway and
 Lambda backed by DynamoDB"
            tools={[
              "React", "Vite", "TypeScript", "Tailwind", "Recharts",
              "AWS (Lambda, API Gateway, DynamoDB, S3/CloudFront, Cognito)",
            ]}
            Logo={PaddleIcon}
            logoClassName="text-orange-400"
            link="https://pickle.kyle-white.com"
            linkLabel="pickle.kyle-white.com"
            github="https://github.com/KyleWhite22/pickleball-analysis"
          />

          <ProjectCard
            title="Degree Audit Parser"
            description="Web app developed during OSU Hackathon to parse degree-audit HTML and visualize progress with an interactive UI"
            tools={["React", "JavaScript", "Vite", "Node"]}
            Logo={DocumentIcon}
            logoClassName="text-rose-400"
            link="https://degreeauditparse.kyle-white.com"
            linkLabel="degreeauditparse.kyle-white.com"
            github="https://github.com/KyleWhite22/degreeAuditParser"
          />

          {/* Zelda with 3 large screenshots */}
          <ProjectCard
            title="Legend of Zelda Recreation"
            description="A 1-1 recreation of the first NES Legend of Zelda dungeon using the Monogame framework developed by my 6-person Agile development team. In addition a custom endless enemy horde mode was added with a custom new boss: Dark Link."
            tools={["C#", "MonoGame", "State Machines", "Sprite Animation", "Collision"]}
            screenshots={[
              { src: "/assets/zelda-1.png", alt: "Zelda MonoGame — overworld", label: "1-1 first dungeon recreation" },
              { src: "/assets/zelda-2.png", alt: "Zelda MonoGame — dungeon room", label: "Custom endless enemy horde mode" },
              { src: "/assets/zelda-3.png", alt: "Zelda MonoGame — boss fight", label: "Custom Dark Link boss fight" },
            ]}
            Logo={TriforceIcon}
            logoClassName="text-amber-300"
            github="https://github.com/KyleWhite22/LegendOfZelda"
          />
        </div>
      </div>
    </section>
  );
}

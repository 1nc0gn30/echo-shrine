import { PropsWithChildren } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Marquee } from "@/components/ui/marquee";

const NAV = [
  { id: "home", href: "/", label: "Home" },
  { id: "ritual", href: "/ritual.html", label: "Ritual" },
  { id: "artifacts", href: "/artifacts.html", label: "Artifacts" },
  { id: "library", href: "/library.html", label: "Library" }
] as const;

type SiteLayoutProps = PropsWithChildren<{
  active: "home" | "ritual" | "artifacts" | "library";
}>;

export function SiteLayout({ active, children }: SiteLayoutProps) {
  const activeIndex = NAV.findIndex((item) => item.id === active);
  const prev = NAV[(activeIndex - 1 + NAV.length) % NAV.length];
  const next = NAV[(activeIndex + 1) % NAV.length];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <DotPattern
          className="text-violet-300/30 [mask-image:radial-gradient(560px_circle_at_center,white,transparent)]"
          glow
          cr={1.2}
          cx={1.2}
          cy={1.2}
          height={22}
          width={22}
        />
      </div>

      <header className="container sticky top-3 z-30 mt-3 rounded-full border border-white/20 bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <a className="font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-white" href="/">
            Echo Shrine
          </a>
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-2 text-sm md:gap-4">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={
                  item.id === active
                    ? "rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-white"
                    : "rounded-full px-3 py-1.5 text-slate-300 transition hover:bg-white/5 hover:text-white"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="container mt-4">
        <Marquee className="rounded-full border border-white/10 bg-slate-950/45 py-1 [--duration:30s]" pauseOnHover>
          <span className="badge-chip">Cinematic Dark UI</span>
          <span className="badge-chip">Magic UI Components</span>
          <span className="badge-chip">Production-safe Vite MPA</span>
          <span className="badge-chip">Asset-driven storytelling</span>
          <span className="badge-chip">Netlify-ready static deploy</span>
          <span className="badge-chip">Semantic, responsive, accessible</span>
        </Marquee>
      </div>

      <div className="container mt-3">
        <div className="rounded-2xl border border-white/15 bg-black/25 px-4 py-3">
          <p className="text-sm text-slate-200">
            Purpose: <span className="text-highlight">turn raw ideas into high-recall launch pages</span> with a clear
            flow from <span className="text-accent-italic">strategy</span> to <span className="text-accent-italic">artifacts</span> to <span className="text-accent-italic">ship-ready assets</span>.
          </p>
        </div>
      </div>

      <main className="container pb-16 pt-8" id="main">
        {children}
      </main>

      <footer className="container pb-10">
        <div className="mb-4 rounded-2xl border border-white/20 bg-black/30 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Endless Journey Loop</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
            <a className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-slate-200 hover:bg-white/10" href={prev.href}>
              ← {prev.label}
            </a>
            <span className="rounded-full border border-violet-300/40 bg-violet-500/15 px-3 py-1.5 text-violet-100">
              Current: {NAV[activeIndex]?.label}
            </span>
            <a className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-slate-200 hover:bg-white/10" href={next.href}>
              {next.label} →
            </a>
            <a className="rounded-full border border-amber-200/35 bg-amber-100/10 px-3 py-1.5 text-amber-100 hover:bg-amber-100/15" href="/">
              Restart Loop
            </a>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Flow: Home → Ritual → Artifacts → Library → Home
          </p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Echo Shrine</p>
          <p className="mt-1 text-xs text-slate-500">Memory architecture for founders, artists, and world-builders.</p>
        </div>
      </footer>
    </>
  );
}

import { useEffect, useMemo, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Globe } from "@/components/ui/globe";
import { MagicCard } from "@/components/ui/magic-card";
import { Meteors } from "@/components/ui/meteors";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import ethereumLogo from "@/assets/ethereum.svg";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import tailwindLogo from "@/assets/tailwindcss.svg";
import typescriptLogo from "@/assets/typescript.svg";
import githubLogo from "@/assets/github.svg";
import supabaseLogo from "@/assets/supabase.svg";
import stripeLogo from "@/assets/stripe.svg";
import { ASSET_MANIFEST } from "@/data/asset-manifest";

function useDailyResonance() {
  const [value, setValue] = useState("Daily Resonance: tuning the ether...");

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const quote = await fetch("https://api.quotable.io/random?tags=technology,art", { cache: "no-store" });
        if (quote.ok) {
          const data = await quote.json();
          if (isMounted) {
            setValue(`Daily Resonance: "${data.content}" — ${data.author}`);
          }
          return;
        }
      } catch {
        // fallback below
      }

      try {
        const advice = await fetch("https://api.adviceslip.com/advice", { cache: "no-store" });
        if (advice.ok) {
          const data = await advice.json();
          if (isMounted) {
            setValue(`Daily Resonance: ${data?.slip?.advice || "Keep building what only you can imagine."}`);
          }
          return;
        }
      } catch {
        // fallback below
      }

      if (isMounted) {
        setValue("Daily Resonance: Build what people can feel, not just what they can click.");
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return value;
}

export function HomePage() {
  const dailyResonance = useDailyResonance();
  const [globeUnavailable, setGlobeUnavailable] = useState(false);
  const assetSummary = useMemo(() => {
    const byCategory = ASSET_MANIFEST.reduce<Record<string, number>>((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});
    const previewable = ASSET_MANIFEST.filter((item) => ["svg", "png", "jpg", "jpeg", "webp", "avif", "gif"].includes(item.ext));
    const lottieJson = ASSET_MANIFEST.filter((item) => item.category === "lottie" && item.ext === "json");
    return {
      total: ASSET_MANIFEST.length,
      icons: byCategory.icon || 0,
      textures: byCategory.texture || 0,
      lottie: byCategory.lottie || 0,
      lottieJson: lottieJson.length,
      previewable: previewable.length,
      previews: previewable.slice(0, 8),
      sampleLottie: lottieJson[0]?.path || "/vendor/library/lottie/google/fire.json",
    };
  }, []);

  return (
    <SiteLayout active="home">
      <BlurFade inView>
        <section aria-labelledby="hero-title" className="glass-shell relative overflow-hidden p-7 md:p-10 group">
          <div className="grain-overlay" />
          <div className="relative z-10">
            <div className="flex flex-col items-start gap-2">
              <p className="kicker">Memory Palace Protocol v1.0</p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200">
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  src="/vendor/icons/lucide/sparkles.svg"
                />
                <AnimatedGradientText className="text-xs font-medium" colorFrom="#ffd68a" colorTo="#9c7dff">
                  Signal architecture for unforgettable products
                </AnimatedGradientText>
              </div>
            </div>
            
            <TextAnimate
              animation="blurInUp"
              as="h1"
              by="word"
              className="hero-title mt-6"
              id="hero-title"
              once
            >
              Architecting an Idea Sanctuary.
            </TextAnimate>

            <p className="lede mt-6">
              Echo Shrine helps teams <span className="text-highlight">turn abstract ideas into launch-ready product pages.</span>{" "}
              We combine <span className="text-accent-italic">ritual storytelling</span>, reusable artifacts, and asset systems
              so the final experience is clear, memorable, and conversion-focused.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ShimmerButton
                className="rounded-full px-6 py-3 text-sm font-semibold"
                onClick={() => {
                  window.location.href = "/ritual.html";
                }}
                type="button"
              >
                Enter the Ritual
              </ShimmerButton>
              <a
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/35"
                href="/library.html"
              >
                Explore Asset Library
              </a>
            </div>

            <div className="mt-8 p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md font-mono text-xs text-slate-400">
              <span className="text-violet-400 mr-2">»</span> {dailyResonance}
            </div>

            <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-30 blur-3xl rounded-full bg-gradient-to-br from-violet-600 to-amber-500 pointer-events-none" />
            <img src="/vendor/images/cinematic/hero-bg.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none" alt="" aria-hidden="true" />
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.08} inView>
        <section aria-label="Signal metrics" className="panel mt-5">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
              <p className="kicker">Recall Lift</p>
              <p className="mt-2 font-heading text-4xl">
                <NumberTicker value={82} />%
              </p>
              <p className="mt-1 text-sm text-slate-300">Narrative-first sequence with calibrated visual rhythm.</p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
              <p className="kicker">Build Velocity</p>
              <p className="mt-2 font-heading text-4xl">
                <NumberTicker value={14} /> days
              </p>
              <p className="mt-1 text-sm text-slate-300">From concept board to production-ready launch page.</p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
              <p className="kicker">Reusable Primitives</p>
              <p className="mt-2 font-heading text-4xl">
                <NumberTicker value={36} />+
              </p>
              <p className="mt-1 text-sm text-slate-300">Cards, surfaces, textures, and iconography modules.</p>
            </article>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.12} inView>
        <section aria-labelledby="reach-title" className="panel mt-5 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            <img src="/bg-void-1.webp" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="relative z-10">
            <h2 className="font-heading text-3xl" id="reach-title">
              Global Signal Reach
            </h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Interactive globe surfaces where your story lands and how fast it propagates through key founder and creator hubs.
            </p>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr,1fr]">
              <MagicCard className="rounded-2xl border border-white/15 bg-black/25 p-5" gradientColor="#6d59ff">
                <div className="grid gap-3 sm:grid-cols-2">
                  <article className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="kicker">Active Hubs</p>
                    <p className="mt-2 font-heading text-4xl"><NumberTicker value={12} /></p>
                    <p className="mt-1 text-xs text-slate-300">Cities with continuous campaign touchpoints.</p>
                  </article>
                  <article className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="kicker">Signal Velocity</p>
                    <p className="mt-2 font-heading text-4xl"><NumberTicker value={340} />ms</p>
                    <p className="mt-1 text-xs text-slate-300">Median response lag from launch to first engagement.</p>
                  </article>
                </div>
                <Marquee className="mt-4 rounded-full border border-white/10 bg-white/[0.03] py-2 [--duration:22s]">
                  <span className="badge-chip">New York</span>
                  <span className="badge-chip">London</span>
                  <span className="badge-chip">Sao Paulo</span>
                  <span className="badge-chip">Tokyo</span>
                  <span className="badge-chip">Istanbul</span>
                  <span className="badge-chip">Mumbai</span>
                  <span className="badge-chip">Mexico City</span>
                  <span className="badge-chip">Manila</span>
                </Marquee>
              </MagicCard>

              <div className="relative h-72 overflow-hidden rounded-2xl border border-white/15 bg-black/30">
                <Meteors number={16} />
                <BorderBeam duration={8} size={90} />
                {!globeUnavailable ? (
                  <Globe className="top-4" onError={() => setGlobeUnavailable(true)} />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-56 w-56">
                      <OrbitingCircles iconSize={28} radius={88}>
                        <img alt="" aria-hidden="true" className="h-7 w-7" src="/vendor/icons/lucide/orbit.svg" />
                        <img alt="" aria-hidden="true" className="h-7 w-7" src="/vendor/icons/lucide/radar.svg" />
                        <img alt="" aria-hidden="true" className="h-7 w-7" src="/vendor/icons/lucide/sparkles.svg" />
                        <img alt="" aria-hidden="true" className="h-7 w-7" src="/vendor/icons/lucide/layers.svg" />
                      </OrbitingCircles>
                      <div className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs text-slate-200">
                        fallback
                      </div>
                    </div>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_130%,rgba(255,255,255,0.2),transparent_65%)]" />
              </div>
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.14} inView>
        <section aria-labelledby="overview-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="overview-title">
            Three Doors Into the Shrine
          </h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Start at strategy, move into components, then leave with a usable asset pipeline.{" "}
            <span className="text-stroke-glow font-heading text-xl align-middle">One app. One clear build path.</span>
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Ritual",
                body: "A stage-by-stage path for locking attention, distilling value, and moving people to action.",
                href: "/ritual.html",
                cta: "Open Ritual Path"
              },
              {
                title: "Artifacts",
                body: "Interactive components, icon systems, and atmosphere patterns tuned for high-end product pages.",
                href: "/artifacts.html",
                cta: "View Artifacts"
              },
              {
                title: "Library",
                body: "Integrated fonts, image boards, textures, and geo assets wired from your shared vault.",
                href: "/library.html",
                cta: "Harness Library"
              },
            ].map((item, index) => (
              <MagicCard
                className="rounded-2xl border border-white/20 bg-white/[0.04] p-5"
                gradientColor={index % 2 === 0 ? "#9c7dff" : "#4a7dff"}
                key={item.title}
              >
                <article>
                  <h3 className="font-heading text-2xl">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.body}</p>
                  <a className="text-link mt-4 inline-block" href={item.href}>
                    {item.cta}
                  </a>
                </article>
              </MagicCard>
            ))}
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.18} inView>
        <section aria-labelledby="assets-hero-title" className="panel mt-5 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            <img src="/bg-void-2.webp" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="relative z-10">
            <h2 className="font-heading text-3xl" id="assets-hero-title">
              Asset Ops Console
            </h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              This is where the app saves production time: browse the shared vault, pull exact files, and ship assets
              directly into real page builds without hunting through folders.
            </p>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.05] p-4" gradientColor="#6d59ff">
                <p className="kicker">Live Inventory</p>
                <p className="mt-2 font-heading text-4xl"><NumberTicker value={assetSummary.total} /></p>
                <p className="mt-1 text-xs text-slate-300">total files indexed from shared vendor paths</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg border border-white/15 bg-black/30 px-2 py-1.5 text-slate-200">Icons: {assetSummary.icons}</div>
                  <div className="rounded-lg border border-white/15 bg-black/30 px-2 py-1.5 text-slate-200">Textures: {assetSummary.textures}</div>
                  <div className="rounded-lg border border-white/15 bg-black/30 px-2 py-1.5 text-slate-200">Lottie: {assetSummary.lottie}</div>
                  <div className="rounded-lg border border-white/15 bg-black/30 px-2 py-1.5 text-slate-200">Previewable: {assetSummary.previewable}</div>
                </div>
              </MagicCard>
              <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.05] p-4" gradientColor="#4a7dff">
                <p className="kicker">Production Value</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li><span className="text-highlight">Fast handoff:</span> every file has a direct public path.</li>
                  <li><span className="text-highlight">Lottie-ready:</span> {assetSummary.lottieJson} JSON animations play immediately.</li>
                  <li><span className="text-highlight">No guessing:</span> preview, copy URL, and download in one flow.</li>
                </ul>
                <a className="text-link mt-4 inline-block" href="/library.html">Open the interactive library</a>
              </MagicCard>
              <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.05] p-4" gradientColor="#6ea5ff">
                <p className="kicker">Ready To Use</p>
                <p className="mt-2 text-sm text-slate-200">Drop these directly into app code, docs, and CMS content.</p>
                <div className="mt-3 space-y-2 text-xs text-slate-300">
                  <div className="rounded-lg border border-white/15 bg-black/30 px-3 py-2 font-mono">/vendor/icons/lucide/sparkles.svg</div>
                  <div className="rounded-lg border border-white/15 bg-black/30 px-3 py-2 font-mono">/vendor/library/textures/grid-pattern.svg</div>
                  <div className="rounded-lg border border-white/15 bg-black/30 px-3 py-2 font-mono break-all">{assetSummary.sampleLottie}</div>
                </div>
              </MagicCard>
            </div>
            <Marquee className="mt-4 rounded-xl border border-white/15 bg-white/[0.03] py-3 [--duration:30s]">
              <div className="flex items-center gap-3 px-3">
                {assetSummary.previews.map((item) => (
                  <figure className="w-36 flex-shrink-0 rounded-lg border border-white/15 bg-black/25 p-2" key={item.id}>
                    <img alt={item.name} className="h-16 w-full rounded object-contain bg-white p-1" loading="lazy" src={item.path} />
                    <figcaption className="mt-1 truncate text-[10px] text-slate-300">{item.name}</figcaption>
                  </figure>
                ))}
              </div>
            </Marquee>
            <p className="mt-3 text-sm text-slate-300">
              <span className="text-gradient-signal font-semibold">Outcome:</span> this section now proves the library is an
              operational asset pipeline, not a visual placeholder.
            </p>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <section aria-label="Tech Stack" className="panel mt-5">
          <div className="flex flex-col items-center gap-6">
            <p className="kicker">Engineered with Precision</p>
            <Marquee className="w-full rounded-full border border-slate-300/80 bg-white py-3 [--duration:26s]" pauseOnHover>
              <div className="flex items-center gap-6 px-4">
                {[
                  [ethereumLogo, "Ethereum"],
                  [reactLogo, "React"],
                  [viteLogo, "Vite"],
                  [tailwindLogo, "Tailwind CSS"],
                  [typescriptLogo, "TypeScript"],
                  [githubLogo, "GitHub"],
                  [supabaseLogo, "Supabase"],
                  [stripeLogo, "Stripe"],
                ].map(([src, label]) => (
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5" key={label}>
                    <img src={src} className="h-6 w-6 brightness-0" alt={label} />
                    <span className="text-xs font-semibold tracking-wide text-slate-900">{label}</span>
                  </span>
                ))}
              </div>
            </Marquee>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.24} inView>
        <section aria-labelledby="reserve-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="reserve-title">
            Reserve the next build slot
          </h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            <span className="text-white font-medium">One custom concept,</span> production-safe execution, and a launch page that actually lingers.
          </p>
          <a
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground"
            href="mailto:hello@echo-shrine.nealfrazier.tech"
          >
            Request Production Build
          </a>
        </section>
      </BlurFade>
    </SiteLayout>
  );
}

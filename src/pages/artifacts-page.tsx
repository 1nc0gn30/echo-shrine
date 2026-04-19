import { SiteLayout } from "@/components/site-layout";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Particles } from "@/components/ui/particles";
import { TextAnimate } from "@/components/ui/text-animate";

const artifactSet = [
  ["/vendor/icons/lucide/scan-line.svg", "Scan Panels", "Directional cards that pull attention through content lanes."],
  ["/vendor/icons/heroicons/cube-transparent.svg", "Glass Cubes", "Translucent containers with hover glow and soft depth cues."],
  ["/vendor/icons/heroicons/finger-print.svg", "Biometric Motif", "Identity-forward visual anchors for trust-sensitive interfaces."],
  ["/vendor/icons/heroicons/light-bulb.svg", "Insight Nodes", "Feature capsules designed for rapid scanning and retention."],
  ["/vendor/icons/heroicons/cpu-chip.svg", "Tech Glyphs", "System-level iconography for technical storytelling sections."],
  ["/vendor/icons/heroicons/sparkles.svg", "Aura FX", "Subtle shimmer patterns that increase perceived quality without clutter."]
] as const;

const deploymentUseCases = [
  {
    title: "Founder Launch Page",
    body: "Pair a strong headline block, one artifact card row, and a final CTA strip to move from interest to booking."
  },
  {
    title: "SaaS Feature Narrative",
    body: "Use icon-led modules to chunk complex features into scannable sections that reduce cognitive load."
  },
  {
    title: "Creator Portfolio Story",
    body: "Blend cinematic backgrounds with lightweight artifacts so personal work still feels premium and intentional."
  }
];

const artifactRecipes = [
  {
    title: "Hero-Feature-CTA Stack",
    when: "For launch pages that must explain value in under 30 seconds.",
    assets: ["/generated/ritual-spectrum.png", "/vendor/icons/lucide/scan-line.svg", "/vendor/library/textures/grid-pattern.svg"],
    output: "Clear top-of-page narrative with strong conversion handoff."
  },
  {
    title: "Trust-Heavy Product Section",
    when: "For B2B/SaaS pages where credibility must be obvious fast.",
    assets: ["/generated/artifact-nebula.png", "/vendor/icons/heroicons/finger-print.svg", "/vendor/library/illustrations/heroicons-outline-preview.svg"],
    output: "Feature claims feel grounded, not fluffy."
  },
  {
    title: "Creator Portfolio Conversion Block",
    when: "For creators selling services, courses, or consulting offers.",
    assets: ["/generated/signal-wave.png", "/vendor/icons/heroicons/sparkles.svg", "/vendor/library/textures/fingerprint-pattern.svg"],
    output: "Portfolio visuals tied directly to business action."
  }
];

const assetMatrix = [
  { path: "/vendor/icons/lucide/scan-line.svg", label: "Scan Line", use: "Section dividers and directional cues" },
  { path: "/vendor/icons/lucide/radar.svg", label: "Radar", use: "Signal and discovery blocks" },
  { path: "/vendor/icons/lucide/orbit.svg", label: "Orbit", use: "Network or ecosystem storytelling" },
  { path: "/vendor/icons/heroicons/light-bulb.svg", label: "Insight", use: "Key point highlights" },
  { path: "/vendor/icons/heroicons/cpu-chip.svg", label: "System", use: "Technical feature framing" },
  { path: "/vendor/icons/heroicons/finger-print.svg", label: "Identity", use: "Trust and security messaging" },
  { path: "/vendor/icons/heroicons/sparkles.svg", label: "Aura", use: "Premium polish moments" },
  { path: "/vendor/icons/heroicons/cube-transparent.svg", label: "Layer", use: "Modular architecture explanations" }
];

export function ArtifactsPage() {
  return (
    <SiteLayout active="artifacts">
      <BlurFade inView>
        <section aria-labelledby="hero-title" className="glass-shell relative overflow-hidden p-7 md:p-10 group">
          <div className="grain-overlay" />
          <Particles className="absolute inset-0 opacity-35" quantity={42} size={0.65} staticity={38} />
          <img
            src="/bg-void-4.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
            alt=""
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p className="kicker">Artifact Index</p>
            <TextAnimate
              animation="blurInUp"
              as="h1"
              by="word"
              className="hero-title mt-3"
              id="hero-title"
              once
            >
              Design primitives built for cinematic recall.
            </TextAnimate>
            <p className="lede mt-4">
              This page is your <span className="text-highlight">production component vault</span>: reuse interface
              parts that help teams <span className="text-accent-italic">ship clearer product stories faster.</span>
            </p>
            <p className="mt-4 text-sm">
              <AnimatedGradientText className="font-semibold" colorFrom="#ffde97" colorTo="#86b5ff">
                Purpose: capture attention, explain value, and support conversion with reusable visual modules.
              </AnimatedGradientText>
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <figure className="rounded-xl border border-white/15 bg-black/25 p-2">
                <img alt="Generated ritual spectrum concept" className="h-28 w-full rounded-lg object-cover" src="/generated/ritual-spectrum.png" />
                <figcaption className="mt-1 text-xs text-slate-300">Narrative Atmosphere</figcaption>
              </figure>
              <figure className="rounded-xl border border-white/15 bg-black/25 p-2">
                <img alt="Generated artifact nebula concept" className="h-28 w-full rounded-lg object-cover" src="/generated/artifact-nebula.png" />
                <figcaption className="mt-1 text-xs text-slate-300">Feature Depth Layer</figcaption>
              </figure>
              <figure className="rounded-xl border border-white/15 bg-black/25 p-2">
                <img alt="Generated signal wave concept" className="h-28 w-full rounded-lg object-cover" src="/generated/signal-wave.png" />
                <figcaption className="mt-1 text-xs text-slate-300">Conversion Focus Backdrop</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.1} inView>
        <section aria-labelledby="artifacts-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="artifacts-title">
            Core Artifact Set
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/15 bg-black/20 p-4">
              <p className="kicker">Modules</p>
              <p className="mt-1 font-heading text-3xl"><NumberTicker value={artifactSet.length} /></p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-black/20 p-4">
              <p className="kicker">Goal</p>
              <p className="mt-1 text-sm text-slate-200"><span className="text-highlight">Visual clarity</span> under dark mode.</p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-black/20 p-4">
              <p className="kicker">Usage</p>
              <p className="mt-1 text-sm text-slate-200">Drop-in blocks for hero, feature, and CTA zones.</p>
            </article>
          </div>
          <Marquee className="mt-4 rounded-full border border-white/15 bg-white/[0.03] py-2 [--duration:20s]">
            <span className="badge-chip">Readable icon contrast</span>
            <span className="badge-chip">Reusable dark surfaces</span>
            <span className="badge-chip">Conversion-oriented hierarchy</span>
            <span className="badge-chip">Faster visual assembly</span>
          </Marquee>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {artifactSet.map(([icon, title, body], index) => (
              <MagicCard
                className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/[0.04] p-5"
                gradientColor={index % 2 === 0 ? "#8d7dff" : "#6fb4ff"}
                key={title}
              >
                <BorderBeam duration={10 + index} size={72} />
                <article>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 bg-white shadow-[0_8px_24px_rgba(255,255,255,0.12)]">
                    <img alt="" aria-hidden="true" className="h-6 w-6 brightness-0" src={icon} />
                  </div>
                  <h3 className="mt-3 font-heading text-2xl">{title}</h3>
                  <p className="mt-2 text-slate-300">{body}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-slate-400">Artifact {index + 1}</p>
                </article>
              </MagicCard>
            ))}
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.16} inView>
        <section aria-labelledby="possibilities-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="possibilities-title">
            Possibilities In Production
          </h2>
          <p className="mt-2 text-slate-300">
            These artifacts are not decorative extras. They are reusable communication blocks that make product pages{" "}
            <span className="text-highlight">clearer, faster to assemble, and easier to trust.</span>
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {deploymentUseCases.map((item, index) => (
              <MagicCard
                className="rounded-2xl border border-white/20 bg-white/[0.04] p-5"
                gradientColor={index % 2 === 0 ? "#7f7bff" : "#5ea9ff"}
                key={item.title}
              >
                <article>
                  <p className="kicker">Use Case {index + 1}</p>
                  <h3 className="mt-1 font-heading text-2xl">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.body}</p>
                </article>
              </MagicCard>
            ))}
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <section aria-labelledby="asset-display-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="asset-display-title">Artifact Recipes That Ship</h2>
          <p className="mt-2 text-slate-300">
            Instead of static boards, use these concrete combinations to build real sections with predictable outcomes.
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr,1fr]">
            <div className="space-y-4">
              {artifactRecipes.map((recipe, index) => (
                <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.05] p-5" gradientColor={index % 2 === 0 ? "#8878ff" : "#64a9ff"} key={recipe.title}>
                  <article>
                    <p className="kicker">Recipe {index + 1}</p>
                    <h3 className="mt-1 font-heading text-2xl">{recipe.title}</h3>
                    <p className="mt-2 text-sm text-slate-200"><span className="text-highlight">When to use:</span> {recipe.when}</p>
                    <div className="mt-3 rounded-xl border border-white/15 bg-black/30 p-3 font-mono text-xs text-slate-300">
                      {recipe.assets.map((asset) => (
                        <p key={asset}>{asset}</p>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-slate-300"><span className="text-accent-italic">Expected output:</span> {recipe.output}</p>
                  </article>
                </MagicCard>
              ))}
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/[0.05] p-4">
              <p className="kicker">Asset Matrix</p>
              <p className="mt-1 text-sm text-slate-300">Practical icon inventory with direct use guidance.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {assetMatrix.map((item) => (
                  <article className="rounded-xl border border-white/15 bg-black/25 p-3" key={item.path}>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white">
                      <img alt={item.label} className="h-5 w-5 brightness-0" src={item.path} />
                    </div>
                    <h4 className="mt-2 font-semibold text-slate-100">{item.label}</h4>
                    <p className="mt-1 text-xs text-slate-300">{item.use}</p>
                    <p className="mt-1 truncate font-mono text-[10px] text-slate-400">{item.path}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </BlurFade>
    </SiteLayout>
  );
}

import { SiteLayout } from "@/components/site-layout";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { Particles } from "@/components/ui/particles";
import { Ripple } from "@/components/ui/ripple";

const timeline = [
  {
    icon: "/vendor/icons/lucide/radar.svg",
    title: "Stage 01: Summon",
    body: "Open with unmistakable hierarchy: oversized headline, constrained copy, and one luminous entry point."
  },
  {
    icon: "/vendor/icons/lucide/sparkles.svg",
    title: "Stage 02: Distill",
    body: "Compress complexity into clear arguments. Three sections, three jobs, no duplication."
  },
  {
    icon: "/vendor/icons/lucide/flame.svg",
    title: "Stage 03: Seal",
    body: "Close with one dominant action and one fallback path to protect conversion clarity."
  }
];

const possibilityModes = [
  {
    title: "Investor Narrative Mode",
    body: "Lead with urgency, distill into confidence signals, then close with one specific next action."
  },
  {
    title: "Product Validation Mode",
    body: "Frame the pain clearly, demonstrate proof artifacts, and request a bounded pilot commitment."
  },
  {
    title: "Brand Launch Mode",
    body: "Anchor meaning with strong visuals, then convert style attention into measurable business intent."
  }
];

const copyBlocks = [
  {
    title: "Clarity Hero",
    headline: "Turn fragmented ideas into a launch page people instantly understand.",
    support: "Use this when your product is strong but your message is scattered.",
    ctaPrimary: "Map My Ritual",
    ctaSecondary: "See a Working Example"
  },
  {
    title: "Proof-First Hero",
    headline: "Ship a page that proves value before asking for commitment.",
    support: "Use this for skeptical audiences who need confidence signals early.",
    ctaPrimary: "Build My Proof Flow",
    ctaSecondary: "Audit My Current Funnel"
  },
  {
    title: "Conversion Hero",
    headline: "Replace pretty-but-vague sections with a sequence that drives action.",
    support: "Use this when traffic exists but conversion clarity is weak.",
    ctaPrimary: "Design My Conversion Sequence",
    ctaSecondary: "Get a Clarity Review"
  }
];

const stressTestChecks = [
  "Could a new visitor explain your offer after 10 seconds on the hero?",
  "Does each section add new evidence instead of repeating previous claims?",
  "Is the primary CTA specific about the next step and expected outcome?",
  "Does your fallback CTA support the primary action instead of competing with it?",
  "Can your core promise survive if all decorative visuals are removed?"
];

export function RitualPage() {
  return (
    <SiteLayout active="ritual">
      <BlurFade inView>
        <section aria-labelledby="hero-title" className="glass-shell relative overflow-hidden p-7 md:p-10 group">
          <div className="grain-overlay" />
          <Particles className="absolute inset-0 opacity-35" quantity={52} size={0.7} staticity={35} />
          <Ripple className="opacity-30" mainCircleOpacity={0.22} mainCircleSize={150} numCircles={5} />
          <img
            src="/bg-void-3.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
            alt=""
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p className="kicker">Ritual System</p>
            <TextAnimate
              animation="blurInUp"
              as="h1"
              by="word"
              className="hero-title mt-3"
              id="hero-title"
              once
            >
              The sequence that converts feeling into commitment.
            </TextAnimate>
            <p className="lede mt-4">
              This stage translates your idea into narrative structure:{" "}
              <span className="text-highlight">hook, explain, and close.</span>{" "}
              Every screen earns its place and pushes users toward a decision.
            </p>
            <p className="mt-3 max-w-3xl text-slate-300">
              Ritual is the copywriting engine of the app. It helps teams move from scattered notes to{" "}
              <span className="text-accent-italic">high-clarity message architecture</span> that can be deployed across landing pages.
            </p>
            <Marquee className="mt-5 rounded-full border border-white/20 bg-black/30 py-2 [--duration:24s]">
              <span className="badge-chip">Summon: unmistakable first frame</span>
              <span className="badge-chip">Distill: three claims, zero clutter</span>
              <span className="badge-chip">Seal: primary CTA, clear fallback</span>
              <span className="badge-chip">Momentum preserved between sections</span>
            </Marquee>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <figure className="rounded-xl border border-white/15 bg-black/25 p-2">
                <img alt="Generated ritual spectrum backdrop" className="h-24 w-full rounded-lg object-cover" src="/generated/ritual-spectrum.png" />
                <figcaption className="mt-1 text-xs text-slate-300">Summon Tone</figcaption>
              </figure>
              <figure className="rounded-xl border border-white/15 bg-black/25 p-2">
                <img alt="Generated signal wave backdrop" className="h-24 w-full rounded-lg object-cover" src="/generated/signal-wave.png" />
                <figcaption className="mt-1 text-xs text-slate-300">Distill Contrast</figcaption>
              </figure>
              <figure className="rounded-xl border border-white/15 bg-black/25 p-2">
                <img alt="Generated artifact nebula backdrop" className="h-24 w-full rounded-lg object-cover" src="/generated/artifact-nebula.png" />
                <figcaption className="mt-1 text-xs text-slate-300">Seal Focus</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.1} inView>
        <section aria-labelledby="ritual-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="ritual-title">
            Ritual Timeline
          </h2>
          <p className="mt-2 text-slate-300">
            Use this when the message is fuzzy and needs a repeatable content system with{" "}
            <span className="text-accent-italic">visible momentum.</span>
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {timeline.map((item, index) => {
              return (
                <MagicCard
                  className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/[0.04] p-5"
                  gradientColor={index % 2 === 0 ? "#9c7dff" : "#6ea5ff"}
                  key={item.title}
                >
                  <BorderBeam duration={10 + index} size={70} />
                  <article>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30">
                      <img alt="" aria-hidden="true" className="h-6 w-6" src={item.icon} />
                    </div>
                    <h3 className="mt-3 font-heading text-2xl">{item.title}</h3>
                    <p className="mt-2 text-slate-300">{item.body}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.14em] text-slate-400">Gate {index + 1} / 3</p>
                  </article>
                </MagicCard>
              );
            })}
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.16} inView>
        <section aria-labelledby="tactics-title" className="panel mt-5 relative overflow-hidden">
          <img
            src="/vendor/images/cinematic/ritual-concept.jpg"
            className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-15"
            alt=""
            aria-hidden="true"
          />
          <h2 className="font-heading text-3xl" id="tactics-title">
            Execution Tactics
          </h2>
          <div className="relative z-10 mt-5 grid gap-4 lg:grid-cols-[1.1fr,1fr]">
            <div className="space-y-4">
              <article className="rounded-2xl border border-white/20 bg-black/30 p-5 backdrop-blur">
                <p className="kicker">Rhythm</p>
                <h3 className="mt-1 font-heading text-2xl">Alternate density on purpose</h3>
                <p className="mt-2 text-slate-300">Cycle between heavy visual moments and quiet explanatory beats to avoid fatigue.</p>
              </article>
              <article className="rounded-2xl border border-white/20 bg-black/30 p-5 backdrop-blur">
                <p className="kicker">Contrast</p>
                <h3 className="mt-1 font-heading text-2xl">Spend bright color only on action</h3>
                <p className="mt-2 text-slate-300">Reserve your hottest color for CTA states and signal markers, not decorative surfaces.</p>
              </article>
              <article className="rounded-2xl border border-white/20 bg-black/30 p-5 backdrop-blur">
                <p className="kicker">Clarity</p>
                <h3 className="mt-1 font-heading text-2xl">Headlines stand on their own</h3>
                <p className="mt-2 text-slate-300">Any headline must still make sense without scanning the surrounding paragraph.</p>
              </article>
            </div>
            <MagicCard className="rounded-2xl border border-white/20 bg-black/35 p-5" gradientColor="#6d59ff">
              <p className="kicker">Ritual Checklist</p>
              <ol className="mt-3 space-y-3 text-sm text-slate-200">
                <li className="rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2">1. Hero statement communicates value in less than 8 seconds.</li>
                <li className="rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2">2. Sections do not repeat claims or visuals from prior blocks.</li>
                <li className="rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2">3. CTA language is active, specific, and singular.</li>
                <li className="rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2">4. Fallback action is present without competing with primary CTA.</li>
              </ol>
            </MagicCard>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.22} inView>
        <section aria-labelledby="ritual-possibilities-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="ritual-possibilities-title">
            Ritual Possibility Modes
          </h2>
          <p className="mt-2 text-slate-300">
            Adapt the same structure for different goals while preserving clarity.{" "}
            <span className="text-stroke-glow font-heading text-xl align-middle">One framework, many outcomes.</span>
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {possibilityModes.map((mode, index) => (
              <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.04] p-5" gradientColor={index % 2 === 0 ? "#8f79ff" : "#6eb3ff"} key={mode.title}>
                <article>
                  <p className="kicker">Mode {index + 1}</p>
                  <h3 className="mt-1 font-heading text-2xl">{mode.title}</h3>
                  <p className="mt-2 text-slate-300">{mode.body}</p>
                </article>
              </MagicCard>
            ))}
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.26} inView>
        <section aria-labelledby="copy-kit-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="copy-kit-title">Ritual Copy Kit</h2>
          <p className="mt-2 text-slate-300">
            Use these ready-to-adapt blocks to move from concept to publishable messaging faster.
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {copyBlocks.map((block, index) => (
              <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.04] p-5" gradientColor={index % 2 === 0 ? "#7f7aff" : "#68b0ff"} key={block.title}>
                <article>
                  <p className="kicker">{block.title}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">{block.headline}</p>
                  <p className="mt-2 text-sm text-slate-300">{block.support}</p>
                  <div className="mt-3 rounded-xl border border-white/15 bg-black/30 p-3 text-xs text-slate-200">
                    <p><span className="text-highlight">Primary CTA:</span> {block.ctaPrimary}</p>
                    <p className="mt-1"><span className="text-highlight">Secondary CTA:</span> {block.ctaSecondary}</p>
                  </div>
                </article>
              </MagicCard>
            ))}
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <section aria-labelledby="stress-test-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="stress-test-title">Message Stress Test</h2>
          <p className="mt-2 text-slate-300">
            If you cannot answer these clearly, the ritual is incomplete and should be revised before launch.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {stressTestChecks.map((question, idx) => (
              <article className="rounded-xl border border-white/15 bg-black/25 p-4" key={question}>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Check {idx + 1}</p>
                <p className="mt-1 text-sm text-slate-100">{question}</p>
              </article>
            ))}
          </div>
        </section>
      </BlurFade>
    </SiteLayout>
  );
}

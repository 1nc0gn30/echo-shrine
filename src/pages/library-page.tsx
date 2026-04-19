import { useMemo, useState } from "react";
import { ASSET_MANIFEST, type AssetItem, type AssetCategory } from "@/data/asset-manifest";
import { SiteLayout } from "@/components/site-layout";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AnimatedList } from "@/components/ui/animated-list";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { CoolMode } from "@/components/ui/cool-mode";
import { Lens } from "@/components/ui/lens";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Particles } from "@/components/ui/particles";
import { Ripple } from "@/components/ui/ripple";
import { Terminal, AnimatedSpan, TypingAnimation } from "@/components/ui/terminal";
import { TextAnimate } from "@/components/ui/text-animate";
import { WordRotate } from "@/components/ui/word-rotate";
import { LottiePreview } from "@/components/lottie-preview";

const CATEGORY_LABELS: Record<AssetCategory | "all", string> = {
  all: "All",
  font: "Fonts",
  icon: "Icons",
  illustration: "Illustrations",
  texture: "Textures",
  flag: "Flags",
  lottie: "Lottie",
  other: "Other"
};

const IMAGE_EXTENSIONS = new Set(["svg", "png", "jpg", "jpeg", "gif", "webp", "avif"]);

function isPreviewable(asset: AssetItem) {
  return IMAGE_EXTENSIONS.has(asset.ext) || isPlayableLottie(asset);
}

function isPlayableLottie(asset: AssetItem) {
  return asset.category === "lottie" && asset.ext === "json";
}

function toPublicUrl(assetPath: string) {
  return typeof window === "undefined" ? assetPath : `${window.location.origin}${assetPath}`;
}

export function LibraryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<AssetCategory | "all">("all");
  const [previewOnly, setPreviewOnly] = useState(false);
  const [selectedId, setSelectedId] = useState<string>(ASSET_MANIFEST[0]?.id || "");
  const [activity, setActivity] = useState<string[]>([
    "Explorer initialized",
    "Loaded full vendor manifest",
    "Ready for search and direct downloads"
  ]);

  const categories = useMemo(() => {
    const dynamic = new Set<AssetCategory>();
    ASSET_MANIFEST.forEach((item) => dynamic.add(item.category));
    return ["all", ...Array.from(dynamic)] as Array<AssetCategory | "all">;
  }, []);

  const byCategory = useMemo(() => {
    return ASSET_MANIFEST.reduce<Record<AssetCategory, AssetItem[]>>((acc, item) => {
      acc[item.category] = [...(acc[item.category] || []), item];
      return acc;
    }, {} as Record<AssetCategory, AssetItem[]>);
  }, []);

  const starterPacks = useMemo(() => {
    const topIn = (cat: AssetCategory, n: number) => (byCategory[cat] || []).slice(0, n);
    return [
      {
        key: "launch-kit",
        title: "Launch UI Kit",
        description: "Core icons + textures for a polished landing page shell.",
        categories: ["icon", "texture"] as AssetCategory[],
        count: (byCategory.icon?.length || 0) + (byCategory.texture?.length || 0),
        assets: [...topIn("icon", 2), ...topIn("texture", 2)]
      },
      {
        key: "motion-kit",
        title: "Motion Signal Kit",
        description: "Playable JSON Lottie assets for interactive moments.",
        categories: ["lottie"] as AssetCategory[],
        count: (byCategory.lottie || []).filter((item) => item.ext === "json").length,
        assets: (byCategory.lottie || []).filter((item) => item.ext === "json").slice(0, 4)
      },
      {
        key: "brand-kit",
        title: "Brand Surface Kit",
        description: "Fonts + illustrations to keep page tone and brand consistency tight.",
        categories: ["font", "illustration"] as AssetCategory[],
        count: (byCategory.font?.length || 0) + (byCategory.illustration?.length || 0),
        assets: [...topIn("font", 2), ...topIn("illustration", 2)]
      },
    ];
  }, [byCategory]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    const list = ASSET_MANIFEST.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (previewOnly && !isPreviewable(item)) return false;
      if (!term) return true;

      return (
        item.name.toLowerCase().includes(term) ||
        item.path.toLowerCase().includes(term) ||
        item.ext.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
    });

    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [query, category, previewOnly]);

  const selected = useMemo(() => {
    const fromFiltered = filtered.find((item) => item.id === selectedId);
    if (fromFiltered) return fromFiltered;
    return filtered[0] || null;
  }, [filtered, selectedId]);

  const recordActivity = (entry: string) => {
    setActivity((prev) => [entry, ...prev].slice(0, 12));
  };

  const handleCopyUrl = async (asset: AssetItem) => {
    try {
      await navigator.clipboard.writeText(toPublicUrl(asset.path));
      recordActivity(`Copied URL: ${asset.name}`);
    } catch {
      recordActivity(`Clipboard blocked for: ${asset.name}`);
    }
  };

  const handleOpen = (asset: AssetItem) => {
    window.open(asset.path, "_blank", "noopener,noreferrer");
    recordActivity(`Opened asset: ${asset.name}`);
  };

  const handleDownload = (asset: AssetItem) => {
    const a = document.createElement("a");
    a.href = asset.path;
    a.download = asset.name;
    a.click();
    recordActivity(`Download requested: ${asset.name}`);
  };

  const activatePack = (pack: { categories: AssetCategory[]; title: string; }) => {
    const targetCategory = pack.categories[0] || "all";
    setCategory(targetCategory);
    setPreviewOnly(targetCategory !== "font");
    setQuery("");
    recordActivity(`Activated starter pack: ${pack.title}`);
  };

  return (
    <SiteLayout active="library">
      <BlurFade inView>
        <section aria-labelledby="hero-title" className="glass-shell relative overflow-hidden p-7 md:p-10">
          <Particles className="absolute inset-0 opacity-45" quantity={90} size={0.75} staticity={40} />
          <Ripple className="opacity-35" mainCircleOpacity={0.2} mainCircleSize={180} numCircles={6} />
          <div className="relative z-10">
            <p className="kicker">Interactive Asset Workbench</p>
            <LineShadowText as="h1" className="hero-title mt-3" shadowColor="#6d59ff">
              Direct access to every asset.
            </LineShadowText>
            <WordRotate
              className="mt-2 font-heading text-2xl text-slate-100 md:text-3xl"
              duration={2200}
              words={["Search", "Preview", "Copy URLs", "Download", "Ship"]}
            />
            <p className="lede mt-4">
              The final step of the app: transform curated assets into real delivery.{" "}
              <span className="text-highlight">Find, preview, and ship files without guesswork.</span>
            </p>
            <p className="mt-3 text-sm text-slate-200">
              <AnimatedGradientText className="font-medium" colorFrom="#ffd68a" colorTo="#7aa8ff">
                {ASSET_MANIFEST.length} indexed files from /public/vendor
              </AnimatedGradientText>
            </p>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.08} inView>
        <section aria-label="Library stats" className="panel mt-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.05] p-5" gradientColor="#8d7dff">
              <p className="kicker">Total Assets</p>
              <p className="mt-2 font-heading text-4xl"><NumberTicker value={ASSET_MANIFEST.length} /></p>
            </MagicCard>
            <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.05] p-5" gradientColor="#4a7dff">
              <p className="kicker">Previewable</p>
              <p className="mt-2 font-heading text-4xl"><NumberTicker value={ASSET_MANIFEST.filter(isPreviewable).length} /></p>
            </MagicCard>
            <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.05] p-5" gradientColor="#6ea5ff">
              <p className="kicker">Categories</p>
              <p className="mt-2 font-heading text-4xl"><NumberTicker value={categories.length - 1} /></p>
            </MagicCard>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.1} inView>
        <section aria-labelledby="starter-packs-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="starter-packs-title">High-Value Starter Packs</h2>
          <p className="mt-2 text-slate-300">
            Pick a pack, auto-focus the explorer, and start shipping instead of browsing blindly.
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {starterPacks.map((pack, idx) => (
              <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.05] p-5" gradientColor={idx % 2 === 0 ? "#8f79ff" : "#65acff"} key={pack.key}>
                <article>
                  <p className="kicker">{pack.title}</p>
                  <p className="mt-2 text-sm text-slate-200">{pack.description}</p>
                  <p className="mt-2 font-heading text-3xl"><NumberTicker value={pack.count} /></p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">assets in this pack</p>
                  <div className="mt-3 space-y-1">
                    {pack.assets.map((asset) => (
                      <p className="truncate rounded-md border border-white/15 bg-black/25 px-2 py-1 font-mono text-[11px] text-slate-300" key={asset.id}>{asset.path}</p>
                    ))}
                  </div>
                  <button
                    className="mt-4 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20"
                    onClick={() => activatePack(pack)}
                    type="button"
                  >
                    Open {pack.title}
                  </button>
                </article>
              </MagicCard>
            ))}
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.11} inView>
        <section aria-labelledby="ship-workflows-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="ship-workflows-title">Ship-Now Workflows</h2>
          <p className="mt-2 text-slate-300">
            Each workflow below maps directly to a production outcome and tells users exactly where to start.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.04] p-5" gradientColor="#7f7bff">
              <article>
                <p className="kicker">Workflow 01</p>
                <h3 className="mt-1 font-heading text-2xl">Landing Page Assembly</h3>
                <p className="mt-2 text-sm text-slate-300">Grab icons + textures + 1 Lottie JSON and wire your hero/feature/CTA in one pass.</p>
                <button className="mt-4 rounded-md bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20" onClick={() => { setCategory("icon"); setPreviewOnly(true); recordActivity("Workflow: Landing Page Assembly"); }} type="button">Start with Icons</button>
              </article>
            </MagicCard>
            <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.04] p-5" gradientColor="#67a7ff">
              <article>
                <p className="kicker">Workflow 02</p>
                <h3 className="mt-1 font-heading text-2xl">Motion Upgrade Pass</h3>
                <p className="mt-2 text-sm text-slate-300">Filter Lottie JSON only, test autoplay behavior, and copy direct URLs into components.</p>
                <button className="mt-4 rounded-md bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20" onClick={() => { setCategory("lottie"); setPreviewOnly(true); recordActivity("Workflow: Motion Upgrade Pass"); }} type="button">Start with Lottie</button>
              </article>
            </MagicCard>
            <MagicCard className="rounded-2xl border border-white/20 bg-white/[0.04] p-5" gradientColor="#8a74ff">
              <article>
                <p className="kicker">Workflow 03</p>
                <h3 className="mt-1 font-heading text-2xl">Brand Consistency Pass</h3>
                <p className="mt-2 text-sm text-slate-300">Align type + illustration selection before final content and QA to reduce design drift.</p>
                <button className="mt-4 rounded-md bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20" onClick={() => { setCategory("font"); setPreviewOnly(false); recordActivity("Workflow: Brand Consistency Pass"); }} type="button">Start with Fonts</button>
              </article>
            </MagicCard>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.12} inView>
        <section aria-label="Asset explorer" className="panel mt-5">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="relative flex-1 min-w-[240px]">
                  <input
                    className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                    placeholder="Search manifest..."
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`rounded-full px-3 py-1.5 text-xs transition ${category === cat ? "bg-white/20 text-white border border-white/30" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}
                      onClick={() => setCategory(cat)}
                      type="button"
                    >
                      {CATEGORY_LABELS[cat]}
                    </button>
                  ))}
                </div>
                <button
                  className={`rounded-full px-3 py-1.5 text-xs transition ${previewOnly ? "bg-violet-600 text-white" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}
                  onClick={() => setPreviewOnly(!previewOnly)}
                  type="button"
                >
                  Preview Only
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((asset) => (
                  <MagicCard
                    className="rounded-2xl border border-white/20 bg-white/[0.04] p-4 hover:border-white/40 transition-colors"
                    gradientColor="#6d59ff"
                    key={asset.id}
                  >
                    <article>
                      <button
                        className="w-full text-left group"
                        onClick={() => setSelectedId(asset.id)}
                        type="button"
                      >
                        <p className="truncate font-medium text-white group-hover:text-violet-300 transition-colors">{asset.name}</p>
                        <p className="mt-1 truncate font-mono text-xs text-slate-400">{asset.path}</p>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-slate-300">{asset.category} · {asset.ext}</p>
                      </button>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <CoolMode>
                          <button className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-white hover:bg-white/20" onClick={() => handleCopyUrl(asset)} type="button">Copy URL</button>
                        </CoolMode>
                        <button className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-white hover:bg-white/20" onClick={() => handleOpen(asset)} type="button">Open</button>
                        <button className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-white hover:bg-white/20" onClick={() => handleDownload(asset)} type="button">Download</button>
                      </div>
                    </article>
                  </MagicCard>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl border border-white/15 bg-black/25 p-4 md:w-96">
              <BorderBeam size={80} duration={9} />
              {selected ? (
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.14em] text-slate-300">Selected Asset</p>
                  <TextAnimate animation="blurIn" as="h3" className="mt-1 font-heading text-2xl">{selected.name}</TextAnimate>
                  <p className="mt-1 font-mono text-xs text-slate-400">{selected.path}</p>

                  {isPlayableLottie(selected) ? (
                    <LottiePreview
                      label={selected.name}
                      onStatusChange={(status) => {
                        if (status === "playing") recordActivity(`Lottie playing: ${selected.name}`);
                        if (status === "error") recordActivity(`Lottie failed: ${selected.name}`);
                      }}
                      src={selected.path}
                    />
                  ) : isPreviewable(selected) ? (
                    <div className="mt-4 overflow-hidden rounded-xl border border-white/15 bg-slate-950/70 p-2">
                      <Lens lensSize={140} zoomFactor={1.55}>
                        <img 
                          alt={selected.name} 
                          className="max-h-72 w-full rounded-lg object-contain invert brightness-200 grayscale contrast-125" 
                          src={selected.path} 
                        />
                      </Lens>
                    </div>
                  ) : selected.category === "lottie" ? (
                    <div className="mt-4 overflow-hidden rounded-xl border border-white/15 bg-slate-950/70 p-2">
                      <Terminal className="max-h-60 max-w-none" sequence={false}>
                        <TypingAnimation duration={26}>{`$ lottie inspect ${selected.path}`}</TypingAnimation>
                        <AnimatedSpan className="text-yellow-300">Compressed Lottie detected (.gz)</AnimatedSpan>
                        <AnimatedSpan className="text-slate-300">Browser preview is enabled for .json Lottie files.</AnimatedSpan>
                        <AnimatedSpan className="text-blue-300">Open or download this file for pipeline use.</AnimatedSpan>
                      </Terminal>
                    </div>
                  ) : (
                    <div className="mt-4 overflow-hidden rounded-xl border border-white/15 bg-slate-950/70 p-2">
                      <Terminal className="max-h-60 max-w-none" sequence={false}>
                        <TypingAnimation duration={26}>{`$ asset inspect ${selected.path}`}</TypingAnimation>
                        <AnimatedSpan className="text-green-400">type: {selected.ext}</AnimatedSpan>
                        <AnimatedSpan className="text-slate-300">category: {selected.category}</AnimatedSpan>
                        <AnimatedSpan className="text-blue-300">url: {toPublicUrl(selected.path)}</AnimatedSpan>
                      </Terminal>
                    </div>
                  )}

                  <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-300">Instant Access</p>
                    <p className="mt-1 break-all font-mono text-xs text-slate-200">{toPublicUrl(selected.path)}</p>
                  </div>

                  <div className="relative mt-5 flex h-40 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-black/20">
                    <OrbitingCircles iconSize={26} radius={64}>
                      <img alt="" aria-hidden="true" className="h-6 w-6" src="/vendor/icons/lucide/orbit.svg" />
                      <img alt="" aria-hidden="true" className="h-6 w-6" src="/vendor/icons/lucide/radar.svg" />
                      <img alt="" aria-hidden="true" className="h-6 w-6" src="/vendor/icons/lucide/sparkles.svg" />
                    </OrbitingCircles>
                    <p className="text-center text-xs text-slate-300">Asset Routing Core</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-slate-400">No assets match current filters.</p>
              )}
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <section aria-labelledby="activity-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="activity-title">Recent Interaction Feed</h2>
          <div className="mt-4 rounded-2xl border border-white/15 bg-black/20 p-3">
            <AnimatedList delay={750}>
              {activity.map((entry, idx) => (
                <figure className="rounded-xl border border-white/10 bg-white/5 p-3" key={`${entry}-${idx}`}>
                  <figcaption className="text-sm text-slate-200">{entry}</figcaption>
                </figure>
              ))}
            </AnimatedList>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.24} inView>
        <section aria-labelledby="raw-access-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="raw-access-title">Raw Path Access</h2>
          <p className="mt-2 text-sm text-slate-300">
            Every asset path is directly reachable as static content. Use this index for pipelines, embeds, and downloads.
          </p>
          <div className="mt-4 max-h-64 overflow-auto rounded-xl border border-white/15 bg-black/20 p-3">
            <Terminal className="max-h-none max-w-none" sequence={false}>
              <AnimatedSpan>$ find public/vendor -type f</AnimatedSpan>
              {ASSET_MANIFEST.map((asset) => (
                <AnimatedSpan className="text-slate-300" key={asset.id}>{asset.path}</AnimatedSpan>
              ))}
            </Terminal>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.28} inView>
        <section aria-labelledby="loop-handoff-title" className="panel mt-5">
          <h2 className="font-heading text-3xl" id="loop-handoff-title">Continue The Build Loop</h2>
          <p className="mt-2 text-slate-300">
            Library closes the loop by shipping files; jump back to strategy or artifacts to run the next iteration.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a className="rounded-xl border border-white/20 bg-white/[0.04] p-4 hover:bg-white/[0.08]" href="/">
              <p className="kicker">Loop Start</p>
              <p className="mt-1 font-heading text-xl">Back To Home</p>
            </a>
            <a className="rounded-xl border border-white/20 bg-white/[0.04] p-4 hover:bg-white/[0.08]" href="/ritual.html">
              <p className="kicker">Refine Message</p>
              <p className="mt-1 font-heading text-xl">Open Ritual</p>
            </a>
            <a className="rounded-xl border border-white/20 bg-white/[0.04] p-4 hover:bg-white/[0.08]" href="/artifacts.html">
              <p className="kicker">Adjust UI Modules</p>
              <p className="mt-1 font-heading text-xl">Open Artifacts</p>
            </a>
          </div>
        </section>
      </BlurFade>
    </SiteLayout>
  );
}

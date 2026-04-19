---
name: magicui-facelift-designs
description: Design and implement major frontend facelifts using Magic UI components in React + Vite + Tailwind projects. Use when a user asks for a visual overhaul, premium landing page polish, cinematic dark styling, or explicit Magic UI integration/refinement.
---

# Magic UI Facelift Designs

Execute this workflow to deliver a substantial, production-safe visual upgrade.

## 1) Audit and preserve constraints
- Preserve existing routes, metadata, and deployment config unless the user asks to change them.
- Keep responsive behavior and keyboard focus states.
- Keep semantic heading structure and alt text.

## 2) Pick a cohesive visual direction
- Define one art direction and stick to it across pages.
- Keep dark UI consistency with high contrast text and restrained accent colors.
- Use background depth: gradients + subtle patterns + glow layers.

## 3) Use Magic UI deliberately
- Install only components that support the chosen direction.
- Prefer 3-6 components max for coherence.
- Recommended components for landing-page facelifts: `text-animate`, `blur-fade`, `marquee`, `dot-pattern`, `number-ticker`, `animated-gradient-text`, `magic-card`, `shimmer-button`.
- Favor compositional sections instead of isolated demos.

## 4) Compose the page system
- Upgrade global shell first: nav, hero framing, section rhythm, footer.
- Build sections with varied density (hero, metrics, feature grid, visual strip, CTA).
- Reuse component primitives to keep styles maintainable.

## 5) Motion and performance
- Prefer subtle reveal/stagger animations over constant motion.
- Keep animation durations short and readable.
- Avoid effects that block content readability.

## 6) Validate
- Run build after facelift changes.
- Confirm route-level metadata still exists in each HTML entry file.
- Report changed files, validation, and remaining risks.

## References
- Read `references/magicui-component-shortlist.md` before selecting components.

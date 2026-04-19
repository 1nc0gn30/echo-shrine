export type AssetCategory = "font" | "icon" | "illustration" | "texture" | "flag" | "lottie" | "other";

export interface AssetItem {
  id: string;
  path: string;
  name: string;
  ext: string;
  category: AssetCategory;
  downloadable: boolean;
}

export const ASSET_MANIFEST: AssetItem[] = [
  {
    "id": "vendor-fonts-IBM-Plex-LICENSE-txt",
    "path": "/vendor/fonts/IBM-Plex-LICENSE.txt",
    "name": "IBM-Plex-LICENSE.txt",
    "ext": "txt",
    "category": "font",
    "downloadable": true
  },
  {
    "id": "vendor-fonts-IBMPlexMono-Regular-woff2",
    "path": "/vendor/fonts/IBMPlexMono-Regular.woff2",
    "name": "IBMPlexMono-Regular.woff2",
    "ext": "woff2",
    "category": "font",
    "downloadable": true
  },
  {
    "id": "vendor-fonts-SpaceGrotesk-OFL-txt",
    "path": "/vendor/fonts/SpaceGrotesk-OFL.txt",
    "name": "SpaceGrotesk-OFL.txt",
    "ext": "txt",
    "category": "font",
    "downloadable": true
  },
  {
    "id": "vendor-fonts-SpaceGrotesk-Variable-ttf",
    "path": "/vendor/fonts/SpaceGrotesk-Variable.ttf",
    "name": "SpaceGrotesk-Variable.ttf",
    "ext": "ttf",
    "category": "font",
    "downloadable": true
  },
  {
    "id": "vendor-fonts-Syne-OFL-txt",
    "path": "/vendor/fonts/Syne-OFL.txt",
    "name": "Syne-OFL.txt",
    "ext": "txt",
    "category": "font",
    "downloadable": true
  },
  {
    "id": "vendor-fonts-Syne-Variable-ttf",
    "path": "/vendor/fonts/Syne-Variable.ttf",
    "name": "Syne-Variable.ttf",
    "ext": "ttf",
    "category": "font",
    "downloadable": true
  },
  {
    "id": "vendor-icons-heroicons-LICENSE-txt",
    "path": "/vendor/icons/heroicons/LICENSE.txt",
    "name": "LICENSE.txt",
    "ext": "txt",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-heroicons-cpu-chip-svg",
    "path": "/vendor/icons/heroicons/cpu-chip.svg",
    "name": "cpu-chip.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-heroicons-cube-transparent-svg",
    "path": "/vendor/icons/heroicons/cube-transparent.svg",
    "name": "cube-transparent.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-heroicons-finger-print-svg",
    "path": "/vendor/icons/heroicons/finger-print.svg",
    "name": "finger-print.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-heroicons-fire-svg",
    "path": "/vendor/icons/heroicons/fire.svg",
    "name": "fire.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-heroicons-light-bulb-svg",
    "path": "/vendor/icons/heroicons/light-bulb.svg",
    "name": "light-bulb.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-heroicons-sparkles-svg",
    "path": "/vendor/icons/heroicons/sparkles.svg",
    "name": "sparkles.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-lucide-LICENSE-txt",
    "path": "/vendor/icons/lucide/LICENSE.txt",
    "name": "LICENSE.txt",
    "ext": "txt",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-lucide-flame-svg",
    "path": "/vendor/icons/lucide/flame.svg",
    "name": "flame.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-lucide-layers-svg",
    "path": "/vendor/icons/lucide/layers.svg",
    "name": "layers.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-lucide-orbit-svg",
    "path": "/vendor/icons/lucide/orbit.svg",
    "name": "orbit.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-lucide-radar-svg",
    "path": "/vendor/icons/lucide/radar.svg",
    "name": "radar.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-lucide-scan-line-svg",
    "path": "/vendor/icons/lucide/scan-line.svg",
    "name": "scan-line.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-icons-lucide-sparkles-svg",
    "path": "/vendor/icons/lucide/sparkles.svg",
    "name": "sparkles.svg",
    "ext": "svg",
    "category": "icon",
    "downloadable": true
  },
  {
    "id": "vendor-images-TABLER-LICENSE-txt",
    "path": "/vendor/images/TABLER-LICENSE.txt",
    "name": "TABLER-LICENSE.txt",
    "ext": "txt",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-images-icons-outline-dark-svg",
    "path": "/vendor/images/icons-outline-dark.svg",
    "name": "icons-outline-dark.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-images-outline-preview-svg",
    "path": "/vendor/images/outline-preview.svg",
    "name": "outline-preview.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-images-random-icons-svg",
    "path": "/vendor/images/random-icons.svg",
    "name": "random-icons.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-au-svg",
    "path": "/vendor/library/flags/au.svg",
    "name": "au.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-br-svg",
    "path": "/vendor/library/flags/br.svg",
    "name": "br.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-ca-svg",
    "path": "/vendor/library/flags/ca.svg",
    "name": "ca.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-countries-geojson-gz",
    "path": "/vendor/library/flags/countries.geojson.gz",
    "name": "countries.geojson.gz",
    "ext": "gz",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-de-svg",
    "path": "/vendor/library/flags/de.svg",
    "name": "de.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-fr-svg",
    "path": "/vendor/library/flags/fr.svg",
    "name": "fr.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-gb-svg",
    "path": "/vendor/library/flags/gb.svg",
    "name": "gb.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-in-svg",
    "path": "/vendor/library/flags/in.svg",
    "name": "in.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-jp-svg",
    "path": "/vendor/library/flags/jp.svg",
    "name": "jp.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-us-svg",
    "path": "/vendor/library/flags/us.svg",
    "name": "us.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-flags-za-svg",
    "path": "/vendor/library/flags/za.svg",
    "name": "za.svg",
    "ext": "svg",
    "category": "flag",
    "downloadable": true
  },
  {
    "id": "vendor-library-illustrations-heroicons-logo-dark-svg",
    "path": "/vendor/library/illustrations/heroicons-logo-dark.svg",
    "name": "heroicons-logo-dark.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-library-illustrations-heroicons-logo-light-svg",
    "path": "/vendor/library/illustrations/heroicons-logo-light.svg",
    "name": "heroicons-logo-light.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-library-illustrations-heroicons-outline-preview-svg",
    "path": "/vendor/library/illustrations/heroicons-outline-preview.svg",
    "name": "heroicons-outline-preview.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-library-illustrations-heroicons-solid-preview-svg",
    "path": "/vendor/library/illustrations/heroicons-solid-preview.svg",
    "name": "heroicons-solid-preview.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-library-illustrations-lucide-logo-svg",
    "path": "/vendor/library/illustrations/lucide-logo.svg",
    "name": "lucide-logo.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-library-illustrations-tabler-icons-outline-dark-svg",
    "path": "/vendor/library/illustrations/tabler-icons-outline-dark.svg",
    "name": "tabler-icons-outline-dark.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-library-illustrations-tabler-icons-random-svg",
    "path": "/vendor/library/illustrations/tabler-icons-random.svg",
    "name": "tabler-icons-random.svg",
    "ext": "svg",
    "category": "illustration",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-animate-tab-1-json-gz",
    "path": "/vendor/library/lottie/animate_tab_1.json.gz",
    "name": "animate_tab_1.json.gz",
    "ext": "gz",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-animate-tab-1-example-json-gz",
    "path": "/vendor/library/lottie/animate_tab_1_example.json.gz",
    "name": "animate_tab_1_example.json.gz",
    "ext": "gz",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-ic-fab-animate-json-gz",
    "path": "/vendor/library/lottie/ic_fab_animate.json.gz",
    "name": "ic_fab_animate.json.gz",
    "ext": "gz",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-ic-fav-json-gz",
    "path": "/vendor/library/lottie/ic_fav.json.gz",
    "name": "ic_fav.json.gz",
    "ext": "gz",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-pagination-indicator-json-gz",
    "path": "/vendor/library/lottie/pagination_indicator.json.gz",
    "name": "pagination_indicator.json.gz",
    "ext": "gz",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-brain-json",
    "path": "/vendor/library/lottie/google/brain.json",
    "name": "brain.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-direct-hit-json",
    "path": "/vendor/library/lottie/google/direct-hit.json",
    "name": "direct-hit.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-dizzy-json",
    "path": "/vendor/library/lottie/google/dizzy.json",
    "name": "dizzy.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-fire-json",
    "path": "/vendor/library/lottie/google/fire.json",
    "name": "fire.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-glowing-star-json",
    "path": "/vendor/library/lottie/google/glowing-star.json",
    "name": "glowing-star.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-hundred-points-json",
    "path": "/vendor/library/lottie/google/hundred-points.json",
    "name": "hundred-points.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-light-bulb-json",
    "path": "/vendor/library/lottie/google/light-bulb.json",
    "name": "light-bulb.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-orange-heart-json",
    "path": "/vendor/library/lottie/google/orange-heart.json",
    "name": "orange-heart.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-party-popper-json",
    "path": "/vendor/library/lottie/google/party-popper.json",
    "name": "party-popper.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-rocket-json",
    "path": "/vendor/library/lottie/google/rocket.json",
    "name": "rocket.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-sparkles-json",
    "path": "/vendor/library/lottie/google/sparkles.json",
    "name": "sparkles.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-trophy-json",
    "path": "/vendor/library/lottie/google/trophy.json",
    "name": "trophy.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-unicorn-json",
    "path": "/vendor/library/lottie/google/unicorn.json",
    "name": "unicorn.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-lottie-google-waving-hand-json",
    "path": "/vendor/library/lottie/google/waving-hand.json",
    "name": "waving-hand.json",
    "ext": "json",
    "category": "lottie",
    "downloadable": true
  },
  {
    "id": "vendor-library-textures-chart-grid-dots-svg",
    "path": "/vendor/library/textures/chart-grid-dots.svg",
    "name": "chart-grid-dots.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  },
  {
    "id": "vendor-library-textures-dots-grid-3x3-svg",
    "path": "/vendor/library/textures/dots-grid-3x3.svg",
    "name": "dots-grid-3x3.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  },
  {
    "id": "vendor-library-textures-fingerprint-pattern-svg",
    "path": "/vendor/library/textures/fingerprint-pattern.svg",
    "name": "fingerprint-pattern.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  },
  {
    "id": "vendor-library-textures-grid-dots-svg",
    "path": "/vendor/library/textures/grid-dots.svg",
    "name": "grid-dots.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  },
  {
    "id": "vendor-library-textures-grid-goldenratio-svg",
    "path": "/vendor/library/textures/grid-goldenratio.svg",
    "name": "grid-goldenratio.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  },
  {
    "id": "vendor-library-textures-grid-pattern-svg",
    "path": "/vendor/library/textures/grid-pattern.svg",
    "name": "grid-pattern.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  },
  {
    "id": "vendor-library-textures-grid-scan-svg",
    "path": "/vendor/library/textures/grid-scan.svg",
    "name": "grid-scan.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  },
  {
    "id": "vendor-library-textures-layout-grid-svg",
    "path": "/vendor/library/textures/layout-grid.svg",
    "name": "layout-grid.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  },
  {
    "id": "vendor-textures-fingerprint-pattern-svg",
    "path": "/vendor/textures/fingerprint-pattern.svg",
    "name": "fingerprint-pattern.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  },
  {
    "id": "vendor-textures-grid-pattern-svg",
    "path": "/vendor/textures/grid-pattern.svg",
    "name": "grid-pattern.svg",
    "ext": "svg",
    "category": "texture",
    "downloadable": true
  }
];

# HMS Benefit State — Project Setup Progress

## Phase 1: Project Scaffolding
- [x] Initialize Next.js 14+ with App Router, TypeScript, Tailwind CSS
- [x] Install dependencies (Framer Motion, D3, @vercel/og)
- [x] Configure Tailwind with naval theme (colors, fonts)
- [x] Set up project folder structure

## Phase 2: Layout & Shared Components
- [x] Create root layout with JetBrains Mono font
- [x] Create NavalCard reusable component (the ╔══╗ registry card)
- [x] Create LiveTicker component (spending per second)
- [ ] Create ShipSilhouette SVG components (using text placeholders for now)

## Phase 3: Core Pages & Sections
- [x] Section 0: Loading state (Admiralty file splash)
- [x] Section 1: Hero — Ship Registry Card
- [x] Section 2: Fleet Register (sister ships)
- [x] Section 3: Meanwhile in the Actual Navy
- [x] Section 4: The Shipyard (infinite scroll)
- [x] Section 5: Refit Planner (slider tool)
- [x] Section 6: What's Your HMS? (postcode lookup)
- [x] Section 7: The Caveats (Dry Dock)
- [x] Section 8: Footer — Sources & Ship's Log
- [x] Section 9: The Vanishing Fleet (timeline)
- [x] Section 10: Send to Your MP
- [x] Section 11: Join the Crew (email capture)

## Phase 4: Data & Dynamic Routes
- [x] Create static data files (fleet data, constituency sample data)
- [x] Set up /fleet/[slug] dynamic routes
- [x] Set up /[constituency-slug] dynamic routes
- [x] Create /methodology page
- [x] Create utility functions (formatNumber, formatPounds, etc.)

## Phase 5: OG Images & SEO
- [x] Homepage OG image template (via /api/og)
- [x] Constituency OG image template (via /api/og?type=constituency)
- [ ] Slider share OG image template
- [x] Meta tags and SEO setup (OpenGraph + Twitter cards)

## Phase 6: Polish & Deploy (TODO — Next Steps)
- [ ] Mobile-first responsive design pass
- [ ] Framer Motion scroll animations polish
- [ ] Ship silhouette SVG artwork
- [ ] Real constituency data from DWP Stat-Xplore
- [ ] TheyWorkForYou API integration for MP lookup
- [ ] Email service integration (Buttondown/Loops/Resend)
- [ ] Vercel deployment config
- [ ] Final testing on mobile devices

## Build Status
- ✅ Project compiles successfully (`npm run build`)
- ✅ All routes generate: /, /fleet/[slug], /[constituency], /methodology, /api/og
- ✅ 14 static pages generated

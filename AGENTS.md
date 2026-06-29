# Dos Pais — Agent Instructions

## Project Overview

**Dos Pais** is a public-facing marketing and guest information webapp for a private holiday apartment in Ponta Delgada, São Miguel, Azores. The site is the primary digital presence for the property — it communicates the atmosphere of the space, helps guests explore the island, and will eventually integrate availability and booking flows.

The tone is calm, unhurried, and personal. Every word and design decision should reflect a quiet place for families to slow down — not a listing platform.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| UI Library | MUI v9 (`@mui/material`) |
| Styling | Tailwind CSS v4 + Emotion (via MUI) |
| Fonts | Geist Sans (body), Fraunces (headings) |
| Weather Data | Open-Meteo (free, no API key) |
| Deployment | Vercel |

<!-- BEGIN:nextjs-agent-rules -->
> **Important:** This project uses Next.js 16 with the App Router. APIs, conventions, and file structure may differ significantly from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices. Never use the Pages Router.
<!-- END:nextjs-agent-rules -->

---

## Architecture

### Rendering Strategy

- **Static by default.** All pages and sections are statically generated at build time unless there is a clear, user-facing reason to use dynamic rendering.
- Server Components are the default. Only add `"use client"` when the component requires browser APIs, user interaction, or client-side state.
- Weather data is fetched at build time via `lib/weather/` and rendered as static HTML. No client-side weather fetching unless specifically requested.

### Data Flow

```
data/placeholders.ts   →  static content (copy, images, links)
lib/weather/           →  island weather data (server-side, Open-Meteo)
public/                →  static assets (images, icons, fonts if self-hosted)
```

There is no database and no authentication layer at this stage. All content is either hardcoded in `data/` or fetched from public APIs at build time.

---

## Folder Structure

```
dos-pais/
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Root layout — fonts, metadata, MUI cache provider
│   ├── page.tsx                # Home page — composes all sections in order
│   ├── providers.tsx           # Client-side MUI ThemeProvider + CssBaseline
│   ├── theme.ts                # MUI theme — palette, typography, shape, component overrides
│   └── globals.css             # Tailwind base imports and any global CSS resets
│
├── components/
│   ├── layout/                 # Persistent UI surrounding page content
│   │   ├── Navbar.tsx          # Top navigation bar
│   │   └── Footer.tsx          # Site footer
│   │
│   ├── sections/               # Full-width page sections (composed in app/page.tsx)
│   │   ├── Hero.tsx
│   │   ├── ApartmentPreview.tsx
│   │   ├── ExploreSection.tsx
│   │   ├── FeaturedRecommendations.tsx
│   │   ├── MapPreview.tsx
│   │   ├── WeatherAroundIsland.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── GuestGuide.tsx
│   │   └── Testimonials.tsx
│   │
│   └── ui/                     # Reusable, composable primitive components
│       ├── AmenityCard.tsx
│       ├── ExploreCard.tsx
│       ├── GuestGuideCard.tsx
│       ├── RecommendationCard.tsx
│       ├── SectionTitle.tsx
│       └── WeatherLocationCard.tsx
│
├── data/
│   └── placeholders.ts         # All static content: nav links, images, amenities, etc.
│
├── lib/
│   └── weather/
│       ├── types.ts            # Shared TypeScript types (WeatherLocation, WeatherCondition)
│       ├── mockData.ts         # Development mock data — matches production shape exactly
│       ├── openMeteo.ts        # Open-Meteo API client (server-side only)
│       └── provider.ts         # Exports getWeatherData() — switches mock ↔ live by env
│
├── public/                     # Static assets served at /
│
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint (flat config)
├── postcss.config.mjs          # PostCSS for Tailwind v4
└── package.json
```

### Key Conventions

- **Sections vs UI:** `sections/` are full-width page blocks rendered once. `ui/` are composable, reusable card and display primitives used inside sections.
- **`data/placeholders.ts`** is the single source of truth for all static content. Do not hardcode copy or image URLs inside components.
- **Path alias:** `@/` maps to the project root. Always use `@/components/...`, `@/lib/...`, etc. — never relative `../../` paths.
- **No barrel files** (`index.ts`). Import directly from the source file.

---

## Design System

The theme lives in `app/theme.ts` and is the authoritative design reference. All visual decisions must be derived from it.

### Palette

| Token | Hex | Usage |
|---|---|---|
| `ocean` | `#1F3D52` | Primary — CTAs, headings, key UI elements |
| `oceanSoft` | `#3E6F8E` | Primary light — hover states, accents |
| `sea` | `#7FA9C2` | Sea spray accent |
| `sand` | `#F4EDE0` | Warm tinted backgrounds |
| `shell` | `#FBFAF7` | Page background (off-white) |
| `stone` | `#1C1D1F` | Primary text (volcanic stone) |
| `mist` | `#6B6F76` | Secondary / muted text |
| `moss` | `#7C9885` | Secondary brand colour |
| `hairline` | `#E7E2D7` | Dividers and borders |

### Typography

- **Headings** (`h1`–`h3`): Fraunces, weight 400, `letter-spacing: -0.02em`. Fluid sizing via `clamp()`.
- **Body / UI**: Geist Sans, system-ui fallback.
- Reference the MUI `typography` scale from `theme.ts` — do not invent custom font sizes.

### Styling Rules

- Use MUI `sx` prop or `styled()` for all component styling. Do not write standalone CSS files for components.
- Use Tailwind only for global layout utilities in `globals.css` or for structural primitives where MUI `sx` is verbose. Never use both Tailwind and `sx` on the same element for the same property.
- Border radius base: `18px` (`theme.shape.borderRadius`).

---

## Deployment Pipeline

### Platform: Vercel

The canonical deployment target is **Vercel**. The project is a standard Next.js App Router application and deploys with zero configuration beyond environment variables.

### Environments

| Environment | Branch | URL |
|---|---|---|
| Production | `main` | Custom domain (TBD) |
| Preview | Any PR or feature branch | Auto-generated Vercel preview URL |

### Build

```bash
next build   # runs on every Vercel deployment
```

The build must pass with zero errors and zero ESLint warnings before merging to `main`.

### Environment Variables

Secrets and runtime configuration are managed via Vercel's environment variable dashboard — never committed to the repository. Any variable needed at build time must be prefixed `NEXT_PUBLIC_` if it must be exposed to the browser.

Current variables:
- _(none required for the initial static release)_
- Future: booking provider API keys, analytics IDs.

### Vercel Configuration

No `vercel.json` is required at this stage. If custom headers, rewrites, or edge middleware are needed, add a `vercel.json` at the project root and document it here.

### Performance Targets

- Lighthouse Performance score ≥ 90 on mobile.
- Largest Contentful Paint < 2.5 s.
- All images must use Next.js `<Image>` with explicit `width`, `height`, and meaningful `alt` text.

---

## Development Workflow

```bash
npm run dev     # Start local dev server on http://localhost:3000
npm run build   # Production build (validates types + lint)
npm run lint    # ESLint check
npm run start   # Serve the production build locally
```

### Branch Strategy

- `main` — production-ready code only. Protected; requires passing CI.
- Feature branches: `feature/<short-description>`
- Bug fixes: `fix/<short-description>`

### Before Opening a PR

1. `npm run build` passes locally.
2. `npm run lint` reports no errors.
3. No `console.log` left in production code.
4. No hardcoded colours, font sizes, or spacing values outside the MUI theme.
5. All new static content lives in `data/placeholders.ts`, not inside component files.

---

## Agent Ground Rules

1. **Read before writing.** Always inspect existing components and the theme before creating new ones. The established patterns take precedence over your defaults.
2. **Match the aesthetic.** The product has a specific, intentional voice and visual language. Do not introduce generic UI patterns, bright colours, or heavy animations.
3. **Keep it static.** Default to Server Components and static data. Only escalate to dynamic or client-side rendering when clearly necessary.
4. **Respect the theme.** Never hardcode colour hex values or font families inside components. Always reference `theme.palette.*` and `theme.typography.*`.
5. **Data lives in `data/`.** No copy or image URLs inside components.
6. **Verify Next.js APIs.** Check `node_modules/next/dist/docs/` when in doubt about any Next.js API — this version may differ from your training data.


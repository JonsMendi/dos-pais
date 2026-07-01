---
description: "Use when adding a new island suggestion page to Dos Pais — restaurants, beaches, natural pools, activities, hiking, viewpoints, or any new category of local recommendations. Covers the full implementation pattern: data file, card component, page, translations, and ExploreSection wiring."
---

# Island Suggestions — Implementation Pattern

This instruction applies whenever the user asks to implement, add, or build a new category of island recommendations (e.g. viewpoints, markets, spas, food shops, day trips). Read it alongside `AGENTS.md`.

---

## 1. Research First

Before writing any code, **gather real, accurate information** about the specific topic. Use `fetch_webpage` to look up:

- AllTrails pages (for hiking trails — difficulty, distance, elevation, what makes it notable)
- Google Maps or local tourism pages (for places — what kind of experience, setting, practical notes)
- General context about the location or activity on São Miguel

Write descriptions that are **personal, honest, and atmospheric** — not a travel brochure. The tone is calm and unhurried. Acknowledge uncertainty where it exists (e.g. "as far as I know…", "I haven't tried them all"). Never invent facts.

---

## 2. Data File — `data/<category>.ts`

Create a typed data file. The shape varies slightly by category:

**Places** (beaches, pools, restaurants, viewpoints):
```ts
export type <Entity> = {
  name: string;
  description: string;
  mapsUrl: string;       // Google Maps deep link
  tip?: string;          // Optional practical note, shown highlighted
};
```

**Trails** (hiking):
```ts
export type Trail = {
  name: string;
  description: string;
  trailUrl: string;      // AllTrails link
  tip?: string;
};
```

**Operators** (activities with bookable providers):
```ts
export type ActivityProvider = { name: string; mapsUrl: string };
export type Activity = {
  name: string;
  description: string;
  providers: ActivityProvider[];  // one button per provider
  tip?: string;
};
```

Add a comment at the top noting these are personal picks. Export a named array (e.g. `export const viewpoints: Viewpoint[] = [...]`).

---

## 3. Translations — `lib/i18n/`

### 3a. Add the key to `lib/i18n/types.ts`

```ts
<category>Page: {
  backLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  mapsButton: string;   // or trailButton for hiking
  tipLabel: string;
};
```

### 3b. Add to all three locale files

**`lib/i18n/translations/en.ts`**, **`pt.ts`**, **`de.ts`** — add the `<category>Page` key at the bottom of the object (before the closing `};`).

- `backLabel`: "Back to Explore" / "Voltar a Explorar" / "Zurück zu Entdecken"
- `eyebrow`: short category label + "on São Miguel"
- `title`: short, evocative Fraunces-style heading (see existing pages for tone)
- `description`: 2–3 sentences, personal voice, sets the scene
- `mapsButton` / `trailButton`: localised call-to-action
- `tipLabel`: "Good to know" / "Bom saber" / "Gut zu wissen"

---

## 4. Card Component — `components/ui/<Category>Card.tsx`

Copy the pattern from an existing card (e.g. `BeachCard.tsx` or `HikingCard.tsx`). Key rules:
- `"use client"` directive
- Reads `t.<category>Page.tipLabel` (and `mapsButton` / `trailButton`) from `useTranslation()`
- Tip block: moss-blue tinted box, `LightbulbRoundedIcon`, overline label + body text
- CTA button: `variant="outlined"`, `size="small"`, `target="_blank" rel="noopener noreferrer"`
  - Places → `startIcon={<PlaceRoundedIcon />}` pointing to `mapsUrl`
  - Trails → `endIcon={<OpenInNewRoundedIcon />}` pointing to `trailUrl`
  - Activities with multiple providers → one button per provider using `<Box sx={{ display:"flex", flexWrap:"wrap", gap:1 }}>`
- Hover state: `boxShadow` + `translateY(-2px)` transition on the outer `Box`
- Never hardcode colours — always reference theme tokens via `sx`

---

## 5. Page — `app/<category>/`

Create two files:

**`app/<category>/page.tsx`** — Server Component:
```tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import <Category>PageContent from "./<Category>PageContent";

export const metadata: Metadata = { title: "...", description: "..." };

export default function <Category>Page() {
  return (
    <Box component="main">
      <Navbar />
      <<Category>PageContent />
      <Footer />
    </Box>
  );
}
```

**`app/<category>/<Category>PageContent.tsx`** — Client Component (`"use client"`):
- `useTranslation()` for all strings
- Page header section: `pt: { xs: 14, md: 18 }`, gradient background (pick a tone that matches the category's feel), `borderBottom` on `divider`
- Back button → `href="/#explore"`, `startIcon={<ArrowBackRoundedIcon />}`
- Content grid: `<Grid container spacing={{ xs: 3, md: 4 }}>` with `size={{ xs: 12, sm: 6, lg: 4 }}`

### Header gradient palette guide
| Category | Gradient start |
|---|---|
| Restaurants / Food | warm sand — `#EDE0C4` |
| Beaches / Water | soft blue — `#D6E8F0` |
| Natural Pools | mid blue — `#C8DCE8` |
| Activities | steel blue — `#C8D8E4` |
| Hiking | moss green — `#C5D5C0` |
| Viewpoints / Landscape | warm haze — `#DFD9C8` |

---

## 6. ExploreSection — Wire the href

In `components/sections/ExploreSection.tsx`, extend the `href` ternary chain to map the new card's index to the new route.

**Current card order** (index → route):
| Index | Title | Route |
|---|---|---|
| 0 | Restaurants | `/restaurants` |
| 1 | Beaches | `/beaches` |
| 2 | Natural Pools | `/natural-pools` |
| 3 | Activities | `/activities` |
| 4 | Hiking | `/hiking` |
| 5 | Viewpoints | *(next to wire)* |

If adding a new card, also update `t.explore.cards` in all three translation files and add a matching image entry to `exploreCardImages` in `data/placeholders.ts`.

---

## 7. Checklist Before Building

- [ ] Research the topic — fetch real info, don't invent descriptions
- [ ] Data file created at `data/<category>.ts` with correct type
- [ ] `lib/i18n/types.ts` updated with `<category>Page` key
- [ ] All three translation files updated (en, pt, de)
- [ ] Card component at `components/ui/<Category>Card.tsx`
- [ ] `app/<category>/page.tsx` (Server Component, metadata)
- [ ] `app/<category>/<Category>PageContent.tsx` (Client Component)
- [ ] `ExploreSection.tsx` href chain updated
- [ ] `npm run build` passes with zero errors

---

## 8. Tone Reminders

- Personal and honest — write as the apartment owner, not a tour guide
- Acknowledge uncertainty: "as far as I know", "I haven't tried them all"
- Never rank — no "best", "top", "must-see" superlatives unless the owner specifically used them
- Short descriptions — atmospheric, evocative, one strong observation per item
- Tips are practical and specific, not obvious

// Non-translatable data for the Dos Pais UI.
// All translatable text (copy, labels, descriptions) lives in lib/i18n/translations/.
// This file holds only images, icons, ratings, coordinates, and link hrefs.

const img = (seed: string, w = 1600, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const heroImage = img("dospais-hero-ocean", 2400, 1600);

export const apartmentImage = img("dospais-apartment-light", 1800, 1200);

/** Icon keys only — labels come from translations (t.apartment.amenities). */
export const amenityIcons = [
  "wifi",
  "kitchen",
  "sea",
  "coffee",
  "parking",
  "balcony",
] as const;

/** Images only — titles and descriptions come from translations (t.explore.cards). */
export const exploreCardImages = [
  img("dospais-restaurants", 1200, 900),
  img("dospais-beaches", 1200, 900),
  img("dospais-pools", 1200, 900),
  img("dospais-activities", 1200, 900),
  img("dospais-hiking", 1200, 900),
  img("dospais-views", 1200, 900),
];

/** Image + rating only — text comes from translations (t.recommendations.items). */
export const recommendationData = [
  { image: img("dospais-tasca", 1400, 1000), rating: 4.8 },
  { image: img("dospais-fogo", 1400, 1000), rating: 4.9 },
  { image: img("dospais-mosteiros", 1400, 1000), rating: 4.7 },
  { image: img("dospais-cafeporto", 1400, 1000), rating: 4.6 },
  { image: img("dospais-sunset", 1400, 1000), rating: 5.0 },
];

export const weather = {
  temperatureC: 24,
  condition: "Mostly sunny",
  humidity: 68,
  windKmh: 14,
  location: "Ponta Delgada, São Miguel",
};

export const mapPins = [
  { top: "22%", left: "30%", label: "Dos Pais" },
  { top: "44%", left: "58%", label: "Marina" },
  { top: "62%", left: "20%", label: "Mosteiros" },
  { top: "70%", left: "72%", label: "Lagoa do Fogo" },
  { top: "32%", left: "78%", label: "Furnas" },
];

/** Hrefs only — labels come from translations (t.nav). */
export const navHrefs = {
  home: "#home",
  apartment: "#apartment",
  explore: "#explore",
  guide: "#guide",
  contact: "#contact",
} as const;

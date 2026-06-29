export type Locale = "en" | "pt" | "de";

export interface Translations {
  nav: {
    home: string;
    apartment: string;
    explore: string;
    guide: string;
    contact: string;
    stayWithUs: string;
  };
  hero: {
    location: string;
    tagline: string;
    body: string;
    ctaExplore: string;
    ctaApartment: string;
  };
  apartment: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    cta: string;
    whatsInside: string;
    amenities: string[];
  };
  explore: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; description: string }>;
  };
  recommendations: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    items: Array<{ title: string; category: string; description: string }>;
  };
  map: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
  weather: {
    eyebrow: string;
    title: string;
    description: string;
    bestToday: string;
    viewCamera: string;
    statCondition: string;
    statHumidity: string;
    statWind: string;
    currentBody: string;
  };
  guide: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: Array<{ quote: string; author: string }>;
  };
  footer: {
    tagline: string;
    columns: Array<{ title: string; links: string[] }>;
    copyright: string;
    privacy: string;
    terms: string;
  };
  restaurantsPage: {
    backLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    mapsButton: string;
  };
}

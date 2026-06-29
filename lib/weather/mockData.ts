// Mock data for the "Weather Around the Island" section.
//
// This file is the canonical list of locations — name, image, coordinates,
// webcam links, and the curated "best today" copy. The current `condition`,
// `temperatureC`, and `description` are kept here only as a *fallback* for
// when the Open-Meteo provider is unreachable (offline build, network error).
//
// When the page renders normally, those three fields are overwritten with
// live values by `./openMeteo.ts`. See `./provider.ts`.

import type { WeatherLocation } from "./types";

const img = (seed: string, w = 1400, h = 1600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// All webcam links currently point to the SpotAzores São Miguel index page.
// When SpotAzores publishes deep links per location, swap them in here.
const SPOTAZORES_SAO_MIGUEL =
  "https://spotazores.com/en/webcams/sao-miguel/";

export const islandLocations: WeatherLocation[] = [
  {
    id: "sete-cidades",
    name: "Sete Cidades",
    hint: "The twin lakes, in the old volcano caldera.",
    image: img("dospais-sete-cidades-cam"),
    lat: 37.8625,
    lon: -25.7894,
    condition: "sunny",
    temperatureC: 22,
    description: "Sunny, with a light breeze from the west.",
    activity: "Perfect for hiking and viewpoints.",
    webcamUrl: SPOTAZORES_SAO_MIGUEL,
  },
  {
    id: "lagoa-do-fogo",
    name: "Lagoa do Fogo",
    hint: "The blue crater lake, hidden in the clouds.",
    image: img("dospais-fogo-cam"),
    lat: 37.7625,
    lon: -25.4811,
    condition: "mist",
    temperatureC: 18,
    description: "Mist drifting through the caldera.",
    activity: "Best later in the day, when the clouds lift.",
    webcamUrl: SPOTAZORES_SAO_MIGUEL,
  },
  {
    id: "furnas",
    name: "Furnas",
    hint: "Hot springs, steaming earth, and tea gardens.",
    image: img("dospais-furnas-cam"),
    lat: 37.7727,
    lon: -25.3197,
    condition: "partly-cloudy",
    temperatureC: 21,
    description: "Warm and still, with passing clouds.",
    activity: "A slow lunch by the lake — cozido in the ground.",
    webcamUrl: SPOTAZORES_SAO_MIGUEL,
  },
  {
    id: "mosteiros",
    name: "Mosteiros",
    hint: "Black sand and four basalt islets at sunset.",
    image: img("dospais-mosteiros-cam"),
    lat: 37.8939,
    lon: -25.8208,
    condition: "sunny",
    temperatureC: 23,
    description: "Clear skies and warm Atlantic light.",
    activity: "Stay for sunset — bring a sweater for after.",
    webcamUrl: SPOTAZORES_SAO_MIGUEL,
  },
  {
    id: "santa-barbara",
    name: "Santa Bárbara",
    hint: "The north coast surf break, on the road to Ribeira Grande.",
    image: img("dospais-santa-barbara-cam"),
    lat: 37.8225,
    lon: -25.5167,
    condition: "cloudy",
    temperatureC: 20,
    description: "Soft cloud cover, clean waves rolling in.",
    activity: "Good morning for surf, easy beach walks after.",
    webcamUrl: SPOTAZORES_SAO_MIGUEL,
  },
  {
    id: "ponta-delgada",
    name: "Ponta Delgada",
    hint: "Our small harbour, two streets from Dos Pais.",
    image: img("dospais-ponta-delgada-cam"),
    lat: 37.7394,
    lon: -25.6681,
    condition: "partly-cloudy",
    temperatureC: 24,
    description: "Mostly sunny, gentle breeze along the marina.",
    activity: "Coffee at the marina, then a slow walk through the centre.",
    webcamUrl: SPOTAZORES_SAO_MIGUEL,
  },
];

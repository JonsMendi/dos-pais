// Data provider for the "Weather Around the Island" feature.
//
// Live data comes from Open-Meteo (free, key-less). If the request fails for
// any reason — network, timeout, parsing — we silently fall back to the
// curated values in `./mockData.ts` so the page never breaks.
//
// To switch providers (e.g. to IPMA), only this file changes.

import { islandLocations } from "./mockData";
import { fetchOpenMeteo } from "./openMeteo";
import type { WeatherLocation } from "./types";

export async function getIslandWeather(): Promise<WeatherLocation[]> {
  try {
    return await fetchOpenMeteo(islandLocations);
  } catch (err) {
    // We deliberately don't surface this to the UI — the cards will simply
    // show the curated fallback. Log so it's visible during development.
    console.warn(
      "[dos-pais] Open-Meteo unreachable, using fallback weather:",
      err
    );
    return islandLocations;
  }
}

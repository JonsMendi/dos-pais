// Open-Meteo data source for the "Weather Around the Island" feature.
//
// Open-Meteo is a free, key-less weather API:
//   https://open-meteo.com/
//
// We call it once per render with all six locations bundled into a single
// request (comma-separated latitudes / longitudes). The Next.js fetch cache
// holds the response for 10 minutes so we are gentle on their servers and
// the page stays fast.

import type { WeatherCondition, WeatherLocation } from "./types";

const API_URL = "https://api.open-meteo.com/v1/forecast";

// 10 minutes — fresh enough for "where should I go today?" without hammering.
const REVALIDATE_SECONDS = 600;

// Hard timeout so a slow upstream cannot block the page render.
const REQUEST_TIMEOUT_MS = 5000;

type CurrentWeather = {
  time: string;
  temperature_2m: number;
  weather_code: number;
};

type ForecastResponse = {
  latitude: number;
  longitude: number;
  current: CurrentWeather;
};

// WMO weather interpretation codes — see Open-Meteo docs.
function codeToCondition(code: number): WeatherCondition {
  if (code <= 1) return "sunny"; // 0 clear, 1 mainly clear
  if (code === 2) return "partly-cloudy";
  if (code === 3) return "cloudy";
  if (code === 45 || code === 48) return "mist";
  if (code >= 51 && code <= 67) return "rain"; // drizzle + rain (incl. freezing)
  if (code >= 80 && code <= 82) return "rain"; // rain showers
  if (code >= 95 && code <= 99) return "storm";
  // Snow is rare on São Miguel — fall back to cloudy so the icon makes sense.
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "cloudy";
  return "partly-cloudy";
}

function codeToDescription(code: number): string {
  switch (code) {
    case 0:
      return "Clear and sunny.";
    case 1:
      return "Mostly clear.";
    case 2:
      return "Partly cloudy.";
    case 3:
      return "Overcast skies.";
    case 45:
      return "Foggy across the hills.";
    case 48:
      return "Freezing fog.";
    case 51:
      return "Light drizzle.";
    case 53:
      return "Drizzle.";
    case 55:
      return "Heavy drizzle.";
    case 56:
    case 57:
      return "Freezing drizzle.";
    case 61:
      return "Light rain.";
    case 63:
      return "Steady rain.";
    case 65:
      return "Heavy rain.";
    case 66:
    case 67:
      return "Freezing rain.";
    case 71:
    case 73:
    case 75:
      return "Light snowfall.";
    case 77:
      return "Snow grains.";
    case 80:
      return "Passing showers.";
    case 81:
      return "Rain showers.";
    case 82:
      return "Heavy showers.";
    case 85:
    case 86:
      return "Snow showers.";
    case 95:
      return "Thunderstorms.";
    case 96:
    case 99:
      return "Thunderstorms with hail.";
    default:
      return "Mild and changeable.";
  }
}

/**
 * Fetch current conditions for every location in one request.
 * Returns a new array where `condition`, `temperatureC` and `description`
 * come from Open-Meteo; everything else (name, image, activity, webcam, …)
 * is preserved from the input profile.
 */
export async function fetchOpenMeteo(
  profiles: WeatherLocation[]
): Promise<WeatherLocation[]> {
  if (profiles.length === 0) return [];

  const latitudes = profiles.map((p) => p.lat).join(",");
  const longitudes = profiles.map((p) => p.lon).join(",");
  const url =
    `${API_URL}?latitude=${latitudes}&longitude=${longitudes}` +
    `&current=temperature_2m,weather_code` +
    `&timezone=Atlantic%2FAzores`;

  const res = await fetch(url, {
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Open-Meteo responded ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as ForecastResponse | ForecastResponse[];
  // When multiple coordinates are requested, the API returns an array.
  // When a single coordinate is requested, it returns one object. Normalise.
  const items: ForecastResponse[] = Array.isArray(json) ? json : [json];

  if (items.length !== profiles.length) {
    throw new Error(
      `Open-Meteo returned ${items.length} results, expected ${profiles.length}`
    );
  }

  return profiles.map((profile, i) => {
    const current = items[i]?.current;
    if (!current) return profile;
    return {
      ...profile,
      temperatureC: Math.round(current.temperature_2m),
      condition: codeToCondition(current.weather_code),
      description: codeToDescription(current.weather_code),
    };
  });
}

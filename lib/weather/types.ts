// Shared types for the "Weather Around the Island" feature.
// These are intentionally minimal so the same shape can be returned by the
// current mock provider and, later, by an Open-Meteo or IPMA provider.

export type WeatherCondition =
  | "sunny"
  | "partly-cloudy"
  | "cloudy"
  | "mist"
  | "rain"
  | "storm";

export type WeatherLocation = {
  /** Stable identifier (used as React key and, later, as a provider lookup). */
  id: string;
  /** Display name (e.g. "Sete Cidades"). */
  name: string;
  /** A short, friendly hint about the area — one line. */
  hint: string;
  /** Hero image for the card. */
  image: string;
  /** Latitude — used by the weather provider, not displayed. */
  lat: number;
  /** Longitude — used by the weather provider, not displayed. */
  lon: number;
  /** Normalised condition — drives the icon and accent. */
  condition: WeatherCondition;
  /** Temperature in °C, rounded to integer for display. */
  temperatureC: number;
  /** Human-friendly description ("Sunny with light breeze"). */
  description: string;
  /** "Best today" — local-style suggestion ("Perfect for hiking"). */
  activity: string;
  /**
   * SpotAzores live-camera URL for this location. We do not embed or scrape
   * SpotAzores — clicking simply opens their page in a new tab.
   */
  webcamUrl: string;
};

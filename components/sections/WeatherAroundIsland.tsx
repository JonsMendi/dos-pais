import * as React from "react";
import { getIslandWeather } from "@/lib/weather/provider";
import WeatherAroundIslandClient from "./WeatherAroundIslandClient";

export default async function WeatherAroundIsland() {
  const locations = await getIslandWeather();
  return <WeatherAroundIslandClient locations={locations} />;
}


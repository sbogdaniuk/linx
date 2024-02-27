import { WeatherCurrent, WeatherLocation } from "./typings";

export interface CurrentWeatherData {
  location: WeatherLocation;
  current: WeatherCurrent;
}

export async function getCurrentWeather(
  lat: number = 50.45466,
  lon: number = 30.5238,
  config: { signal: AbortSignal | undefined },
) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${lat},${lon}`,
    config,
  );
  return (await response.json()) as CurrentWeatherData;
}

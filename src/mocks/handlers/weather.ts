import { rest } from "msw";
import { CurrentWeatherData } from "../../api";

export const GET_WEATHER_API_COM = rest.get(
  "https://api.weatherapi.com/v1/current.json",
  (req, res, ctx) => {
    const body: CurrentWeatherData = {
      location: {
        name: "Kyiv",
        region: "Kyyivs'ka Oblast'",
        country: "Ukraine",
        lat: 50.45,
        lon: 30.52,
        tz_id: "Europe/Kiev",
        localtime_epoch: 1709126837,
        localtime: "2024-02-28 15:27",
      },
      current: {
        last_updated_epoch: 1709126100,
        last_updated: "2024-02-28 15:15",
        temp_c: 7.4,
        temp_f: 45.3,
        is_day: 1,
        condition: {
          text: "Partly Cloudy ",
          icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
          code: 1003,
        },
        wind_mph: 11,
        wind_kph: 17.6,
        wind_degree: 161,
        wind_dir: "SSE",
        pressure_mb: 1025,
        pressure_in: 30.27,
        precip_mm: 0,
        precip_in: 0,
        humidity: 47,
        cloud: 50,
        feelslike_c: 4.4,
        feelslike_f: 39.8,
        vis_km: 10,
        vis_miles: 6,
        uv: 3,
        gust_mph: 14.8,
        gust_kph: 23.8,
      },
    };

    return res(
      ctx.status(200),
      ctx.json(body),
    );
  },
);

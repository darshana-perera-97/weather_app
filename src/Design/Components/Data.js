import React from "react";

export default function Data() {
  const [data1, setData1] = React.useState({
    location: {
      name: "Colombo",
      region: "Western",
      country: "Sri Lanka",
      lat: 6.93,
      lon: 79.85,
      tz_id: "Asia/Colombo",
      localtime_epoch: 1662398670,
      localtime: "2022-09-05 22:54",
    },
    current: {
      last_updated_epoch: 1662398100,
      last_updated: "2022-09-05 22:45",
      temp_c: 26.0,
      temp_f: 78.8,
      is_day: 0,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        code: 1003,
      },
      wind_mph: 6.9,
      wind_kph: 11.2,
      wind_degree: 240,
      wind_dir: "WSW",
      pressure_mb: 1011.0,
      pressure_in: 29.85,
      precip_mm: 1.8,
      precip_in: 0.07,
      humidity: 89,
      cloud: 75,
      feelslike_c: 29.4,
      feelslike_f: 84.9,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 1.0,
      gust_mph: 21.7,
      gust_kph: 34.9,
    },
    forecast: {
      forecastday: [
        {
          date: "2022-09-05",
          date_epoch: 1662336000,
          day: {
            maxtemp_c: 26.9,
            maxtemp_f: 80.4,
            mintemp_c: 24.1,
            mintemp_f: 75.4,
            avgtemp_c: 25.5,
            avgtemp_f: 77.8,
            maxwind_mph: 15.4,
            maxwind_kph: 24.8,
            totalprecip_mm: 69.4,
            totalprecip_in: 2.73,
            avgvis_km: 8.5,
            avgvis_miles: 5.0,
            avghumidity: 88.0,
            daily_will_it_rain: 1,
            daily_chance_of_rain: 99,
            daily_will_it_snow: 0,
            daily_chance_of_snow: 0,
            condition: {
              text: "Heavy rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/308.png",
              code: 1195,
            },
            uv: 6.0,
          },
          astro: {
            sunrise: "06:03 AM",
            sunset: "06:16 PM",
            moonrise: "01:44 PM",
            moonset: "12:42 AM",
            moon_phase: "First Quarter",
            moon_illumination: "65",
          },
          hour: [
            {
              time_epoch: 1662316200,
              time: "2022-09-05 00:00",
              temp_c: 24.7,
              temp_f: 76.5,
              is_day: 0,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
                code: 1240,
              },
              wind_mph: 6.9,
              wind_kph: 11.2,
              wind_degree: 175,
              wind_dir: "S",
              pressure_mb: 1009.0,
              pressure_in: 29.79,
              precip_mm: 0.2,
              precip_in: 0.01,
              humidity: 91,
              cloud: 53,
              feelslike_c: 27.3,
              feelslike_f: 81.1,
              windchill_c: 24.7,
              windchill_f: 76.5,
              heatindex_c: 27.3,
              heatindex_f: 81.1,
              dewpoint_c: 23.1,
              dewpoint_f: 73.6,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 11.4,
              gust_kph: 18.4,
              uv: 1.0,
            },
            {
              time_epoch: 1662319800,
              time: "2022-09-05 01:00",
              temp_c: 24.6,
              temp_f: 76.3,
              is_day: 0,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
                code: 1240,
              },
              wind_mph: 6.9,
              wind_kph: 11.2,
              wind_degree: 179,
              wind_dir: "S",
              pressure_mb: 1008.0,
              pressure_in: 29.76,
              precip_mm: 0.3,
              precip_in: 0.01,
              humidity: 91,
              cloud: 53,
              feelslike_c: 27.2,
              feelslike_f: 81.0,
              windchill_c: 24.6,
              windchill_f: 76.3,
              heatindex_c: 27.2,
              heatindex_f: 81.0,
              dewpoint_c: 23.1,
              dewpoint_f: 73.6,
              will_it_rain: 0,
              chance_of_rain: 67,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 11.2,
              gust_kph: 18.0,
              uv: 1.0,
            },
            {
              time_epoch: 1662323400,
              time: "2022-09-05 02:00",
              temp_c: 24.3,
              temp_f: 75.7,
              is_day: 0,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
                code: 1240,
              },
              wind_mph: 6.9,
              wind_kph: 11.2,
              wind_degree: 178,
              wind_dir: "S",
              pressure_mb: 1008.0,
              pressure_in: 29.77,
              precip_mm: 1.4,
              precip_in: 0.06,
              humidity: 91,
              cloud: 92,
              feelslike_c: 26.8,
              feelslike_f: 80.2,
              windchill_c: 24.3,
              windchill_f: 75.7,
              heatindex_c: 26.8,
              heatindex_f: 80.2,
              dewpoint_c: 22.8,
              dewpoint_f: 73.0,
              will_it_rain: 1,
              chance_of_rain: 99,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 11.2,
              gust_kph: 18.0,
              uv: 1.0,
            },
            {
              time_epoch: 1662327000,
              time: "2022-09-05 03:00",
              temp_c: 24.2,
              temp_f: 75.6,
              is_day: 0,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
                code: 1240,
              },
              wind_mph: 6.3,
              wind_kph: 10.1,
              wind_degree: 185,
              wind_dir: "S",
              pressure_mb: 1008.0,
              pressure_in: 29.77,
              precip_mm: 0.6,
              precip_in: 0.02,
              humidity: 91,
              cloud: 88,
              feelslike_c: 26.6,
              feelslike_f: 79.9,
              windchill_c: 24.2,
              windchill_f: 75.6,
              heatindex_c: 26.6,
              heatindex_f: 79.9,
              dewpoint_c: 22.6,
              dewpoint_f: 72.7,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 10.1,
              gust_kph: 16.2,
              uv: 1.0,
            },
            {
              time_epoch: 1662330600,
              time: "2022-09-05 04:00",
              temp_c: 24.2,
              temp_f: 75.6,
              is_day: 0,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
                code: 1240,
              },
              wind_mph: 5.6,
              wind_kph: 9.0,
              wind_degree: 181,
              wind_dir: "S",
              pressure_mb: 1008.0,
              pressure_in: 29.78,
              precip_mm: 0.6,
              precip_in: 0.02,
              humidity: 91,
              cloud: 84,
              feelslike_c: 26.6,
              feelslike_f: 79.9,
              windchill_c: 24.2,
              windchill_f: 75.6,
              heatindex_c: 26.6,
              heatindex_f: 79.9,
              dewpoint_c: 22.6,
              dewpoint_f: 72.7,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 9.2,
              gust_kph: 14.8,
              uv: 1.0,
            },
            {
              time_epoch: 1662334200,
              time: "2022-09-05 05:00",
              temp_c: 24.1,
              temp_f: 75.4,
              is_day: 0,
              condition: {
                text: "Moderate or heavy rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/356.png",
                code: 1243,
              },
              wind_mph: 4.7,
              wind_kph: 7.6,
              wind_degree: 177,
              wind_dir: "S",
              pressure_mb: 1009.0,
              pressure_in: 29.79,
              precip_mm: 3.8,
              precip_in: 0.15,
              humidity: 91,
              cloud: 69,
              feelslike_c: 26.5,
              feelslike_f: 79.7,
              windchill_c: 24.1,
              windchill_f: 75.4,
              heatindex_c: 26.5,
              heatindex_f: 79.7,
              dewpoint_c: 22.5,
              dewpoint_f: 72.5,
              will_it_rain: 1,
              chance_of_rain: 85,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 7.0,
              vis_miles: 4.0,
              gust_mph: 8.1,
              gust_kph: 13.0,
              uv: 1.0,
            },
            {
              time_epoch: 1662337800,
              time: "2022-09-05 06:00",
              temp_c: 24.3,
              temp_f: 75.7,
              is_day: 1,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
                code: 1240,
              },
              wind_mph: 3.1,
              wind_kph: 5.0,
              wind_degree: 185,
              wind_dir: "S",
              pressure_mb: 1009.0,
              pressure_in: 29.81,
              precip_mm: 0.5,
              precip_in: 0.02,
              humidity: 90,
              cloud: 83,
              feelslike_c: 26.7,
              feelslike_f: 80.1,
              windchill_c: 24.3,
              windchill_f: 75.7,
              heatindex_c: 26.7,
              heatindex_f: 80.1,
              dewpoint_c: 22.6,
              dewpoint_f: 72.7,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 4.9,
              gust_kph: 7.9,
              uv: 5.0,
            },
            {
              time_epoch: 1662341400,
              time: "2022-09-05 07:00",
              temp_c: 24.9,
              temp_f: 76.8,
              is_day: 1,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
                code: 1240,
              },
              wind_mph: 3.8,
              wind_kph: 6.1,
              wind_degree: 206,
              wind_dir: "SSW",
              pressure_mb: 1010.0,
              pressure_in: 29.81,
              precip_mm: 0.6,
              precip_in: 0.02,
              humidity: 88,
              cloud: 83,
              feelslike_c: 27.5,
              feelslike_f: 81.5,
              windchill_c: 24.9,
              windchill_f: 76.8,
              heatindex_c: 27.5,
              heatindex_f: 81.5,
              dewpoint_c: 22.8,
              dewpoint_f: 73.0,
              will_it_rain: 0,
              chance_of_rain: 60,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 5.6,
              gust_kph: 9.0,
              uv: 5.0,
            },
            {
              time_epoch: 1662345000,
              time: "2022-09-05 08:00",
              temp_c: 26.3,
              temp_f: 79.3,
              is_day: 1,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
                code: 1240,
              },
              wind_mph: 5.8,
              wind_kph: 9.4,
              wind_degree: 211,
              wind_dir: "SSW",
              pressure_mb: 1010.0,
              pressure_in: 29.83,
              precip_mm: 1.6,
              precip_in: 0.06,
              humidity: 83,
              cloud: 100,
              feelslike_c: 29.4,
              feelslike_f: 84.9,
              windchill_c: 26.3,
              windchill_f: 79.3,
              heatindex_c: 29.4,
              heatindex_f: 84.9,
              dewpoint_c: 23.3,
              dewpoint_f: 73.9,
              will_it_rain: 1,
              chance_of_rain: 99,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 8.3,
              gust_kph: 13.3,
              uv: 6.0,
            },
            {
              time_epoch: 1662348600,
              time: "2022-09-05 09:00",
              temp_c: 26.7,
              temp_f: 80.1,
              is_day: 1,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
                code: 1240,
              },
              wind_mph: 8.7,
              wind_kph: 14.0,
              wind_degree: 229,
              wind_dir: "SW",
              pressure_mb: 1010.0,
              pressure_in: 29.83,
              precip_mm: 0.7,
              precip_in: 0.03,
              humidity: 83,
              cloud: 99,
              feelslike_c: 30.1,
              feelslike_f: 86.2,
              windchill_c: 26.7,
              windchill_f: 80.1,
              heatindex_c: 30.1,
              heatindex_f: 86.2,
              dewpoint_c: 23.6,
              dewpoint_f: 74.5,
              will_it_rain: 1,
              chance_of_rain: 99,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 14.3,
              gust_kph: 23.0,
              uv: 6.0,
            },
            {
              time_epoch: 1662352200,
              time: "2022-09-05 10:00",
              temp_c: 26.6,
              temp_f: 79.9,
              is_day: 1,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
                code: 1240,
              },
              wind_mph: 11.0,
              wind_kph: 17.6,
              wind_degree: 239,
              wind_dir: "WSW",
              pressure_mb: 1010.0,
              pressure_in: 29.83,
              precip_mm: 1.1,
              precip_in: 0.04,
              humidity: 84,
              cloud: 100,
              feelslike_c: 30.0,
              feelslike_f: 86.0,
              windchill_c: 26.6,
              windchill_f: 79.9,
              heatindex_c: 30.0,
              heatindex_f: 86.0,
              dewpoint_c: 23.7,
              dewpoint_f: 74.7,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 20.6,
              gust_kph: 33.1,
              uv: 6.0,
            },
            {
              time_epoch: 1662355800,
              time: "2022-09-05 11:00",
              temp_c: 26.7,
              temp_f: 80.1,
              is_day: 1,
              condition: {
                text: "Torrential rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/359.png",
                code: 1246,
              },
              wind_mph: 12.3,
              wind_kph: 19.8,
              wind_degree: 244,
              wind_dir: "WSW",
              pressure_mb: 1010.0,
              pressure_in: 29.82,
              precip_mm: 7.8,
              precip_in: 0.31,
              humidity: 85,
              cloud: 100,
              feelslike_c: 30.3,
              feelslike_f: 86.5,
              windchill_c: 26.7,
              windchill_f: 80.1,
              heatindex_c: 30.3,
              heatindex_f: 86.5,
              dewpoint_c: 24.0,
              dewpoint_f: 75.2,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 3.0,
              vis_miles: 1.0,
              gust_mph: 25.3,
              gust_kph: 40.7,
              uv: 6.0,
            },
            {
              time_epoch: 1662359400,
              time: "2022-09-05 12:00",
              temp_c: 26.9,
              temp_f: 80.4,
              is_day: 1,
              condition: {
                text: "Moderate or heavy rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/356.png",
                code: 1243,
              },
              wind_mph: 14.1,
              wind_kph: 22.7,
              wind_degree: 244,
              wind_dir: "WSW",
              pressure_mb: 1009.0,
              pressure_in: 29.78,
              precip_mm: 2.8,
              precip_in: 0.11,
              humidity: 87,
              cloud: 100,
              feelslike_c: 30.9,
              feelslike_f: 87.6,
              windchill_c: 26.9,
              windchill_f: 80.4,
              heatindex_c: 30.9,
              heatindex_f: 87.6,
              dewpoint_c: 24.5,
              dewpoint_f: 76.1,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 7.0,
              vis_miles: 4.0,
              gust_mph: 22.6,
              gust_kph: 36.4,
              uv: 6.0,
            },
            {
              time_epoch: 1662363000,
              time: "2022-09-05 13:00",
              temp_c: 26.2,
              temp_f: 79.2,
              is_day: 1,
              condition: {
                text: "Moderate or heavy rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/356.png",
                code: 1243,
              },
              wind_mph: 14.8,
              wind_kph: 23.8,
              wind_degree: 239,
              wind_dir: "WSW",
              pressure_mb: 1007.0,
              pressure_in: 29.75,
              precip_mm: 2.8,
              precip_in: 0.11,
              humidity: 89,
              cloud: 98,
              feelslike_c: 29.8,
              feelslike_f: 85.6,
              windchill_c: 26.2,
              windchill_f: 79.2,
              heatindex_c: 29.8,
              heatindex_f: 85.6,
              dewpoint_c: 24.2,
              dewpoint_f: 75.6,
              will_it_rain: 1,
              chance_of_rain: 97,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 7.0,
              vis_miles: 4.0,
              gust_mph: 28.0,
              gust_kph: 45.0,
              uv: 6.0,
            },
            {
              time_epoch: 1662366600,
              time: "2022-09-05 14:00",
              temp_c: 26.2,
              temp_f: 79.2,
              is_day: 1,
              condition: {
                text: "Moderate or heavy rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/356.png",
                code: 1243,
              },
              wind_mph: 15.0,
              wind_kph: 24.1,
              wind_degree: 237,
              wind_dir: "WSW",
              pressure_mb: 1007.0,
              pressure_in: 29.73,
              precip_mm: 6.9,
              precip_in: 0.27,
              humidity: 88,
              cloud: 80,
              feelslike_c: 29.7,
              feelslike_f: 85.5,
              windchill_c: 26.2,
              windchill_f: 79.2,
              heatindex_c: 29.7,
              heatindex_f: 85.5,
              dewpoint_c: 24.1,
              dewpoint_f: 75.4,
              will_it_rain: 1,
              chance_of_rain: 99,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 7.0,
              vis_miles: 4.0,
              gust_mph: 30.0,
              gust_kph: 48.2,
              uv: 6.0,
            },
            {
              time_epoch: 1662370200,
              time: "2022-09-05 15:00",
              temp_c: 25.9,
              temp_f: 78.6,
              is_day: 1,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
                code: 1240,
              },
              wind_mph: 15.0,
              wind_kph: 24.1,
              wind_degree: 236,
              wind_dir: "WSW",
              pressure_mb: 1007.0,
              pressure_in: 29.72,
              precip_mm: 2.1,
              precip_in: 0.08,
              humidity: 89,
              cloud: 87,
              feelslike_c: 29.2,
              feelslike_f: 84.6,
              windchill_c: 25.9,
              windchill_f: 78.6,
              heatindex_c: 29.2,
              heatindex_f: 84.6,
              dewpoint_c: 23.9,
              dewpoint_f: 75.0,
              will_it_rain: 1,
              chance_of_rain: 99,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 31.1,
              gust_kph: 50.0,
              uv: 6.0,
            },
            {
              time_epoch: 1662373800,
              time: "2022-09-05 16:00",
              temp_c: 25.9,
              temp_f: 78.6,
              is_day: 1,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
                code: 1240,
              },
              wind_mph: 15.4,
              wind_kph: 24.8,
              wind_degree: 239,
              wind_dir: "WSW",
              pressure_mb: 1007.0,
              pressure_in: 29.73,
              precip_mm: 2.0,
              precip_in: 0.08,
              humidity: 89,
              cloud: 93,
              feelslike_c: 29.2,
              feelslike_f: 84.6,
              windchill_c: 25.9,
              windchill_f: 78.6,
              heatindex_c: 29.2,
              heatindex_f: 84.6,
              dewpoint_c: 23.9,
              dewpoint_f: 75.0,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 32.7,
              gust_kph: 52.6,
              uv: 6.0,
            },
            {
              time_epoch: 1662377400,
              time: "2022-09-05 17:00",
              temp_c: 25.9,
              temp_f: 78.6,
              is_day: 1,
              condition: {
                text: "Torrential rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/day/359.png",
                code: 1246,
              },
              wind_mph: 14.5,
              wind_kph: 23.4,
              wind_degree: 239,
              wind_dir: "WSW",
              pressure_mb: 1008.0,
              pressure_in: 29.75,
              precip_mm: 11.4,
              precip_in: 0.45,
              humidity: 88,
              cloud: 76,
              feelslike_c: 29.2,
              feelslike_f: 84.6,
              windchill_c: 25.9,
              windchill_f: 78.6,
              heatindex_c: 29.2,
              heatindex_f: 84.6,
              dewpoint_c: 23.8,
              dewpoint_f: 74.8,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 3.0,
              vis_miles: 1.0,
              gust_mph: 31.1,
              gust_kph: 50.0,
              uv: 6.0,
            },
            {
              time_epoch: 1662381000,
              time: "2022-09-05 18:00",
              temp_c: 25.7,
              temp_f: 78.3,
              is_day: 0,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
                code: 1240,
              },
              wind_mph: 13.2,
              wind_kph: 21.2,
              wind_degree: 235,
              wind_dir: "SW",
              pressure_mb: 1009.0,
              pressure_in: 29.78,
              precip_mm: 1.4,
              precip_in: 0.06,
              humidity: 88,
              cloud: 66,
              feelslike_c: 28.8,
              feelslike_f: 83.8,
              windchill_c: 25.7,
              windchill_f: 78.3,
              heatindex_c: 28.8,
              heatindex_f: 83.8,
              dewpoint_c: 23.6,
              dewpoint_f: 74.5,
              will_it_rain: 1,
              chance_of_rain: 98,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 20.1,
              gust_kph: 32.4,
              uv: 1.0,
            },
            {
              time_epoch: 1662384600,
              time: "2022-09-05 19:00",
              temp_c: 25.5,
              temp_f: 77.9,
              is_day: 0,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
                code: 1240,
              },
              wind_mph: 13.2,
              wind_kph: 21.2,
              wind_degree: 230,
              wind_dir: "SW",
              pressure_mb: 1009.0,
              pressure_in: 29.8,
              precip_mm: 1.5,
              precip_in: 0.06,
              humidity: 89,
              cloud: 72,
              feelslike_c: 28.5,
              feelslike_f: 83.3,
              windchill_c: 25.5,
              windchill_f: 77.9,
              heatindex_c: 28.5,
              heatindex_f: 83.3,
              dewpoint_c: 23.5,
              dewpoint_f: 74.3,
              will_it_rain: 1,
              chance_of_rain: 97,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 21.7,
              gust_kph: 34.9,
              uv: 1.0,
            },
            {
              time_epoch: 1662388200,
              time: "2022-09-05 20:00",
              temp_c: 25.5,
              temp_f: 77.9,
              is_day: 0,
              condition: {
                text: "Moderate or heavy rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/356.png",
                code: 1243,
              },
              wind_mph: 11.4,
              wind_kph: 18.4,
              wind_degree: 236,
              wind_dir: "WSW",
              pressure_mb: 1010.0,
              pressure_in: 29.83,
              precip_mm: 5.0,
              precip_in: 0.2,
              humidity: 89,
              cloud: 89,
              feelslike_c: 28.5,
              feelslike_f: 83.3,
              windchill_c: 25.5,
              windchill_f: 77.9,
              heatindex_c: 28.5,
              heatindex_f: 83.3,
              dewpoint_c: 23.6,
              dewpoint_f: 74.5,
              will_it_rain: 1,
              chance_of_rain: 97,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 7.0,
              vis_miles: 4.0,
              gust_mph: 21.3,
              gust_kph: 34.2,
              uv: 1.0,
            },
            {
              time_epoch: 1662391800,
              time: "2022-09-05 21:00",
              temp_c: 25.5,
              temp_f: 77.9,
              is_day: 0,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
                code: 1240,
              },
              wind_mph: 10.7,
              wind_kph: 17.3,
              wind_degree: 239,
              wind_dir: "WSW",
              pressure_mb: 1011.0,
              pressure_in: 29.85,
              precip_mm: 1.8,
              precip_in: 0.07,
              humidity: 89,
              cloud: 71,
              feelslike_c: 28.5,
              feelslike_f: 83.3,
              windchill_c: 25.5,
              windchill_f: 77.9,
              heatindex_c: 28.5,
              heatindex_f: 83.3,
              dewpoint_c: 23.6,
              dewpoint_f: 74.5,
              will_it_rain: 1,
              chance_of_rain: 97,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 21.7,
              gust_kph: 34.9,
              uv: 1.0,
            },
            {
              time_epoch: 1662395400,
              time: "2022-09-05 22:00",
              temp_c: 25.3,
              temp_f: 77.5,
              is_day: 0,
              condition: {
                text: "Light rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
                code: 1240,
              },
              wind_mph: 9.8,
              wind_kph: 15.8,
              wind_degree: 237,
              wind_dir: "WSW",
              pressure_mb: 1011.0,
              pressure_in: 29.85,
              precip_mm: 1.8,
              precip_in: 0.07,
              humidity: 90,
              cloud: 63,
              feelslike_c: 28.2,
              feelslike_f: 82.8,
              windchill_c: 25.3,
              windchill_f: 77.5,
              heatindex_c: 28.2,
              heatindex_f: 82.8,
              dewpoint_c: 23.5,
              dewpoint_f: 74.3,
              will_it_rain: 1,
              chance_of_rain: 96,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10.0,
              vis_miles: 6.0,
              gust_mph: 20.6,
              gust_kph: 33.1,
              uv: 1.0,
            },
            {
              time_epoch: 1662399000,
              time: "2022-09-05 23:00",
              temp_c: 25.1,
              temp_f: 77.2,
              is_day: 0,
              condition: {
                text: "Torrential rain shower",
                icon: "//cdn.weatherapi.com/weather/64x64/night/359.png",
                code: 1246,
              },
              wind_mph: 10.5,
              wind_kph: 16.9,
              wind_degree: 233,
              wind_dir: "SW",
              pressure_mb: 1011.0,
              pressure_in: 29.85,
              precip_mm: 10.7,
              precip_in: 0.42,
              humidity: 89,
              cloud: 65,
              feelslike_c: 27.9,
              feelslike_f: 82.2,
              windchill_c: 25.1,
              windchill_f: 77.2,
              heatindex_c: 27.9,
              heatindex_f: 82.2,
              dewpoint_c: 23.2,
              dewpoint_f: 73.8,
              will_it_rain: 1,
              chance_of_rain: 96,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 3.0,
              vis_miles: 1.0,
              gust_mph: 22.4,
              gust_kph: 36.0,
              uv: 1.0,
            },
          ],
        },
      ],
    },
  });
  fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=934a9870fae4417eb5b61203212411&q=colombo&days=1&aqi=no&alerts=no"
  )
    .then((response) => response.json())
    .then((data) => setData1(data));
  console.log(data1);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 50px",
        backgroundColor: "#0000004F",
        width: "100%",
        marginLeft: "190px",
        borderRadius: "20px",
      }}
    >
      <div style={{ paddingLeft: "20px" }}>
        <p
          style={{
            color: "white",
            fontSize: "25px",
            textShadow: "1px 1px 5px black",
            margin: "10px",
            marginBottom: "0px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Location :</span>
          <br />
          {data1.location.name}, {data1.location.country} <br /> ({" "}
          {data1.location.lat} , {data1.location.lon} )
        </p>
        <br />
        <br />
        <p
          style={{
            color: "white",
            fontSize: "25px",
            textShadow: "1px 1px 5px black",
            margin: "10px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Time :</span>
          <br />
          {data1.location.localtime}
        </p>
        <br />
        <br />
        <p
          style={{
            color: "white",
            fontSize: "25px",
            textShadow: "1px 1px 5px black",
            margin: "10px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Sun & Moon :</span>
          <br />
          Sun - sun_rise : {data1.forecast.forecastday[0].astro.sunrise} <br />
          sun_set : {data1.forecast.forecastday[0].astro.sunset} <br />
          Moon - moon_rise : {data1.forecast.forecastday[0].astro.moonrise}{" "}
          <br />
          moon_set : {data1.forecast.forecastday[0].astro.moonset}
        </p>
        <br />
        <br />
      </div>
      <p
        style={{
          color: "white",
          fontSize: "25px",
          textShadow: "1px 1px 5px black",
          margin: "10px",
          paddingRight: "80px",
        }}
      >
        <span style={{ fontWeight: "bold" }}> Weather Forecast :</span>
        <br />
        <br />
        <img src={data1.current.condition.icon} height={30} />
        {data1.current.condition.text}
        <br /> Clouds : {data1.current.cloud} % <br /> Wind Speed :{" "}
        {data1.current.wind_kph} kmh <br />
        Preasure : {data1.current.pressure_in} <br />
        Wind degrees : {data1.current.wind_degree} <br />
        Tempreture : {data1.current.temp_c} C <br />
      </p>
    </div>
  );
}

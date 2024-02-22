export let dataCurrent;
export let dataForecast;

export async function checkWeather() {
  const locationNY = {
    apiKey: "077dd367c6a0acb81c8216125b655788",
    lat: "40.7143",
    lon: "-74.006",
  };

  const forecastWeather = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&cnt=5&lat=${locationNY.lat}&lon=${locationNY.lon}`;

  const currentWeather = `http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${locationNY.lat}&lon=${locationNY.lon}`;

  const response = await fetch(currentWeather + `&appid=${locationNY.apiKey}`);
  const responseTwo = await fetch(
    forecastWeather + `&appid=${locationNY.apiKey}`
  );
  dataCurrent = await response.json();
  dataForecast = await responseTwo.json();
  console.log(dataCurrent);
  console.log(dataForecast);
}
checkWeather();

export const tempObject = {
  coord: {
    lon: -74.006,
    lat: 40.7143,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 38.26,
    feels_like: 30,
    temp_min: 35.76,
    temp_max: 40.3,
    pressure: 1031,
    humidity: 60,
  },
  visibility: 10000,
  wind: {
    speed: 13.8,
    deg: 80,
  },
  clouds: {
    all: 100,
  },
  dt: 1708536536,
  sys: {
    type: 1,
    id: 4610,
    country: "US",
    sunrise: 1708515764,
    sunset: 1708555019,
  },
  timezone: -18000,
  id: 5128581,
  name: "New York",
  cod: 200,
};

export function convertSunTime(time) {
  let sunriseUnix = time;
  let tempToJs = new Date(sunriseUnix * 1000);
  let conversion = tempToJs.toLocaleString().slice(-11, -6);
  return conversion;
}

export function convertUnixToHour(unix) {
  const date = new Date(unix * 1000);
  let hour = date.getHours();
  let finalizedFormat;
  if (hour > 12) {
    hour = hour % 12;
    finalizedFormat = `${hour} PM`;
    return finalizedFormat;
  } else {
    finalizedFormat = `${hour} AM`;
    return finalizedFormat;
  }
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function convertUnixToDate(unix) {
  const date = new Date(unix * 1000);
  let month = date.getMonth();
  month = monthNames[month].slice(0, 3);
  let day = date.getDate();
  let finalizedFormat = `${month} ${day}`;
  return finalizedFormat;
}

// TEMP OBJECT
export const tempObject2 = {
  cod: "200",
  message: 0,
  cnt: 5,
  list: [
    {
      dt: 1708549200,
      main: {
        temp: 39.51,
        feels_like: 34.07,
        temp_min: 38.5,
        temp_max: 39.51,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1027,
        humidity: 57,
        temp_kf: 0.56,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.85,
        deg: 151,
        gust: 8.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-21 21:00:00",
    },
    {
      dt: 1708560000,
      main: {
        temp: 38.55,
        feels_like: 33.24,
        temp_min: 36.64,
        temp_max: 38.55,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1027,
        humidity: 60,
        temp_kf: 1.06,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 7.25,
        deg: 132,
        gust: 11.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-22 00:00:00",
    },
    {
      dt: 1708570800,
      main: {
        temp: 36.99,
        feels_like: 34.16,
        temp_min: 35.73,
        temp_max: 36.99,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1026,
        humidity: 64,
        temp_kf: 0.7,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 3.69,
        deg: 147,
        gust: 5.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-22 03:00:00",
    },
    {
      dt: 1708581600,
      main: {
        temp: 34.95,
        feels_like: 31.69,
        temp_min: 34.95,
        temp_max: 34.95,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1024,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 49,
      },
      wind: {
        speed: 3.8,
        deg: 160,
        gust: 5.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-22 06:00:00",
    },
    {
      dt: 1708592400,
      main: {
        temp: 34.18,
        feels_like: 30.83,
        temp_min: 34.18,
        temp_max: 34.18,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1022,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 3.78,
        deg: 200,
        gust: 4.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-22 09:00:00",
    },
  ],
  city: {
    id: 5128581,
    name: "New York",
    coord: {
      lat: 40.7143,
      lon: -74.006,
    },
    country: "US",
    population: 8175133,
    timezone: -18000,
    sunrise: 1708515764,
    sunset: 1708555019,
  },
};

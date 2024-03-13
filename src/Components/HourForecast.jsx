import { Card, List, ListItem, Typography } from "@material-tailwind/react";

import { convertUnixToHour, convertUnixToDate } from "../DataLogic/FetchAPI";
import SideBarAd from "./SideBarAd";

import { useState, useEffect } from "react";

const hoursArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

export default function HourForecast() {
  const [error, setError] = useState();

  const [posts2, setPosts2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const testurl2 =
    "https://api.openweathermap.org/data/2.5/forecast?units=imperial&cnt=20&lat=40.7143&lon=-74.006&appid=077dd367c6a0acb81c8216125b655788";

  useEffect(() => {
    const fetchPosts2 = async () => {
      setIsLoading(true);

      try {
        const response2 = await fetch(`${testurl2}`);
        const posts2 = await response2.json();
        setPosts2([posts2]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts2();
  }, []);

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }

  return (
    <section
      id="forecast"
      className="p-5 w-full grid grid-cols-2 xl:grid-cols-3 gap-8"
    >
      <Card className="bg-transparent backdrop-blur-lg border-4 border-black shadow-[0_0_10px_white] w-full mx-auto col-span-2">
        <div>
          <Typography
            variant="h4"
            color="white"
            className="text-center pt-4 pb-6"
          >
            Every 3 Hour Forecasts
          </Typography>
        </div>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          posts2.map((post, index) =>
            hoursArray.map((cnt, dex) => (
              <List className="w-full" key={dex}>
                <ListItem
                  key={index}
                  className="p-2 flex hover:bg-black focus:bg-black focus:shadow-[inset_0_0_20px_white]"
                >
                  <div className="flex-1 text-center">
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-bold"
                    >
                      {convertUnixToHour(post.list[cnt].dt)}
                    </Typography>
                    <Typography
                      variant="small"
                      color="amber"
                      className="font-bold"
                    >
                      {convertUnixToDate(post.list[cnt].dt)}
                    </Typography>
                  </div>

                  <div className="flex-1 text-center">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-bold"
                    >
                      {`H / L`}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="amber"
                      className="font-bold"
                    >
                      {`${parseInt(post.list[cnt].main.temp_max)} / ${parseInt(
                        post.list[cnt].main.temp_min
                      )}`}
                    </Typography>
                  </div>

                  <div className="flex-1 text-center hidden md:block">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-bold"
                    >
                      {`Humidity`}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="amber"
                      className="font-bold"
                    >
                      {`${parseInt(post.list[cnt].main.humidity)} %`}
                    </Typography>
                  </div>

                  <div className="flex-1">
                    <img
                      src={`code/${post.list[cnt].weather[0].icon}.png`}
                      alt="Weather Icon"
                      className="mx-auto"
                    />
                  </div>

                  <div className="flex-1 text-center hidden">
                    <Typography
                      variant="h6"
                      color="white"
                      className="font-bold"
                    >
                      {`${post.list[cnt].weather[0].main}`}
                    </Typography>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-bold"
                    >
                      {`${post.list[cnt].weather[0].description}`}
                    </Typography>
                  </div>

                  <div className="flex-1 text-center">
                    <Typography
                      variant="h4"
                      color="white"
                      className="font-bold"
                    >
                      {`${parseInt(post.list[cnt].main.temp)} °F`}
                    </Typography>
                  </div>
                </ListItem>
              </List>
            ))
          )}
      </Card>
      <div className="col-span-1 hidden xl:block place-self-start">
        <SideBarAd />
      </div>
    </section>
  );
}

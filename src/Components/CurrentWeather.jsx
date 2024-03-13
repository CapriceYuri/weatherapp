import { Card, Typography, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { convertSunTime } from "../DataLogic/FetchAPI";
import OpenWeatherAd from "./OpenWeatherAd";
import TheWeatherChannel from "./WeatherChanne";

export default function CurrentWeather({ targetLocation }) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const initialURL = `https://api.openweathermap.org/geo/1.0/direct?q=${targetLocation}&limit=1&appid=077dd367c6a0acb81c8216125b655788`;

  // const testurl =
  //   "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=40.7143&lon=-74.006&appid=077dd367c6a0acb81c8216125b655788";

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const testingdata = await fetch(`${initialURL}`);
        const readingData = await testingdata.json();
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${readingData[0].lat}&lon=${readingData[0].lon}&appid=077dd367c6a0acb81c8216125b655788`
        );
        const posts = await response.json();
        setPosts([posts]);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [targetLocation]);

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }
  return (
    <div className="p-5 w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card
        shadow={false}
        className="w-full h-full bg-transparent backdrop-blur-md shadow-[inset_0_0_10px_white] mx-auto"
      >
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          posts.map((post, index) => {
            return (
              <CardBody className="w-full flex flex-col" key={index}>
                <div>
                  <div>
                    <Typography
                      variant="h4"
                      color="white"
                      className="font-normal"
                    >
                      {post.name}
                    </Typography>
                  </div>
                  <div className="flex justify-center items-center">
                    <Typography
                      color="white"
                      className="font-semibold text-[60px] my-8"
                    >
                      {`${post.main.temp} °F`}
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between py-1">
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >{`Feels Like`}</Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >
                      {post.main.feels_like}
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between py-1">
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >{`H / L`}</Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >
                      {`${parseInt(post.main.temp_max)} / ${parseInt(
                        post.main.temp_min
                      )} °F`}
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between py-1">
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >{`Wind`}</Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >
                      {`${parseInt(post.wind.speed)} mph`}
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between py-1">
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >{`Humidity`}</Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >
                      {`${parseInt(post.main.humidity)} %`}
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between py-1">
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >{`Pressure`}</Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >
                      {`${parseInt(post.main.humidity)} hPa`}
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between py-1">
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >{`Sunrise`}</Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >
                      {`${convertSunTime(post.sys.sunrise)} AM`}
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between py-1">
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >{`Sunset`}</Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >
                      {`${convertSunTime(post.sys.sunset)} PM`}
                    </Typography>
                  </div>
                </div>
              </CardBody>
            );
          })}
      </Card>
      <OpenWeatherAd />
      <TheWeatherChannel />
    </div>
  );
}

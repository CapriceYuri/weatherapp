import { Card, Typography, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { convertSunTime } from "../DataLogic/FetchAPI";
import OpenWeatherAd from "./OpenWeatherAd";

export default function CurrentWeather() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const testurl =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=40.7143&lon=-74.006&appid=077dd367c6a0acb81c8216125b655788";

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${testurl}`);
        const posts = await response.json();
        setPosts([posts]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }
  return (
    <div className="p-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        shadow={false}
        className="w-full h-full bg-transparent backdrop-blur-md shadow-[inset_0_0_10px_white] mx-auto"
      >
        {posts.map((post, index) => {
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
    </div>
  );
}

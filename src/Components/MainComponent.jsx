import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  List,
  ListItem,
} from "@material-tailwind/react";

import {
  convertSunTime,
  convertUnixToHour,
  convertUnixToDate,
} from "../DataLogic/FetchAPI";

import { useEffect, useState } from "react";

const hoursArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

export default function MainComponent() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);

  const testurl =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=40.7143&lon=-74.006&appid=077dd367c6a0acb81c8216125b655788";
  const testurl2 =
    "https://api.openweathermap.org/data/2.5/forecast?units=imperial&cnt=20&lat=40.7143&lon=-74.006&appid=077dd367c6a0acb81c8216125b655788";

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

    const intervalId = setInterval(fetchPosts, 10000);
    return () => clearInterval(intervalId);
  }, []);

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
    const intervalId2 = setInterval(fetchPosts2, 10000);
    return () => clearInterval(intervalId2);
  }, []);

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }

  return (
    <section id="main-content" className="h-lvh w-full relative">
      <div className="fixed h-lvh w-full bg-cover bg-no-repeat bg-[url('/weather.jpg')]" />

      <section
        id="api"
        className="pt-24 px-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="flex flex-col justify-center gap-4">
          <Card
            shadow={false}
            className="max-w-[500px] md:place-self-end w-full flex-1 bg-transparent backdrop-blur-md shadow-[inset_0_0_10px_white] mx-auto md:mx-0"
          >
            {isLoading && <div>Loading...</div>}
            {!isLoading &&
              posts.map((post) => {
                return (
                  <CardBody
                    className="w-full h-full flex flex-col justify-between"
                    key={post.id}
                  >
                    <div>
                      <Typography
                        variant="h4"
                        color="white"
                        className="font-normal"
                      >
                        {post.name}
                      </Typography>
                    </div>
                    <div className="h-full flex justify-center items-center">
                      <Typography
                        color="white"
                        className="font-semibold text-[60px]"
                      >
                        {post.main.temp}
                      </Typography>
                    </div>
                  </CardBody>
                );
              })}
          </Card>
          <Card
            shadow={false}
            className="max-w-[500px] md:place-self-end w-full flex-1 bg-transparent backdrop-blur-md shadow-[inset_0_0_10px_white] mx-auto md:mx-0"
          >
            {posts.map((post) => {
              return (
                <CardBody className="w-full">
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
        </div>
        <Card
          shadow={false}
          className="max-w-[500px] bg-transparent backdrop-blur-md mt-10 md:mt-0 border-orange-500 border-2 mx-auto md:mx-0"
        >
          <CardHeader
            color="blue-gray"
            floated={true}
            className="relative h-56 w-56 mx-auto"
          >
            <img
              src="openweather.png"
              alt="card-image"
              className="bg-center absolute h-full w-full border-4 border-orange-500 rounded-xl"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="orange" className="mb-2">
              OpenWeather API
            </Typography>
            <Typography color="white">
              The most reliable weather API that provides access to weather data
              worldwide, making it a top choice for developers and businesses
              seeking weather data. What sets OpenWeather apart is its
              commitment to offering a generous free tier, granting access to
              basic weather data at no cost.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="white">
              <a
                href="https://openweathermap.org/"
                alt="Open Weather website"
                target="_blank"
              >
                Learn More
              </a>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section id="forecast" className="p-10 w-full grid grid-cols-1">
        <Card className="bg-transparent backdrop-blur-lg shadow-[0_0_10px_white] max-w-[1200px] w-full mx-auto">
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
                        {`${parseInt(
                          post.list[cnt].main.temp_max
                        )} / ${parseInt(post.list[cnt].main.temp_min)}`}
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
      </section>
    </section>
  );
}

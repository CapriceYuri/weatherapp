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
  tempObject,
  tempObject2,
  convertSunTime,
  convertUnixToHour,
  convertUnixToDate,
} from "../DataLogic/FetchAPI";

const weatherInfoObject = [
  ["Feels Like", `${parseInt(tempObject.main.feels_like)} °F`],
  [
    "H / L",
    `${parseInt(tempObject.main.temp_max)} / ${parseInt(
      tempObject.main.temp_min
    )} °F`,
  ],
  ["Wind", `${parseInt(tempObject.wind.speed)} mph`],
  ["Humidity", `${parseInt(tempObject.main.humidity)} %`],
  ["Pressure", `${parseInt(tempObject.main.humidity)} hPa`],
  ["Sunrise", `${convertSunTime(tempObject.sys.sunrise)} AM`],
  ["Sunset", `${convertSunTime(tempObject.sys.sunset)} PM`],
];

const hoursArray = [0, 1, 2, 3, 4];

export default function MainComponent() {
  return (
    <section className="h-lvh w-full relative">
      <div className="fixed h-lvh w-full bg-cover bg-no-repeat bg-[url('weather.jpg')]" />

      <section className="pt-24 px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center gap-4">
          <Card
            shadow={false}
            className="max-w-[500px] md:place-self-end w-full flex-1 bg-transparent backdrop-blur-md shadow-[inset_0_0_10px_white] mx-auto md:mx-0"
          >
            <CardBody className="w-full h-full flex flex-col justify-between">
              <div>
                <Typography variant="h4" color="white" className="font-normal">
                  {tempObject.name}
                </Typography>
              </div>
              <div className="h-full flex justify-center items-center">
                <Typography color="white" className="font-semibold text-[60px]">
                  {`${tempObject.main.temp} °F`}
                </Typography>
              </div>
            </CardBody>
          </Card>

          <Card
            shadow={false}
            className="max-w-[500px] md:place-self-end w-full flex-1 bg-transparent backdrop-blur-md shadow-[inset_0_0_10px_white] mx-auto md:mx-0"
          >
            <CardBody className="w-full">
              {/* Testing */}
              {weatherInfoObject.map((arr) => (
                <div className="flex justify-between py-1">
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >
                      {arr[0]}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-normal"
                    >
                      {arr[1]}
                    </Typography>
                  </div>
                </div>
              ))}
              {/* Testing  */}
            </CardBody>
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

      <section className="p-10 w-full grid grid-cols-1">
        <Card className="bg-transparent backdrop-blur-md shadow-[0_0_10px_white]">
          <List className="w-full">
            <div>
              <Typography
                variant="h4"
                color="white"
                className="text-center pt-4 pb-6"
              >
                Every 3 Hour Forecasts
              </Typography>
            </div>
            {hoursArray.map((item, index) => (
              <ListItem
                key={index}
                className="p-2 flex hover:bg-black focus:bg-black focus:shadow-[inset_0_0_20px_white]"
              >
                <div className="flex-1 text-center">
                  <Typography variant="h5" color="white" className="font-bold">
                    {convertUnixToHour(tempObject2.list[index].dt)}
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-bold"
                  >
                    {convertUnixToDate(tempObject2.list[index].dt)}
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
                  <Typography variant="h6" color="amber" className="font-bold">
                    {`${parseInt(
                      tempObject2.list[index].main.temp_max
                    )} / ${parseInt(tempObject2.list[index].main.temp_min)}`}
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
                  <Typography variant="h6" color="amber" className="font-bold">
                    {`${parseInt(tempObject2.list[index].main.humidity)} %`}
                  </Typography>
                </div>

                <div className="flex-1">
                  <img
                    src={`code/${tempObject2.list[index].weather[0].icon}.png`}
                    alt="Weather Icon"
                    className="mx-auto"
                  />
                </div>

                <div className="flex-1 text-center hidden">
                  <Typography variant="h6" color="white" className="font-bold">
                    {`${tempObject2.list[index].weather[0].main}`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-bold"
                  >
                    {`${tempObject2.list[index].weather[0].description}`}
                  </Typography>
                </div>

                <div className="flex-1 text-center">
                  <Typography variant="h4" color="white" className="font-bold">
                    {`${parseInt(tempObject2.list[index].main.temp)} °F`}
                  </Typography>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </section>
    </section>
  );
}

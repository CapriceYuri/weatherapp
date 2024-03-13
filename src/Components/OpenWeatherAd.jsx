import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "@material-tailwind/react";

export default function OpenWeatherAd() {
  return (
    <Card
      shadow={false}
      className="w-full h-full bg-transparent place-self-start backdrop-blur-md border-orange-500 border-4 hidden lg:block"
    >
      <CardHeader
        color="blue-gray"
        floated={false}
        className="relative h-40 w-40 mx-auto"
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
        <Typography color="white" variant="small">
          The most reliable weather API that provides access to weather data
          worldwide, making it a top choice for developers and businesses
          seeking weather data. What sets OpenWeather apart is its commitment to
          offering a generous free tier, granting access to basic weather data
          at no cost.
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
  );
}

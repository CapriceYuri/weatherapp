import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "@material-tailwind/react";

export default function TheWeatherChannel() {
  return (
    <Card
      shadow={false}
      className="w-full h-full bg-transparent place-self-start backdrop-blur-md border-blue-500 border-4 hidden lg:block"
    >
      <CardHeader
        color="blue-gray"
        floated={false}
        className="relative h-40 w-40 mx-auto"
      >
        <img
          src="weatherchannel.png"
          alt="card-image"
          className="bg-center absolute h-full w-full border-4 border-blue-500 rounded-xl"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue" className="mb-2">
          The Weather Channel
        </Typography>
        <Typography color="white" variant="small">
          The Weather Channel is a television network and digital platform that
          provides up-to-date weather forecasts, news, and information. It
          offers coverage of current weather conditions, severe weather alerts,
          and expert analysis. The channel also features programming related to
          climate change, outdoor activities, and travel tips.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="white">
          <a
            href="https://weather.com/"
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

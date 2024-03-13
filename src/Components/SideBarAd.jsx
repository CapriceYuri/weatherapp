import {
  Typography,
  Card,
  CardBody,
  Button,
  CardFooter,
} from "@material-tailwind/react";

import { articles } from "../DataLogic/AdsArticle";

export default function SideBarAd() {
  return (
    <div>
      {articles.map((obj, index) => (
        <Card
          shadow={false}
          className="bg-transparent backdrop-blur-xl border-4 border-black mx-auto max-w-[500px] mb-8"
          key={index}
        >
          <img
            src={obj.img}
            alt="card-image"
            className="bg-center h-full w-full max-h-[200px] mx-auto rounded-t-lg"
          />
          <CardBody>
            <Typography variant="h5" color="orange" className="mb-2">
              {obj.title}
            </Typography>
            <Typography variant="small" color="white">
              {obj.summary}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="white">
              <a href={obj.link} alt={obj.placeholder}>
                Read Story
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

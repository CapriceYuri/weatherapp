import HourForecast from "./HourForecast";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import NavbarNavigation from "./Navbar";
import { useState } from "react";

export default function MainComponent() {
  const [targetLocation, setTargetLocation] = useState("New York");

  const handleLocationChange = (newLocation) => {
    setTargetLocation(newLocation);
  };

  return (
    <section id="main-content" className="h-lvh w-full relative">
      <div className="fixed h-lvh w-full bg-cover bg-no-repeat bg-[url('/weather.jpg')] bg-black -z-10" />
      <NavbarNavigation onLocationChange={handleLocationChange} />
      <section id="api">
        <CurrentWeather targetLocation={targetLocation} />
      </section>
      <HourForecast targetLocation={targetLocation} />
      <Footer />
    </section>
  );
}

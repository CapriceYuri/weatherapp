import HourForecast from "./HourForecast";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import NavbarNavigation from "./Navbar";

export default function MainComponent() {
  return (
    <section id="main-content" className="h-lvh w-full relative">
      <div className="fixed h-lvh w-full bg-cover bg-no-repeat bg-[url('/weather.jpg')] -z-10" />
      <NavbarNavigation />
      <section id="api">
        <CurrentWeather />
      </section>
      <HourForecast />
      <Footer />
    </section>
  );
}

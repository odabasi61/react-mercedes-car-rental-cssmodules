import Driver from "../components/driver/Driver";
import Find from "../components/find/Find";
import Hero from "../components/hero/Hero";
import Luxury from "../components/luxury/Luxury";
import DriveSuv from "../components/drivesuv/DriveSuv";
import Suv from "../components/suv/Suv";
import DriveSport from "../components/drivesport/DriveSport";
import Sport from "../components/sport/Sport";
import Quote from "../components/quote/Quote";

const Main = () => {
  return (
    <div>
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <DriveSuv />
      <Suv />
      <DriveSport />
      <Sport />
      <Quote />
    </div>
  );
};

export default Main;

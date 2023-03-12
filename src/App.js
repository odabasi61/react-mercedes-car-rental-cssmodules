import Driver from "./components/driver/Driver";
import Find from "./components/find/Find";
import Hero from "./components/hero/Hero";
import Luxury from "./components/luxury/Luxury";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import DriveSuv from "./components/drivesuv/DriveSuv";
import Suv from "./components/suv/Suv";
import DriveSport from "./components/drivesport/DriveSport";
import Sport from "./components/sport/Sport";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <DriveSuv />
      <Suv />
      <DriveSport />
      <Sport />
      <Footer />
    </div>
  );
}

export default App;

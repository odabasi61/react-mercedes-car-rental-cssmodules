import Driver from "./components/driver/Driver";
import Find from "./components/find/Find";
import Hero from "./components/hero/Hero";
import Luxury from "./components/luxury/Luxury";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;

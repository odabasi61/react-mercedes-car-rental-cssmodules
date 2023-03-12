import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Main from "../pages/Main";
import LearnMore from "../pages/learnmore/LearnMore";
import AmgGt from "../pages/amggt/AmgGt";
import SlsAmg from "../pages/slsamg/SlsAmg";
import ClaAmg from "../pages/claamg/ClaAmg";
import CclassCoupe from "../pages/ccoupe/CclassCoupe";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="learnmore" element={<LearnMore />} />
          <Route path="amggt63s" element={<AmgGt />} />
          <Route path="slsamg" element={<SlsAmg />} />
          <Route path="claamg" element={<ClaAmg />} />
          <Route path="cclasscoupe" element={<CclassCoupe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;

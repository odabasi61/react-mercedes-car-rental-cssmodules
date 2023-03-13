import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Main from "../pages/Main";
import LearnMore from "../pages/learnmore/LearnMore";
import AmgGt from "../pages/amggt/AmgGt";
import SlsAmg from "../pages/slsamg/SlsAmg";
import ClaAmg from "../pages/claamg/ClaAmg";
import CclassCoupe from "../pages/ccoupe/CclassCoupe";
import Gle from "../pages/gle/Gle";
import Eqs from "../pages/eqs/Eqs";
import Gls from "../pages/gls/Gls";
import Gclass from "../pages/gclass/Gclass";
import Vision from "../pages/vision/Vision";
import Hofele from "../pages/hofele/Hofele";
import Maybach from "../pages/maybach/Maybach";
import Sclass from "../pages/sclass/Sclass";

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
          <Route path="gle" element={<Gle />} />
          <Route path="eqs" element={<Eqs />} />
          <Route path="gls" element={<Gls />} />
          <Route path="gclass" element={<Gclass />} />
          <Route path="vision" element={<Vision />} />
          <Route path="maybachs650" element={<Hofele />} />
          <Route path="maybachs580" element={<Maybach />} />
          <Route path="sclass" element={<Sclass />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;

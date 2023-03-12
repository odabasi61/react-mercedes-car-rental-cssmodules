import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Main from "../pages/Main";
import LearnMore from "../pages/learnmore/LearnMore";
import AmgGt from "../pages/amggt/AmgGt";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="learnmore" element={<LearnMore />} />
          <Route path="amggt63s" element={<AmgGt />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;

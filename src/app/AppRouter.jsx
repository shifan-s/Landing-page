import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Services from "../pages/Services";
import Home from './../components/Home';
import Teams from "../pages/Teams";
import GetinTouch from "../pages/GetinTouch";
import FaqS from "../pages/FaqS";
import Navbar from "../pages/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <>
         <Navbar/>

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/getintouch" element={<GetinTouch />} />
        <Route path="/faqs" element={<FaqS />} />
       
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRouter;

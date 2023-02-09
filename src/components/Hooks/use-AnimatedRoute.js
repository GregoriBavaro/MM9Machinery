//Hooks
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Pages
import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Services from "../Pages/Services";
import AboutUs from "../Pages/AboutUs";
import GalleryChocolate from "../Pages/GalleryChocolate";
import GalleryBeer from "../Pages/GalleryBeer";
import Laminated from "../Pages/Laminated";
import Transport from "../Pages/Transport";
import Cardboard from "../Pages/Cardboard";

const AnimatedRoute = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="about-us/galleryChocolate"
          element={<GalleryChocolate />}
        />
        <Route path="about-us/galleryBeer" element={<GalleryBeer />} />
        <Route path="products/laminated" element={<Laminated />} />
        <Route path="products/transport" element={<Transport />} />
        <Route path="products/cardboard" element={<Cardboard />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;

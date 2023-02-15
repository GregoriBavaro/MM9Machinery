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
import AdminPanel from "../Pages/AdminPanel";
import NotFound from "../Pages/NotFound";

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
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="laminated" element={<Laminated />} />
          <Route path="transport" element={<Transport />} />
          <Route path="cardboard" element={<Cardboard />} />
        </Route>
        <Route path="/services" element={<Services />} />
        <Route path="/about-us">
          <Route index element={<AboutUs />} />
          <Route path="galleryChocolate" element={<GalleryChocolate />} />
          <Route path="galleryBeer" element={<GalleryBeer />} />
        </Route>

        <Route path="/master-admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;

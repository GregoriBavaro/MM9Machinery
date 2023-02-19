//Hooks
import { lazy, Suspense } from "react"
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
// import AdminPanel from "../Pages/AdminPanel";
// import NotFound from "../Pages/NotFound";

//LazyLoading
const NotFound = lazy(() => import("../Pages/NotFound"));
const AdminPanel = lazy(() => import("../Pages/AdminPanel"));
// const ContactUs = lazy(() => import("../Pages/ContactUs"));
// const Products = lazy(() => import("../Pages/Products"));
// const Services = lazy(() => import("../Pages/Services"));
// const AboutUs = lazy(() => import("../Pages/AboutUs"));
// const GalleryChocolate = lazy(() => import("../Pages/GalleryChocolate"));
// const GalleryBeer = lazy(() => import("../Pages/GalleryBeer"));
// const Laminated = lazy(() => import("../Pages/Laminated"));
// const Transport = lazy(() => import("../Pages/Transport"));
// const Cardboard = lazy(() => import("../Pages/Cardboard"));

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

        <Route path="/master-admin/*" element={<Suspense fallback={<p>Loading...</p>}><AdminPanel /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<p>Loading...</p>}><NotFound /></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;

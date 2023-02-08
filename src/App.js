//Hooks
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Layout/Header/Navbar";
import Footer from "./components/Layout/Footer/Footer";

//Pages
import ContactUs from "./components/Pages/ContactUs";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import AboutUs from "./components/Pages/AboutUs";
import GalleryChocolate from "./components/Pages/GalleryChocolate";
import GalleryBeer from "./components/Pages/GalleryBeer";
import Laminated from "./components/Pages/Laminated";
import Transport from "./components/Pages/Transport";
import Cardboard from "./components/Pages/Cardboard";

// const LazyAbout = React.lazy(() => import("./components/Pages/AboutUs"))

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} key={"/"} />
        <Route path="/contact-us" element={<ContactUs />} key={"/contact-us"} />
        <Route path="/products" element={<Products />} key={"/products"} />
        <Route path="/services" element={<Services />} key={"/services"} />
        <Route path="/about-us" element={<AboutUs />} key={"about-us"} />
        <Route path="about-us/galleryChocolate" element={<GalleryChocolate />} key={"galleryChocolate"} />
        <Route path="about-us/galleryBeer" element={<GalleryBeer />} key={"galleryBeer"} />
        <Route path="products/laminated" element={<Laminated />} key={"laminated"} />
        <Route path="products/transport" element={<Transport />} key={"transport"} />
        <Route path="products/cardboard" element={<Cardboard />} key={"cardboard"} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;

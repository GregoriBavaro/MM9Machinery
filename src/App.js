//Hooks
import React, { Fragment } from "react";
import AnimatedRoute from "./components/Hooks/use-AnimatedRoute"

//Components
import Navbar from "./components/Layout/Header/Navbar";
import Footer from "./components/Layout/Footer/Footer";

// const LazyAbout = React.lazy(() => import("./components/Pages/AboutUs"))

function App() {

  return (
    <Fragment>
      <Navbar />
        <AnimatedRoute />
      <Footer />
    </Fragment>
  );
}

export default App;

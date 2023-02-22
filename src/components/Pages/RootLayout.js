//Hooks
import { AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";

//Components
import Navbar from "../Layout/Header/Navbar";
import Footer from "../Layout/Footer/Footer";

const RootLayout = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Navbar />
      <main>
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
          <Outlet location={location} key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;

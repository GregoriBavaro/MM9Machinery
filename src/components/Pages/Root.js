import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Header/Navbar";
import Footer from "../Layout/Footer/Footer";

const Root = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};


export default Root;
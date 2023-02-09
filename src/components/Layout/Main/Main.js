//Hooks
import { Fragment } from "react";

//Components
import HeroShapeDivider from "../../UI/HeroShapeDivider";
import VerticalSlide from "./VerticalSlide";
import OurClients from "./OurClients";
import OurPackages from "../../Layout/Main/OurPackages";

//CSS
import "../../UI/HeroShapeDivider.css";
import "./Main.css";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <Fragment>
      <HeroShapeDivider />
      <VerticalSlide />
      <OurClients />
      <OurPackages
        display={"swiper"}
      />
      <Testimonials />
    </Fragment>
  );
};

export default Main;

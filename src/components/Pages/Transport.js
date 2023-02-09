//Hooks
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import NameOfPageContainer from "../UI/NameOfPageContainer";
import IconContainer from "../Layout/Main/IconsContainer";
import Testimonials from "../Layout/Main/Testimonials";
import BackToTopButton from "../UI/BackToTopButton";
import Gallery from "../UI/Gallery";

//Data
import data from "../../Data/products.json";

const transport = [...data.transport];

const Transport = () => {
  const currentPageName = "transport";
  const previousPageLink = "/products";
  const previousPageName = "all_products";
  const homePageName = "home";
  const homePageLink = "/";
  const twoButtons = true;

  return (
    <m.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <nameContext.Provider
        value={{
          currentPageName,
          previousPageLink,
          previousPageName,
          homePageName,
          homePageLink,
          twoButtons,
        }}
      >
        <NameOfPageContainer />
      </nameContext.Provider>
      <IconContainer container={"main-info-container"} />
      <Gallery data={transport} />
      <Testimonials />
      <BackToTopButton />
    </m.div>
  );
};

export default Transport;

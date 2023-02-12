//Hooks
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import NameOfPageContainer from "../UI/NameOfPageContainer";
import IconContainer from "../Layout/Main/IconsContainer";
import Testimonials from "../Layout/Main/Testimonials";
import BackToTopButton from "../UI/BackToTopButton";
import OurPackages from "../Layout/Main/OurPackages";

//Data
// import data from "../../Data/products.json";

// const allProducts = [...data.laminated, ...data.cardboard, ...data.transport];

const Products = () => {
  const currentPageName = "products";
  const previousPageLink = "/";
  const previousPageName = "home";
  const homePageName = "home";
  const homePageLink = "/";
  const twoButtons = false;

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
      <OurPackages
        display={"gallery"}
      />
      <Testimonials />
      <BackToTopButton />
    </m.div>
  );
};

export default Products;

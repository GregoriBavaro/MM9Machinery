//Hooks
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import NameOfPageContainer from "../UI/NameOfPageContainer";
import IconContainer from "../Layout/Main/IconsContainer";
import Testimonials from "../Layout/Main/Testimonials";
import ScrollToTop from "../Helpers/ScrollToTop";
import BackToTopButton from "../UI/BackToTopButton";
import Gallery from "../UI/Gallery";

//Data
import data from "../../Data/products.json";

const laminated = [...data.laminated];

const Laminated = () => {
  const currentPageName = "laminated";
  const previousPageLink = "/products";
  const previousPageName = "all_products";
  const homePageName = "home";
  const homePageLink = "/";
  const twoButtons = true;

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ScrollToTop />
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
      <IconContainer />
      <Gallery data={laminated} />
      <Testimonials />
      <BackToTopButton />
    </m.div>
  );
};

export default Laminated;

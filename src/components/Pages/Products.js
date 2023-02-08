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

const allProducts = [...data.laminated, ...data.cardboard, ...data.transport];

const Products = () => {
  const currentPageName = "products";
  const previousPageLink = "/";
  const previousPageName = "home";
  const homePageName = "home";
  const homePageLink = "/";
  const twoButtons = false;

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ScrollToTop />
      <nameContext.Provider value={{
          currentPageName,
          previousPageLink,
          previousPageName,
          homePageName,
          homePageLink,
          twoButtons,
        }}>
        <NameOfPageContainer />
      </nameContext.Provider>
      <IconContainer />
      <Gallery data={allProducts} />
      <Testimonials />
      <BackToTopButton />
    </m.div>
  );
};

export default Products;

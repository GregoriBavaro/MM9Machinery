//Hooks
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import NameOfPageContainer from "../UI/NameOfPageContainer";
import IconContainer from "../Layout/Main/IconsContainer";
import Testimonials from "../Layout/Main/Testimonials";
import ScrollToTop from "../Helpers/ScrollToTop";
import BackToTopButton from "../UI/BackToTopButton";

const Products = () => {
  const name = "products";
  const link = "/";
  const backName = "home";

  return (
    <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      <ScrollToTop />
      <nameContext.Provider value={{ name, link, backName }}>
        <NameOfPageContainer />
      </nameContext.Provider>
      <IconContainer />
      <Testimonials />
      <BackToTopButton />
    </m.div>
  );
};

export default Products;

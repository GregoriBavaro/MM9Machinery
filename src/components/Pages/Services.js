//Hooks
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import NameOfPageContainer from "../UI/NameOfPageContainer";
import IconContainer from "../Layout/Main/IconsContainer";
import BackToTopButton from "../UI/BackToTopButton";

const Services = () => {
  const currentPageName = "services";
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
      <BackToTopButton />
    </m.div>
  );
};

export default Services;

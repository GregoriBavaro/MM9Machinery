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
      <BackToTopButton />
    </m.div>
  );
};

export default Services;

//Hooks
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";

//Components
import NameOfPageContainer from "../UI/NameOfPageContainer";
import IconContainer from "../Layout/Main/IconsContainer";
import BackToTopButton from "../UI/BackToTopButton";
import BrandsSwiper from "../Layout/Main/BrandsSwiper";
import SectionContact from "../Layout/Main/SectionContact";
import AboutWhatWeDo from "../UI/AboutWhatWeDo";

//Data
import data from "../../Data/partnersAndClients.json";

const partners = [...data.partners];

const Services = () => {
  const currentPageName = "services";
  const previousPageLink = "/";
  const previousPageName = "home";
  const homePageName = "home";
  const homePageLink = "/";
  const twoButtons = false;

  const { t } = useTranslation();

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
      <AboutWhatWeDo />
      <div className="clients-container">
        <h3>{t("our_partners")}</h3>
        <BrandsSwiper logo={partners} />
      </div>
      <SectionContact />
      <BackToTopButton />
    </m.div>
  );
};

export default Services;

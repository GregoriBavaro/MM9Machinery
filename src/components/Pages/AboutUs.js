//Hooks
import { useTranslation } from "react-i18next";
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import IconContainer from "../Layout/Main/IconsContainer";
import NameOfPageContainer from "../UI/NameOfPageContainer";
import Sections from "../UI/Sections";
import MissionVisionValues from "../UI/MissionVisionValues";
import BackToTopButton from "../UI/BackToTopButton";

//Photos
import cardboard from "../../images/sections/cardboards.jpg";
import machine from "../../images/hero/hero (3).jpg"

const AboutUs = () => {
  const currentPageName = "about_us";
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
      <Sections
        right="clip-path_left-to-right"
        text={t("about_us_section_one_text")}
        h4={t("about_us_section_one_h4")}
        firstLine={t("about_us_section_one_h1_first_line")}
        secondLine={t("about_us_section_one_h1_second_line")}
        thirdLine={t("about_us_section_one_h1_third_line")}
        photo={cardboard}
      />
      <Sections
        left="order-right"
        right="order-left clip-path_right-to-left"
        text={t("about_us_section_two_text")}
        h4={t("about_us_section_two_h4")}
        firstLine={t("about_us_section_two_h1_first_line")}
        secondLine={t("about_us_section_two_h1_second_line")}
        thirdLine={t("about_us_section_two_h1_third_line")}
        photo={machine}
      />
      <MissionVisionValues />
      <BackToTopButton />
    </m.div>
  );
};

export default AboutUs;

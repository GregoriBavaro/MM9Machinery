//Hooks
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import EmailUs from "../UI/EmailUs";
import ContactUsInfo from "../UI/ContactUsInfo";
import NameOfPageContainer from "../UI/NameOfPageContainer";
import BackToTopButton from "../UI/BackToTopButton";

const ContactUs = () => {
  const currentPageName = "contact";
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
      <div className="page-container-main">
        <EmailUs />
        <ContactUsInfo />
      </div>
      <BackToTopButton />
    </m.div>
  );
};

export default ContactUs;

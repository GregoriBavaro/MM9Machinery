//Hooks
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import EmailUs from "../UI/EmailUs";
import ContactUsInfo from "../UI/ContactUsInfo";
import NameOfPageContainer from "../UI/NameOfPageContainer";
import ScrollToTop from "../Helpers/ScrollToTop";
import BackToTopButton from "../UI/BackToTopButton";

const ContactUs = () => {
  const name = "contact";
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
      <div className="page-container-main">
        <EmailUs />
        <ContactUsInfo />
      </div>
      <BackToTopButton />
    </m.div>
  );
};

export default ContactUs;

//Hooks
import {useState} from "react"
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import EmailUs from "../UI/EmailUs";
import ContactUsInfo from "../UI/ContactUsInfo";
import NameOfPageContainer from "../UI/NameOfPageContainer";
import ScrollToTop from "../Helpers/ScrollToTop";

const pageName = "contact";

const ContactUs = () => {
  const [name, setName] = useState("contact");
  const [link, setLink] = useState("/");
  const [backName, setBackName] = useState("home");

  return (
    <m.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
      exit={{x: window.innerWidth, transition: {duration: 0.1}  }}
    >
      <ScrollToTop />
      <nameContext.Provider value={{ name, link, backName }}>
        <NameOfPageContainer />
      </nameContext.Provider>
      <div className="page-container-main">
        <EmailUs />
        <ContactUsInfo />
      </div>
    </m.div>
  );
};

export default ContactUs;

//Hooks
import { useTranslation } from "react-i18next";

//Icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./ContactUsInfo.css";

const ContactUsInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-us-container">
      <h3>{t("help")}</h3>
      <div className="info-container">
        <PhoneIcon className="contact-us-icons" />
        <span>070 359 589</span>
      </div>
      <div className="info-container">
        <EmailIcon className="contact-us-icons" />
        <span>geg.gego@gmail.com</span>
      </div>
      
      <p>{t("email_us_message")}</p>
      
      <div className="info-container">
        <LocationOnIcon className="contact-us-icons" />
        <span>Slivovksa 14a</span>
      </div>
      <div className="google-maps-container">
      <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11857.534960837715!2d21.3679689!3d42.0134996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354138af867cdc5%3A0xb565e3473a0062cd!2sSlivovska%2C%20Skopje%201000!5e0!3m2!1sen!2smk!4v1676845623995!5m2!1sen!2smk" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUsInfo;

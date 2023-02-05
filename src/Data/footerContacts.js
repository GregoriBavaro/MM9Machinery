//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const footerContacts = [
    {
      classNameParent: "footer-info-container",
      classNameChild: "footer-info-container__items",
      classNameGrandchild: "footer-info-container__text",
      icon: <LocationOnIcon sx={{ fontSize: 40 }} className="contact-us-icons"/>,
      h2: "find_us",
      p: "Slivovksa 14a",
    },
    {
      classNameParent: "footer-info-container",
      classNameChild: "footer-info-container__items",
      classNameGrandchild: "footer-info-container__text",
      icon: <PhoneIcon sx={{ fontSize: 40 }} className="contact-us-icons"/>,
      h2: "call_us",
      p: "070 359 589",
    },
    {
      classNameParent: "footer-info-container",
      classNameChild: "footer-info-container__items",
      classNameGrandchild: "footer-info-container__text",
      icon: <EmailIcon sx={{ fontSize: 40 }} className="contact-us-icons"/>,
      h2: "email_us",
      p: "greg.gego@gmail.com",
    },
  ];
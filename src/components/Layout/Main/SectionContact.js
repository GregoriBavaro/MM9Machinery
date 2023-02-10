//Hooks
import { useTranslation } from "react-i18next";

//Component
import GlobalButton from "../../UI/GlobalButton";

//CSS
import "./SectionContact.css";

const SectionContact = () => {
  const { t } = useTranslation();
  return (
    <div className="section-contact-container">
      <div className="section-contact-wrapper">
        <div className="section-contact__left">
          <p>See how your company can benefit from right-sized custom boxes.</p>
        </div>
        <div className="section-contact__right">
          <GlobalButton
            to={"/contact-us"}
            name={t("contact")}
            class={"section-contact-button btn"}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionContact;

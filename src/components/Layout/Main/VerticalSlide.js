//Hooks
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Data
import heroPhoto from "../../../images/hero/dummyPackage.png";

//CSS
import "./VerticalSlide.css";


const VerticalSlide = () => {

  const { t } = useTranslation();
  
  return (
    <div className="vertical-slides-container">
      <m.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container-slide-in"
      >
        <img src={heroPhoto} alt="beer-package" />
      </m.div>
      <m.div
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container-slide-in"
      >
        <div className="learn-more">
          <h1 className="first-line">
            {t("experience_the_power")}
            <span className="second-line">{t("of_packaging")}</span>
          </h1>
          <div id="container">
            <Link to="/products">
              <button className="learn-more-button">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">{t("products")}</span>
              </button>
            </Link>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default VerticalSlide;

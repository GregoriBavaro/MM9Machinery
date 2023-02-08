//Hooks
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

//Component
import ChangeText from "../Helpers/ChangeText";

//CSS
import "./AboutWhatWeDo.css";

//Data
import { WhatWeDoItems } from "../../Data/WhatWeDoItems";

const arrayOfWords = [
  "home and garden",
  "footwear and textile",
  "food",
  "eat and fish",
  "IT equipment",
  "beverages",
];

const AboutWhatWeDo = () => {
  const { t } = useTranslation();

  return (
    <div className="what-we-do-container shapedividers_com-3946">
      <h1>{t("we_produce_packaging_for")}</h1>
      <ChangeText
        swiperClass="what-we-do-swiper"
        swiperSlidesClass="what-we-do-slides"
        text={arrayOfWords}
      />
      <div className="what-we-do-gallery">
        <div className="grid-gallery-container">
          {WhatWeDoItems.map(({ photo, to }) => {
            return (
              <Link to={to} key={photo}>
                <m.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="grid-item"
                >
                  <img src={photo} alt="photos" loading="lazy" />
                </m.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutWhatWeDo;

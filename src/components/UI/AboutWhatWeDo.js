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
  "gallery_one",
  "gallery_beer",
  "gallery_it",
  "gallery_bags",
  "gallery_bottles",
];

const AboutWhatWeDo = () => {
  const { t } = useTranslation();

  return (
    <div className="what-we-do-container">
      <h1>{t("we_produce_packaging_for")}</h1>
      <ChangeText
        swiperClass="what-we-do-swiper"
        swiperSlidesClass="what-we-do-slides"
        text={arrayOfWords}
      />
      <div className="what-we-do-gallery">
        <div className="grid-gallery-container">
          {WhatWeDoItems.map(({ photo, to ,name}) => {
            return (
              <Link to={to} key={photo}>
                <m.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="grid-item"
                >
                  <img src={photo} alt="photos" loading="lazy" />
                  <div className="name-div">{t(name)}</div>
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

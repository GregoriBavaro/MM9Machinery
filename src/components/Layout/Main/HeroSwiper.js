//Hooks
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion as m } from "framer-motion";
import { useState } from "react"

//Components
import GlobalButton from "../../UI/GlobalButton";

// CSS
import "./Hero.css";
import "@splidejs/react-splide/css/sea-green";

const HeroSwiper = (props) => {
  const [swiperArrows, setSwiperArrows] = useState(false)
  const { t } = useTranslation();
  const arrayOfPhotos = props.array;

  const onMouseEnter = () => {
    setSwiperArrows(true)
  }

  const onMouseLeave = () => {
    setSwiperArrows(false)
  }

  return (
    <Splide onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      className={`${props.heroContainer} shapedividers_com-9433`}
      options={{
        rewind: true,
        gap: "0",
        autoplay: true,
        pagination: false,
        arrows: swiperArrows,
        resetProgress: false,
        perPage: 1,
        pauseOnHover: true,
        breakpoints: {
          450: {
            arrows: false,
          },
        }
      }}
    >
      {arrayOfPhotos.map(
        ({
          photo,
          index,
          to,
          buttonName,
          buttonClass,
          promo,
          backgroundColor,
          text,
        }) => {
          return (
            <SplideSlide
              key={index}
              className={`hero-slide ${backgroundColor}`}
            >
              <div className="hero-slide__left">
                <m.img
                  initial={{opacity: 0, y: "100%" }}
                  whileInView={{opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  src={photo}
                  alt="hero-photos"
                />
              </div>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hero-slide__right"
              >
                <h1>{t(promo)}</h1>
                <p>{text}</p>
                <GlobalButton
                  name={t(buttonName)}
                  to={to}
                  class={buttonClass}
                />
              </m.div>
            </SplideSlide>
          );
        }
      )}
    </Splide>
  );
};

export default HeroSwiper;

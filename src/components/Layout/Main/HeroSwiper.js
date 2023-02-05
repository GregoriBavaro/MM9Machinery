//Hooks
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";

//Components
import GlobalButton from "../../UI/GlobalButton";

// CSS
import "./Hero.css";
import "@splidejs/react-splide/css/sea-green";


const HeroSwiper = (props) => {
  const { t } = useTranslation();
  const arrayOfPhotos = props.array;

  return (
    <Splide className={props.heroContainer}
      options={{
        rewind: true,
        gap: "0",
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        pagination: false,
        arrows: false,
        pauseOnHover: false,
            resetProgress: false,
        
      }}
    >
      {arrayOfPhotos.map(
        ({
          photo,
          index,
          classImg,
          classSlide,
          to,
          buttonName,
          buttonClass,
          divClass,
          promo,
        }) => {
          return (
            <SplideSlide className={classSlide} key={index}>
              <div className={divClass}>
                <h1>{promo}</h1>
                <GlobalButton
                  name={t(buttonName)}
                  to={to}
                  class={buttonClass}
                />
              </div>
              <img className={classImg} src={photo} alt="MM9" />
            </SplideSlide>
          );
        }
      )}
    </Splide>
  );
};

export default HeroSwiper;

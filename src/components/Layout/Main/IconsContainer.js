//Hooks
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import useWindowDimensions from "../../Hooks/use-windowDimensions";

//CSS
import "./IconsContainer.css";
import "@splidejs/react-splide/css/sea-green";

//Data
import { infoItems } from "../../../Data/InfoItems";

const MainInfo = (props) => {
  const { height, width } = useWindowDimensions();
  

  const { t } = useTranslation();

  return (
    <div className={props.container}>
      {width > 960 && <div className="info-child">
        {infoItems.map(({ className, icon, h3, duration }) => {
          return (
            <div key={h3} className={className}>
              <m.img
                src={icon}
                initial={{ y: "120%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: duration }}
                exit={{ opacity: 1 }}
                viewport={{ once: true }}
              />
              <h3>{t(h3)}</h3>
            </div>
          );
        })}
      </div>}
      {width < 960 && (
        <Splide className="info-child"
          options={{
            rewind: true,
            gap: 2,
            autoplay: true,
            pagination: false,
            arrows: false,
            pauseOnHover: false,
            resetProgress: false,
            perPage: 1,
          }}
        >
          {infoItems.map(({ className, icon, h3, duration }) => {
            return (
              <SplideSlide key={h3} className={className}>
                <m.img
                src={icon}
                initial={{ y: "120%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: duration }}
                exit={{ opacity: 1 }}
                viewport={{ once: true }}
              />
              <h3>{t(h3)}</h3>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </div>
  );
};

export default MainInfo;

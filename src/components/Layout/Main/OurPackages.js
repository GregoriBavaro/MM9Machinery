//Hooks
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import { motion as m, AnimatePresence, animate } from "framer-motion";

//Components
import GlobalButton from "../../UI/GlobalButton";

//CSS
import "./OurPackages.css";
import "@splidejs/react-splide/css/sea-green";

//Imgs
import brand1 from "../../../images/brands/burger-king.png";
import brand3 from "../../../images/brands/coca-cola.png";
import brand4 from "../../../images/brands/redbull.png";
import brand5 from "../../../images/brands/mcdonalds.png";
import brand6 from "../../../images/brands/hummer.png";

const brands = [
  brand1,
  brand1,
  brand1,
  brand1,
  brand1,
  brand1,
  brand1,
  brand1,
  brand1,
];

const brands1 = [
  brand3,
  brand3,
  brand3,
  brand3,
  brand3,
  brand3,
  brand3,
  brand3,
  brand3,
];

const brands2 = [
  brand4,
  brand4,
  brand4,
  brand4,
  brand4,
  brand4,
  brand4,
  brand4,
  brand4,
];

const OurPackages = () => {
  const [dropDown, setDropDown] = useState(false);
  const [data, setData] = useState(brands);
  const { t } = useTranslation();

  const dropDownMenuHandler = () => {
    setDropDown(true);
    if (dropDown) {
      setDropDown(false);
    }
  };

  const handleClick = (e) => {
    if (
      e.target.classList.contains("our-packages-container") ||
      e.target.classList.contains("our-packages__swiper") ||
      e.target.classList.contains("our-packages__slides") ||
      e.target.classList.contains("our-packages__button") ||
      e.target.classList.contains("our-packages__photo")
    ) {
      setDropDown(false);
    }
  };

  const handleCheckedLi = (e) => {
    if (e.currentTarget.dataset.id === "1") {
      setData(brands);
    }
    if (e.currentTarget.dataset.id === "2") {
      setData(brands1);
    }
    if (e.currentTarget.dataset.id === "3") {
      setData(brands2);
    }
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div onClick={handleClick} className="our-packages-container">
      <h1>Get inspired</h1>
      <div
        onClick={dropDownMenuHandler}
        className={
          dropDown
            ? "our-packages__dropdown"
            : "our-packages__dropdown box-shadow"
        }
      >
        <div>
          <h3>All products</h3>
        </div>
        <div>
          <m.i
            animate={{ rotate: dropDown ? 180 : 0 }}
            className="fas fa-caret-down"
          />
        </div>
      </div>
      <AnimatePresence>
        {dropDown && (
          <m.div
            initial="exit"
            animate="enter"
            exit="exit"
            variants={subMenuAnimate}
            className="our-packages__dropdown-menu"
          >
            <ul>
              <li onClick={handleCheckedLi} data-id="1">
                Laminated packaging
              </li>
              <li onClick={handleCheckedLi} data-id="2">
                Cardboard packaging
              </li>
              <li onClick={handleCheckedLi} data-id="3">
                Transport packaging
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>

      <div className="our-packages__swiper">
        <Splide
          options={{
            rewind: true,
            width: 800,
            gap: "2rem",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            arrows: false,
            perPage: 4,
            breakpoints: {
              660: {
                perPage: 3,
              },
            },
          }}
        >
          {data.map((logo, index) => {
            return (
              <SplideSlide className="our-packages__slides" key={index}>
                <img src={logo} className="our-packages__photo" alt="" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="our-packages__button">
        <GlobalButton name={t("products")} to="/products" class="btn" />
      </div>
    </div>
  );
};

export default OurPackages;

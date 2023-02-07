//Hooks
import { Fragment, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import { motion as m, AnimatePresence } from "framer-motion";
import useLightBox from "../../Hooks/use-lightBox";

//Components
import GlobalButton from "../../UI/GlobalButton";
import Modal from "../../UI/Modal";
import ArrowDownSvg from "../../UI/ArrowDownSvg";

//CSS
import "./OurPackages.css";
import "@splidejs/react-splide/css/sea-green";

//Data
import data from "../../../Data/products.json";

const allProducts = [...data.laminated, ...data.cardboard, ...data.transport];
const laminated = [...data.laminated];
const cardboard = [...data.cardboard];
const transport = [...data.transport];
const liMenu = [...data.dorpDownMenuLis];

const OurPackages = () => {
  const { t } = useTranslation();

  const [dropDown, setDropDown] = useState(false);
  const [menuAllProducts, setMenuAllProducts] = useState(false);
  const [currentActiveMenu, setCurrentActiveMenu] = useState("all_products");
  const [data, setData] = useState(allProducts);

  const {
    handelRotationLeft,
    handelRotationRight,
    handleClick,
    clickedImg,
    setClickedImg,
  } = useLightBox();

  const dropDownMenuHandler = () => {
    setDropDown(true);
    if (dropDown) {
      setDropDown(false);
    }
  };

  const handleClickDismiss = (e) => {
    if (
      e.target.classList.contains("our-packages-container") ||
      e.target.classList.contains("our-packages__swiper") ||
      e.target.classList.contains("our-packages__slides") ||
      e.target.classList.contains("our-packages__button") ||
      e.target.classList.contains("dropdown-li") ||
      e.target.classList.contains("our-packages__photo")
    ) {
      setDropDown(false);
    }
  };

  const handleCheckedLi = (e) => {
    if (e.currentTarget.dataset.id === "0") {
      setData(allProducts);
      setMenuAllProducts(false);
      setCurrentActiveMenu("all_products");
    }
    if (e.currentTarget.dataset.id === "1") {
      setData(laminated);
      setMenuAllProducts(true);
      setCurrentActiveMenu("laminated");
    }
    if (e.currentTarget.dataset.id === "2") {
      setData(cardboard);
      setMenuAllProducts(true);
      setCurrentActiveMenu("cardboard");
    }
    if (e.currentTarget.dataset.id === "3") {
      setData(transport);
      setMenuAllProducts(true);
      setCurrentActiveMenu("transport");
    }
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
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
    <Fragment>
      <div onClick={handleClickDismiss} className="our-packages-container">
        <h1>{t("product_search")}</h1>
        <div
          onClick={dropDownMenuHandler}
          className={
            dropDown
              ? "our-packages__dropdown"
              : "our-packages__dropdown box-shadow"
          }
        >
          <div>
            <h3>{t(currentActiveMenu)}</h3>
          </div>
          <div>
            <ArrowDownSvg dropDown={dropDown} />
          </div>
        </div>
        <AnimatePresence>
          {dropDown && (
            <m.div
              initial="exit"
              animate="enter"
              exit="exit"
              variants={subMenuAnimate}
              className={
                menuAllProducts
                  ? "our-packages__dropdown-menu margin-minus-one"
                  : "our-packages__dropdown-menu"
              }
            >
              <ul>
                {menuAllProducts && (
                  <li
                    className="dropdown-li"
                    onClick={handleCheckedLi}
                    data-id="0"
                  >
                    {t("all_products")}
                  </li>
                )}
                {liMenu.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={item.className}
                      onClick={handleCheckedLi}
                      data-id={item.dataId}
                    >
                      {t(item.liName)}
                    </li>
                  );
                })}
              </ul>
            </m.div>
          )}
        </AnimatePresence>
        <div className="our-packages__swiper">
          <Splide
            options={{
              rewind: true,
              gap: "2rem",
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              pagination: true,
              arrows: false,
              width: 1200,
              perPage: 4,
              breakpoints: {
                1050: {
                  width: 800,
                  perPage: 3,
                  gap: "1rem",
                },
                735: {
                  width: 600,
                  perPage: 2,
                },
                450: {
                  width: 300,
                  perPage: 1,
                },
              },
            }}
          >
            {data.map((item, index) => {
              return (
                <SplideSlide className="our-packages__slides" key={index}>
                  <img
                    src={item.link}
                    className="our-packages__photo"
                    alt=""
                    onClick={() => handleClick(item, index)}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        <div className="our-packages__button">
          <GlobalButton name={t("full_products")} to="/products" class="btn" />
        </div>
      </div>
      <AnimatePresence>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default OurPackages;

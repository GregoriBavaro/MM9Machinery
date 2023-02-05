//Hooks
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSwipeable } from "react-swipeable";

//CSS
import "./Gallery.css";

import close from "../../images/close.png";

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const { t } = useTranslation();

  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        damping: "spring",
        stiffness: "700",
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  const handlers = useSwipeable({
    onSwipedLeft: handelRotationRight,
    onSwipedRight: handelRotationLeft,
  });

  return (
    <m.div {...handlers}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="overlay dismiss"
      onClick={handleClick}
    >
      <div className="dismiss backArrow">
        <m.img
          onClick={handleClick}
          className="dismiss backArrow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={close}
        />
      </div>
      <img src={clickedImg} alt="bigger pic" />

      <div onClick={handelRotationLeft} className="overlay-arrows_left">
        <div>
          <m.svg
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />{" "}
          </m.svg>
        </div>
      </div>
      <div onClick={handelRotationRight} className="overlay-arrows_right">
        <div>
          <m.svg
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />{" "}
          </m.svg>
        </div>
      </div>
    </m.div>
  );
};

export default Modal;

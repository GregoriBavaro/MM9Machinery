//Hooks
import { motion as m } from "framer-motion";
import { useSwipeable } from "react-swipeable";


//CSS
import "./Gallery.css";

import close from "../../images/close.png";

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
  galleryLength,
  currentIndex
}) => {
  
  if (clickedImg) {
    document.querySelector("html").classList.add("overflow-hidden");
  }

  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
      document.querySelector("html").classList.remove("overflow-hidden");
    }
  };

  const dropIn = {
    hidden: {
      scale: 0,
      opacity: 0,
      x: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        damping: "spring",
        stiffness: "500",
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  const handlers = useSwipeable({
    onSwipedLeft: handelRotationRight,
    onSwipedRight: handelRotationLeft,
  });

  return (
    <m.div
      {...handlers}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ delay: 0.2, duration: 0.4 }}
      className="overlay dismiss"
      onClick={handleClick}
    >
      <div className="img-info">
        <span>{galleryLength}</span>
        <span>/</span>
        <span>{currentIndex + 1}</span>
      </div>
      <div className="dismiss backArrow">
        <m.img 
          onClick={handleClick}
          className="dismiss backArrow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={close}
        />
      </div>
      <img src={clickedImg} alt="bigger pic" className="dismiss" />
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

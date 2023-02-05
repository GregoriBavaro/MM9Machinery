//Hooks
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

//CSS
import "./BackToTopButton.css";

//Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <m.div
      whileHover={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 360, 360, 0],
        backgroundColor: "rgb(0, 191, 111)",
        
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],

        repeatDelay: 1,
      }}
      className="back-top-container"
    >
      {backToTop && (
        <m.button
          initial={{ y: "80%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="back-top-button"
          onClick={scrollToTopHandler}
        >
          <KeyboardArrowUpIcon sx={{ color: "whitesmoke", fontSize: 40 }} />
        </m.button>
      )}
    </m.div>
  );
};

export default BackToTopButton;

//Hooks
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { motion as m, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

//Data
import { MenuItems } from "../../../Data/MenuItems";

//CSS
import "./Dropdown.css";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => setClick(!click);

  return (
    <Fragment>
      <m.ul
        initial={{ y: "-2rem" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <AnimatePresence>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {t(item.title)}
                </Link>
              </li>
            );
          })}
        </AnimatePresence>
      </m.ul>
    </Fragment>
  );
};

export default Dropdown;

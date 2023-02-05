//Hooks
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

//Data
import { MenuItems } from "../../../Data/MenuItems";

//CSS
import "./Dropdown.css";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Fragment>
      <m.ul
        initial={{ y: "-2rem" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </m.ul>
    </Fragment>
  );
};

export default Dropdown;

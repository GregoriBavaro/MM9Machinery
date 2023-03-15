//Hooks
import React, { useState, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion as m } from "framer-motion";
import Hamburger from "hamburger-react";

//Components
import Dropdown from "./Dropdown";
import LanguagesDropdown from "./LanguagesDropdown";

//CSS
import "./Navbar.css";

//Images
import logo from "../../../images/MM9MH.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownLanguages, setDropdownLanguages] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
    setOpen(false)
  };

  if (click) {
    document.querySelector("html").classList.add("overflow-hidden");
  } else {
    document.querySelector("html").classList.remove("overflow-hidden");
  }

  const onMouseEnter = () => {
    setIsHovered(true);
    window.innerWidth <= 960 ? setDropdown(false) : setDropdown(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    window.innerWidth <= 960 ? setDropdown(false) : setDropdown(false);
  };

  const onMouseEnterLanguages = () => {
    setDropdownLanguages(false);
    setDropdownLanguages(true);
  };

  const onMouseLeaveLanguages = () => {
    setDropdownLanguages(false);
    setDropdownLanguages(false);
  };

 
  const { t } = useTranslation();

  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="MM9Machinery-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <Hamburger color="rgb(0, 191, 111)"  toggled={isOpen} toggle={setOpen} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links active" : "nav-links "
              }
              to="/"
              onClick={closeMobileMenu}
            >
              {t("home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              
              className={({ isActive }) =>
                isActive ? "nav-links active" : "nav-links "
              }
              to="/services"
              onClick={closeMobileMenu }
            >
              {t("services")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links active" : "nav-links "
              }
              to="/about-us"
              onClick={closeMobileMenu}
            >
              {t("about_us")}
            </NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links active" : "nav-links "
              }
              to="/products"
              onClick={closeMobileMenu}
            >
              {t("products")}{" "}
              <m.i
                animate={{ rotate: isHovered ? 180 : 0 }}
                className="fas fa-caret-down"
              />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links active" : "nav-links "
              }
              to="/contact-us"
              onClick={closeMobileMenu}
            >
              {t("contact")}
            </NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterLanguages}
            onMouseLeave={onMouseLeaveLanguages}
          >
            <div className="nav-links">{t("languages")}</div>
            {dropdownLanguages && <LanguagesDropdown />}
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;

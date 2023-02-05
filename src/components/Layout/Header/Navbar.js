//Hooks
import React, { useState, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

  const [dropdownLanguages, setDropdownLanguages] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  if (click) {
    document.querySelector("html").classList.add("overflow-hidden");
  } else {
    document.querySelector("html").classList.remove("overflow-hidden");
  }

  const onMouseEnter = () => {
    window.innerWidth <= 960 ? setDropdown(false) : setDropdown(true);
  };

  const onMouseLeave = () => {
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
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              {t("home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {t("services")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about-us"
              className="nav-links"
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
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {t("products")} <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact-us"
              className="nav-links"
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

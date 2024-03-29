//Hooks
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

//Data
import { footerContacts } from "../../../Data/footerContacts";
import { footerLinks } from "../../../Data/footerLinks";

//Components
import GlobalButton from "../../UI/GlobalButton";
import FooterIcons from "./FooterIcons";

//CSS
import "./Footer.css";

//Images
import logo from "../../../images/MM9M.png";



const Footer = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="footer-container-top">
        {footerContacts.map(
          ({
            icon,
            h2,
            p,
          }) => {
            return (
              <div key={h2} className="footer-info-container">
                <div className="footer-info-container__items">
                  {icon}
                  <div className="footer-info-container__text">
                    <h2>{t(h2)}</h2>
                    <p>{p}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="footer-container-bottom">
        <div className="footer-bottom-info-container">
          <div className="footer-logo-wrapper">
            <img src={logo} alt="MM9Machinery logo" />
          </div>
          <p>
          Think green, pack green - for a sustainable future!
          </p>
          <div></div>
        </div>
        <div className="footer-bottom-info-container">
          <div className="footer-bottom-info-container__links">
            <ul>
              {footerLinks.map(({ className, to, linkName }) => {
                return (
                  <li key={to}>
                    <Link className={className} to={to}>
                      {t(linkName)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footer-bottom-info-container__btn">
          <GlobalButton name={t("contact")} to={"/contact-us"} class={"btn"}/>
          <FooterIcons />
        </div>
      </div>
      <div className="footer-container-sign">
        <p>
          Copyright © {new Date().getFullYear()}, All Right Reserved MM9
          Machinery.
        </p>
        {/* <p className="gam">
          Website by: <a href="/">GD²</a>
        </p> */}
      </div>
    </Fragment>
  );
};

export default Footer;

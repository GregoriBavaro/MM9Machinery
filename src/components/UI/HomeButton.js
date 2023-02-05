import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { nameContext } from "../Hooks/Context";
import { useTranslation } from "react-i18next";



import "./HomeButton.css";

const HomeButton = (props) => {
    const {name, link, backName} = useContext(nameContext);
   
    
    const { t } = useTranslation();

  return (
    <Fragment>
      <div className="button-container">
      <Link to={link}>
        <button>
           {t(backName)}
        </button>
        </Link>
        <span className="span-divider">|</span>
        <h5>{t(name)}</h5>
      </div>
      <div className="page-name">
        <h1>{t(name)}</h1>
      </div>
    </Fragment>
  );
};

export default HomeButton;

import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { nameContext } from "../Hooks/Context";
import { useTranslation } from "react-i18next";

import "./HomeButton.css";

const HomeButton = (props) => {
  const { currentPageName, previousPageLink, homePageLink, previousPageName, homePageName, twoButtons } = useContext(nameContext);

  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="button-container">
        {twoButtons && <Link to={homePageLink}>
          <button>{t(homePageName)}</button>
          <span className="span-divider">|</span>
        </Link>}
        <Link to={previousPageLink}>
          <button>{t(previousPageName)}</button>
        </Link>
        <span className="span-divider">|</span>
        <h5>{t(currentPageName)}</h5>
      </div>
      <div className="page-name">
        <h1>{t(currentPageName)}</h1>
      </div>
    </Fragment>
  );
};

export default HomeButton;

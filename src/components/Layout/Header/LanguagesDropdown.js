//Hooks
import React, { Fragment, useState, useEffect } from "react";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { motion as m } from "framer-motion";


//Data
import { LanguagesItems } from "../../../Data/LanguagesItems";

//CSS
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./Dropdown.css";

const LanguagesDropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("app_title");
  }, [t]);

  return (
    <Fragment>
      <m.ul initial={{ y: "-2rem" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={handleClick}
        className={click ? "dropdown-menu-languages clicked" : "dropdown-menu-languages"}
      >
        {LanguagesItems.map(({ code, name, country_code, cName }) => {
          return (
            <li key={country_code} className={cName}>
              <div
                onClick={() => i18next.changeLanguage(code)}
                disabled={code === currentLanguageCode}
                key={country_code}
              >
                <span className={`fi fi-${country_code} mx-1`}
                style={{
                  opacity: currentLanguageCode === code ? 0.2 : 1,
                  cursor: currentLanguageCode === code ? 'not-allowed' : "pointer"
                }}></span>
                <span className="padding-flag"
                style={{
                  opacity: currentLanguageCode === code ? 0.2 : 1,
                  cursor: currentLanguageCode === code ? 'not-allowed' : "pointer"
                }}>{name}</span>
              </div>
            </li>
          );
        })}
      </m.ul>
    </Fragment>
  );
};

export default LanguagesDropdown;

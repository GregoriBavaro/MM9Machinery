//Hooks
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";

//CSS
import "./IconsContainer.css";

//Data
import { infoItems } from "../../../Data/InfoItems";

const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="main-info-container">
      <div className="info-child">
        {infoItems.map(({ className, icon, h3, duration }) => {
          return (
            <div key={h3} className={className}>
              <m.img
                src={icon}
                initial={{ y: "120%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: duration }}
                exit={{ opacity: 1 }}
                viewport={{ once: true }}
              />
              <h3>{t(h3)}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainInfo;

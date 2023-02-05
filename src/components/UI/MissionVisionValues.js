//Hooks
import { motion as m } from "framer-motion";

//CSS
import "./MissionVisionValues.css";

//Data
import { sloganItems } from "../../Data/InfoItems";

const MissionVisionValues = () => {
  return (
    <div className="slogan-wrapper">
      <div className="slogan-container">
        {sloganItems.map(({ className, h3, p, icon }) => {
          return (
            <m.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              viewport={{ once: true }}
              key={icon}
              className={className}
            >
              <div className="card-header">
                <m.img
                  initial={{ y: "120%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 1 }}
                  viewport={{ once: true }}
                  src={icon}
                  alt={h3}
                />
              </div>
              <div className="card-text">
                <h3>{h3}</h3>
                <p>{p}</p>
              </div>
            </m.div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionVisionValues;

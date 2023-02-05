//Hooks
import { motion as m } from "framer-motion";

//Components
import cardboard from "../../images/sections/cardboards.jpg";

//CSS
import "./Sections.css";

const Sections = (props) => {
  return (
    <div className="section-container">
      <div className={`section-inner_left ${props.left}`}>
        <h4>{props.h4}</h4>
        <h1 className="sections-first-line">
          {props.firstLine} <span className="sections-second-line">{props.secondLine} </span>
          <span className="sections-third-line">{props.thirdLine}</span>
        </h1>
        <p>
          {props.text}
        </p>
      </div>
      <m.div
        className={`section-inner_right ${props.right} clip-path-${props.clipPath}`}
      >
        <img src={cardboard} alt="photo"/>
      </m.div>
    </div>
  );
};

export default Sections;

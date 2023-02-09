
//Hooks
import { Fragment } from "react";

//CSS
import "./HeroShapeDivider.css";

//Components
import IconsContainer from "../Layout/Main/IconsContainer"

const HeroShapeDivider = () => {
  return (
    <Fragment>
      <div className="custom-shape-divider">
        <IconsContainer container={"main-info-container-hero"}/>
      </div>
    </Fragment>
    
  );
};


export default HeroShapeDivider
  
  


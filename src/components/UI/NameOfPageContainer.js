//Hooks
import { Fragment } from "react";


//Components
import HomeButton from "./HomeButton";

//CSS
import "./NameOfPageContainer.css";

const NameOfPageContainer = (props) => {
  return (
    <Fragment>
      <div className="page-container bg-colors">
        <HomeButton />
      </div>
    </Fragment>
  );
};

export default NameOfPageContainer;

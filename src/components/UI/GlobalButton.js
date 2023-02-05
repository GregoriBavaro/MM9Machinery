//Hooks
import { Link } from "react-router-dom";

//CSS
import "./GlobalButton.css";

const GlobalButton = (props) => {
  return (
    <Link className="btn-inner" to={props.to}>
      <button className={props.class}>{props.name}</button>
    </Link>
  );
};

export default GlobalButton;

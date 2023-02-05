import "./GlobalButton.css";

const SubmitButton = (props) => {
  return (
    <button className="btn" disabled={props.dis}>
      <span>{props.children}</span>
    </button>
  );
};

export default SubmitButton;

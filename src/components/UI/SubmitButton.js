import "./GlobalButton.css";

const SubmitButton = (props) => {
  return (
    <button type="submit" className="btn" disabled={props.dis}>
      <span>{props.children}</span>
    </button>
  );
};

export default SubmitButton;

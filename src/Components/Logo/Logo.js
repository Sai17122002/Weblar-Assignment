import "./Logo.css";

function Logo(props) {
  return (
    <div className="logo-name">
      <span
        style={{ backgroundColor: props.color }}
        className="shape square"
      ></span>
      <span
        style={{ backgroundColor: props.color }}
        className="shape circle"
      ></span>
      <span
        style={{ backgroundColor: props.color }}
        className="shape circle"
      ></span>
      <p>logoipsum</p>
    </div>
  );
}

export default Logo;

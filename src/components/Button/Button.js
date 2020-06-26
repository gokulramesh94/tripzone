import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

function Button({ text, size, theme, disabled, onClick }) {
  return (
    <button
      className={`button ${theme} ${size}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Search",
  theme: "dark",
  size: "",
  disabled: false
};

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;

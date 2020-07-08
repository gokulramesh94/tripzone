import React from "react";
import PropTypes from "prop-types";
import "./Container.scss";

const Container = props => {
  console.log("Container");
  return (
    <div className={`tripzone-container ${props.color} ${props.size} ${props.padding}`}>
      {props.children}
    </div>
  );
};

Container.defaultProps = {
  color: "",
  size: "large",
  padding: ""
};

Container.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  padding: PropTypes.string
};

export default Container;

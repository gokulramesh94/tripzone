import React from "react";
import PropTypes from "prop-types";
import "./Container.scss";

const Container = props => {
  return (
    <div className={`tripzone-container ${props.size} ${props.padding}`}>
      {props.children}
    </div>
  );
};

Container.defaultProps = {
  size: "",
  padding: ""
};

Container.propTypes = {
  size: PropTypes.string,
  padding: PropTypes.string
};

export default Container;

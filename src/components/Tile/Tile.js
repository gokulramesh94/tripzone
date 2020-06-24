import React from "react";
import PropTypes from "prop-types";
import "./Tile.scss";

function Tile({ title, time }) {
  return (
    <div className="tile-container">
      <div className="date">
        {title}
      </div>
      <div className="time">
        {time}
      </div>
    </div>
  );
}

Tile.defaultProps = {
  title: "",
  time: ""
};

Tile.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string
};

export default Tile;

import React from "react";

import PropTypes from "prop-types";
import { LocationCard } from "../../../components";
import "./LocationList.scss";

const LocationList = props => {
  const _renderLocationTiles = () => {
    let locationList = [];
    props.data.forEach((item, index) => {
      locationList.push(
        <div className="cards" key={index}>
          <LocationCard data={item} />
        </div>
      );
    });
    return locationList;
  };

  return (
    <div className={`location-list-wrapper ${props.column}`}>
      {_renderLocationTiles()}
    </div>
  );
};

LocationList.defaultProps = {
  data: [],
  column: "five"
};

LocationList.propTypes = {
  data: PropTypes.array.isRequired,
  column: PropTypes.string
};

export default LocationList;

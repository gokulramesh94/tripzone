import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../../components";
import "./LocationCard.scss";

function LocationCard({ data }) {
  console.log("LocationCard");
  const { landmark, location, photo } = data;

  return (
    <div className="location-card-wrapper">
      <div className="location-image">
        <Image source={photo} altText={landmark} />
      </div>
      <div className="location-details">
        <div className="landmark">
          {landmark || "NA"}
        </div>
        <div className="location">
          {location}
        </div>
      </div>
    </div>
  );
}

LocationCard.defaultProps = {
  data: {}
};

LocationCard.propTypes = {
  data: PropTypes.object
};

export default LocationCard;

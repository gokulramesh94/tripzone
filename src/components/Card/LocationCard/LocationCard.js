import React from "react";
import PropTypes from "prop-types";
import "./LocationCard.scss";

function LocationCard({ data }) {
  console.log("LocationCard");
  const { landmark, location, photo } = data;
  return (
    <div className="location-card-wrapper">
      <div className="location-image">
        <img src={photo} alt={landmark} />
      </div>
      <div className="location-details">
        <div className="landmark">
          {landmark || 'NA'}
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
  data: PropTypes.object,
};

export default LocationCard;

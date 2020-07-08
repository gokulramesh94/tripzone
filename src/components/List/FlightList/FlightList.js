import React from "react";

import PropTypes from "prop-types";
import { FlightCard } from "../../../components";
import { Strings } from "../../../constants";
import "./FlightList.scss";

const FlightList = props => {
  console.log("FlightList");
  const _renderFlightTiles = () => {
    let flightList = [];
    if (props.data.length === 0) {
      flightList.push(
        <div className="no-flights" key={0}>
          {
            Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_FOUR
              .NO_FLIGHTS
          }
        </div>
      );
    } else {
      props.data.forEach((item, index) => {
        flightList.push(
          <div className="cards" key={index}>
            <FlightCard
              data={item}
              handleBooking={value => props.handleBooking(value)}
            />
          </div>
        );
      });
    }
    return flightList;
  };

  return (
    <div className={`flight-list-wrapper ${props.column}`}>
      {_renderFlightTiles()}
    </div>
  );
};

FlightList.defaultProps = {
  data: []
};

FlightList.propTypes = {
  data: PropTypes.array.isRequired
};

export default React.memo(FlightList);

import React, { useContext } from "react";
import { Button } from "../../../components";
import { Images } from "../../../constants";
import { CityContext } from "../../../App";
import { filterData } from "../../../utils/filter";
import * as moment from "moment";
import "./FlightCard.scss";

function FlightCard({ data, handleBooking }) {
  console.log(data);
  const cityList = useContext(CityContext);
  const { source, dest, date, price } = data || {};
  let sourceCity = cityList && filterData(cityList, "code", source)[0];
  let destinationCity = cityList && filterData(cityList, "code", dest)[0];
  return (
    <div className="flight-card-wrapper">
      <div className="image-wrapper">
        <img src={Images.AIR_INDIA} alt="Air India Logo" />
      </div>
      <div className="flight-details">
        <div className="date">
          {`Air India - ${moment(date, "DD-MM-YYYY").format("DD MMM")}`}
        </div>
        <div className="trip">{`${sourceCity.name} - ${destinationCity.name}`}</div>
        <div className="price">{`$${price}`}</div>
      </div>
      <div className="flight-book-button">
        <Button text="Book" size="large" onClick={() => handleBooking(data)} />
      </div>
    </div>
  );
}

export default FlightCard;

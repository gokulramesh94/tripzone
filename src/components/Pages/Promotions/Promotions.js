import React from "react";
import { Button, Container, LocationList } from "../../../components";
import "./Promotions.scss";

function Promotions({promotions, cityInfo, loadPreviousSearch, showPreviousButton}) {
  return (
    <div className="content-wrapper">
      <Container color="yellow" padding="padding-tiny">
        <div className="promotions-wrapper">
          <div className="title">
            {cityInfo && `Travelling to ${cityInfo.name}? Know more about it.`}
          </div>
          <div className="weather">
            {cityInfo && cityInfo.weather}
          </div>
          <div className="city-description">
            {(cityInfo && cityInfo.description) ||
              "No Description available for this destination!"}
          </div>
          <div className="locations">
            <LocationList data={promotions} />
          </div>
          {showPreviousButton &&
            <div className="previous-button-wrapper">
              <Button
                text="Previous"
                size="large"
                onClick={() => loadPreviousSearch()}
              />
            </div>}
        </div>
      </Container>
    </div>
  );
}

export default React.memo(Promotions);

import React, { useState } from "react";
import {
  Container,
  FlightList
} from "../../../components";
import { BookingSection } from "../../pages";
import { Strings } from "../../../constants";

function AvailableFlightsSection({ flights }) {
  
  const [selectedFlight, setSelectedFlight] = useState();
  const _handleBooking = value => {
    console.log("Book clicked!", value);
    setSelectedFlight(value);
  };

  return (
    <div>
      <div className="content-wrapper">
        <Container color="green" padding="padding-tiny">
          <div className="title">
            {
              Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_FOUR
                .TITLE
            }
          </div>
          <FlightList
            data={flights}
            handleBooking={value => _handleBooking(value)}
          />
        </Container>
      </div>
      {selectedFlight ? <BookingSection data={selectedFlight} /> : null}
    </div>
  );
}

export default React.memo(AvailableFlightsSection);

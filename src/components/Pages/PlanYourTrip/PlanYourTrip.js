import React, { useContext } from "react";
import { Button, Container, SelectBox } from "../../../components";
import { Messages, Strings } from "../../../constants";
import { CityContext } from "../../../App";
import "./PlanYourTrip.scss";

const PlanYourTrip = ({ trip, setSource, setDestination, getFlights }) => {
  const { source, destination } = trip;
  const cities = useContext(CityContext);
  const _handleDropSearch = () => {
    if (source === "" || destination === "") {
      alert(Messages.SELECT_OPTIONS_ALERT);
    } else if (source === destination) {
      alert(Messages.SAME_OPTION_SELECTED_ALERT);
    } else {
      getFlights();
    }
  };

  return (
    <div className="content-wrapper">
      <Container color="blue" padding="padding-tiny">
        <div className="title">
          {Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_TWO.TITLE}
        </div>
        <div className="dropdown-search-wrapper">
          <SelectBox
            labelText="Source"
            data={cities}
            value={source}
            handleChange={value => {
              if (value !== "") setSource(value);
            }}
          />
          <SelectBox
            labelText="Destination"
            data={cities}
            value={destination}
            handleChange={value => {
              if (value !== "") {
                setDestination(value);
              }
            }}
          />
        </div>
        <Button size="large" onClick={() => _handleDropSearch()} />
      </Container>
    </div>
  );
}

export default React.memo(PlanYourTrip);

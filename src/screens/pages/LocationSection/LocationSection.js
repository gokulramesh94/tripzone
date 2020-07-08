import React, { useEffect, useState, useRef } from "react";
import { Container, Loader, LocationList } from "../../../components";
import { Strings } from "../../../constants";
import { getTouristSpots } from "../../../services";
import "./LocationSection.scss";

function LocationSection() {
  const [allLocations, setAllLocations] = useState([]);
  const loader = useRef();

  useEffect(() => {
    _fetchAllLocations();
  }, []);

  const _fetchAllLocations = () => {
    loader.current.classList.remove("hide");
    getTouristSpots("ALL")
      .then(response => {
        //console.log("getTouristSpots : ", response);
        setAllLocations(response);
        loader.current.classList.add("hide");
      })
      .catch(error => {
        loader.current.classList.add("hide");
        console.log(error);
      });
  };

  return (
    <div className="content-wrapper">
      <Container color="grey" padding="padding-tiny">
        <div className="location-container-wrapper">
          <div className="title">
            {Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_SIX.TITLE}
          </div>
          <div className="locations">
            <LocationList data={allLocations} />
          </div>
        </div>
      </Container>
      <div ref={loader} className="loader-container">
        <Loader />
      </div>
    </div>
  );
}

export default LocationSection;

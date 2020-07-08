import React, { useState, useRef, useEffect } from "react";
import { UserContext, CityContext } from "../App";
import {
  Button,
  Container,
  Header,
  Loader,
  LocationList,
  SelectBox
} from "../components";
import {
  AvailableFlightsSection,
  LocationSection,
  SearchSection
} from "./pages";
import { Strings, Messages } from "../constants";
import {
  loginUser,
  getCities,
  getCityInformation,
  getFlights,
  getTouristSpots
} from "../services";
import "./HomeScreen.scss";

function HomeScreen() {
  console.log("HomeScreen");
  const inputRef = useRef();
  const loader = useRef();
  const [userInfo, setUserInfo] = useState({});
  const [cities, setCities] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState();
  const [cityInfo, setCityInfo] = useState({});
  const [promotions, setPromotions] = useState([]);
  const [previousSearchText, setPreviousSearchText] = useState([]);

  useEffect(() => {
    _fetchUser();
    _fetchCities();
    inputRef.current.focus();
  }, []);

  const _fetchUser = () => {
    loader.current.classList.remove("hide");
    const { username, password } = Strings.APPLICATION.USER_DETAILS.NIRANJAN;
    loginUser(username, password)
      .then(response => {
        //console.log("loginUser : ", response);
        setUserInfo(response);
        loader.current.classList.add("hide");
      })
      .catch(error => {
        loader.current.classList.add("hide");
        console.log(error);
      });
  };

  const _fetchCities = () => {
    loader.current.classList.remove("hide");
    getCities()
      .then(response => {
        //console.log("getCities : ", response);
        setCities(response);
        loader.current.classList.add("hide");
      })
      .catch(error => {
        loader.current.classList.add("hide");
        console.log(error);
      });
  };

  const _fetchFlights = () => {
    loader.current.classList.remove("hide");
    getFlights(source, destination)
      .then(response => {
        //console.log("getFlights : ", response);
        setFlights(response);
        loader.current.classList.add("hide");
      })
      .catch(error => {
        loader.current.classList.add("hide");
        console.log(error);
      });
  };

  const _fetchCityInfo = dest => {
    loader.current.classList.remove("hide");
    getCityInformation(dest)
      .then(response => {
        //console.log("getCityInformation : ", response);
        setCityInfo(response);
        loader.current.classList.add("hide");
      })
      .catch(error => {
        loader.current.classList.add("hide");
        console.log(error);
      });
  };

  const _fetchTouristSpots = dest => {
    loader.current.classList.remove("hide");
    getTouristSpots(dest)
      .then(response => {
        //console.log("getTouristSpots : ", response);
        setPromotions(response);
        loader.current.classList.add("hide");
      })
      .catch(error => {
        loader.current.classList.add("hide");
        console.log(error);
      });
  };

  const _handleDropSearch = () => {
    if (source === "" || destination === "") {
      alert(Messages.SELECT_OPTIONS_ALERT);
    } else if (source === destination) {
      alert(Messages.SAME_OPTION_SELECTED_ALERT);
    } else {
      _fetchFlights();
    }
  };

  const _loadPreviousSearchResult = () => {
    let value = previousSearchText[previousSearchText.length - 2];
    _fetchCityInfo(value);
    _fetchTouristSpots(value);
    setPreviousSearchText(
      previousSearchText.splice(previousSearchText.length - 1, 1)
    );
  };

  return (
    <UserContext.Provider value={userInfo}>
      <CityContext.Provider value={cities}>
        <Header />
        <div className="main-content-wrapper">
          <div className="left-container">
            <SearchSection
              ref={inputRef}
              previousSearchText={previousSearchText}
              setPreviousSearchText={value => setPreviousSearchText(value)}
              cityInfo={value => {
                _fetchCityInfo(value);
                _fetchTouristSpots(value);
              }}
            />
            {destination !== "" || previousSearchText.length !== 0
              ? <div className="content-wrapper">
                  <Container color="yellow" padding="padding-tiny">
                    <div className="promotions-wrapper">
                      <div className="title">
                        {cityInfo &&
                          `Travelling to ${cityInfo.name}? Know more about it.`}
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
                      {previousSearchText.length > 1
                        ? <div className="previous-button-wrapper">
                            <Button
                              text="Previous"
                              size="large"
                              onClick={() => _loadPreviousSearchResult()}
                            />
                          </div>
                        : null}
                    </div>
                  </Container>
                </div>
              : null}
            <LocationSection />
          </div>
          <div className="right-container">
            <div className="content-wrapper">
              <Container color="blue" padding="padding-tiny">
                <div className="title">
                  {
                    Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_TWO
                      .TITLE
                  }
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
                        setPreviousSearchText([]);
                        setFlights();
                        setDestination(value);
                        _fetchCityInfo(value);
                        _fetchTouristSpots(value);
                      }
                    }}
                  />
                </div>
                <Button size="large" onClick={() => _handleDropSearch()} />
              </Container>
            </div>
            {flights ? <AvailableFlightsSection flights={flights} /> : null}
          </div>
        </div>
        <div ref={loader} className="loader-container">
          <Loader />
        </div>
      </CityContext.Provider>
    </UserContext.Provider>
  );
}

export default HomeScreen;

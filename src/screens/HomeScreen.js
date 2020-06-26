import React, { useState, useRef, useEffect } from "react";
import { UserContext, CityContext } from "../App";
import {
  Button,
  ButtonGroup,
  Container,
  DiscountDisplayer,
  FlightList,
  Header,
  LocationList,
  SearchInput,
  SelectBox
} from "../components";
import { Images, Strings, Messages } from "../constants";
import {
  loginUser,
  getCities,
  getCityInformation,
  getFlights,
  getTouristSpots
} from "../services";
import { filterData } from "../utils/filter";
import "./HomeScreen.scss";

function HomeScreen() {
  //console.log("HomeScreen");
  const inputRef = useRef();
  const [userInfo, setUserInfo] = useState({});
  const [searchText, setSearchText] = useState("");
  const [cities, setCities] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState();
  const [cityInfo, setCityInfo] = useState({});
  const [promotions, setPromotions] = useState([]);
  const [previousSearchText, setPreviousSearchText] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState();
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(5);

  useEffect(() => {
    _fetchUser();
    _fetchAllLocations();
    _fetchCities();
    inputRef.current.focus();
  }, []);

  const _fetchAllLocations = () => {
    getTouristSpots("ALL")
      .then(response => {
        //console.log("getTouristSpots : ", response);
        setAllLocations(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const _fetchUser = () => {
    const { username, password } = Strings.APPLICATION.USER_DETAILS.NIJIN;
    loginUser(username, password)
      .then(response => {
        console.log("loginUser : ", response);
        setUserInfo(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const _fetchCities = () => {
    getCities()
      .then(response => {
        console.log("getCities : ", response);
        setCities(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const _fetchFlights = () => {
    getFlights(source, destination)
      .then(response => {
        console.log("getFlights : ", response);
        setFlights(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const _fetchCityInfo = dest => {
    getCityInformation(dest)
      .then(response => {
        console.log("getCityInformation : ", response);
        setCityInfo(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const _fetchTouristSpots = dest => {
    getTouristSpots(dest)
      .then(response => {
        console.log("getTouristSpots : ", response);
        setPromotions(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const _handleSearchText = event => {
    setSearchText(event.target.value);
  };

  const _handleSearchSubmit = event => {
    if (event.key === "Enter") {
      let city = filterData(cities, "name", searchText);
      if (city.length !== 0) {
        let cityCode = city[0].code || "";
        setPreviousSearchText([...previousSearchText, cityCode]);
        _fetchCityInfo(cityCode);
        _fetchTouristSpots(cityCode);
        setSearchText("");
      } else {
        alert(`Couldn't find any search results for ${searchText}!`);
      }
    }
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
    setPreviousSearchText([]);
  };

  const _handleBooking = value => {
    console.log("Book clicked!", value);
    setSelectedFlight(value);
  };

  return (
    <UserContext.Provider value={userInfo}>
      <CityContext.Provider value={cities}>
        <Header />
        <div className="main-content-wrapper">
          <div className="left-container">
            <div className="content-wrapper">
              <Container color="grey" padding="padding-tiny">
                <div className="search-container-wrapper">
                  <div className="title">
                    {
                      Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                        .CONTAINER_ONE.TITLE
                    }
                  </div>
                  <div className="search-contents">
                    <div className="content">
                      {
                        Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                          .CONTAINER_ONE.TEXT_CONTENT_ONE
                      }
                    </div>
                    <div className="content">
                      {
                        Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                          .CONTAINER_ONE.TEXT_CONTENT_TWO
                      }
                    </div>
                    <SearchInput
                      value={searchText}
                      ref={inputRef}
                      onChange={event => _handleSearchText(event)}
                      onEnter={event => _handleSearchSubmit(event)}
                    />
                  </div>
                </div>
              </Container>
            </div>
            {destination !== ""
              ? <div className="content-wrapper">
                  <Container color="yellow" padding="padding-tiny">
                    <div className="promotions-wrapper">
                      <div className="title">
                        {`Travelling to ${cityInfo.name}? Know more about it.`}
                      </div>
                      <div className="weather">
                        {cityInfo.weather}
                      </div>
                      <div className="city-description">
                        {cityInfo.description ||
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
            <div className="content-wrapper">
              <Container color="grey" padding="padding-tiny">
                <div className="location-container-wrapper">
                  <div className="title">
                    {
                      Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                        .CONTAINER_SIX.TITLE
                    }
                  </div>
                  <div className="locations">
                    <LocationList data={allLocations} />
                  </div>
                </div>
              </Container>
            </div>
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
                    handleChange={value => setSource(value)}
                  />
                  <SelectBox
                    labelText="Destination"
                    data={cities}
                    value={destination}
                    handleChange={value => {
                      setPreviousSearchText([]);
                      setDestination(value);
                      _fetchCityInfo(value);
                      _fetchTouristSpots(value);
                    }}
                  />
                </div>
                <Button size="large" onClick={() => _handleDropSearch()} />
              </Container>
            </div>
            {flights
              ? <div className="content-wrapper">
                  <Container color="green" padding="padding-tiny">
                    <div className="title">
                      {
                        Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                          .CONTAINER_FOUR.TITLE
                      }
                    </div>
                    <FlightList
                      data={flights}
                      handleBooking={value => _handleBooking(value)}
                    />
                  </Container>
                </div>
              : null}
            {selectedFlight
              ? <div className="content-wrapper">
                  <Container color="blue" padding="padding-tiny">
                    <div className="booking-container">
                      <div className="title">
                        {
                          Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                            .CONTAINER_THREE.TITLE
                        }
                      </div>
                      <div className="price">{`$ ${selectedFlight.price}`}</div>
                      <div className="rates">
                        <DiscountDisplayer
                          title="Membership Discount"
                          price={discount + 10}
                        />
                        <DiscountDisplayer
                          title="Tax Amount"
                          price={
                            selectedFlight.price
                              ? selectedFlight.price * tax / 100
                              : tax
                          }
                        />
                      </div>
                      <div className="description">
                        {
                          Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                            .CONTAINER_THREE.TEXT_CONTENT_ONE
                        }
                      </div>
                      <ButtonGroup
                        data={
                          Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                            .CONTAINER_THREE.BUTTON_GROUP.MEMBERSHIP_DISCOUNT
                        }
                        handleclick={value => setDiscount(value)}
                      />
                      <div className="description">
                        {
                          Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                            .CONTAINER_THREE.TEXT_CONTENT_TWO
                        }
                      </div>
                      <ButtonGroup
                        data={
                          Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                            .CONTAINER_THREE.BUTTON_GROUP.TAX_AMOUNT
                        }
                        handleclick={value => setTax(value)}
                      />
                      <div className="description">
                        {
                          Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT
                            .CONTAINER_THREE.TEXT_CONTENT_THREE
                        }
                      </div>
                      <Button
                        text="Proceed to Pay"
                        size="large"
                        onClick={() => alert("Payment Successful!")}
                      />
                      {userInfo && userInfo.prime === "true"
                        ? <div className="prime-logo-wrapper">
                            <img src={Images.PRIME} alt="Prime logo" />
                          </div>
                        : null}
                    </div>
                  </Container>
                </div>
              : null}
          </div>
        </div>
      </CityContext.Provider>
    </UserContext.Provider>
  );
}

export default HomeScreen;

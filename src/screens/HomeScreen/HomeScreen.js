import React, { useCallback, useState, useRef, useEffect } from "react";
import { UserContext, CityContext } from "../../App";
import {
  AvailableFlights,
  Header,
  Loader,
  Locations,
  PlanYourTrip,
  Promotions,
  SearchSection
} from "../../components";
import { Strings } from "../../constants";
import {
  loginUser,
  getCities,
  getCityInformation,
  getFlights,
  getTouristSpots
} from "../../services";
import "./HomeScreen.scss";

function HomeScreen() {
  console.log("HomeScreen");
  const inputRef = useRef();
  const loader = useRef();
  const [userInfo, setUserInfo] = useState({});
  const [cities, setCities] = useState([]);
  const [trip, setTrip] = useState({ source: "", destination: "" });
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
    getFlights(trip.source, trip.destination)
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
              cityInfo={useCallback(
                value => {
                  setPreviousSearchText([...previousSearchText, value]);
                  _fetchCityInfo(value);
                  _fetchTouristSpots(value);
                },
                [previousSearchText]
              )}
            />
            {((trip.destination && trip.destination !== "") ||
              previousSearchText.length !== 0) &&
              <Promotions
                promotions={promotions}
                cityInfo={cityInfo}
                loadPreviousSearch={() => _loadPreviousSearchResult()}
                showPreviousButton={
                  previousSearchText.length > 1 ? true : false
                }
              />}
            <Locations />
          </div>
          <div className="right-container">
            <PlanYourTrip
              trip={trip}
              setSource={useCallback(
                source => {
                  setTrip({ ...trip, source: source });
                },
                [trip]
              )}
              setDestination={useCallback(
                dest => {
                  setTrip({ ...trip, destination: dest });
                  setPreviousSearchText([]);
                  setFlights();
                  _fetchCityInfo(dest);
                  _fetchTouristSpots(dest);
                },
                [trip]
              )}
              getFlights={() => _fetchFlights()}
            />
            {flights && <AvailableFlights flights={flights} />}
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

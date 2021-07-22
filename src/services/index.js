import { getFlights } from "./FlightService";
import { getIST, getWorldClocks } from "./TimeZoneService";
import {
  getCities,
  getCityInformation,
  getTouristSpots,
} from "./TourismService";
import { loginUser } from "./UserInfoService";

export {
  getCities,
  getCityInformation,
  getFlights,
  getIST,
  getTouristSpots,
  getWorldClocks,
  loginUser,
};

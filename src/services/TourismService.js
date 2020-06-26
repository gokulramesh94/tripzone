import appAxios from "../utils/axios";
import { Strings } from "../constants";

export const getCities = async () => {
  try {
    const response = await appAxios.get(
      Strings.APPLICATION.END_POINTS.CITIES,
      {}
    );
    return response.data;
  } catch (error) {
    console.log("Error - TourismService -> getCities : ", error);
  }
};

export const getTouristSpots = async destinationCode => {
  try {
    const response = await appAxios.get(
      Strings.APPLICATION.END_POINTS.TOURIST_SPOTS + `/${destinationCode}`,
      {}
    );
    return response.data;
  } catch (error) {
    console.log("Error - TourismService -> getTouristSpots : ", error);
  }
};

export const getCityInformation = async destinationCode => {
  try {
    const response = await appAxios.get(
      Strings.APPLICATION.END_POINTS.CITY_INFO + `/${destinationCode}`,
      {}
    );
    return response.data;
  } catch (error) {
    console.log("Error - TourismService -> getCityInformation : ", error);
  }
};

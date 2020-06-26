import appAxios from "../utils/axios";
import { Strings } from "../constants";

export const getFlights = async (sourceCode, destinationCode) => {
  try {
    const response = await appAxios.get(
      Strings.APPLICATION.END_POINTS.FLIGHTS,
      {
        params: {
          src: sourceCode,
          dest: destinationCode
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error - FlightService -> getFlights : ", error);
  }
};

import appAxios from "../utils/axios";
import { Strings } from "../constants";

export const getWorldClocks = async () => {
  try {
    const response = await appAxios.get(
      Strings.APPLICATION.END_POINTS.WORLD_CLOCK,
      {}
    );
    return response.data;
  } catch (error) {
    console.log("Error - TimeZoneService -> getWorldClocks : ", error);
  }
};

export const getIST = async () => {
  try {
    const response = await appAxios.get(Strings.APPLICATION.END_POINTS.IST, {});
    return response.data;
  } catch (error) {
    console.log("Error - TimeZoneService -> getIST : ", error);
  }
};

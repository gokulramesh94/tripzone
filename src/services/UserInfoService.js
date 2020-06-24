import appAxios from "../utils/axios";
import { Strings } from "../constants";

export const loginUser = async (username, password) => {
  try {
    const response = await appAxios.get(Strings.APPLICATION.END_POINTS.LOGIN, {
      params: {
        username,
        password
      }
    });
    return response.data;
  } catch (error) {
    console.log("Error - loginService -> loginUser : ", error);
  }
};

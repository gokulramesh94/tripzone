import * as moment from "moment";
import { Strings } from "../constants";

export const getDateTime = (currentDateTime, offset) => {
  const date = moment(currentDateTime);
  if (isNaN(Date.parse(date))) {
    return {};
  }
  const dateVal = offset
    ? date.utcOffset(offset).format(Strings.APPLICATION.DATE_TIME_FORMAT.DATE)
    : date.format(Strings.APPLICATION.DATE_TIME_FORMAT.DATE);
  const timeVal = offset
    ? date.utcOffset(offset).format(Strings.APPLICATION.DATE_TIME_FORMAT.TIME)
    : date.format(Strings.APPLICATION.DATE_TIME_FORMAT.TIME);
  return {
    date: dateVal,
    time: timeVal
  };
};

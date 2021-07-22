import { useEffect, useState } from "react";
import { getDateTime } from "../utils/timeUtils";
import { getIST, getWorldClocks } from "../services";

function useWorldClock() {
  const [sessionTime, setSessionTime] = useState(0);
  const [offset, setOffset] = useState({});
  const [worldTime, setWorldTime] = useState({});

  const getDate = () => {
    getIST().then((istResponse) => {
      getWorldClocks()
        .then((response) => {
          setOffset(response.utcOffset);
          setWorldTime({
            est: getDateTime(response.currentDateTime, response.utcOffset),
            ist: getDateTime(response.currentDateTime, istResponse.utc_offset),
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  useEffect(() => {
    getDate();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSessionTime((sessionTime) => sessionTime + 1);
      let date = new Date();
      setWorldTime({ est: getDateTime(date, offset), ist: getDateTime(date) });
    }, 1000 * 60);
    return () => clearTimeout(timer);
  }, [offset, sessionTime]);
  return [sessionTime, worldTime];
}

export default useWorldClock;

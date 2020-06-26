import React, { useContext, useEffect, useState } from "react";
import { Tile } from "../../components";
import { Images } from "../../constants";
import { getWorldClocks } from "../../services";
import { UserContext } from "../../App";
import { getDateTime } from "../../utils/timeUtils";
import "./Header.scss";

function Header() {
  //console.log("Header");

  const userInfo = useContext(UserContext);
  const welcomeText = `Hi, ${userInfo.name}`;
  const [sessionTime, setSessionTime] = useState(0);
  const [estTime, setEstTime] = useState({});
  const [istTime, setIstTime] = useState({});
  const [offset, setOffset] = useState({});

  const getDate = () => {
    getWorldClocks()
      .then(response => {
        setOffset(response.utcOffset);
        setEstTime(getDateTime(response.currentDateTime, response.utcOffset));
        setIstTime(getDateTime(response.currentDateTime));
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getDate();
  }, []);

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setSessionTime(sessionTime => sessionTime + 1);
        let date = new Date();
        setEstTime(getDateTime(date, offset));
        setIstTime(getDateTime(date));
      }, 1000 * 60);
      return () => clearTimeout(timer);
    },
    [offset, sessionTime]
  );

  return (
    <div className="header-wrapper">
      <div className="header-left-wrapper">
        <div className="tripzone-logo">
          <img src={Images.LOGO} alt="TripZone" />
        </div>
        {userInfo && userInfo.prime === "true"
          ? <div className="prime-logo">
              <img src={Images.PRIME} alt="Prime Logo" />
            </div>
          : null}
      </div>
      <div className="header-right-wrapper">
        <div className="tile-wrapper">
          <Tile title="SESSION TIME" time={`${sessionTime} MIN`} />
          <Tile title={`${estTime.date} - EST`} time={estTime.time} />
          <Tile title={`${istTime.date} - IST`} time={istTime.time} />
        </div>
        <div className="welcome-text-wrapper">
          {welcomeText}
        </div>
      </div>
    </div>
  );
}

export default Header;

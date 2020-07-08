import React, { useContext } from "react";
import { Tile } from "../../components";
import { Images } from "../../constants";
import { UserContext } from "../../App";
import { useWorldClock } from "../../hooks";
import "./Header.scss";

function Header() {
  console.log("Header");

  const userInfo = useContext(UserContext);
  const welcomeText = userInfo && userInfo.name && `Hi, ${userInfo.name}`;
  
  var [sessionTime, worldTime] = useWorldClock();

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
            <Tile
              title={worldTime.est && worldTime.est.date && `${worldTime.est.date} - EST`}
              time={worldTime.est && worldTime.est.time}
            />
            <Tile
              title={worldTime.ist && worldTime.ist.date && `${worldTime.ist.date} - IST`}
              time={worldTime.ist && worldTime.ist.time}
            />
          </div>
          <div className="welcome-text-wrapper">
            {welcomeText}
          </div>
        </div>
    </div>
  );
}

export default Header;

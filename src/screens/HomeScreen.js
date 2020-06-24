import React, { useState, useEffect } from "react";
import { UserContext } from "../App";
import { Header } from "../components";
import { Strings } from "../constants";
import { loginUser } from "../services";
import "./HomeScreen.scss";

function HomeScreen() {
  //console.log("HomeScreen");
  const [userInfo, setUserInfo] = useState({});

  const fetchUser = async () => {
    const { username, password } = Strings.APPLICATION.USER_DETAILS.NIJIN;
    const userInfo = await loginUser(username, password);
    setUserInfo(userInfo);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={userInfo}>
      <Header />
      <div className="main-content-wrapper">
        <div className="left-container"></div>
        <div className="right-container"></div>
      </div>
    </UserContext.Provider>
  );
}

export default HomeScreen;

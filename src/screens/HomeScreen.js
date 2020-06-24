import React, { useState, useEffect } from "react";
import { UserContext } from "../App";
import { Strings } from "../constants";
import { loginUser } from "../services";
import "./HomeScreen.scss";

function HomeScreen() {
  const [userInfo, setUserInfo] = useState({});

  const fetchUser = async () => {
    const { username, password } = Strings.APPLICATION.USER_DETAILS;
    const userInfo = await loginUser(username, password);
    setUserInfo(userInfo);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={userInfo}>
      <div>HomeScreen</div>
    </UserContext.Provider>
  );
}

export default HomeScreen;

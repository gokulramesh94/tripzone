import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.scss";

export const UserContext = React.createContext({});

function App() {
  return <HomeScreen />;
}

export default App;

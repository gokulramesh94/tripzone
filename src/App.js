import React from "react";
import { Routes } from "./routes";
import "./App.scss";

export const UserContext = React.createContext({});
export const CityContext = React.createContext([]);

function App() {
  return <Routes />;
}

export default App;

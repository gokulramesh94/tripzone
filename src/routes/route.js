import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ErrorScreen from "../screens/ErrorScreen/ErrorScreen";
import { Strings } from "../constants";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={Strings.APPLICATION.ROUTES.HOME}
          exact
          component={HomeScreen}
        />
        <Route path={Strings.APPLICATION.ROUTES.ALL} component={ErrorScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

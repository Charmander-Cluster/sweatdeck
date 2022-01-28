import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/users/:id" component={UserProfile} />
      </Switch>
    </div>
  );
};

export default Routes;

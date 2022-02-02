import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import UserWorkouts from "./components/UserWorkouts";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/users/:id/workouts" component={UserWorkouts} />
        <Route path="/users/:id" component={UserProfile} />
      </Switch>
    </div>
  );
};

export default Routes;

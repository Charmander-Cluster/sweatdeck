import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import UserWorkouts from "./components/UserWorkouts";
import SingleWorkout from "./components/SingleWorkout";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/users/:id/workouts" component={UserWorkouts} />
        <Route
          exact
          path="/users/:id/workouts/:docId"
          component={SingleWorkout}
        />
        <Route exact path="/users/:id" component={UserProfile} />
      </Switch>
    </div>
  );
};

export default Routes;

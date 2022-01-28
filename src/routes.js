import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import CreateWorkout from "./components/CreateWorkout"

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/users/:id" component={UserProfile} />
        <Route exact path="/users/:id/create-workout" component={CreateWorkout}/>
        {/* <Route path="/users/create-workout" component={CreateWorkout}/> */}
      </Switch>
    </div>
  );
};

export default Routes;

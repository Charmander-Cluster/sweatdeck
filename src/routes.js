import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import SignUp from './components/SignUp'
import CreateWorkout from "./components/CreateWorkout"
import EditUser from "./components/EditUser";
import SignUp from "./components/SignUp";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/users/:id" component={UserProfile} />
        <Route exact path="/users/:id/create-workout" component={CreateWorkout} />
        <Route path='/signup' component={SignUp} />
        <Route path="/users/:id/edit" component={EditUser} />
        <Route path="/users/:id" component={UserProfile} />
      </Switch>
      <Switch>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default Routes;

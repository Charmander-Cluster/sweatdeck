import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
import SignUp from "./components/SignUp";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/users/:id" component={UserProfile} />
        <Route path="/edituser" component={EditUser} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default Routes;

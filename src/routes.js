import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/users/:id/edit" component={EditUser} />
        <Route path="/users/:id" component={UserProfile} />
      </Switch>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
};

export default Routes;

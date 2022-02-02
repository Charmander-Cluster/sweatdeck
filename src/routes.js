import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/users/:id/edit" component={EditUser} />
        <Route path="/users/:id" component={UserProfile} />
      </Switch>
      <Switch>
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Route exact path="/" component={Dashboard} />
    </div>
  );
};

export default Routes;

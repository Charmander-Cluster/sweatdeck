import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import SignUp from './components/SignUp'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/users/:id" component={UserProfile} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
};

export default Routes;

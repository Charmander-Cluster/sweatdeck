import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Routes = () => {
  const [user, setUser] = useState(getAuth().currentUser);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  return (
    <div>
      {user ? (
        <Switch>
          <Route path="/users/:id/edit" component={EditUser} />
          <Route exact path="/users/:id" component={UserProfile} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={SignIn} />
        </Switch>
      )}
    </div>
  );
};

export default Routes;

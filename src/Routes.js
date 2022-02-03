import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Dashboard from "./components/Dashboard";

const Routes = () => {
  // const auth = getAuth();
  // const user = auth.currentUser;

  //   const [user, setUser] = useState(getAuth().currentUser);
  //   const login = getAuth();
  //   onAuthStateChanged(login, (u) => {
  //     setUser(u);
  //   });

  return (
    <div>
      <Switch>
        <Route path="/users/:id/edit" component={EditUser} />
        <Route exact path="/users/:id" component={UserProfile} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
};

export default Routes;

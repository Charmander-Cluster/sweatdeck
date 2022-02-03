import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import SignUp from "./components/SignUp";
import EditUser from "./components/EditUser";
//import SingleWorkout from "./components/SingleWorkout"
import { CreateWorkout, SpotifyLogin, SelectPlaylist } from "./components";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
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
          <Route exact path="/createworkout" component={CreateWorkout} />
          <Route path="/spotifylogin" component={SpotifyLogin} />
          <Route path="/spotifyhome" component={SelectPlaylist} />
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

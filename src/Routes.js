import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import SignUp from './components/SignUp'
import EditUser from "./components/EditUser";
//import SingleWorkout from "./components/SingleWorkout"
import { CreateWorkout, CreateCardio, CreateStrength, SpotifyLogin, CardioPlaylist, StrengthPlaylist } from "./components"
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
        <Route exact path="/users/:id" component={UserProfile} />
        <Route exact path="/createworkout" component={CreateWorkout} />
        <Route exact path="/createworkout/cardio" component={CreateCardio} />
        <Route exact path="/createworkout/strength" component={CreateStrength} />
        {/* <Route path='/spotifylogin' component={SpotifyLogin}/> */}
        <Route path='/cardioplaylist' component={CardioPlaylist}/>
        <Route path='/strengthplaylist' component={StrengthPlaylist}/>
        <Route path="/users/:id/edit" component={EditUser} />
        {/* <Route path="/home" component={SingleWorkout} /> */}
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

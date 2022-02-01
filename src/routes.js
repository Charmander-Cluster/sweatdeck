import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import SignUp from './components/SignUp'
import EditUser from "./components/EditUser";
import SingleWorkout from "./components/SingleWorkout"
import { CreateWorkout, SpotifyLogin, SelectPlaylist } from "./components"

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/users/:id" component={UserProfile} />
        <Route exact path="/createworkout" component={CreateWorkout} />
        <Route path='/spotifylogin' component={SpotifyLogin}/>
        <Route path='/spotifyhome' component={SelectPlaylist}/>
        <Route path="/users/:id/edit" component={EditUser} />
        <Route path="/home" component={SingleWorkout} />
      </Switch>
      <Switch>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default Routes;

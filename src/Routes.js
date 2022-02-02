import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import SignUp from './components/SignUp'
import EditUser from "./components/EditUser";
import SingleWorkout from "./components/SingleWorkout"
import { CreateWorkout, SpotifyLogin, SelectPlaylist } from "./components"
import Dashboard from "./components/Dashboard";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/users/:id" component={UserProfile} />
        <Route exact path="/createworkout" component={CreateWorkout} />
        <Route path='/spotifylogin' component={SpotifyLogin}/>
        <Route path='/spotifyhome' component={SelectPlaylist}/>
        <Route path="/users/:id/edit" component={EditUser} />
<<<<<<< HEAD:src/routes.js
        <Route path="/home" component={SingleWorkout} />
=======
        <Route path="/users/:id" component={UserProfile} />
>>>>>>> main:src/Routes.js
      </Switch>
      <Switch>
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Route exact path="/" component={Dashboard} />
    </div>
  );
};

export default Routes;

import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import SignUp from './components/SignUp'
import EditUser from "./components/EditUser";
import { CreateWorkout, SpotifyLogin, SpotifyHome } from "./components"

const Routes = (props) => {
  const code = props.code
  return (
    <div>
      <Switch>
        <Route exact path="/users/:id" component={UserProfile} />
        <Route path='/users/:id/spotify-login' component={SpotifyLogin}/>
        <Route path='/spotify-home' render={(props) => <SpotifyHome {...props} code={code} />}/>
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

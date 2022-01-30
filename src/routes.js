import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import SignUp from './components/SignUp'
import { CreateWorkout, SpotifyLogin, Home } from "./components"

const Routes = (props) => {
  const code = props.code

  return (
    <div>
      <Switch>
        <Route exact path="/users/:id" component={UserProfile} />
        <Route path='/signup' component={SignUp} />
        <Route path='/users/:id/spotify-login' component={SpotifyLogin}/>
        <Route path='/home' code={code} component={Home}/>
      </Switch>
    </div>
  );
};

export default Routes;

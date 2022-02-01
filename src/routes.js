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
        <Route path='/signup' component={SignUp} />
        <Route path='/users/:id/spotify-login' component={SpotifyLogin}/>
        <Route path='/spotify-home' render={(props) => <SpotifyHome {...props} code={code} />}/>
        <Route path="/users/:id/edit" component={EditUser} />
      </Switch>
    </div>
  );
};

export default Routes;

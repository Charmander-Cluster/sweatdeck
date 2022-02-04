import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
//import SingleWorkout from "./components/SingleWorkout"
import { CreateWorkout, SpotifyLogin, SelectPlaylist } from "./components";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchLoginUser } from "./store";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./components/SignUp";
import OptionalSignUp from "./components/OptionalSignUp";

const Routes = () => {
  const authUser = useSelector((state) => state.auth);

  const [user, setUser] = useState(getAuth().currentUser);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!authUser.uid || isLoading) {
      dispatch(fetchLoginUser());
    }

    return () => {
      setLoading(false);
    };
  }, [dispatch, authUser.uid, isLoading]);

  // console.log(authUser);

  return (
    <div>
      {user ? (
        <Switch>
          <Route exact path="/optionalsignup" component={OptionalSignUp} />
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

import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/Profile/UserProfile";
import EditUser from "./components/Profile/EditUser";
//import SingleWorkout from "./components/SingleWorkout"
import {
  CreateWorkout,
  CreateCardio,
  CreateStrength,
  SpotifyLogin,
  CardioPlaylist,
  StrengthPlaylist,
  ConfirmCardioCreate,
} from "./components";
import Dashboard from "./components/Home/Dashboard";
import SignIn from "./components/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchLoginUser } from "./store";
import { useSelector } from "react-redux";
import OptionalSignUp from "./components/OptionalSignUp";
import SingleWorkout from "./components/SingleWorkout";
import UserWorkouts from "./components/UserWorkouts";
import CardioOrStrengthButtons from "./components/CardioOrStrengthButtons";
import DashboardTest from "./components/DashboardTest";

const Routes = (props) => {
  const authUser = useSelector((state) => state.auth);

  // console.log(authUser);

  return (
    <>
      {authUser.uid ? (
        <Switch>
          <Route exact path="/dashboardtest" component={DashboardTest} />
          <Route exact path="/optionalsignup" component={OptionalSignUp} />
          <Route exact path="/createworkout" component={CreateWorkout} />
          <Route exact path="/createworkout/cardio" component={CreateCardio} />
          <Route
            exact
            path="/createworkout/strength"
            component={CreateStrength}
          />
          {/* <Route path='/spotifylogin' component={SpotifyLogin}/> */}
          <Route path="/cardioplaylist" component={CardioPlaylist} />
          <Route path="/strengthplaylist" component={StrengthPlaylist} />
          <Route path="/confirmcardiocreate" component={ConfirmCardioCreate} />
          <Route path="/users/:id/workouts/:docId" component={SingleWorkout} />
          <Route exact path="/users/:id/workouts" component={UserWorkouts} />
          <Route
            exact
            path="/users/:id/chooseworkout"
            component={CardioOrStrengthButtons}
          />
          <Route path="/users/:id/edit" component={EditUser} />
          <Route exact path="/users/:id" component={UserProfile} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Routes;

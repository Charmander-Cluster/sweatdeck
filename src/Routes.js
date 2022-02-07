import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
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
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchLoginUser } from "./store";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./components/SignUp";
import OptionalSignUp from "./components/OptionalSignUp";
import SingleWorkout from "./components/Workouts/SingleWorkout";
import UserWorkouts from "./components/Workouts/UserWorkouts";
import CardioOrStrengthButtons from "./components/Workouts/CardioOrStrengthButtons";
import EditCardioWorkout from "./components/Workouts/EditWorkout/EditCardioWorkout"

const Routes = (props) => {
  const authUser = useSelector((state) => state.auth);

  // console.log(authUser);

  return (
    <>
      {authUser.uid ? (
        <Switch>
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
          <Route exact path="/users/:id/workouts/:docId/editCardio" component={EditCardioWorkout} />
          <Route exact path="/users/:id/workouts/:docId" component={SingleWorkout} />
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

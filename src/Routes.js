import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/User/UserProfile";
import EditUser from "./components/User/EditUser";
//import SingleWorkout from "./components/SingleWorkout"
import {
  CreateWorkout,
  CreateCardio,
  CreateStrength,
  SpotifyLogin,
  CardioPlaylist,
  StrengthPlaylist,
  ConfirmCardioCreate,
  ConfirmStrengthCreate,
} from "./components";
import Dashboard from "./components/Home/Dashboard";
import SignIn from "./components/User/SignIn";
import { useSelector } from "react-redux";
import SingleWorkout from "./components/Workouts/SingleWorkout";
import UserWorkouts from "./components/Workouts/UserWorkouts";
import CardioOrStrengthButtons from "./components/Workouts/CardioOrStrengthButtons";
import SignUp from "./components/User/SignUp";
import EditCardioWorkout from "./components/Workouts/EditWorkout/EditCardioWorkout";
import EditStrengthWorkout from "./components/Workouts/EditWorkout/EditStrengthWorkout";
import Popup from "./components/Popup";
import RecommendedWorkouts from "./components/RecommendedWorkouts"
import RecommendedSingleWorkout from "./components/RecommendedSingleWorkout"

import PasswordReset from "./components/User/PasswordReset";

const Routes = () => {
  const authUser = useSelector((state) => state.auth);

  return (
    <>
      {authUser.uid ? (
        <Switch>
          <Route exact path="/signup" component={SignUp} />
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
          <Route
            exact
            path="/users/:id/workouts/:docId/editcardio"
            component={EditCardioWorkout}
          />
          <Route
            exact
            path="/users/:id/workouts/:docId/editstrength"
            component={EditStrengthWorkout}
          />
          <Route
            path="/confirmstrengthcreate"
            component={ConfirmStrengthCreate}
          />
          <Route
            exact
            path="/users/:id/workouts/:docId"
            component={SingleWorkout}
          />
          <Route exact path="/users/:id/workouts" component={UserWorkouts} />
          <Route exact path="/users/:id/recommendedWorkouts" component={RecommendedWorkouts} />
          <Route exact path="/users/:id/recommendedWorkouts/:docId" component={RecommendedSingleWorkout} />

          <Route
            exact
            path="/users/:id/chooseworkout"
            component={CardioOrStrengthButtons}
          />
          <Route path="/users/:id/edit" component={EditUser} />
          <Route exact path="/users/:id" component={UserProfile} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Popup" component={Popup} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/passwordreset" component={PasswordReset} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/" component={SignIn} />
        </Switch>
      )}
    </>
  );
};

export default Routes;

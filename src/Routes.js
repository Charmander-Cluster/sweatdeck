import React, { useEffect, useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./components/User/UserProfile";
import EditUser from "./components/User/EditUser";
//import SingleWorkout from "./components/SingleWorkout"
import {
  CreateWorkout,
  CreateCardio,
  CreateStrength,
  CardioPlaylist,
  StrengthPlaylist,
  ConfirmCardioCreate,
  ConfirmStrengthCreate,
  CardioNoPlaylist,
  StrengthNoPlaylist,
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
import RecommendedWorkouts from "./components/RecommendedWorkouts";
import RecommendedSingleWorkout from "./components/RecommendedSingleWorkout";

import PasswordReset from "./components/User/PasswordReset";
import BarRoute from "./components/LoadingBar/BarRoute";

const Routes = () => {
  const authUser = useSelector((state) => state.auth);

  const restrictedRoutes = [
    {
      title: "UserProfile",
      path: "/users/:id",
      exact: true,
      component: UserProfile,
    },
    {
      title: "EditUser",
      path: "/users/:id/edit",
      exact: false,
      component: EditUser,
    },
    {
      title: "CardioOrStrengthButtons",
      path: "/users/:id/chooseworkout",
      exact: true,
      component: CardioOrStrengthButtons,
    },
    {
      title: "UserWorkouts",
      path: "/users/:id/workouts",
      exact: true,
      component: UserWorkouts,
    },
    {
      title: "SingleWorkout",
      path: "/users/:id/workouts/:docId",
      exact: true,
      component: SingleWorkout,
    },
    {
      title: "CardioNoPlaylist",
      path: "/createworkout/cardio/noplaylist",
      exact: true,
      component: CardioNoPlaylist,
    },
    {
      title: "StrengthNoPlaylist",
      path: "/createworkout/strength/noplaylist",
      exact: true,
      component: StrengthNoPlaylist,
    },
    // {
    //   title: "RecommendedWorkouts",
    //   path: "/users/:id/recommendedWorkouts",
    //   exact: true,
    //   component: RecommendedWorkouts,
    // },
    {
      title: "RecommendedSingleWorkout",
      path: "/users/:id/recommendedWorkouts/:docId",
      exact: true,
      component: RecommendedSingleWorkout,
    },
    {
      title: "ConfirmStrengthCreate",
      path: "/confirmstrengthcreate",
      exact: true,
      component: ConfirmStrengthCreate,
    },
    {
      title: "EditStrengthWorkout",
      path: "/users/:id/workouts/:docId/editstrength",
      exact: true,
      component: EditStrengthWorkout,
    },
    {
      title: "EditCardioWorkout",
      path: "/users/:id/workouts/:docId/editcardio",
      component: EditCardioWorkout,
    },
    {
      title: "ConfirmCardioCreate",
      path: "/confirmcardiocreate",
      component: ConfirmCardioCreate,
    },
    {
      title: "StrengthPlaylist",
      path: "/strengthplaylist",
      component: StrengthPlaylist,
    },
    {
      title: "CardioPlaylist",
      path: "/cardioplaylist",
      component: CardioPlaylist,
    },
    {
      title: "CreateStrength",
      path: "/createworkout/strength",
      exact: true,
      component: CreateStrength,
    },
    {
      title: "CreateCardio",
      path: "/createworkout/cardio",
      exact: true,
      component: CreateCardio,
    },
    {
      title: "CreateWorkout",
      path: "/createworkout",
      exact: true,
      component: CreateWorkout,
    },
    {
      title: "SignUp",
      path: "/signup",
      exact: true,
      component: SignUp,
    },
    {
      title: "Dashboard",
      path: "/",
      exact: false,
      component: Dashboard,
    },
  ];

  const routes = [
    {
      title: "SignUp",
      path: "/signup",
      exact: true,
      component: SignUp,
    },
    {
      title: "PasswordReset",
      path: "/passwordreset",
      exact: true,
      component: PasswordReset,
    },
    {
      title: "SignIn",
      path: "/",
      exact: false,
      component: SignIn,
    },
  ];

  return (
    <>
      {authUser.uid ? (
        <Switch>
          {restrictedRoutes.map((route, i) => (
            <BarRoute key={i} {...route} />
          ))}
        </Switch>
      ) : (
        <Switch>
          {routes.map((route, i) => (
            <BarRoute key={i} {...route} />
          ))}
        </Switch>
      )}
    </>
  );
};

export default Routes;

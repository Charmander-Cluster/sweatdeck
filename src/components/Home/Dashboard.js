import React, { useCallback, useEffect, useState } from "react";
import DynamicActivity from "../Cards/DynamicActivity";
import DynamicStrength from "../Cards/DynamicStrength";
import DynamicCardio from "../Cards/DynamicCardio";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestUserWorkoutThunk } from "../../store/workouts";
import EmptyDashboard from "./EmptyDashboard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);
  // const [isLoading, setLoading] = useState(true);

  const { latestWorkouts } = useSelector((state) => state.workouts);
  const [workouts, setWorkouts] = useState(latestWorkouts);

  const fetchData = useCallback(() => {
    dispatch(fetchLatestUserWorkoutThunk(authUser.uid));
  }, [dispatch, authUser.uid]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }

    // const newWorkouts = workouts;
    // newWorkouts.filter((workout) => {
    //   return workout.workoutData.category === "Strength";
    // });

    // console.log(newWorkouts);
    return () => {
      isMounted = false;
    };
  }, [authUser.uid, dispatch, fetchData]);

  useEffect(() => {
    setWorkouts(latestWorkouts);
  }, [latestWorkouts]);

  return (
    <>
      {latestWorkouts.length > 0 ? (
        <div className="pb-10 scroll">
          <div className="relative z-10 pt-4 pb-10">
            <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
              <div className="flex flex-col items-start lg:flex-row lg:items-center">
                <div className="my-6 ml-0 lg:ml-20 lg:my-0">
                  <h4 className="mb-2 text-2xl font-bold leading-tight text-white">
                    Dashboard
                  </h4>
                  <div className="h-1 mt-4 bg-teal-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-6 mx-auto">
            <DynamicActivity workouts={workouts} />
          </div>
          <div className="container flex items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
            <div className="flex justify-between lg:flex-row lg:items-center">
              <Link
                to={{
                  pathname: `/users/${authUser.uid}/workouts`,
                  state: "cardio",
                }}
              >
                <h4 className="mb-2 text-2xl font-bold leading-tight text-white hover:text-teal-700">
                  Cardio
                </h4>
              </Link>
            </div>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </div>

          <div className="flex flex-row overflow-auto snap-x hide-scrollbar">
            {workouts
              .filter((workout) => workout.workoutData.category === "cardio")
              .slice(0, 10)
              .map(({ workoutId, workoutData }) => {
                return (
                  <DynamicCardio
                    key={workoutId}
                    workoutData={workoutData}
                    workoutId={workoutId}
                    userId={authUser.uid}
                  />
                );
              })}
          </div>

          <div className="container flex items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
            <div className="flex justify-between lg:flex-row lg:items-center">
              <Link
                to={{
                  pathname: `/users/${authUser.uid}/workouts`,
                  state: "strength",
                }}
              >
                <h4 className="mb-2 text-2xl font-bold leading-tight text-white hover:text-teal-700">
                  Strength
                </h4>
              </Link>
            </div>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </div>

          <div className="flex flex-row overflow-auto snap-x hide-scrollbar">
            {workouts
              .filter((workout) => workout.workoutData.category === "strength")
              .slice(0, 10)
              .map(({ workoutId, workoutData }) => {
                return (
                  <DynamicStrength key={workoutId} workoutData={workoutData} />
                );
              })}
          </div>
        </div>
      ) : (
        <EmptyDashboard authUser={authUser} />
      )}
    </>
  );
};

export default Dashboard;

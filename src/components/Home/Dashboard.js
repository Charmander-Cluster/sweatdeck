import React, { useCallback, useEffect, useState } from "react";
import DynamicActivity from "../Cards/DynamicActivity";
import DynamicStrength from "../Cards/DynamicStrength";
import DynamicCardio from "../Cards/DynamicCardio";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestUserWorkoutThunk } from "../../store/workouts";
import EmptyDashboard from "./EmptyDashboard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);
  const [isLoading, setLoading] = useState(true);

  const { latestWorkouts } = useSelector((state) => state.workouts);
  const [workouts, setWorkouts] = useState(latestWorkouts);

  const fetchData = useCallback(() => {
    dispatch(fetchLatestUserWorkoutThunk(authUser.uid));
  }, [dispatch, authUser.uid]);

  useEffect(() => {
    if (isLoading && authUser) {
      fetchData();
    }

    // const newWorkouts = workouts;
    // newWorkouts.filter((workout) => {
    //   return workout.workoutData.category === "Strength";
    // });

    // console.log(newWorkouts);
    setWorkouts(latestWorkouts);
    setLoading(false);
  }, [fetchData, isLoading, latestWorkouts, authUser]);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden opacity-75">
          <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader"></div>
        </div>
      ) : workouts ? (
        <div className="pb-10">
          <div className="relative z-10 pt-8 pb-10">
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
              <h4 className="mb-2 text-2xl font-bold leading-tight text-white">
                Cardio
              </h4>
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
                  <DynamicCardio key={workoutId} workoutData={workoutData} />
                );
              })}
          </div>
          <div className="container flex items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
            <div className="flex justify-between lg:flex-row lg:items-center">
              <h4 className="mb-2 text-2xl font-bold leading-tight text-white">
                Strength
              </h4>
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

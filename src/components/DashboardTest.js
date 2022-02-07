import React, { useCallback, useEffect, useState } from "react";
import DynamicActivity from "./Cards/DynamicActivity";
import DynamicStrength from "./Cards/DynamicStrength";
import DynamicCardio from "./Cards/DynamicCardio";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestUserWorkoutThunk } from "../store/workouts";

const DashboardTest = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);
  const [isLoading, setLoading] = useState(true);

  const userWorkout = useSelector((state) => state.workouts);
  const [workouts, setWorkouts] = useState(userWorkout);

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
    setWorkouts(userWorkout);
    setLoading(false);
  }, [fetchData, isLoading, userWorkout, authUser, workouts]);

  return (
    <>
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
          <div className="flex items-start lg:flex-row lg:items-center">
            <h4 className="mb-2 text-2xl font-bold leading-tight text-white">
              Cardio
            </h4>
          </div>
        </div>
        <div className="flex flex-row overflow-auto snap-x hide-scrollbar">
          {workouts
            .filter((workout) => workout.workoutData.category === "Cardio")
            .slice(0, 10)
            .map(({ workoutId, workoutData }) => {
              return (
                <DynamicCardio key={workoutId} workoutData={workoutData} />
              );
            })}
        </div>
        <div className="container flex items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex items-start lg:flex-row lg:items-center">
            <h4 className="mb-2 text-2xl font-bold leading-tight text-white">
              Strength
            </h4>
          </div>
        </div>
        <div className="flex flex-row overflow-auto snap-x hide-scrollbar">
          {workouts
            .filter((workout) => workout.workoutData.category === "Strength")
            .slice(0, 10)
            .map(({ workoutId, workoutData }) => {
              return (
                <DynamicStrength key={workoutId} workoutData={workoutData} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DashboardTest;

import React, { useCallback, useEffect, useState, useRef } from "react";
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
  const [isLoading, setLoading] = useState(true);

  const { latestWorkouts } = useSelector((state) => state.workouts);

  const cardioContainerRef = useRef();
  const strengthContainerRef = useRef();

  const fetchData = useCallback(() => {
    dispatch(fetchLatestUserWorkoutThunk(authUser.uid));
  }, [dispatch, authUser.uid]);

  useEffect(() => {
    if (!isLoading) {
      cardioContainerRef.current.scrollLeft = 0;
      strengthContainerRef.current.scrollLeft = 0;
    }
  }, [isLoading, latestWorkouts]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }

    setLoading(false);
    return () => {
      isMounted = false;
    };
  }, [authUser.uid, dispatch, fetchData]);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden opacity-75">
          <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader"></div>
        </div>
      ) : latestWorkouts.length > 0 ? (
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
            <DynamicActivity workouts={latestWorkouts} />
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
          </div>

          <div
            ref={cardioContainerRef}
            className="flex flex-row overflow-auto snap-x hide-scrollbar"
          >
            {latestWorkouts
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
          </div>

          <div
            ref={strengthContainerRef}
            className="flex flex-row overflow-auto snap-x hide-scrollbar"
          >
            {latestWorkouts
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

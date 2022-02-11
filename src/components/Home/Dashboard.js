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

  const [strengthCheck, setStrengthCheck] = useState([]);
  const [cardioCheck, setCardioCheck] = useState([]);
  const [completedCheck, setCompletedCheck] = useState([]);

  const cardioContainerRef = useRef();
  const strengthContainerRef = useRef();

  useEffect(() => {
    if (!isLoading && latestWorkouts.length > 0) {
      cardioContainerRef.current.scrollLeft = 0;
      strengthContainerRef.current.scrollLeft = 0;
      setStrengthCheck(
        latestWorkouts.filter(
          (workout) => workout.workoutData.category === "strength"
        )
      );

      setCardioCheck(
        latestWorkouts.filter(
          (workout) => workout.workoutData.category === "cardio"
        )
      );
      setCompletedCheck(
        latestWorkouts.filter(
          (workout) => workout.workoutData.timesCompleted > 0
        )
      );
    }
  }, [isLoading, latestWorkouts]);

  const fetchData = useCallback(() => {
    dispatch(fetchLatestUserWorkoutThunk(authUser.uid));
  }, [dispatch, authUser.uid]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }
    setLoading(false);
    return () => {
      isMounted = false;
    };
  }, [dispatch, fetchData]);

  return (
    <>
      {latestWorkouts.length > 0 ? (
        <div className="pb-10 scroll">
          <div className="relative z-10 pt-4 pb-10">
            <div className="container flex flex-col items-start justify-between px-6 mx-auto md:ml-12 md:justify-center md:flex">
              <div className="flex flex-col items-start">
                <div className="my-6 ml-0 lg:ml-20 lg:my-0">
                  <h4 className="mb-2 text-2xl font-bold leading-tight text-white">
                    Dashboard
                  </h4>
                  <div className="h-1 mt-4 rounded-full bg-gradient-to-l from-teal-600 to-purple-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-6 mx-auto md:max-w-md">
            <DynamicActivity workouts={completedCheck} />
          </div>
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            {cardioCheck.length > 0 && (
              <div className="container flex items-start justify-between px-6 mx-auto md:justify-center lg:flex-row lg:items-center">
                <div className="flex justify-between lg:flex-row lg:items-center">
                  <Link
                    to={{
                      pathname: `/users/${authUser.uid}/workouts`,
                      state: "cardio",
                    }}
                    className="flex flex-row"
                  >
                    <h4 className="mb-2 text-2xl font-bold leading-tight text-white hover:text-teal-700">
                      Cardio
                    </h4>

                    <svg
                      className="w-6 h-6 mt-1 ml-2 md:hidden"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            )}
            <div
              ref={cardioContainerRef}
              className="flex flex-row overflow-auto snap-x hide-scrollbar md:max-w-min"
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
          </div>
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            {strengthCheck.length > 0 && (
              <div className="container flex items-start justify-between px-6 mx-auto md:justify-center lg:flex-row lg:items-center">
                <div className="flex justify-between lg:flex-row lg:items-center">
                  <Link
                    to={{
                      pathname: `/users/${authUser.uid}/workouts`,
                      state: "strength",
                    }}
                    className="flex flex-row"
                  >
                    <h4 className="mb-2 text-2xl font-bold leading-tight text-white hover:text-teal-700">
                      Strength
                    </h4>

                    <svg
                      className="w-6 h-6 mt-1 ml-2 md:hidden"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            )}
            <div
              ref={strengthContainerRef}
              className="flex flex-row overflow-auto snap-x hide-scrollbar md:max-w-min"
            >
              {latestWorkouts
                .filter(
                  (workout) => workout.workoutData.category === "strength"
                )
                .slice(0, 10)
                .map(({ workoutId, workoutData }) => {
                  return (
                    <DynamicStrength
                      key={workoutId}
                      workoutData={workoutData}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <EmptyDashboard authUser={authUser} />
      )}
    </>
  );
};

export default Dashboard;

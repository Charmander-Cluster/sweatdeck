import React, { useEffect, useState } from "react";
import WorkoutChart from "./WorkoutChart";
import EmptyDashboard from "./EmptyDashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestUserWorkoutThunk } from "../store/workouts";
import { fetchLoginUser } from "../store";
// import { fetchSingleUserThunk } from "../store/users";

const Dashboard = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);
  const [isLoading, setLoading] = useState(true);

  const userWorkout = useSelector((state) => state.workouts);

  useEffect(() => {
    dispatch(fetchLatestUserWorkoutThunk(authUser.uid));
  }, [dispatch, authUser.uid]);

  // console.log(userWorkout);

  return (
    <>
      {userWorkout[0] && authUser ? (
        <div className="w-full px-4 pt-5 rounded-lg sm:px-6 md:px-8 pb-11 md:w-1/2 sm:border-r">
          <div className="items-center justify-between sm:flex">
            <div>
              <p className="text-lg font-bold leading-none text-white">
                {authUser.username}'s Dashboard
              </p>
            </div>
          </div>
          <div className="mt-9">
            <p className="font-medium leading-none tracking-wide text-white text-md">
              Latest Workout - {userWorkout[0].category}
            </p>
            <div className="w-full h-1 mt-4 bg-teal-600 rounded-full"></div>
          </div>
          <div className="mt-8">
            <div className="items-end justify-between sm:flex">
              <div>
                <div className="flex items-start justify-between pb-2">
                  <div className="flex items-start">
                    <div className="w-1 bg-teal-600 rounded-sm h-9" />
                    <div className="flex flex-col pt-2 pl-3">
                      <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                        Type
                      </p>
                    </div>
                  </div>

                  <p className="pt-2 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">
                    {userWorkout[0].exercises[0].type}
                  </p>
                </div>
                {userWorkout[0].exercises[0].reps ? (
                  <div className="flex items-start justify-between pt-4 pb-2">
                    <div className="flex items-start">
                      <div className="w-1 bg-teal-600 rounded-sm h-9" />
                      <div className="flex flex-col pt-2 pl-3">
                        <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                          Reps
                        </p>
                      </div>
                    </div>

                    <p className="pt-2 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">
                      {userWorkout[0].exercises[0].reps}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-start justify-between pt-4 pb-2">
                    <div className="flex items-start">
                      <div className="w-1 bg-teal-600 rounded-sm h-9" />
                      <div className="flex flex-col pt-2 pl-3">
                        <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                          Distance
                        </p>
                      </div>
                    </div>

                    <p className="pt-2 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">
                      {userWorkout[0].exercises[0].distance}
                    </p>
                  </div>
                )}
                {userWorkout[0].exercises[0].reps ? (
                  <div className="flex items-start justify-between pt-4 pb-2">
                    <div className="flex items-start">
                      <div className="w-1 bg-teal-600 rounded-sm h-9" />
                      <div className="flex flex-col pt-2 pl-3">
                        <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                          Sets
                        </p>
                      </div>
                    </div>

                    <p className="pt-2 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">
                      {userWorkout[0].exercises[0].sets}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-start justify-between pt-4 pb-2">
                    <div className="flex items-start">
                      <div className="w-1 bg-teal-600 rounded-sm h-9" />
                      <div className="flex flex-col pt-2 pl-3">
                        <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                          Hours
                        </p>
                      </div>
                    </div>

                    <p className="pt-2 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">
                      {userWorkout[0].exercises[0].hours}
                    </p>
                  </div>
                )}

                {userWorkout[0].exercises[0].reps ? (
                  <div className="flex items-start justify-between pt-4 pb-2">
                    <div className="flex items-start">
                      <div className="w-1 bg-teal-600 rounded-sm h-9" />
                      <div className="flex flex-col pt-2 pl-3">
                        <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                          Weight
                        </p>
                      </div>
                    </div>

                    <p className="pt-2 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">
                      {userWorkout[0].exercises[0].weight}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-start justify-between pt-4 pb-2">
                    <div className="flex items-start">
                      <div className="w-1 bg-teal-600 rounded-sm h-9" />
                      <div className="flex flex-col pt-2 pl-3">
                        <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                          Minutes
                        </p>
                      </div>
                    </div>

                    <p className="pt-2 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">
                      {userWorkout[0].exercises[0].minutes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full pb-6 mt-6">
            <WorkoutChart userWorkout={userWorkout} />
          </div>
          {userWorkout[0].isComplete ? (
            <button
              className="w-full h-20 px-5 py-2 mt-2 text-sm leading-none text-white bg-teal-700 rounded shadow-md sm:mt-0 focus:outline-none shadow-black"
              disabled
            >
              Completed
            </button>
          ) : (
            <button className="w-full h-20 px-5 py-2 mt-2 text-sm leading-none text-white rounded shadow-md bg-gradient-to-r from-teal-500 to-fuchsia-500 sm:mt-0 focus:outline-none shadow-black">
              In Progress
            </button>
          )}
        </div>
      ) : (
        <EmptyDashboard authUser={authUser} />
      )}
    </>
  );
};

export default Dashboard;

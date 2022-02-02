import React, { useEffect, useState } from "react";
import WorkoutChart from "./WorkoutChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestUserWorkoutThunk } from "../store/workouts";
import { fetchLoginUser } from "../store";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(getAuth().currentUser);
  const fullUser = useSelector((state) => state.auth);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  const { userWorkout } = useSelector((state) => {
    return {
      userWorkout: state.workouts.userWorkout,
    };
  });

  useEffect(() => {
    dispatch(fetchLoginUser());
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(fetchLatestUserWorkoutThunk(fullUser.uid));
  }, [dispatch, fullUser.uid]);

  return (
    <>
      {userWorkout[0] && (
        <div className="px-4 rounded-lg sm:px-6 md:px-8 pt-5 pb-11 md:w-1/2 w-full sm:border-r">
          <div className="sm:flex items-center justify-between">
            <div>
              <p className="text-base font-bold leading-none text-white">
                Dashboard
              </p>
            </div>
          </div>
          <div className="mt-9">
            <p className="text-sm font-medium tracking-wide leading-none text-white">
              Latest Workout
            </p>
            <div className="w-full bg-teal-700 rounded-full h-1 mt-4"></div>
          </div>
          <div className="mt-8">
            <div className="sm:flex justify-between items-end">
              <div>
                <div className="flex items-start justify-between pb-2">
                  <div className="flex items-start">
                    <div className="w-1 h-9 bg-teal-700 rounded-sm" />
                    <div className="flex flex-col pl-3 pt-2">
                      <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                        Type
                      </p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold leading-5 pt-2 text-right text-gray-800 dark:text-gray-100">
                    {userWorkout[0].type}
                  </p>
                </div>
                <div className="flex items-start justify-between pt-4 pb-2">
                  <div className="flex items-start">
                    <div className="w-1 h-9 bg-teal-700 rounded-sm" />
                    <div className="flex flex-col pl-3 pt-2">
                      <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                        Reps
                      </p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold pt-2 leading-5 text-right text-gray-800 dark:text-gray-100">
                    {userWorkout[0].reps}
                  </p>
                </div>
                <div className="flex items-start justify-between pt-4 pb-2">
                  <div className="flex items-start">
                    <div className="w-1 h-9 bg-teal-700 rounded-sm" />
                    <div className="flex flex-col pl-3 pt-2">
                      <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                        Sets
                      </p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold pt-2 leading-5 text-right text-gray-800 dark:text-gray-100">
                    {userWorkout[0].sets}
                  </p>
                </div>
                <div className="flex items-start justify-between pt-4 pb-2">
                  <div className="flex items-start">
                    <div className="w-1 h-9 bg-teal-700 rounded-sm" />
                    <div className="flex flex-col pl-3 pt-2">
                      <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                        Weight
                      </p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold pt-2 leading-5 text-right text-gray-800 dark:text-gray-100">
                    {userWorkout[0].weight}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between mt-6 pb-6">
            <WorkoutChart userWorkout={userWorkout} />
          </div>
          {userWorkout[0].isComplete ? (
            <button className="mt-2 sm:mt-0 w-full h-20 focus:outline-none px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded text-sm leading-none">
              Completed
            </button>
          ) : (
            <button className="mt-2 sm:mt-0 w-full h-20 focus:outline-none px-5 py-2 bg-red-700 hover:bg-red-800 text-white rounded text-sm leading-none">
              In Progress
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Home;

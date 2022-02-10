import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import maleImage from "../../assets/male-useravatar.png";
import femaleImage from "../../assets/female-useravatar.png";
import defaultImage from "../../assets/default-useravatar.png";
import { isSameDay } from "date-fns";
import { fetchAllUserWorkoutsThunk } from "../../store/workouts";
import { logout } from "../../store/auth";
import { fetchSingleUserThunk } from "../../store/users";

const UserProfile = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [date, setDate] = useState(new Date());
  const [isLoading, setLoading] = useState(true);

  const { user } = useSelector((state) => state.users);
  const { allWorkouts } = useSelector((state) => state.workouts);

  const fetchData = useCallback(() => {
    dispatch(fetchAllUserWorkoutsThunk(id));
    dispatch(fetchSingleUserThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }
    setLoading(false);
    return () => {
      isMounted = false;
    };
  }, [fetchData]);

  const dateConverter = () => {
    const workoutDatesArr = [];
    // Loop through all user dates and convert to UTC
    if (allWorkouts && allWorkouts.length > 0) {
      allWorkouts.forEach((doc) => {
        const convertedDate = new Date(
          doc.createdAt.seconds * 1000 + doc.createdAt.nanoseconds / 1000000
        );
        workoutDatesArr.push(convertedDate);
      });
    }

    return workoutDatesArr;
  };

  const dates = dateConverter();

  function tileWorkoutDates({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (dates.find((dDate) => isSameDay(dDate, date))) {
        return "highlight";
      }
    }
  }

  const handleClick = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden opacity-75">
          <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-2 pb-20">
          <div className="pt-20 overflow-hidden rounded">
            <div className="flex justify-center w-full pt-4 -mt-20">
              {user.gender === "Male" ? (
                <div className="w-32 h-32">
                  <img
                    src={maleImage}
                    alt="User Profile"
                    className="object-cover w-full h-full rounded-full shadow-md shadow-black"
                  />
                </div>
              ) : user.gender === "Female" ? (
                <div className="w-32 h-32">
                  <img
                    src={femaleImage}
                    alt="User Profile"
                    className="object-cover w-full h-full rounded-full shadow-md shadow-black"
                  />
                </div>
              ) : (
                <div className="w-32 h-32">
                  <img
                    src={defaultImage}
                    alt="User Profile"
                    className="object-cover w-full h-full rounded-full shadow-md shadow-black"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center px-6 mt-4">
              <h1 className="mb-1 text-3xl font-bold text-center">
                {user.username}
              </h1>
              <div className="flex flex-row">
                <svg
                  className="w-6 h-6 mt-1.5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <p className="pt-2 text-base text-center">
                  State - {user.state}
                </p>
              </div>
              <div className="flex flex-row">
                <svg
                  className="w-6 h-6 mt-1 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  ></path>
                </svg>
                <p className="pt-2 text-base text-center">
                  Birthday - {user.birthday}
                </p>
              </div>
              {allWorkouts.length > 0 ? (
                <div className="flex flex-row">
                  <svg
                    className="w-6 h-6 mt-1 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                  <p className="pt-2 text-base text-center">
                    Total Workouts - {allWorkouts.length}
                  </p>
                </div>
              ) : (
                <div className="flex flex-row">
                  <svg
                    className="w-6 h-6 mt-1 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                  <p className="pt-2 text-base text-center">
                    Total Workouts - 0
                  </p>
                </div>
              )}
              <div className="flex flex-row">
                <Link to={`${id}/edit`}>
                  <div className="ml-1">
                    <button className="flex flex-row items-center px-8 py-3 my-3 text-sm leading-none text-white bg-teal-600 rounded shadow-md cursor-pointer text-md focus:outline-none shadow-black">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      Edit Profile
                    </button>
                  </div>
                </Link>
                <div className="ml-3">
                  <button
                    className="flex flex-row items-center px-8 py-3 my-3 text-sm leading-none text-white bg-teal-600 rounded shadow-md cursor-pointer text-md focus:outline-none shadow-black"
                    onClick={() => handleClick()}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Calendar
                prevLabel={null}
                prev2Label={null}
                nextLabel={null}
                next2Label={null}
                onChange={setDate}
                value={date}
                tileClassName={tileWorkoutDates}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import maleImage from "../assets/male-useravatar.png";
import femaleImage from "../assets/female-useravatar.png";
import defaultImage from "../assets/default-useravatar.png";
import { isSameDay } from "date-fns";
import { fetchLatestUserWorkoutThunk } from "../store/workouts";
import { logout } from "../store/auth";

const UserProfile = () => {
  const userWorkout = useSelector((state) => state.workouts);

  const authUser = useSelector((state) => state.auth);

  const [isLoading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());

  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchLatestUserWorkoutThunk(authUser.uid));
    }

    return () => {
      setLoading(false);
    };
  }, [dispatch, authUser, isLoading]);

  const dateConverter = () => {
    const workoutDatesArr = [];
    // Loop through all user dates and convert to UTC
    if (userWorkout.length > 0) {
      userWorkout.forEach((doc) => {
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
    if (view === "month" && userWorkout) {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (dates.find((dDate) => isSameDay(dDate, date))) {
        return "highlight";
      }
    }
  }

  const handleClick = () => {
    dispatch(logout());
    history.push("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="pt-20 overflow-hidden rounded">
        <div className="flex justify-center w-full pt-4 -mt-20">
          {authUser && authUser.gender === "Male" ? (
            <div className="w-32 h-32">
              <img
                src={maleImage}
                alt="User Profile"
                className="object-cover w-full h-full rounded-full shadow-md shadow-black"
              />
            </div>
          ) : authUser.gender === "Female" ? (
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

        <div className="flex flex-col px-6 mt-4">
          <h1 className="mb-1 text-3xl font-bold text-center">
            {authUser.username}
          </h1>
          <p className="pt-2 text-base text-center">State: {authUser.state}</p>
          <p className="pt-2 text-base text-center">
            Birthday: {authUser.birthday}
          </p>
          {userWorkout.length > 0 && (
            <p className="pt-2 text-base text-center">
              Total Workouts: {userWorkout.length}
            </p>
          )}
          <div className="flex flex-row">
            <Link to={`${id}/edit`}>
              <div className="ml-1">
                <button className="flex flex-row items-center px-8 py-3 my-3 text-sm leading-none text-white bg-teal-700 rounded shadow-md text-md focus:outline-none shadow-black">
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
                className="flex flex-row items-center px-8 py-3 my-3 text-sm leading-none text-white bg-teal-700 rounded shadow-md text-md focus:outline-none shadow-black"
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
  );
};

export default UserProfile;

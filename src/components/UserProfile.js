import React, { useEffect, useState } from "react";
import { fetchSingleUserThunk } from "../store/users";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import maleImage from "../assets/male-useravatar.png";
import femaleImage from "../assets/female-useravatar.png";
import defaultImage from "../assets/default-useravatar.png";
import { isSameDay } from "date-fns";
import { fetchLatestUserWorkoutThunk } from "../store/workouts";
import { fetchLoginUser } from "../store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logout } from "../store/auth";

const UserProfile = () => {
  const { fullUser, userWorkout } = useSelector((state) => {
    return {
      fullUser: state.users.user,
      userWorkout: state.workouts.userWorkout,
    };
  });

  const authUser = useSelector((state) => state.auth);

  const [isLoading, setLoading] = useState(true);

  const [workoutDates, setWorkoutDates] = useState([]);
  const [date, setDate] = useState(new Date());
  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (isLoading && authUser) {
      dispatch(fetchLoginUser());
      setWorkoutDates(userWorkout[0]);
    }

    return () => {
      setLoading(false);
    };
  }, [dispatch, userWorkout, isLoading, authUser]);

  useEffect(() => {
    if (authUser.uid) {
      dispatch(fetchLatestUserWorkoutThunk(authUser.uid));
      dispatch(fetchSingleUserThunk(authUser.uid));
    }
  }, [dispatch, authUser]);

  const dateConverter = () => {
    const workoutDatesArr = [];
    if (workoutDates) {
      if (workoutDates.length > 0 && workoutDates[0].date) {
        workoutDates.forEach((doc) => {
          const convertedDate = doc.date.toDate();
          workoutDatesArr.push(convertedDate);
        });
        return workoutDatesArr;
      }
    }
  };

  const dates = dateConverter();

  function tileWorkoutDates({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month" && workoutDates) {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (workoutDates.length > 0 && workoutDates[0].date) {
        if (dates.find((dDate) => isSameDay(dDate, date))) {
          return "highlight";
        }
      }
    }
  }

  const handleClick = () => {
    dispatch(logout());
    history.push("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="rounded overflow-hidden pt-20">
        <div className="-mt-20 w-full flex justify-center pt-4">
          {fullUser && fullUser.gender === "Male" ? (
            <div className="h-32 w-32">
              <img
                src={maleImage}
                alt="User Profile"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          ) : fullUser.gender === "Female" ? (
            <div className="h-32 w-32">
              <img
                src={femaleImage}
                alt="User Profile"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          ) : (
            <div className="h-32 w-32">
              <img
                src={defaultImage}
                alt="User Profile"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col px-6 mt-4">
          <h1 className="font-bold text-3xl text-center mb-1">
            {fullUser.username}
          </h1>
          <p className="text-base pt-2 text-center">
            Birthday: {fullUser.birthday}
          </p>
          <p className="text-center text-base pt-2">State: {fullUser.state}</p>
          <div className="flex flex-row">
            <Link to={`${id}/edit`}>
              <div className="ml-1">
                <button className="flex flex-row items-center text-md my-3 focus:outline-none px-8 py-3 bg-teal-700 shadow-md shadow-black text-white rounded text-sm leading-none">
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
                className="flex flex-row text-md my-3 items-center focus:outline-none px-8 py-3 bg-teal-700 shadow-md shadow-black text-white rounded text-sm leading-none"
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

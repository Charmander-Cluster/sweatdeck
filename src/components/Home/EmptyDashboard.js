import React from "react";
import { Link } from "react-router-dom";

const EmptyDashboard = (props) => {
  return (
    <div className="w-full px-4 pt-5 rounded-lg sm:px-6 md:px-8 pb-11 md:w-1/2 sm:border-r">
      <div className="items-center justify-between sm:flex">
        <div>
          {props.authUser.username && (
            <p className="text-base font-bold leading-none text-white">
              {props.authUser.username}'s Dashboard
            </p>
          )}
        </div>
      </div>
      <div className="mt-9">
        <p className="text-sm font-medium leading-none tracking-wide text-white">
          You have no workouts
        </p>
        <div className="w-full h-1 mt-4 bg-teal-600 rounded-full"></div>
      </div>
      <div className="mt-12">
        <p className="text-sm font-medium leading-none tracking-wide text-center text-white">
          Getting started
        </p>
        <Link to="/createworkout">
          <button className="w-full px-5 py-2 mt-5 text-sm leading-none text-white bg-teal-700 rounded shadow-md sm:mt-0 h-28 focus:outline-none shadow-black">
            Create Workout
          </button>
        </Link>
        <Link to={`users/${props.authUser.uid}`}>
          <button className="w-full px-5 py-2 mt-5 text-sm leading-none text-white bg-teal-700 rounded shadow-md sm:mt-0 h-28 focus:outline-none shadow-black">
            View User Profile
          </button>
        </Link>
        <Link to="spotifyhome">
          <button className="w-full px-5 py-2 mt-5 text-sm leading-none text-white bg-teal-700 rounded shadow-md sm:mt-0 h-28 focus:outline-none shadow-black">
            Link Spotify
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyDashboard;

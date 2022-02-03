import React from "react";
import { Link } from "react-router-dom";

const EmptyDashboard = (props) => {
  return (
    <div className="px-4 rounded-lg sm:px-6 md:px-8 pt-5 pb-11 md:w-1/2 w-full sm:border-r">
      <div className="sm:flex items-center justify-between">
        <div>
          {/* {props.fullUser.username && (
            <p className="text-base font-bold leading-none text-white">
              {props.fullUser.username}'s Dashboard
            </p>
          )} */}
        </div>
      </div>
      <div className="mt-9">
        <p className="text-sm font-medium tracking-wide leading-none text-white">
          You have no workouts
        </p>
        <div className="w-full bg-teal-600 rounded-full h-1 mt-4"></div>
      </div>
      <div className="mt-12">
        <p className="text-sm font-medium tracking-wide leading-none text-white text-center">
          Getting started
        </p>
        <Link to="#">
          <button className="mt-5 sm:mt-0 w-full h-28 focus:outline-none px-5 py-2 bg-teal-700 shadow-md shadow-black text-white rounded text-sm leading-none">
            Create Workout
          </button>
        </Link>
        <Link to={`users/${props.authUser.uid}`}>
          <button className="mt-5 sm:mt-0 w-full h-28 focus:outline-none px-5 py-2 bg-teal-700 shadow-md shadow-black text-white rounded text-sm leading-none">
            View User Profile
          </button>
        </Link>
        <Link to="#">
          <button className="mt-5 sm:mt-0 w-full h-28 focus:outline-none px-5 py-2 bg-teal-700 shadow-md shadow-black text-white rounded text-sm leading-none">
            Link Spotify
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyDashboard;

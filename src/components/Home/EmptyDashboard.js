import React from "react";
import { Link } from "react-router-dom";

const EmptyDashboard = (props) => {
  return (
    <div className="w-full px-4 pt-5 rounded-lg sm:px-6 md:px-8 pb-11 md:w-1/2 sm:border-r">
      <div className="items-center justify-between sm:flex">
        <div>
          {props.authUser.username && (
            <p className="mb-2 text-2xl font-bold leading-tight text-white">
              Dashboard
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start lg:flex-row lg:items-center">
        <div className="mt-9">
          <p className="text-lg font-medium leading-none tracking-wide text-white">
            You have no workouts
          </p>
          <div className="h-1 mt-4 bg-teal-600 rounded-full"></div>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-medium leading-none tracking-wide text-center text-white text-md">
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
      </div>
    </div>
  );
};

export default EmptyDashboard;

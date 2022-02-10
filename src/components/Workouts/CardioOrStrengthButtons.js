import React from "react";

import { Link, useParams } from "react-router-dom";

const CardioOrStrengthButtons = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col py-2">
      <div className="relative z-10 pt-2 pb-10">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white">
                Your Workouts
              </h4>
              <div className="h-1 mt-4 bg-gradient-to-l from-teal-600 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="apple-icon-180.png"
          className="mt-24 h-28 rounded-full shadow-lg shadow-black"
          alt="add-list"
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-white mt-12 align-center drop-shadow-md shadow-black text-center ">
          View Your Workouts
        </h1>
      </div>

      <div className="flex flex-row mt-12 mb-10 items-center justify-center space-x-2">
      <div className="flex justify-center">
        <Link to={{ pathname: `/users/${id}/workouts`, state: "cardio" }}>
          <button
            type="button"
            className="p-3 text-lg border border-purple-800 rounded-md bg-purple-800 w-44 shadow-md shadow-black"
          >
            Cardio
          </button>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link to={{ pathname: `/users/${id}/workouts`, state: "strength" }}>
          <button className="p-3 text-lg border border-teal-600 rounded-md bg-teal-600 w-44 shadow-md shadow-black">
            Strength
          </button>
        </Link>
      </div>
      </div>

    </div>
  );
};

export default CardioOrStrengthButtons;

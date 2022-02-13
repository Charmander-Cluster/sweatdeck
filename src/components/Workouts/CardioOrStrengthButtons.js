import React from "react";

import { Link, useParams } from "react-router-dom";

const CardioOrStrengthButtons = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col">
      <div className="relative z-10 pb-10 md:mt-4">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white">
                Your Workouts
              </h4>
              <div className="h-1 mt-4 rounded-full bg-gradient-to-l from-teal-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="https://gifimage.net/wp-content/uploads/2018/11/cute-funny-gif-3.gif"
          className="mt-24 rounded-full shadow-lg h-28 shadow-black"
          alt="add-list"
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="mt-12 text-2xl text-center text-white align-center drop-shadow-md shadow-black ">
          View Your Workouts
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center mt-12 mb-10 space-x-2">
        <div className="flex justify-center">
          <Link to={{ pathname: `/users/${id}/workouts`, state: "cardio" }}>
            <button
              type="button"
              className="p-3 text-lg bg-purple-800 border border-purple-800 rounded-md shadow-md w-44 shadow-black"
            >
              Cardio
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Link to={{ pathname: `/users/${id}/workouts`, state: "strength" }}>
            <button className="p-3 text-lg bg-teal-600 border border-teal-600 rounded-md shadow-md w-44 shadow-black">
              Strength
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardioOrStrengthButtons;

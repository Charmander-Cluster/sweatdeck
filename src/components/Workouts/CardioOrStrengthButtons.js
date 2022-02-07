import React from "react";

import { Link, useParams } from "react-router-dom";

const CardioOrStrengthButtons = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl text-teal-500 mt-28 align-center">
          Select Workout Type:
        </h1>
      </div>

      <div className="grid justify-center mt-20 mb-10">
        <Link to={{ pathname: `/users/${id}/workouts`, state: "cardio" }}>
          <button
            type="button"
            className="w-64 p-10 text-3xl border border-white rounded-md bg-gradient-to-r from-teal-500 to-purple-800"
          >
            Cardio
          </button>
        </Link>
      </div>

      <div className="grid justify-center">
        <Link to={{ pathname: `/users/${id}/workouts`, state: "strength" }}>
          <button className="w-64 p-10 text-3xl border border-white rounded-md bg-gradient-to-r from-purple-800 to-teal-500 bg-zinc-800">
            Strength
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardioOrStrengthButtons;

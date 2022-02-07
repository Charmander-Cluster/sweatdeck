import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreateRun from "./CreateRun";
import CreateCardio from "./CreateCardio";
import CreateStrength from "./CreateStrength";

const CreateWorkout = () => {
  // const redirectUri =
  //   process.env.SPOTIFY_REDIRECT_URI || "http://localhost:3000/spotifyhome";

  const [selectedCategory, setSelectedCategory] = useState({
    category: "",
  });

  // let localWorkout = useSelector((state) => state.localWorkout);

  const handleChange = (event) => {
    setSelectedCategory({
      ...selectedCategory,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">



      <div className="flex items-center justify-center">
        <h1 className="mt-28 text-3xl text-teal-500 align-center">
          Create a New Workout
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <img src="https://www.pinclipart.com/picdir/big/169-1691899_online-survey-icon-png-download-test-png-clipart.png" className="h-32 mt-10" alt="add-list"/>
      </div>

      <div className="grid justify-center mt-16 mb-10">
        <Link to="/createworkout/cardio">
          <button
            type="button"
            className="text-3xl  bg-gradient-to-r from-teal-500 to-purple-800  rounded-md p-6 w-72 border border-purple-800"
          >
            Create Cardio
          </button>
        </Link>
      </div>

      <div className="grid justify-center">
        <Link to="/createworkout/strength">
          <button className="text-3xl bg-gradient-to-r from-purple-800 to-teal-500  bg-zinc-800 rounded-md p-6 w-68 border border-teal-500">
            Create Strength
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateWorkout;

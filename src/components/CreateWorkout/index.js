import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
        <h1 className="text-3xl text-teal-500 mt-28 align-center">
          Create a New Workout
        </h1>
      </div>

      <div className="flex items-center justify-center">
        {/* <img src="https://www.pinclipart.com/picdir/big/169-1691899_online-survey-icon-png-download-test-png-clipart.png" className="h-32 mt-10" alt="add-list"/> */}
        <img src="purple-clipboard.png" className="h-32 mt-10" alt="add-list" />
      </div>

      <div className="grid justify-center mt-16 mb-10">
        <Link to="/createworkout/cardio">
          <button
            type="button"
            className="p-6 text-3xl border border-purple-800 rounded-md bg-gradient-to-r from-teal-500 to-purple-800 w-72"
          >
            Create Cardio
          </button>
        </Link>
      </div>

      <div className="grid justify-center">
        <Link to="/createworkout/strength">
          <button className="p-6 text-3xl border border-teal-500 rounded-md bg-gradient-to-r from-purple-800 to-teal-500 bg-zinc-800 w-68">
            Create Strength
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateWorkout;

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
    <div className="flex flex-col py-2">
      <div className="relative z-10 pt-2 pb-10">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white">
                Create
              </h4>
              <div className="h-1 mt-4 rounded-full bg-gradient-to-l from-teal-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {/* <img src="https://www.pinclipart.com/picdir/big/169-1691899_online-survey-icon-png-download-test-png-clipart.png" className="h-32 mt-10" alt="add-list"/> */}
        {/* <img src="purple-clipboard.png" className=" mt-60" alt="add-list" /> */}
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2640600/apple_dribbble.gif"
          className="object-cover mt-24 rounded-full shadow-lg h-28 w-28 shadow-black"
          alt="Markus Magnusson"
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="mt-12 text-2xl text-white align-center drop-shadow-md shadow-black">
          Create a New Workout
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center mt-12 mb-10 space-x-2">
        <div className="flex justify-center ">
          <Link to="/createworkout/cardio">
            <button
              type="button"
              className="p-3 text-lg bg-purple-800 border border-purple-800 rounded-md shadow-md w-44 shadow-black"
            >
              Create Cardio
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Link to="/createworkout/strength">
            <button className="p-3 text-lg bg-teal-600 border border-teal-600 rounded-md shadow-md w-44 shadow-black">
              Create Strength
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkout;

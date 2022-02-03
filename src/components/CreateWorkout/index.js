import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreateRun from "./CreateRun";
import CreateCardio from "./CreateCardio";
import CreateStrength from "./CreateStrength";

const CreateWorkout = () => {
  const redirectUri =
    process.env.SPOTIFY_REDIRECT_URI || "http://localhost:3000/spotifyhome";

  const [selectedCategory, setSelectedCategory] = useState({
    category: "",
  });

  let localWorkout = useSelector((state) => state.localWorkout);

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

      <div className="grid justify-center mt-20 mb-10">
        <Link to="/createworkout/cardio">
          <button
            type="button"
            className="text-3xl  bg-teal-500 text-zinc-800 rounded-md p-10 w-64"
          >
            Cardio
          </button>
        </Link>
      </div>

      <div className="grid justify-center">
        <Link to="/createworkout/strength">
          <button className="text-3xl border text-teal-500 border-teal-500 bg-zinc-800 rounded-md p-10 w-64">
            Strength
          </button>
        </Link>
      </div>

      {/* <select
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue=""
            onChange={handleChange}
          >
            Select your workout:
            <option value="" disabled>Select</option>
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
          </select> */}

      {/* {!selectedCategory.category ? (
        <div></div>
      ) : (

        <div className="flex flex-row w-full text-1xl -mt-4 mb-3 justify-center">
          <div className="border border-teal-500 bg-neutral-700 rounded-md my-5 overflow-x-auto m-3 mb-14">
            <form className="max-w-4xl justify-center p-3 ">
              <div className="flex flex-wrap -mx-3 ">
                <div className="container flex justify-center">
                  {selectedCategory.category === "cardio" && (
                    <CreateCardio redirectUri={redirectUri}/>
                  )}
                  {selectedCategory.category === "strength" && <CreateStrength redirectUri={redirectUri}/>}
                </div>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CreateWorkout;

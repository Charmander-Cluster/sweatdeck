import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import CreateRun from "./CreateRun";
import CreateWalk from "./CreateWalk";
import CreateLift from "./CreateLift";

const redirectUri =
  process.env.SPOTIFY_REDIRECT_URI || "http://localhost:3000/spotifyhome";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`;

const CreateWorkout = () => {
  const [selectedWorkout, setSelectedWorkout] = useState("");

  const handleSelect = (e) => {
    setSelectedWorkout(e.target.value);
    console.log("Selected:", selectedWorkout);
  };

  return (
    <div className="container justify-center">
      <div className="flex items-center justify-center">
        <h1 className="my-5 text-2xl text-teal-500 align-center">
          Create a New Workout
        </h1>
      </div>
      <div className="container flex items-center justify-center h-20 py-8">
        <div className="inline-block relative w-64">
          <label
            htmlFor="workout-type"
            className="flex justify-center mb-2 text-lg "
          >
            {/* Workout Type */}
          </label>
          <select
            id="workout-type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleSelect}
          >
            Select your workout:
            <option selected disabled>
              {" "}
              -Select-{" "}
            </option>
            <option value="run">Run</option>
            <option value="walk">Walk</option>
            <option value="lift">Lift</option>
          </select>
        </div>
      </div>

      {!selectedWorkout ? (
        <div></div>
      ) : (
        <div className="container flex-col justify-center">
          <div className="border border-teal-500 bg-neutral-700 rounded-md my-5 overflow-x-auto m-2">
            <form className="max-w-lg justify-center p-3">
              <div className="flex flex-wrap -mx-3 ">
                <div className="container flex">
                  {/* <div className="justify-center"> */}
                  {selectedWorkout === "run" && <CreateRun />}
                  {selectedWorkout === "walk" && <CreateWalk />}
                  {selectedWorkout === "lift" && <CreateLift />}
                  {/* </div> */}
                </div>
              </div>
              <div className="grid place-items-center">
                <a
                  className="flex bg-teal-500 text-white p-3 mb-3 text-sm rounded-md"
                  href={AUTH_URL}
                >
                  Save & Connect Playlist
                </a>
                <button className="flex text-teal-500 border border-teal-500 p-3 mb-3 text-sm rounded-md">
                  Save Without Playlist
                </button>
              </div>
            </form>
          </div>
          {/* <div className="flex justify-center">
          <button>Save Workout</button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default CreateWorkout;

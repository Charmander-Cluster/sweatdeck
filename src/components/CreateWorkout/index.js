import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import CreateRun from "./CreateRun";
import CreateWalk from "./CreateWalk";
import CreateLift from "./CreateLift";

const CreateWorkout = () => {

  const [selectedWorkout, setSelectedWorkout] = useState("")

  const handleSelect = (e) => {
    setSelectedWorkout(e.target.value)
    console.log("Selected:", selectedWorkout)
  }

  return (
    <div>

    <div className="container flex items-center justify-center h-20 py-8">
      <div className="inline-block relative w-64">
      <label htmlFor="workout-type" className="flex justify-center mb-2 text-lg ">Select your Workout</label>
        <select id="workout-type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-teal-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleSelect}>
          Select your workout:
          <option>Workout Type:</option>
          <option value="run">Run</option>
          <option value="walk">Walk</option>
          <option value="lift">Lift</option>
        </select>
      </div>
    </div>

    {(!selectedWorkout) ? (<div></div>) : (
      <div>
      { selectedWorkout==="run" && <CreateRun/>}
      { selectedWorkout==="walk" && <CreateWalk/>}
      { selectedWorkout==="lift" && <CreateLift/>}
      </div>

    )}


    </div>
  );
};

export default CreateWorkout;

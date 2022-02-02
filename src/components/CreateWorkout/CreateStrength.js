import React, { useState, useEffect } from "react";
import StrengthDetails from "./StrengthDetails";

const CreateStrength = (props) => {

  const [workout, setWorkout] = useState({
    category: "strength",
    name: "",
    exercises: []
  });

  const handleChange = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const [counter, setCounter] = useState(0);

  console.log(workout);

  return (
    <div className="container p-4">
      <div className="flex justify-center">
        <img
          className="max-h-20 h-20 mb-5"
          alt="weight-icon"
          src="https://icons-for-free.com/iconfiles/png/512/fitness+gym+gymnasium+icon-1320168052118785594.png"
        ></img>
      </div>
      {/* <h1>Details</h1> */}
      {/* <div className="border border-teal-500 bg-neutral-700 rounded-md my-5 overflow-x-auto"> */}
      <div className="flex justify-center">
        <div className="flex-col my-3">
      <label htmlFor="name" className="block text-sm font-medium">
        Name Your Workout
      </label>
      <input
        className="w-72  bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
        name="name"
        onChange={handleChange}
        value={workout.name}
      />
      </div>
      </div>

      <div className="my-2">
      <StrengthDetails handleChange={handleChange}/>
      { [...Array(counter)].map((_, i) => <StrengthDetails key={i} number={i}/>) }
      </div>

    <div className="flex justify-end">
    <button className="bg-teal-500 p-1 rounded-md" onClick={() => setCounter(counter + 1)}>Add Exercise</button>
    </div>

    </div>
  );
};

export default CreateStrength;

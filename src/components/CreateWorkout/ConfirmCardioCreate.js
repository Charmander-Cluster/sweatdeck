import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cardioLocalCreateWorkout } from "../../store";

const ConfirmCardioCreate = () => {
  // const [workoutDetails, setWorkoutDetails] = useState({})
  const cardioLocalWorkout = useSelector((state) => state.cardioLocalWorkout);
  const [completed, setCompleted] = useState(false);
  const [saved, setSaved] = useState(false);

  console.log(cardioLocalWorkout);

  // useEffect(()=>{
  //   setWorkoutDetails(cardioLocalWorkout)
  //   console.log(workoutDetails)
  // },)

  const handleSaveAndComplete = () => {
    setCompleted(true);
  };

  const handleSaveOnly = () => {
    setSaved(true);
  };

  return (
    <div className="container flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <div className="flex justify-center">
          <h1 className="mt-28 text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500  to-purple-600">
            You've Created A New Cardio Workout!
          </h1>
        </div>
      </div>
      {/* The confirmation page
      <div>You've created a new cardio Workout!</div>
      <div>Your Workout Name: {workoutDetails.name}</div>
      <div>Type: {workoutDetails.exercises.type}</div>
      <div>Distance: {workoutDetails.exercises.distance} {workoutDetails.exercises.units}</div>
      <div>Time: {workoutDetails.exercises.hours} hours and {workoutDetails.exercises.minutes} minutes</div>
      <div></div> */}

      {!completed && !saved && (
        <div>
          <div className="grid justify-center mt-20 mb-10">
            <button
              type="button"
              className="text-xl bg-teal-500  rounded-md p-8 w-64 border border-white text-zinc-800"
              onClick={handleSaveAndComplete}
            >
              Save & Mark Completed Today
            </button>
          </div>
          <div className="grid justify-center">
            <button
              type="button"
              className="text-xl text-teal-500 border border-teal-500  rounded-md p-8 w-64 "
              onClick={handleSaveOnly}
            >
              Save for Later
            </button>
          </div>
        </div>
      )}

      {!completed && saved && (
        <div>
          Your Workout Saved!
          <button>Return Home</button>
        </div>
      )}

      {completed && !saved && (
        <div>
          Your Workout Saved & Marked Completed Today!
          <button>Return Home</button>
        </div>
      )}
    </div>
  );
};

export default ConfirmCardioCreate;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { strengthLocalCreateWorkout } from "../../store";

const ConfirmStrengthCreate = () => {
  // const [workoutDetails, setWorkoutDetails] = useState({})
  const strenthLocalWorkout = useSelector((state) => state.strengthLocalWorkout);
  const [completed, setCompleted] = useState(false);
  // const [saved, setSaved] = useState(false);

  // useEffect(()=>{
  //   setWorkoutDetails(cardioLocalWorkout)
  //   console.log(workoutDetails)
  // },)

  const handleSaveAndComplete = () => {
    setCompleted(true);
  };

  // const handleSaveOnly = () => {
  //   setSaved(true);
  // };

  return (
    <div className="container flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <div className="flex-col justify-center">
          <div className="flex justify-center">
          <img alt="purple-checkmark" src="https://iconarchive.com/download/i85557/graphicloads/100-flat/check.ico" className="mt-20 h-32"/>
          </div>
          <h1 className="mt-10 text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500  to-purple-600">
            You've Created A New Strength Workout!
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

      {!completed && (
        <div>
          <div className="grid justify-center mt-20">
            <button
              type="button"
              className="text-xl bg-teal-500  rounded-md p-3 border border-white text-white"
              onClick={handleSaveAndComplete}
            >
              Mark Completed Today
            </button>
          </div>
          <div className="grid justify-center">
            <button
              type="button"
              className="text-xl text-white border border-white rounded-md mt-5 p-3 w-52 "
            >
              Return Home
            </button>
          </div>
          {/* <div className="grid justify-center">
            <button
              type="button"
              className="text-xl text-teal-500 border border-teal-500  rounded-md p-8 w-64 "
              onClick={handleSaveOnly}
            >
              Save for Later
            </button>
          </div> */}
        </div>
      )}

      {/* {!completed && saved && (
        <div>
          Your Workout Saved!
          <button>Return Home</button>
        </div>
      )} */}

      {completed && (
        <div>
        <div className="grid justify-center mt-20">
          <div className="flex-row">
          <div
            type="button"
            className="flex text-2xl text-teal-500 rounded-md p-3"
          >

            {/* <img alt="teal-checkmark" className="h-6" src="https://nzqba.co.nz/wp-content/uploads/2019/07/tick.png"/> */}
            <img alt="teal-checkmark" className="h-6 mr-2" src="https://palmbayprep.org/wp-content/uploads/2015/09/Calendar-Icon.png"/>


            Completed Today
          </div>
          </div>
        </div>
        <div className="grid justify-center">
          <button
            type="button"
            className="text-xl text-white rounded-md mt-5 p-3 border border-white w-52"
          >
            Return Home
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmStrengthCreate;

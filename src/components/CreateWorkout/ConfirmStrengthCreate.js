import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { logDBWorkout } from "../../store/logWorkout"
import { fetchLoginUser } from "../../store/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ConfirmStrengthCreate = () => {
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()

  const [user, setUser] = useState(getAuth().currentUser);

  useEffect(() => {
    dispatch(fetchLoginUser());
  }, [dispatch, user]);

  const authUser = useSelector((state) => state.auth);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });
  const userId = authUser.uid;

  const newStrengthWorkoutId= useSelector(state=> state.DBWorkout)

  const handleLog= () => {
    dispatch(logDBWorkout(userId, newStrengthWorkoutId))
    setCompleted(true);
  };

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
              onClick={handleLog}
            >
              Mark Completed Today
            </button>
          </div>
          <div className="grid justify-center">
            <button
              type="button"
              className="text-xl text-white border border-white rounded-md mt-5 p-3 w-52 "
              onClick={()=>history.push("/")}
            >
              Return Home
            </button>
          </div>
        </div>
      )}

      {completed && (
        <div>
        <div className="grid justify-center mt-20">
          <div className="flex-row">
          <div
            type="button"
            className="flex text-2xl text-teal-500 rounded-md p-3"
          >

            <img alt="teal-checkmark" className="h-6 mr-2" src="https://palmbayprep.org/wp-content/uploads/2015/09/Calendar-Icon.png"/>


            Completed Today
          </div>
          </div>
        </div>
        <div className="grid justify-center">
          <button
            type="button"
            className="text-xl text-white rounded-md mt-5 p-3 border border-white w-52"
            onClick={()=>history.push("/")}
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

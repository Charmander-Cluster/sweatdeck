import {
  doc,
  collection,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import db from "../firebase";

const LOG_DB_WORKOUT = "LOG_DB_WORKOUT";

const _logDBWorkout = (workout) => {
  return {
    type: LOG_DB_WORKOUT,
    workout,
  };
};

export const logDBWorkout = (userId, docId) => async (dispatch) => {
  try {
    const userRef = doc(db, `users/${userId}/workouts`, docId);
    const workoutRef = doc(db, `workouts`, docId);
    await updateDoc(userRef, { timesCompleted: increment(1) });
    await updateDoc(workoutRef, { logs: increment(1) });
  } catch (error) {
    return error;
  }
};

const initialState = {};

export default function logDBWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_DB_WORKOUT:
      return action.workout;
    default:
      return state;
  }
}

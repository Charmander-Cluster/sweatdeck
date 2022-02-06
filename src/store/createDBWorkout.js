import { async } from "@firebase/util";
import {
  doc,
  setDoc,
  collection,
  updateDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import db from "../firebase";

const CREATE_DB_WORKOUT = "CREATE_DB_WORKOUT";
const LOG_DB_WORKOUT = "LOG_DB_WORKOUT";

const _createDBWorkout = (workout) => {
  return {
    type: CREATE_DB_WORKOUT,
    workout,
  };
};

const _logDBWorkout = (workout) => {
  return {
    type: LOG_DB_WORKOUT,
    workout,
  };
};

export const createDBWorkout = (workout, userId) => async (dispatch) => {
  try {
    const userRef = collection(db, `users/${userId}/workouts`);
    const workoutRef = collection(db, `workouts`);
    console.log("**THUNK USERID**", userId);
    const response = await addDoc(userRef, {
      createdAt: serverTimestamp(),
      name: workout.name,
      category: workout.category,
      exercises: workout.exercises,
      playlist: workout.playlist,
      datesCompleted: workout.datesCompleted,
      timesCompleted: workout.timesCompleted
    }).then(function (docRef) {
      const userWorkoutId = docRef.id;
      setDoc(doc(db, "workouts", userWorkoutId), {
        createdAt: serverTimestamp(),
        name: workout.name,
        category: workout.category,
        exercises: workout.exercises,
        playlist: workout.playlist,
        userId: doc(db, "users",  userId),
        logs: workout.logs
      });
    });
  } catch (error) {
    return error;
  }
};

export const createDBWorkoutNoPlaylist =
  (workout, userId) => async (dispatch) => {
    try {
      const userRef = collection(db, `users/${userId}/workouts`);
      const workoutRef = collection(db, `workouts`);
      console.log("**THUNK USERID**", userId);
      const response = await addDoc(userRef, {
        createdAt: serverTimestamp(),
        name: workout.name,
        category: workout.category,
        exercises: workout.exercises,
        datesCompleted: workout.datesCompleted,
        timesCompleted: workout.timesCompleted
      }).then(function (docRef) {
        const userWorkoutId = docRef.id;
        setDoc(doc(db, "workouts", userWorkoutId), {
          createdAt: serverTimestamp(),
          name: workout.name,
          category: workout.category,
          exercises: workout.exercises,
          userId: doc(db, "users",  userId),
          logs: workout.logs
        });
      });
    } catch (error) {
      return error;
    }
  };

export const logDBWorkout = (userId, workoutId) => async(dispatch) => {
  try {
    const userRef = collection(db, `users/${userId}/workouts/${workoutId}`);
    const response = await addDoc(userRef, {
      datesCompleted: "ADD STUFF"

    }).then(()=> {
      const workoutRef = collection(db, `workouts/${workoutId}`);
      //add the code to update here
    })
  } catch (error) {
    return error;
  }
}

const initialState = {};

export default function createDBWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DB_WORKOUT:
      return action.workout;
    case LOG_DB_WORKOUT:
      return action.workout;
    default:
      return state;
  }
}

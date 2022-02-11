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

const _createDBWorkout = (workoutId) => {
  return {
    type: CREATE_DB_WORKOUT,
    workoutId,
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
      datesCompleted: [],
      timesCompleted: 0
    })
    .then(function (docRef) {
      const userWorkoutId = docRef.id;
      dispatch(_createDBWorkout(userWorkoutId))
      setDoc(doc(db, "workouts", userWorkoutId), {
        createdAt: serverTimestamp(),
        name: workout.name,
        category: workout.category,
        exercises: workout.exercises,
        playlist: workout.playlist,
        userId: userId,
        logs: 0
      });
    })
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
        datesCompleted: [],
        timesCompleted: 0
      }).then(function (docRef) {
        const userWorkoutId = docRef.id;
        dispatch(_createDBWorkout(userWorkoutId))
        setDoc(doc(db, "workouts", userWorkoutId), {
          createdAt: serverTimestamp(),
          name: workout.name,
          category: workout.category,
          exercises: workout.exercises,
          userId: userId,
          logs: 0
        });
      });
    } catch (error) {
      return error;
    }
  };

const initialState = "";

export default function createDBWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DB_WORKOUT:
      return action.workoutId;
    default:
      return state;
  }
}

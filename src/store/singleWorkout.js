import {
  collection,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  serverTimestamp,
  setDoc
} from "firebase/firestore";
import db from "../firebase";

const GET_SINGLE_WORKOUT = "GET_SINGLE_WORKOUT";
const EDIT_WORKOUT = "EDIT_WORKOUT";
const DELETE_WORKOUT = "DELETE_WORKOUT";
const GET_JUST_WORKOUT = "GET_JUST_WORKOUT";

const getSingleWorkout = (workout) => {
  return {
    type: GET_SINGLE_WORKOUT,
    workout,
  };
};

const editWorkout = (workout) => {
  return {
    type: EDIT_WORKOUT,
    workout,
  };
};

const deleteWorkout = (workout) => {
  return {
    type: DELETE_WORKOUT,
    workout,
  };
};

const getJustWorkout = (workout) => {
  return {
    type: GET_JUST_WORKOUT,
    workout,
  };
};

export const fetchSingleWorkoutThunk = (userId, docId) => {
  return async (dispatch) => {
    try {
      const workout = await getDoc(doc(db, `users/${userId}/workouts`, docId));
      //console.log("this is workout from sW thunk", workout.data());

      dispatch(getSingleWorkout(workout.data()));
    } catch (err) {
      console.log("Failed at single Workout Thunk", err);
    }
  };
};

export const editWorkoutThunk = (userId, docId, workout) => {
  return async (dispatch) => {
    try {
      const userRef = doc(db, `users/${userId}/workouts`, docId);
      const workoutRef = doc(db, `workouts`, docId);
      if (workout.playlist) {
        await updateDoc(userRef, {
          name: workout.name,
          category: workout.category,
          exercises: workout.exercises,
          playlist: workout.playlist,
        });
        await updateDoc(workoutRef, {
          name: workout.name,
          category: workout.category,
          exercises: workout.exercises,
          playlist: workout.playlist,
        });
      } else {
        await updateDoc(userRef, {
          name: workout.name,
          category: workout.category,
          exercises: workout.exercises,
        });
        await updateDoc(workoutRef, {
          name: workout.name,
          category: workout.category,
          exercises: workout.exercises,
        });
      }
    } catch (error) {
      return error;
    }
  };
};

export const deleteWorkoutThunk = (userId, docId) => {
  return async (dispatch) => {
    try {
      await deleteDoc(doc(db, `users/${userId}/workouts`, docId));
    } catch (err) {
      console.log("Failed at single Workout Thunk", err);
    }
  };
};

export const fetchJustWorkoutThunk = (docId) => {
  return async (dispatch) => {
    try {
      const workout = await getDoc(doc(db, "workouts", docId));
      dispatch(getJustWorkout(workout.data()));
    } catch (err) {
      console.log("Failed at just Workout Thunk", err);
    }
  };
};


const initialState = {};
export default function singleWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_WORKOUT:
      return action.workout;
    case EDIT_WORKOUT:
      return action.workout;
    case DELETE_WORKOUT:
      return action.workout;
    case GET_JUST_WORKOUT:
      return action.workout;
    default:
      return state;
  }
}

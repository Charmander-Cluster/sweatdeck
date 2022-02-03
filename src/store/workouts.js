import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase";

const GET_LATEST_USER_WORKOUT = "GET_LATEST_USER_WORKOUT";
const GET_LATEST_USER_EXERCISES = "GET_LATEST_USER_EXERCISES";

const getLatestUserWorkout = (userWorkout) => {
  return {
    type: GET_LATEST_USER_WORKOUT,
    userWorkout,
  };
};

const getLatestUserExercises = (userExercises) => {
  return {
    type: GET_LATEST_USER_EXERCISES,
    userExercises,
  };
};

export const fetchLatestUserExercisesThunk = (userId) => {
  return async (dispatch) => {
    try {
      const workoutRef = collection(db, `users/${userId}/workouts`);
      const user = await getDocs(workoutRef);
      const workouts = user.docs.map((doc) => doc.data());

      const workoutsArr = [];
      user.forEach((doc) => {
        workoutsArr.push(doc.id);
      });
      const workoutId = workoutsArr[0];
      const allUserExercises = await getDocs(
        collection(db, `users/${userId}/workouts/${workoutId}/exercises`)
      );
      const exercises = allUserExercises.docs.map((doc) => doc.data());

      const workoutsAndExercises = [workouts[0], exercises];

      await dispatch(getLatestUserExercises(workoutsAndExercises));
    } catch (err) {
      console.log("Error at Fetch User Exercises Thunk", err);
    }
  };
};

export const fetchLatestUserWorkoutThunk = (userId) => {
  return async (dispatch) => {
    try {
      const workoutRef = collection(db, `users/${userId}/workouts`);
      const workouts = await getDocs(workoutRef);

      const workoutsArr = [];
      workouts.forEach((doc) => {
        workoutsArr.push(doc.id);
      });

      const allUserWorkouts = workouts.docs.map((doc) => doc.data());

      const workoutsAndIds = [allUserWorkouts, workoutsArr];

      await dispatch(getLatestUserWorkout(workoutsAndIds));
    } catch (err) {
      console.log("Error at Fetch User Workout Thunk", err);
    }
  };
};

const initialState = {
  userWorkout: {},
  userExercises: {},
};

export default function workoutsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_USER_WORKOUT:
      return { ...state, userWorkout: action.userWorkout };
    case GET_LATEST_USER_EXERCISES:
      return { ...state, userExercises: action.userExercises };

    default:
      return state;
  }
}

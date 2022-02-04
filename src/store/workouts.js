import { collection, getDocs, query, orderBy } from "firebase/firestore";
import db from "../firebase";

const GET_LATEST_USER_WORKOUT = "GET_LATEST_USER_WORKOUT";
// const GET_LATEST_USER_EXERCISES = "GET_LATEST_USER_EXERCISES";

const getLatestUserWorkout = (userWorkout) => {
  return {
    type: GET_LATEST_USER_WORKOUT,
    userWorkout,
  };
};

// const getLatestUserExercises = (userExercises) => {
//   return {
//     type: GET_LATEST_USER_EXERCISES,
//     userExercises,
//   };
// };

// export const fetchLatestUserExercisesThunk = (userId) => {
//   return async (dispatch) => {
//     try {
//       const workoutRef = collection(db, `users/${userId}/workouts`);
//       const user = await getDocs(workoutRef);
//       const workouts = user.docs.map((doc) => doc.data());

//       const workoutsArr = [];
//       user.forEach((doc) => {
//         workoutsArr.push(doc.id);
//       });
//       const workoutId = workoutsArr[0];
//       const allUserExercises = await getDocs(
//         collection(db, `users/${userId}/workouts/${workoutId}/exercises`)
//       );
//       const exercises = allUserExercises.docs.map((doc) => doc.data());

//       const workoutsAndExercises = [workouts[0], exercises];

//       await dispatch(getLatestUserExercises(workoutsAndExercises));
//     } catch (err) {
//       console.log("Error at Fetch User Exercises Thunk", err);
//     }
//   };
// };

export const fetchLatestUserWorkoutThunk = (userId) => {
  return async (dispatch) => {
    try {
      const workoutRef = collection(db, `users/${userId}/workouts`);
      const q = query(workoutRef, orderBy("createdAt", "desc"));

      const workouts = await getDocs(q);

      const allUserWorkouts = workouts.docs.map((doc) => doc.data());

      await dispatch(getLatestUserWorkout(allUserWorkouts));
    } catch (err) {
      console.log("Error at Fetch User Workout Thunk", err);
    }
  };
};

const initialState = {};

export default function workoutsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_USER_WORKOUT:
      return action.userWorkout;
    // case GET_LATEST_USER_EXERCISES:
    //   return { ...state, userExercises: action.userExercises };

    default:
      return state;
  }
}

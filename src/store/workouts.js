import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import db from "../firebase";

const GET_LATEST_USER_WORKOUT = "GET_LATEST_USER_WORKOUT";
const GET_ALL_USER_WORKOUTS = "GET_ALL_USER_WORKOUTS";

const getLatestUserWorkout = (userWorkout) => {
  return {
    type: GET_LATEST_USER_WORKOUT,
    userWorkout,
  };
};

const getAllUserWorkouts = (userWorkouts) => {
  return {
    type: GET_ALL_USER_WORKOUTS,
    userWorkouts,
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
      const date = new Date();
      date.setDate(date.getDate() - 7);

      const workoutRef = collection(db, `users/${userId}/workouts`);
      const q = query(
        workoutRef,
        where("createdAt", ">=", date),
        orderBy("createdAt", "desc")
      );

      const workouts = await getDocs(q);

      const latestUserWorkouts = workouts.docs.map((doc) => {
        return { workoutId: doc.id, workoutData: doc.data() };
      });

      await dispatch(getLatestUserWorkout(latestUserWorkouts));
    } catch (err) {
      console.log("Error at Fetch User Workout Thunk", err);
    }
  };
};

export const fetchAllUserWorkoutsThunk = (userId) => {
  return async (dispatch) => {
    try {
      const workoutRef = collection(db, `users/${userId}/workouts`);

      const workouts = await getDocs(workoutRef);

      const allUserWorkouts = workouts.docs.map((doc) => doc.data());

      await dispatch(getAllUserWorkouts(allUserWorkouts));
    } catch (err) {
      console.log("Error at Fetch All User Workouts Thunk", err);
    }
  };
};

const initialState = {
  latestWorkouts: [],
  allWorkouts: [],
};

export default function workoutsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_USER_WORKOUT:
      return { ...state, latestWorkouts: action.userWorkout };
    case GET_ALL_USER_WORKOUTS:
      return { ...state, allWorkouts: action.userWorkouts };

    default:
      return state;
  }
}

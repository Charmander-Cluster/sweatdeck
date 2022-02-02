import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase";

const GET_LATEST_USER_WORKOUT = "GET_LATEST_USER_WORKOUT";

const getLatestUserWorkout = (userWorkout) => {
  return {
    type: GET_LATEST_USER_WORKOUT,
    userWorkout,
  };
};

export const fetchLatestUserWorkoutThunk = (userId) => {
  return async (dispatch) => {
    try {
      const workoutRef = collection(db, `users/${userId}/workouts`);
      const workoutQuery = query(
        workoutRef,
        where("category", "in", ["strength", "cardio"])
      );
      const user = await getDocs(workoutQuery);
      const workoutsArr = [];
      user.forEach((doc) => {
        workoutsArr.push(doc.id);
      });
      const workoutId = workoutsArr[0];
      const allUserWorkouts = await getDocs(
        collection(db, `users/${userId}/workouts/${workoutId}/exercises`)
      );
      const exercises = allUserWorkouts.docs.map((doc) => doc.data());
      dispatch(getLatestUserWorkout(exercises));
    } catch (err) {
      console.log("Error at Fetch User Workout Thunk", err);
    }
  };
};

const initialState = {
  userWorkout: {},
};

export default function workoutsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_USER_WORKOUT:
      return { ...state, userWorkout: action.userWorkout };

    default:
      return state;
  }
}

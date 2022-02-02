import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase";

const GET_USER_WORKOUT = "GET_USER_WORKOUT";

const getUserWorkout = (userWorkout) => {
  return {
    type: GET_USER_WORKOUT,
    userWorkout,
  };
};

export const fetchUserWorkoutThunk = (userId) => {
  return async (dispatch) => {
    try {
      const workoutRef = collection(db, `users/${userId}/workouts`);

      const workoutQuery = query(
        workoutRef,
        where("category", "==", "strength")
      );

      const user = await getDocs(workoutQuery);

      const workoutsArr = [];

      user.forEach((doc) => {
        workoutsArr.push(doc.id);
      });

      const workoutId = workoutsArr.toString();

      const allUserWorkouts = await getDocs(
        collection(db, `users/${userId}/workouts/${workoutId}/exercises`)
      );

      const exercises = allUserWorkouts.docs.map((doc) => doc.data());

      dispatch(getUserWorkout(exercises));
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
    case GET_USER_WORKOUT:
      return { ...state, userWorkout: action.userWorkout };

    default:
      return state;
  }
}

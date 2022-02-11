import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  get,
} from "firebase/firestore";
import db from "../firebase";

//action creator
const GET_USER_WORKOUTS = "GET_USER_WORKOUTS";

const getUserWorkouts = (workouts) => {
  return {
    type: GET_USER_WORKOUTS,
    workouts,
  };
};

export const fetchUserWorkoutsThunk = (userId, cardioOrStrength) => {
  return async (dispatch) => {
    try {
      const workoutRef = collection(db, `users/${userId}/workouts`);
      let allWorkouts = query(
        workoutRef,
        where("category", "==", cardioOrStrength)
      ); //change this to cardioOrStrength
      //let exercises = query(allWorkouts)
      let exercises = await getDocs(allWorkouts);

      //console.log("this is exercises from thunk", exercises);
      let allExercises = exercises.docs.map((elem) => {
        return { elemId: elem.id, elemData: elem.data() };
      });
      //console.log("All Exercises from Thunk", allExercises);
      dispatch(getUserWorkouts(allExercises));
    } catch (err) {
      console.log("Failed at UserWorkouts Thunk", err);
    }
  };
};

const initialState = [];

export default function userWorkoutsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_WORKOUTS:
      return action.workouts;
    default:
      return state;
  }
}
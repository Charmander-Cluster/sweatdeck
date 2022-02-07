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

const GET_SINGLE_WORKOUT = "GET_SINGLE_WORKOUT";

const getSingleWorkout = (workout) => {
  return {
    type: GET_SINGLE_WORKOUT,
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

const initialState = {};
export default function singleWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_WORKOUT:
      return action.workout;
    default:
      return state;
  }
}

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
const GET_SINGLE_WORKOUT = "GET_SINGLE_WORKOUT";

const getSingleWorkout = (workout) => {
  return {
    type: GET_SINGLE_WORKOUT,
    workout,
  };
};

//thunks
export const fetchSingleWorkoutThunk = (userId, docId) => {
  return async (dispatch) => {
    try {
      //   const workoutRef = collection(db, `users/${userId}/workouts`);
      //    let allWorkouts = query(workoutRef, where('id','==', docId));
      //   let exercise = await getDocs(workoutRef);

      const workout = await getDoc(doc(db, `users/${userId}/workouts`, docId));
      //console.log("this is workout from sW thunk", workout.data());

      //console.log("this is exercise from single Workout", exercise);
      //   let allExercises = exercise.docs.map((elem) => {
      //     return elem.data();
      //   });
      //   console.log("all exercises from thunk", allExercises);
      dispatch(getSingleWorkout(workout.data()));
    } catch (err) {
      console.log("FAiled at single Workout Thunk", err);
    }
  };
};

//Await getDoc(doc(db, ‘workouts’, ‘workoutId’))

//reducer
const initialState = {};
export default function singleWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_WORKOUT:
      return action.workout;
    default:
      return state;
  }
}

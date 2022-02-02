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

export const fetchUserWorkoutsThunk = (userId) => {
  return async (dispatch) => {
    try {
      const workoutRef = collection(db, `users/${userId}/workouts`);
      let allWorkouts = query(workoutRef, where("category", "==", "cardio"));
      let exercises = await getDocs(allWorkouts);

      let allExercises = exercises.docs.map((elem) => {
        return { elemId: elem.id, elemData: elem.data() };
      });
      console.log("All Exercises from Thunk", allExercises);
      dispatch(getUserWorkouts(allExercises));
    } catch (err) {
      console.log("FAiled at UserWorkouts Thunk", err);
    }
  };
};

const initialState = [];

export default function userWorkoutsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_WORKOUTS:
      return { ...state, workouts: action.workouts }; //{[], workouts: [{},{}]}
    default:
      return state;
  }
}

//const q = query(collection(db, "cities"), where("capital", "==", true));

//this is up to all user workouts
//   const workoutRefStrength = collection(db, `users/${userId}/workouts`);
//   let strength = query(workoutRef, where("category", "==", "strength"));

//   let exerciseArray = [];
//   const response = await getDocs(cardio);
//   response.forEach((doc) => exerciseArray.push(doc.id));

//   const newVariable = query(workoutRef, where("uid", "in", exerciseArray));
//   console.log("this is new Variable", newVariable);

//   console.log(exerciseArray);
//   const allExercises = await getDocs(
//     collection(db, `users/${userId}/workouts/${exerciseArray[0]}/exercises`)
//   );
//^^ This can be used in individual workout thunk
//console.log("this is allWorkouts", allWorkouts);
//const exercises = allWorkouts.docs.map((doc) => doc.data());
//console.log("this is response from thunk", exercises);
//dispatch(getUserWorkouts(exercises));

// export const fetchAllUsersThunk = () => {
//     return async (dispatch) => {
//       try {
//         const response = await getDocs(collection(db, "users"));
//         const users = response.docs.map((doc) => doc.data());
//         dispatch(getAllUsers(users));
//       } catch (err) {
//         console.log("Failed at All Users Thunk", err);
//       }
//     };
//   };

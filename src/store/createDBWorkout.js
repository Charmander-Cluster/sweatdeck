import {
  doc,
  setDoc,
  collection,
  updateDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import db from "../firebase";

const CREATE_DB_WORKOUT = "CREATE_DB_WORKOUT";

const _createDBWorkout = (workout) => {
  return {
    type: CREATE_DB_WORKOUT,
    workout,
  };
};

export const createDBWorkout = (workout, userId) => async (dispatch) => {
  try {
    const userRef = collection(db, `users/${userId}/workouts`);
    const workoutRef = collection(db, `workouts`);
    console.log("**THUNK USERID**", userId);
    const response = await addDoc(userRef, {
      timestamp: serverTimestamp(),
      name: workout.name,
      category: workout.category,
      exercises: workout.exercises,
      playlist: workout.playlist,
    }).then(function (docRef) {
      const userWorkoutId = docRef.id;
      setDoc(doc(db, "workouts", userWorkoutId), {
        createdAt: serverTimestamp(),
        name: workout.name,
        category: workout.category,
        exercises: workout.exercises,
        playlist: workout.playlist,
      });
    });
    //   // const response2 = await addDoc(workoutRef, {
    //   //   timestamp: serverTimestamp(),
    //   //   name: workout.name,
    //   //   category: workout.category,
    //   //   exercises: workout.exercises,
    //   //   playlist: workout.playlist
    //   // })
    // )
    //console.log("**THUNK RES**", response.data())
    // .then(function(docRef) {
    //   const exerciseRef = docRef.id
    //   const newRef = collection(db,`users/${userId}/workouts/${exerciseRef}/exercises`)
    //   const response = await addDoc(newRef, {

    //   })
    // })

    // dispatch(_createDBWorkout(response));
  } catch (error) {
    return error;
  }
};

const initialState = {};

export default function createDBWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DB_WORKOUT:
      return action.workout;
    default:
      return state;
  }
}

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
  const GET_RECOMMENDED_WORKOUTS = "GET_RECOMMENDED_WORKOUTS";
  
  const getRecommendedWorkouts = (workouts) => {
    return {
      type: GET_RECOMMENDED_WORKOUTS,
      workouts,
    };
  };
  
  export const fetchRecommendedWorkoutsThunk = (userId, cardioOrStrength) => {
    return async (dispatch) => {
      try {
      } catch (err) {
        console.log(err);
      }
    };
  };
  
  const initialState = [];
  
  export default function userWorkoutsReducer(state = initialState, action) {
    switch (action.type) {

      default:
        return state;
    }
  }
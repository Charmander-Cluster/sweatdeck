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
  
  export const fetchRecommendedWorkoutsThunk = (userId) => {
    return async (dispatch) => {
      try {
        const user = await getDoc(doc(db, "users", userId));
        const userGroup = user.data().group       
        const similarUsersRef = query(
          collection(db, "users"),
          where("group", "==", userGroup));
        let similarUsers = await getDocs(similarUsersRef);
        let users =[];
        similarUsers.docs.map((elem) => {
          if (elem.id!==userId) {
          users.push(elem.id)}
        });
        const shuffled = users.sort(() => 0.5 - Math.random());

        let similarWorkouts = [];

        for (let i =0; i<similarUsers.length; i++){
          if (similarWorkouts.length > 6) {break;}
          else {
          let workouts = await getDocs(collection(db, `users/${shuffled[i]}/workouts`))
          let workoutsArr = workouts.docs.map((elem) => {
            return { elemId: elem.id, elemData: elem.data() }})
            for (let j =0; j<workoutsArr.length; j++) {
              if (similarWorkouts.length > 6) {break;}
              else {similarWorkouts.push(workoutsArr[j])}
            }
          }
        };
        console.log(similarWorkouts);

      } catch (err) {
        console.log(err);
      }
    };
  };
  
  const initialState = [];
  
  export default function recommendedWorkouts(state = initialState, action) {
    switch (action.type) {
      case GET_RECOMMENDED_WORKOUTS:
        return action.workouts;
      default:
        return state;
    }
  }
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
import { shuffle } from "../brain/shuffle";

//action creator
const GET_RECOMMENDED_WORKOUTS = "GET_RECOMMENDED_WORKOUTS";

const getRecommendedWorkouts = (workouts) => {
  return {
    type: GET_RECOMMENDED_WORKOUTS,
    workouts,
  };
};

export const fetchRecommendedWorkoutsThunk = (
  userId,
  groupNum,
  cardioOrStrength
) => {
  return async (dispatch) => {
    try {

      // const user = await getDoc(doc(db, "users", userId));
      // const userGroup = user.data().group;
      const similarUsersRef = query(
        collection(db, "users"),
        where("group", "==", groupNum)
      );
      let similarUsers = await getDocs(similarUsersRef);

      let users = similarUsers.docs.map((elem) => {
        if (elem.id !== userId) {
          return elem.id;
        }
      });
      const shuffled = shuffle(users).slice(0,10);

      const workoutsRef = query(
        collection(db, "workouts"),
        where("userId", "in", shuffled),
        where("category", "==", cardioOrStrength)
      );
      let similarWorkouts = await getDocs(workoutsRef)
      let finalWorkouts = similarWorkouts.docs.map((elem) => {
        return {elemId: elem.id, elemData: elem.data()};
      }).slice(0,3)

      dispatch(getRecommendedWorkouts(finalWorkouts));
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

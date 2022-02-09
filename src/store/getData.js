import { collection, getDocs, doc } from "firebase/firestore";
import db from "../firebase.js";

const GET_DATA = "GET_DATA";

const getData = (data) => {
  return {
    type: GET_DATA,
    data,
  };
};

export const getDataThunk = () => {
  return async (dispatch) => {
    try {
      const userData = await getDocs(collection(db, "users"));
      let users = userData.docs.map((elem) => {
          return {elemData: elem.data() }
      })

      let arr = [];
      userData.docs.map((elem) => {
          arr.push([elem.data().birthday, elem.data().state])
      })

      console.log(arr);
      dispatch(getData(arr))
    } catch (err) {
      console.log(err);
    }
  };
};

export default function getDataReducer (state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.data;
    default:
      return state;
  }
}

import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import db from "../firebase";

const GET_SINGLE_USER = "GET_SINGLE_USER";
const GET_ALL_USERS = "GET_ALL_USERS";
const EDIT_USER = "EDIT_USER";

const getSingleUser = (user) => {
  return {
    type: GET_SINGLE_USER,
    user,
  };
};

const getAllUsers = (users) => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};

const editUser = (user) => {
  return {
    type: EDIT_USER,
    user,
  };
};

export const fetchSingleUserThunk = (userId) => {
  return async (dispatch) => {
    try {
      const response = await getDoc(doc(db, "users", userId));
      dispatch(getSingleUser(response.data()));
    } catch (err) {
      console.log("Failed at Single User Thunk", err);
    }
  };
};

export const fetchAllUsersThunk = () => {
  return async (dispatch) => {
    try {
      const response = await getDocs(collection(db, "users"));
      const users = response.docs.map((doc) => doc.data());
      dispatch(getAllUsers(users));
    } catch (err) {
      console.log("Failed at All Users Thunk", err);
    }
  };
};

export const editUserThunk = (userId, user) => {
  return async (dispatch) => {
    try {
      const userData = doc(db, "users", userId);
      await updateDoc(userData, user);
      const response = await getDoc(userData);
      dispatch(editUser(response.data()));
    } catch (err) {
      console.log("Failed at Edit User Thunk", err);
    }
  };
};

const initialState = {
  user: {},
  users: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return { ...state, user: action.user };
    case GET_ALL_USERS:
      return { ...state, users: action.users };
    case EDIT_USER:
      return { ...state, user: action.user };

    default:
      return state;
  }
}

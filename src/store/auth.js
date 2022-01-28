import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import db from "../firebase";
//https://firebase.google.com/docs/auth/web/manage-users

const SET_AUTH = "SET_AUTH";

const setAuth = (auth) => ({ type: SET_AUTH, auth });

export const authenticate = (username, password) => async (dispatch) => {
  const auth = getAuth();
  try {
    logout();
    await signInWithEmailAndPassword(auth, username, password);
    const user = auth.currentUser;
    if (user !== null) {
      const response = await getDoc(doc(db, "Users", user.uid));
      const fullDetail = { ...user, ...response.data() };
      dispatch(setAuth(fullDetail));
    }
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const authSignUp = (user) => async (dispatch) => {
  try {
    const auth = getAuth();

    const response = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    const users = collection(db, "users");

    await setDoc(doc(users, response.user.uid), {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      state: user.state,
      birthday: user.birthday
    });
    dispatch(setAuth(user));
  } catch (error) {
    console.log(error);
    return dispatch(setAuth({ error }));
  }
};

export const logout = () => (dispatch) => {
  const auth = getAuth();
  signOut(auth);
  return dispatch(setAuth({}));
};

export default function auth(state = {}, action) {
  switch (action.type) {
    case SET_AUTH: {
      return { ...action.auth };
    }
    default:
      return state;
  }
}

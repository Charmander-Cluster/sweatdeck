import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
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

export const fetchLoginUser = () => async (dispatch) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const response = await getDoc(doc(db, "Users", user.uid));
    const fullDetail = { ...user, ...response.data() };
    await dispatch(setAuth(fullDetail));
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
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email,
      username: user.username,
      state: user.state,
      birthday: user.birthday,
      gender: user.gender || "",
      favoriteWorkoutType: user.favoriteWorkoutType || "",
      frequency: user.frequency || "",
      goal: user.goal || "",
    });
    dispatch(setAuth(user));
  } catch (error) {
    console.log("CODE: ", error.code);
    console.log("MESSAGE: ", error.message);
    let message = "";
    if (error.code === "auth/invalid-email") {
      message = "Invalid email";
    } else if (error.code === "auth/weak-password") {
      message = "Password should be at least 6 characters";
    } else if (error.code === "auth/email-already-in-use") {
      message = "Email already in use";
    } else {
      message = "Error: Please try again";
    }
    alert(message);

    return dispatch(setAuth({ error }));
  }
};

export const sendPasswordReset = async (email) => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
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

import React, { useState } from "react";
import { authenticate, sendPasswordReset } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, Redirect } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state) => state.auth.accessToken);
  // const auth = useSelector((state) => state.auth);
  // const [user, setUser] = useState(getAuth().currentUser);
  // onAuthStateChanged(getAuth(), (u) => {
  //   setUser(u);
  // });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(
      authenticate(evt.target.email.value, evt.target.password.value)
    );
    history.push("/");
  };

  const [email, setEmail] = useState("")

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="mb-2 uppercase font-bold text-lg">Sign In</h1>
      <form
        className="flex flex-col items-center justify-center mb-4"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="font-extrabold text-sm">Email:</h1>
          {/* <label>Username: </label> */}
          <input
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="Email"
            name="email"
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <h1 className="font-extrabold text-sm">Password:</h1>
          {/* <label>Password: </label> */}
          <input
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="Password"
            name="password"
          />
        </div>
        <div>
          <button
            className="flex flex-row text-1xl mx-2 my-2 justify-center bg-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      <div>
        <h2>
          Forgot your password? <button className ="underline" onClick = {() => sendPasswordReset(email)}>Send password reset email</button>
        </h2>
      </div>
      <div>
        <h2>
          Don't have an account? <Link to="/signup" className ="underline" >Sign up!</Link>
        </h2>
      </div>
    </div>
  );
};

export default SignIn;

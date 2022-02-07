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

  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="mb-2 text-lg font-bold uppercase">Sign In</h1>
      <form
        className="flex flex-col items-center justify-center mb-4"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-sm font-extrabold">Email</h1>
          {/* <label>Username: </label> */}
          <input
            className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <h1 className="text-sm font-extrabold">Password</h1>
          {/* <label>Password: </label> */}
          <input
            className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <div>
          <button
            className="flex flex-row justify-center px-8 py-3 mx-2 my-3 text-white transition duration-150 ease-in-out bg-teal-700 rounded shadow-md cursor-pointer text-1xl shadow-black hover:bg-teal-600"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-row">
          <h2>Forgot your password? </h2>

          <button
            className="ml-1 underline"
            onClick={() => sendPasswordReset(email)}
          >
            Password Reset
          </button>
        </div>
        <div>
          <h2>
            Don't have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up!
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";
import { authenticate, sendPasswordReset } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, Redirect } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state) => state.auth.accessToken);
  const auth= useSelector((state) => state.auth);
  const [user, setUser] = useState(getAuth().currentUser);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  const [btnState, setBtnState] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(
      authenticate(evt.target.email.value, evt.target.password.value)
    );
    if (auth.error.code) {setBtnState((prev) => !prev)} 
    history.push("/")
  };


  const handleModal = (event) => {
    event.preventDefault();
    setBtnState((prev) => !prev)
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
        {btnState ? (
                        // <div>{alert("Workout logged!")}</div>
                        <div
                          className="fixed z-10 inset-0 overflow-y-auto"
                          aria-labelledby="modal-title"
                          role="dialog"
                          aria-modal="true"
                        >
                          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div
                              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                              aria-hidden="true"
                            ></div>

                            <span
                              className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true"
                            >
                              &#8203;
                            </span>

                            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-red-500 sm:mx-0 sm:h-10 sm:w-10"></div>
                                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                      className="text-lg leading-6 font-medium text-gray-900"
                                      id="modal-title"
                                    >
                                      {auth.error.code}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                  type="button"
                                  className="modal-close mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                  onClick={handleModal}
                                >
                                  Got it
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
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

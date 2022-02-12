import React, { useState } from "react";
import { authenticate } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const SignIn = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.auth);
  const [btnState, setBtnState] = useState(false);

  const handleModal = (event) => {
    event.preventDefault();
    setBtnState((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="mb-2 text-lg font-bold uppercase">Sign In</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          dispatch(await authenticate(values.email, values.password));
          if (authUser.code) {
            setBtnState((prev) => !prev);
          } else {
            history.push("/");
          }
        }}
      >
        {({ touched, handleSubmit }) => (
          <Form
            className="flex flex-col items-center justify-center mb-4"
            onSubmit={handleSubmit}
          >
            <div>
              <h1 className="text-sm font-extrabold">Email</h1>
              <Field
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <h1 className="text-sm font-extrabold">Password</h1>
              <Field
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="pt-2">
              <button
                className="flex flex-row justify-center px-8 py-3 mx-2 my-3 text-white transition duration-150 ease-in-out bg-teal-700 rounded shadow-md cursor-pointer text-1xl shadow-black hover:bg-teal-800"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </Form>
        )}
      </Formik>

      
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-row">
          <Link to="/passwordreset">
            <button className="mb-2 ml-1 underline">
              Forgot your password?
            </button>
          </Link>
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
      {btnState ? (
        // <div>{alert("Workout logged!")}</div>
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mx-auto bg-red-500 rounded-full sm:mx-0 sm:h-10 sm:w-10"></div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      {authUser.code}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick = {handleModal}
                  className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm modal-close hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                > Done
                    </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SignIn;

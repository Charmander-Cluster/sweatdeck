import React, { useEffect, useState } from "react";
import { authenticate } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import ErrorModal from "./ErrorModal"

const SignIn = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  // const [btnState, setBtnState] = useState(false);

  // const handleModal = () => {
  //   console.log("is it registering this click?");
  //   setBtnState((prev) => !prev);
  // };

  useEffect(() => {
    if (auth.uid) {
      history.push("/");
    }
  }, [auth, history]);

  return (
    <div className="flex flex-col items-center justify-center pt-10 md:min-h-screen">
      <h1 className="text-5xl mb-14">Sweatdeck</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await dispatch(authenticate(values.email, values.password));
          // if (auth.error) {
          //   setBtnState((prev) => !prev);
          // }
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
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <h1 className="mt-1 text-sm font-extrabold">Password</h1>
              <Field
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="pt-2">
              <button
                className="flex flex-row justify-center px-8 py-3 mx-2 my-3 text-white transition duration-150 ease-in-out bg-teal-600 rounded shadow-md cursor-pointer text-1xl shadow-black hover:bg-teal-800"
                type="submit"
              >
                Sign In
              </button>
            </div>
            {/* {btnState ? (
        <ErrorModal 
        handleModal={handleModal}/>
      ) : (
        <div></div>
      )} */}
          </Form>
        )}
      </Formik>
      
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-row">
          <Link to="/passwordreset">
            <button className="mb-2 ml-1 text-teal-500">
              Forgot your password?
            </button>
          </Link>
        </div>
        <div>
          <h2>
            Don't have an account?{" "}
            <Link to="/signup" className="text-teal-500">
              Sign up!
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

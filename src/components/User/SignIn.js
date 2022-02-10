import React from "react";
import { authenticate } from "../../store/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const SignIn = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center pt-10 md:min-h-screen">
      <h1 className="text-5xl mb-14">Sweatdeck</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          const passwordRegex = /(?=.*[0-9])/;
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be 6 characters long.";
          } else if (!passwordRegex.test(values.password)) {
            errors.password = "Invalid password. Must contain one number.";
          }
        }}
        onSubmit={(values) => {
          dispatch(authenticate(values.email, values.password));
          history.push("/");
        }}
      >
        {({ errors, touched, handleSubmit }) => (
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
                validate
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div>
              <h1 className="mt-1 text-sm font-extrabold">Password</h1>
              <Field
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                type="password"
                placeholder="Password"
                name="password"
                validate
              />
              {errors.password && touched.password && errors.password}
            </div>
            <div className="pt-2">
              <button
                className="flex flex-row justify-center px-8 py-3 mx-2 my-3 text-white transition duration-150 ease-in-out bg-teal-600 rounded shadow-md cursor-pointer text-1xl shadow-black hover:bg-teal-800"
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

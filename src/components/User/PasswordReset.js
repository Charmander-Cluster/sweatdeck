import React from "react";
import { sendPasswordReset } from "../../store/auth";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const PasswordReset = () => {
  let history = useHistory();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
        }}
        onSubmit={async (values) => {
          sendPasswordReset(values.email);
          history.push("/");
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form
            className="flex flex-col items-center justify-center p-8 mb-4 bg-teal-600 rounded-md shadow-md shadow-black"
            onSubmit={handleSubmit}
          >
            <h1 className="mb-2 text-lg font-bold ">Password Recovery</h1>
            <div>
              <h1 className="text-sm font-extrabold">Email</h1>
              <Field
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                type="email"
                placeholder="Email"
                name="email"
              />
              {errors.email && touched.email && errors.email}
            </div>

            <div className="mt-2">
              <button
                className="flex flex-row justify-center px-8 py-3 mx-2 my-3 text-white transition duration-150 ease-in-out bg-purple-700 rounded shadow-md cursor-pointer text-1xl shadow-black hover:bg-purple-800"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PasswordReset;

import React from "react";
import { sendPasswordReset } from "../../store/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const PasswordReset = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="mb-2 text-lg font-bold uppercase">Password Recovery</h1>
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
        {({ errors, touched, handleSubmit, isSubmitting }) => (
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
              {errors.email && touched.email && errors.email}
            </div>

            <div className="mt-2">
              <button
                className="flex flex-row justify-center px-8 py-3 mx-2 my-3 text-white transition duration-150 ease-in-out bg-teal-700 rounded shadow-md cursor-pointer text-1xl shadow-black hover:bg-teal-800"
                type="submit"
                disabled={isSubmitting}
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

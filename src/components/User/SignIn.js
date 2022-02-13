import React, { useState } from "react";
import { authenticate } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import ErrorModal from "./ErrorModal"

const SignIn = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState("password");

  const onClickVisible = () => {
    if (visible === "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-20">
      <div className="my-3 ml-0">
        <h1 className="text-6xl">Sweatdeck</h1>
        <div className="h-1 mt-4 rounded-full bg-gradient-to-l from-teal-600 to-purple-600"></div>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await dispatch(authenticate(values.email, values.password));
          // if (auth.error) {
          //   setBtnState((prev) => !prev);
          // }
        }}
      >
        {({ handleSubmit }) => (
          <Form
            className="flex flex-col items-center justify-center p-8 mb-4 bg-teal-600 rounded-md shadow-md mt-7 shadow-black md:w-4/12"
            onSubmit={handleSubmit}
          >
            <div>
              <h1 className="text-sm font-extrabold">Email</h1>
              <Field
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <h1 className="mt-1 text-sm font-extrabold">Password</h1>
              <div className="relative flex items-center justify-center">
                <Field
                  className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  type={visible}
                  placeholder="Password"
                  name="password"
                  
                />
                <div className="absolute right-0 mr-3 stroke-purple-600 hover:stroke-purple-700">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={onClickVisible}
                  >
                    <path
                      d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                      fill="#71717A"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button
                className="flex flex-row justify-center px-8 py-3 mx-2 my-3 text-white transition duration-150 ease-in-out bg-purple-600 rounded-md shadow-md cursor-pointer text-1xl shadow-black hover:bg-purple-700"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex flex-row">
                <Link to="/passwordreset">
                  <button
                    type="button"
                    className="pt-2 ml-1 text-purple-700 hover:text-purple-800"
                  >
                    Forgot your password?
                  </button>
                </Link>
              </div>
              <div>
                <h2>
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-purple-700 hover:text-purple-800"
                  >
                    Sign up!
                  </Link>
                </h2>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUp, authenticate } from "../store/auth";
import { useHistory } from "react-router-dom";

const SignUpTest = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  //const history = useHistory();
  const [userEmails] = useState({});
  const [userInput, setUserInput] = useState({
    user: {
      username: "",
      password: "",
      email: "",
      state: "",
      birthday: "",
    },
    errors: {},
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const user = {
      username: evt.target.username.value,
      password: evt.target.password.value,
      email: evt.target.email.value,
      state: evt.target.state.value,
      birthday: evt.target.birthday.value,
    };

    await dispatch(authSignUp(user));
    await dispatch(authenticate(user.email, user.password));
    history.push("/optionalsignup");
  };

  const handleChange = (evt) => {
    let errors = { password: "", email: "" };
    if (userInput.user.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
    if (userInput.user.email in userEmails) {
      errors.email = "E-mail has already been used.";
    }
    setUserInput({
      user: { ...userInput.user, [evt.target.name]: evt.target.value },
      errors,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full p-10 ">
          <div className="items-center pb-6 border-b border-teal-700 md:flex">
            <h1 className="mb-2 text-lg font-bold text-center uppercase">
              Sign Up
            </h1>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex items-center justify-center w-8 h-8 bg-teal-700 border-2 border-white rounded">
                <p className="text-base font-medium leading-none text-white">
                  01
                </p>
              </div>
              <p className="ml-3 text-base font-medium leading-4 text-white">
                Security
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 md:ml-12">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded">
                <p className="text-base font-medium leading-none text-teal-700">
                  02
                </p>
              </div>
              <p className="ml-3 text-base font-medium leading-4 text-white">
                Optional info
              </p>
            </div>
          </div>
          <h1
            aria-label="profile information"
            className="mt-8 text-3xl font-bold text-white focus:outline-none"
          >
            Security
          </h1>

          <div className="items-center mt-8 md:flex">
            <div className="flex flex-col">
              <h1 className="pt-2 font-extrabold">Username</h1>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col mt-2 md:ml-12 md:mt-0">
              <h1 className="pt-2 font-extrabold">Password</h1>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="items-center mt-2 md:flex">
            <div className="flex flex-col">
              <h1 className="pt-2 font-extrabold">Email Address</h1>
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="items-center mt-2 md:flex">
            <div className="flex flex-col">
              <h1 className="pt-2 font-extrabold">Date of birth</h1>
              <input
                type="text"
                placeholder="Birthday"
                name="birthday"
                className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col mt-2 md:ml-12 md:mt-0">
              <h1 className="pt-2 font-extrabold">State (Location)</h1>
              <input
                type="text"
                placeholder="State (location)"
                name="state"
                className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            aria-label="Next step"
            className="flex items-center justify-center py-4 mt-10 bg-teal-700 rounded shadow-md shadow-black px-7 focus:outline-none md:mt-14 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <span className="text-sm font-medium text-center text-white capitalize">
              Next Step
            </span>
            <svg
              className="mt-1 ml-3"
              width={12}
              height={8}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpTest;

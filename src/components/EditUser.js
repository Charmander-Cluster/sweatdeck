import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editUserThunk } from "../store/users";
import { sendPasswordReset } from "../store";

const EditUser = () => {
  const authUser = useSelector((state) => state.auth);
  const [userState, setUserState] = useState(authUser);

  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editUserThunk(id, userState));
    history.push(`/users/${id}`);
  };

  // const actionCodeSettings = {
  //   url: "https://www.example.com/?email=user@example.com",
  //   iOS: {
  //     bundleId: "com.example.ios",
  //   },
  //   android: {
  //     packageName: "com.example.android",
  //     installApp: true,
  //     minimumVersion: "12",
  //   },
  //   handleCodeInApp: true,
  // };

  // console.log(authUser.email);

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <form onSubmit={handleSubmit}>
        <div className="pt-20 overflow-hidden rounded">
          <div className="flex justify-center w-full pt-4 -mt-20">
            <div className="w-32 h-32">
              <img
                src="https://foundrmeet.com/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
                alt="User Profile"
                className="object-cover w-full h-full rounded-full shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="mb-1 text-3xl font-bold text-center">
              {authUser.firstName} {authUser.lastName}
            </h1>
            <button
              className="ml-1 underline"
              onClick={() => sendPasswordReset("asdd@123.com")}
            >
              Password Reset
            </button>
            <div className="pt-4">
              <h1 className="font-extrabold">Username</h1>
              <label htmlFor="username"></label>
              <input
                onChange={handleChange}
                name="username"
                value={userState.username}
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <h1 className="pt-2 font-extrabold">State</h1>
              <label htmlFor="state"></label>
              <input
                onChange={handleChange}
                name="state"
                value={userState.state}
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="State"
              />
            </div>
            <div className="relative w-full lg:hidden md:mt-4">
              <h1 className="pt-2 font-extrabold">Favorite Workout Type</h1>
              <div className="absolute inset-0 z-0 w-6 h-6 m-auto mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 icon icon-tabler icon-tabler-selector"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#a0aec0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="8 9 12 5 16 9" />
                  <polyline points="16 15 12 19 8 15" />
                </svg>
              </div>
              <select
                aria-label="Selected tab"
                className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                placeholder="Favorite Workout Type"
                name="favoriteWorkoutType"
                onChange={handleChange}
                defaultValue={userState.favoriteWorkoutType}
              >
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
              </select>
            </div>
            <div className="relative w-full lg:hidden md:mt-4">
              <h1 className="pt-2 font-extrabold">Goal</h1>
              <div className="absolute inset-0 z-0 w-6 h-6 m-auto mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 icon icon-tabler icon-tabler-selector"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#a0aec0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="8 9 12 5 16 9" />
                  <polyline points="16 15 12 19 8 15" />
                </svg>
              </div>
              <select
                aria-label="Selected tab"
                className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                placeholder="Goal"
                name="goal"
                onChange={handleChange}
                defaultValue={userState.goal}
              >
                <option value="Get started">Just getting started</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Competition">Competition</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Hobby">Hobby</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button className="flex flex-row justify-center px-8 py-3 my-4 text-white transition duration-150 ease-in-out bg-teal-700 rounded shadow-md text-1xl shadow-black hover:bg-teal-600">
              <svg
                className="w-6 h-6 mr-2 pb-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                ></path>
              </svg>
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;

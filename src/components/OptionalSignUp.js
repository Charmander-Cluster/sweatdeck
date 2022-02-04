import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp, authenticate } from "../store/auth";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchLoginUser } from "../store/auth";

const OptionalSignUp = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  //const history = useHistory();
  const [userInput, setUserInput] = useState({
    user: {
      firstName: "",
      lastName: "",
      gender: "",
      favoriteWorkoutType: "",
      frequency: "",
      goal: "",
    },
    errors: {},
  });

  const authUser = useSelector((state) => state.auth);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!authUser.uid || isLoading) {
      dispatch(fetchLoginUser());
    }

    return () => {
      setLoading(false);
    };
  }, [dispatch, authUser.uid, isLoading]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const user = {
      firstName: evt.target.firstName.value,
      lastName: evt.target.lastName.value,
      gender: evt.target.gender.value,
      favoriteWorkoutType: evt.target.favoriteWorkoutType.value,
      frequency: evt.target.frequency.value,
      goal: evt.target.goal.value,
    };

    dispatch(authSignUp(user, authUser.uid));
    history.push("/");
  };

  const handleChange = (evt) => {
    setUserInput({
      user: { ...userInput.user, [evt.target.name]: evt.target.value },
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
              <div className="flex items-center justify-center w-8 h-8 bg-white border-2 border-white rounded">
                <p className="text-base font-medium leading-none text-teal-500">
                  01
                </p>
              </div>
              <p className="ml-3 text-base font-medium leading-4 text-white">
                Security
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 md:ml-12">
              <div className="flex items-center justify-center w-8 h-8 bg-teal-700 rounded">
                <p className="text-base font-medium leading-none text-white">
                  02
                </p>
              </div>
              <p className="ml-3 text-base font-medium leading-4 text-white">
                Optional info
              </p>
            </div>
          </div>
          <h1
            tabIndex={0}
            aria-label="profile information"
            className="mt-8 text-3xl font-bold text-white focus:outline-none"
          >
            Optional info
          </h1>

          <div className="items-center mt-8 md:flex">
            <div className="flex flex-col mt-2 md:ml-12 md:mt-0">
              <h1 className="pt-2 font-extrabold">First Name</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                tabIndex={0}
                aria-label="Enter first name"
                className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-2 md:ml-12 md:mt-0">
              <h1 className="pt-2 font-extrabold">Last Name</h1>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded"
                onChange={handleChange}
              />
            </div>
            <div className="relative mt-2 lg:hidden md:mt-4">
              <h1 className="pt-2 font-extrabold">Gender</h1>
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
                placeholder="Gender"
                name="gender"
                onChange={handleChange}
              >
                <option value="Prefer not to say">Prefer not to say</option>
                <option value="Female Identifying">Female Identifying</option>
                <option value="Male Identifying">Male Identifying</option>
                <option value="Non-Conforming">Non-Conforming</option>
              </select>
            </div>
            <div className="relative mt-2 lg:hidden md:mt-4">
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
              >
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
              </select>
            </div>
            <div className="relative mt-2 lg:hidden md:mt-4">
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
              >
                <option value="Get started">Just getting started</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Competition">Competition</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Hobby">Hobby</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="items-center mt-2 md:flex">
            <div className="relative lg:hidden md:mt-4">
              <h1 className="pt-2 font-extrabold">Workout Frequency</h1>
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
                placeholder="Frequency"
                name="frequency"
                onChange={handleChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
          </div>

          <button
            aria-label="Submit"
            className="flex items-center justify-center px-12 py-4 mt-10 bg-teal-700 rounded shadow-md shadow-black focus:outline-none md:mt-14 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <span className="text-sm font-medium text-center text-white capitalize">
              Submit
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default OptionalSignUp;

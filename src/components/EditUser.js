import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchSingleUserThunk, editUserThunk } from "../store/users";

const EditUser = () => {
  const { fullUser } = useSelector((state) => {
    return {
      fullUser: state.users.user,
    };
  });
  const [userState, setUserState] = useState(fullUser);

  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleUserThunk(id));
  }, [dispatch, id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editUserThunk(id, userState));
    history.push(`/users/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <form onSubmit={handleSubmit}>
        <div className="rounded overflow-hidden pt-20">
          <div className="-mt-20 w-full flex justify-center pt-4">
            <div className="h-32 w-32">
              <img
                src="https://foundrmeet.com/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
                alt="User Profile"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="font-bold text-3xl text-center mb-1">
              {userState.firstName} {userState.lastName}
            </h1>
            <div className="pt-4">
              <h1 className="font-extrabold">Username</h1>
              <label htmlFor="username"></label>
              <input
                onChange={handleChange}
                name="username"
                value={userState.username}
                className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <h1 className="font-extrabold pt-2">State</h1>
              <label htmlFor="state"></label>
              <input
                onChange={handleChange}
                name="state"
                value={userState.state}
                className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="State"
              />
            </div>
            <div>
              <h1 className="font-extrabold pt-2">Favorite Workout Type</h1>
              <select
                className="appearance-none relative block w-full pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Favorite Workout Type"
                name="favoriteWorkoutType"
                onChange={handleChange}
                defaultValue={userState.favoriteWorkoutType}
              >
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
              </select>
            </div>
            <div>
              <h1 className="font-extrabold pt-2">Goal:</h1>
              <select
                className="appearance-none relative w-full block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
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
            <button className="flex flex-row text-1xl my-4 justify-center bg-teal-700 shadow-md shadow-black transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3">
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

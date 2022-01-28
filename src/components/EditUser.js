import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchSingleUserThunk } from "../store/users";

const EditUser = () => {
  const { user } = useSelector((state) => {
    return {
      user: state.users.user,
    };
  });

  let history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [userState, setUser] = useState(user);

  useEffect(() => {
    dispatch(fetchSingleUserThunk("QnERhBoL96ucViKjt3KO"));
  }, [dispatch, id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log(user);

  return (
    <form
      className="flex flex-col items-center justify-center py-2"
      onSubmit={handleSubmit}
    >
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
        <div className="flex flex-col px-6 mt-4">
          <h1 className="font-bold text-3xl text-center mb-1">
            {user.firstName} {user.lastName}
          </h1>
          <div className="pt-4">
            <label htmlFor="username"></label>
            <input
              onChange={handleChange}
              name="firstName"
              value={userState.username}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              onChange={handleChange}
              name="password"
              value={userState.password}
              className="appearance-none relative block w-full px-3 py-2 mt-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <button className="flex flex-row text-1xl mx-2 my-4 justify-center bg-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3">
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
  );
};

export default EditUser;

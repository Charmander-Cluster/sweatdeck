import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchSingleUserThunk, editUserThunk } from "../store/users";
// import { updateProfile, updateEmail } from "firebase/auth";

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
    // updateProfile(props.user, userAuthState);
    dispatch(editUserThunk(id, userState));
    history.push(`/users/${id}`);
  };

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
          {/* <div>
            <label htmlFor="email"></label>
            <input
              onChange={handleChange}
              name="email"
              value={userState.email}
              className="appearance-none relative block px-10 py-2 mt-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div> */}
          <button className="flex flex-row text-1xl my-4 justify-center bg-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3">
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

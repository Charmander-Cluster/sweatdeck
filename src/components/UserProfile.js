import React, { useEffect } from "react";
import { fetchSingleUserThunk } from "../store/users";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Calendar from "react-calendar";

const UserProfile = () => {
  const { fullUser } = useSelector((state) => {
    return {
      fullUser: state.users.user,
    };
  });

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;
    function fetchData() {
      dispatch(fetchSingleUserThunk(id));
    }
    if (mounted) {
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, [dispatch, id]);

  return (
    <div className="flex flex-col items-center justify-center py-2">
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
            {fullUser.username}
          </h1>
          <p className="text-base pt-2 text-center">
            Birthday: {fullUser.birthday}
          </p>
          <p className="text-center text-base pt-2">State: {fullUser.state}</p>
          <Link to={`${id}/edit`}>
            <button className="flex flex-row w-full text-1xl my-3 justify-center bg-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white py-3">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Edit Profile
            </button>
          </Link>
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default UserProfile;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const authUser = useSelector((state) => state.auth);

  return (
    <div className="fixed z-40 w-full h-screen">
      {authUser.uid && (
        <section
          id="bottom-navigation"
          className="fixed inset-x-0 bottom-0 z-10 block bg-teal-600 shadow-md navbar shadow-black"
        >
          <div id="tabs" className="flex justify-between">
            <Link
              to="/"
              className="justify-center inline-block w-full pt-2 pb-1 text-center"
            >
              <svg
                className="inline-block w-6 h-6 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span className="block text-xs tab tab-home">Dashboard</span>
            </Link>
            <Link
              to="/createworkout"
              className="justify-center inline-block w-full pt-2 pb-1 text-center"
            >
              <svg
                className="inline-block w-6 h-6 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="block text-xs tab tab-home">Create</span>
            </Link>
            <Link
              to={`/users/${authUser.uid}/chooseworkout`}
              className="justify-center inline-block w-full pt-2 pb-1 text-center"
            >
              <svg
                className="inline-block w-6 h-6 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>

              <span className="block text-xs tab tab-whishlist">Workouts</span>
            </Link>

            <Link
              to={`/users/${authUser.uid}`}
              className="justify-center inline-block w-full pt-2 pb-1 text-center"
            >
              <svg
                className="inline-block w-6 h-6 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span className="block text-xs tab tab-account">Me</span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import { useParams, Link } from "react-router-dom";

const Navbar = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-screen fixed">
      <section
        id="bottom-navigation"
        className="md:hidden navbar block fixed inset-x-0 bottom-0 z-10 bg-teal-700 shadow"
      >
        <div id="tabs" className="flex justify-between">
          <Link
            to="/"
            className="w-full justify-center inline-block text-center pt-2 pb-1"
          >
            <svg
              className="w-6 h-6 inline-block mb-1"
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
            <span className="tab tab-home block text-xs">Home</span>
          </Link>
          <Link
            to="/workouts"
            className="w-full justify-center inline-block text-center pt-2 pb-1"
          >
            <svg
              className="w-6 h-6 inline-block mb-1"
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

            <span className="tab tab-whishlist block text-xs">Workouts</span>
          </Link>
          <Link
            to={`/users/${id}`}
            className="w-full  justify-center inline-block text-center pt-2 pb-1"
          >
            <svg
              className="inline-block mb-1 w-6 h-6"
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
            <span className="tab tab-account block text-xs">Me</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

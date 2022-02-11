import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

const EmptyDashboard = (props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [confetti, setConfetti] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setWidth(window.innerWidth);
  //     setHeight(window.innerHeight);
  //   }, 100);
  // });

  const onClickConfetti = () => {
    setConfetti(!confetti);
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  };

  return (
    <div className="flex flex-col px-6 pt-4 rounded-lg md:justify-center md:flex md:min-h-screen">
      {confetti && (
        <Confetti width={width} height={height} numberOfPieces={450} />
      )}
      <div className="relative z-10 pb-1">
        <div className="container flex flex-col items-start justify-between mx-auto ">
          <div className="flex flex-col items-start ">
            <div className="my-6 ml-0 md:ml-60">
              <h4 className="text-2xl font-bold leading-tight text-white">
                Dashboard
              </h4>
              <div className="h-1 mt-4 rounded-full bg-gradient-to-l from-teal-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-4 md:flex md:flex-col md:justify-center md:items-center">
        <p className="flex items-start font-medium leading-none tracking-wide text-white text-md">
          Getting started
        </p>
        <Link className="md:w-6/12" to="/createworkout">
          <button className="w-full px-5 py-2 mt-5 text-sm leading-none text-white bg-teal-600 rounded shadow-md h-28 focus:outline-none shadow-black">
            Create Workout
          </button>
        </Link>
        <Link className="md:w-6/12" to={`users/${props.authUser.uid}`}>
          <button className="w-full px-5 py-2 mt-5 text-sm leading-none text-white bg-teal-600 rounded shadow-md h-28 focus:outline-none shadow-black">
            View User Profile
          </button>
        </Link>

        <button
          onClick={onClickConfetti}
          className="w-full px-5 py-2 mt-5 text-sm leading-none text-white bg-teal-600 rounded shadow-md md:w-6/12 h-28 focus:outline-none shadow-black"
        >
          Confetti
        </button>
        {/* <button
          onClick={onClickConfetti}
          className="w-full px-5 py-2 mt-5 text-sm leading-none text-white transition duration-150 ease-in-out bg-teal-600 rounded shadow-md hover:-translate-y-1 hover:scale-105 hover:bg-teal-700 sm:mt-0 h-28 focus:outline-none shadow-black"
        >
          Confetti
        </button> */}
      </div>
    </div>
  );
};

export default EmptyDashboard;

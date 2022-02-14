import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateWorkout = () => {
  const cardioRedirectUri = /localhost/.test(window.location.href)
    ? "http://localhost:3000/cardioplaylist"
    : "https://sweatdeck.herokuapp.com/cardioplaylist";

  const strengthRedirectUri = /localhost/.test(window.location.href)
    ? "http://localhost:3000/strengthplaylist"
    : "https://sweatdeck.herokuapp.com/strengthplaylist";

  const CARDIO_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${cardioRedirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`;

  const STRENGTH_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${strengthRedirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`;

  const [withPlaylist, setWithPlaylist] = useState(true);

  const handleCardioContinue = () => {
    window.location.href = CARDIO_AUTH_URL;
  };

  const handleStrengthContinue = () => {
    window.location.href = STRENGTH_AUTH_URL;
  };

  return (
    <div className="flex flex-col">
      <div className="relative z-10 pb-10 md:mt-4">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white">
                Create Workout
              </h4>
              <div className="h-1 mt-4 rounded-full bg-gradient-to-l from-teal-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      {withPlaylist ? (
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="flex justify-center hover:text-gray-300">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <button
                className="text-xl font-bold leading-tight text-white"
                type="button"
                onClick={() => setWithPlaylist(true)}
              >
                With Playlist
              </button>
              <div className="h-1 mt-5 bg-white rounded-full shadow-lg shadow-black "></div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <button
                className="pb-5 text-xl font-bold leading-tight border-b-4 border-transparent text-zinc-500 hover:text-gray-300 hover:border-gray-300"
                type="button"
                onClick={() => setWithPlaylist(false)}
              >
                Without Playlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="flex justify-center hover:text-gray-300">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <button
                className="pb-5 text-xl font-bold leading-tight border-b-4 border-transparent text-zinc-500 hover:text-gray-300 hover:border-gray-300"
                type="button"
                onClick={() => setWithPlaylist(true)}
              >
                With Playlist
              </button>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <button
                className="text-xl font-bold leading-tight text-white"
                button
                onClick={() => setWithPlaylist(false)}
              >
                Without Playlist
              </button>
              <div className="h-1 mt-5 bg-white rounded-full shadow-lg shadow-black "></div>
            </div>
          </div>
        </div>
      )}

      {withPlaylist ? (
        <div className="flex flex-col py-2">
          <div className="flex items-center justify-center">
            {/* <img src="https://www.pinclipart.com/picdir/big/169-1691899_online-survey-icon-png-download-test-png-clipart.png" className="h-32 mt-10" alt="add-list"/> */}
            {/* <img src="purple-clipboard.png" className=" mt-60" alt="add-list" /> */}
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2640600/apple_dribbble.gif"
              className="object-cover mt-8 rounded-full shadow-lg h-28 w-28 shadow-black"
              alt="Markus Magnusson"
            />
          </div>

          <div className="flex items-center justify-center">
            <h1 className="mt-12 text-2xl text-center text-white align-center drop-shadow-md shadow-black"></h1>
          </div>

          <div className="flex flex-row items-center justify-center mt-10 mb-10 space-x-2">
            <div className="flex justify-center ">
              <button
                type="button"
                className="p-3 text-lg bg-purple-600 border border-purple-600 rounded-md shadow-md w-44 shadow-black"
                onClick={handleCardioContinue}
              >
                Create Cardio With Playlist
              </button>
            </div>

            <div className="flex justify-center ">
              <button
                type="button"
                className="p-3 text-lg bg-teal-600 border border-teal-600 rounded-md shadow-md w-44 shadow-black"
                onClick={handleStrengthContinue}
              >
                Create Strength With Playlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col py-2">
          <div className="flex items-center justify-center">
            {/* <img src="https://www.pinclipart.com/picdir/big/169-1691899_online-survey-icon-png-download-test-png-clipart.png" className="h-32 mt-10" alt="add-list"/> */}
            {/* <img src="purple-clipboard.png" className=" mt-60" alt="add-list" /> */}
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2640600/apple_dribbble.gif"
              className="object-cover mt-8 mt-20 rounded-full shadow-lg h-28 w-28 shadow-black"
              alt="Markus Magnusson"
            />
          </div>

          <div className="flex items-center justify-center">
            <h1 className="mt-12 text-2xl text-center text-white align-center drop-shadow-md shadow-black"></h1>
          </div>

          <div className="flex flex-row items-center justify-center mt-10 mb-10 space-x-2">
            <div className="flex justify-center ">
              <Link to="/createworkout/cardio/noplaylist">
                <button
                  type="button"
                  className="p-3 text-lg text-purple-500 border border-purple-600 rounded-md shadow-md w-44 shadow-black"
                >
                  Create Cardio Without Playlist
                </button>
              </Link>
            </div>

            <div className="flex justify-center">
              <Link to="/createworkout/strength/noplaylist">
                <button className="p-3 text-lg text-teal-600 border border-teal-600 rounded-md shadow-md w-44 shadow-black">
                  Create Strength Without Playlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateWorkout;

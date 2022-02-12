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
    window.location.href = CARDIO_AUTH_URL
  }

  const handleStrengthContinue = () => {
    window.location.href = STRENGTH_AUTH_URL
  }

  return (
    <div>
      <div className="relative z-10 pt-2 pb-10">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white">
                Create
              </h4>
              <div className="h-1 mt-4 bg-gradient-to-l from-teal-600 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-row items-center justify-center space-x-2">
            <div className="flex justify-center ">
                <button
                  onClick={()=>setWithPlaylist(true)}
                  type="button"
                  className="p-3 text-lg border border-purple-800 rounded-md bg-purple-800 w-44 shadow-md shadow-black"
                >
                  With Playlist
                </button>
            </div>

            <div className="flex justify-center">
                <button onClick={()=>setWithPlaylist(false)} className="p-3 text-lg border border-teal-600 rounded-md bg-teal-600 w-44 shadow-md shadow-black">
                  Without Playlist
                </button>
            </div>
          </div>


      {withPlaylist ? (
        <div className="flex flex-col py-2">
          <div className="flex items-center justify-center">
            {/* <img src="https://www.pinclipart.com/picdir/big/169-1691899_online-survey-icon-png-download-test-png-clipart.png" className="h-32 mt-10" alt="add-list"/> */}
            {/* <img src="purple-clipboard.png" className=" mt-60" alt="add-list" /> */}
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2640600/apple_dribbble.gif"
              className="mt-24 object-cover h-28 w-28 rounded-full shadow-lg shadow-black"
              alt="Markus Magnusson"
            />
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-2xl text-white mt-12 align-center text-center drop-shadow-md shadow-black">
              Create<br></br> With Spotify Playlist
            </h1>
          </div>

          <div className="flex flex-row mt-12 mb-10 items-center justify-center space-x-2">
            <div className="flex justify-center ">
                <button
                  type="button"
                  className="p-3 text-lg border border-green-500 rounded-md bg-green-500 w-44 shadow-md shadow-black"
                  onClick={handleCardioContinue}
                >
                  Create Cardio & Connect Spotify
                </button>
            </div>

            <div className="flex justify-center ">
                <button
                  type="button"
                  className="p-3 text-lg border border-green-500 rounded-md bg-green-500 w-44 shadow-md shadow-black"
                  onClick={handleStrengthContinue}
                >
                  Create Strength & Connect Spotify
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
              className="mt-24 object-cover h-28 w-28 rounded-full shadow-lg shadow-black"
              alt="Markus Magnusson"
            />
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-2xl text-white mt-12 align-center text-center drop-shadow-md shadow-black">
              Create<br></br>Without Spotify Playlist
            </h1>
          </div>

          <div className="flex flex-row mt-12 mb-10 items-center justify-center space-x-2">
            <div className="flex justify-center ">
              <Link to="/createworkout/cardio/noplaylist">
                <button
                  type="button"
                  className="p-3 text-lg border border-purple-800 rounded-md bg-purple-800 w-44 shadow-md shadow-black"
                >
                  Create Cardio
                </button>
              </Link>
            </div>

            <div className="flex justify-center">
              <Link to="/createworkout/strength">
                <button className="p-3 text-lg border border-teal-600 rounded-md bg-teal-600 w-44 shadow-md shadow-black">
                  Create Strength
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

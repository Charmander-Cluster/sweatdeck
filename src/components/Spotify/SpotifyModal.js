import React from "react";

const SpotifyModal = () => {
  const redirectUri = /localhost/.test(window.location.href)
    ? "http://localhost:3000/cardioplaylist"
    : "https://sweatdeck.herokuapp.com/cardioplaylist";
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private&show_dialogue=true`;

  return (


    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      {/* <div
        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        aria-hidden="true"
      ></div> */}

      {/* <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span> */}

      {/* <div className="inline-block overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"> */}

      <div className="">

        {/* <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4"> */}
          {/* <div className="sm:flex sm:items-start"> */}
            {/* <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mx-auto bg-green-500 rounded-full sm:mx-0 sm:h-10 sm:w-10"></div> */}
            {/* <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"> */}
              {/* <h3
                className="text-lg font-medium leading-6 text-gray-900"
                id="modal-title"
              > */}
                {/* Workout logged! */}
                <iframe src={AUTH_URL} title="spotify-auth"></iframe>
              {/* </h3> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
        {/* <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"></div> */}
      </div>
    </div>
  );
};

export default SpotifyModal

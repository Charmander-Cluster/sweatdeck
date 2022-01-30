import React from "react";

//scopes: https://developer.spotify.com/documentation/general/guides/authorization/scopes/
//Authentication URL
const AUTH_URL="https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=http://localhost:3000/home&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20playlist-read-private%20user-read-playback-state%20user-modify-playback-state%20playlist-read-collaborative%20playlist-modify-public"

const SpotifyLogin = () => {
  return (
  <div className="flex justify-center">
    <a className="flex bg-green-600 text-white p-3 m-5 text-sm rounded-md" href={AUTH_URL}>Login to Spotify</a>
  </div>
  );
};

export default SpotifyLogin;

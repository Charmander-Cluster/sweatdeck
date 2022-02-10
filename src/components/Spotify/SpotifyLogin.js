import React from "react";

//scopes: https://developer.spotify.com/documentation/general/guides/authorization/scopes/
//Authentication URL
const redirectUri =
  process.env.SPOTIFY_REDIRECT_URI || "http://localhost:3000/spotifyhome";

const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
  "playlist-read-private",
];

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

const SpotifyLogin = () => {
  return (
    <div className="flex justify-center">
      <a
        className="flex p-3 m-5 text-sm text-white bg-green-600 rounded-md"
        href={AUTH_URL}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default SpotifyLogin;

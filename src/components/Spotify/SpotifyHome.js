import React, { useState, useEffect } from "react";
import axios from "axios";
// import SpotifyWebApi from "spotify-web-api-node/src/spotify-web-api";
//import useAuth from "./Spotify/useAuth"
import getToken from "./token"
// const spotifyApi = new SpotifyWebApi({
//   clientId: "416fece6750a4a9bb9185f0be748671c",
// })

const SpotifyHome = (props) => {
  // const token = props.code
  const token = getToken()
  console.log(token)

  const [playlists, setPlaylists] = useState({});

  return (
    (!token) ? (<div>Leading...</div>) :
    (<div>this is the home component</div>)
  )
}

export default SpotifyHome;

import React, { useState, useEffect } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "1a13f745b9ab49caa6559702a79211e6",
});


const SpotifyHome = (props) => {
  const token = props.code
  //spotifyApi.setAccessToken(token)
  const accessToken = useAuth(token)

  console.log("This is the home component!")

  //const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState({});

  console.log(playlists)

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // useEffect(() => {
  //   if (!accessToken) return;
  //   spotifyApi.getUserPlaylists('me')
  // .then(function(data) {
  //   console.log('Retrieved playlists', data.body);
  // },function(err) {
  //   console.log('Something went wrong!', err);
  // });
  // }, [accessToken]);

   useEffect(() => {
    if (!accessToken) return;
    console.log(accessToken)
    axios
    //return a promise
    .get(
        'https://api.spotify.com/v1/me/playlists', {
            params: { limit: 20, offset: 0 },
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            },
        })
    .then (response => {
      console.log(response.data.items)
      setPlaylists(response.data.items)
    });
  }, [accessToken]);

  return (
    <div>this is the home component</div>
  )
}

export default SpotifyHome;

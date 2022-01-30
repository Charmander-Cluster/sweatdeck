import React, { useState, useEffect } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node/src/spotify-web-api";
import useAuth from "./useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "1a13f745b9ab49caa6559702a79211e6",
});


const SpotifyHome = (props) => {
  // const accessToken = useAuth(props.code)
  const accessToken = props.code
  console.log("This is the home component!")

  //const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState({});

  // useEffect(() => {
  //   if (!accessToken) return;
  //   spotifyApi.setAccessToken(accessToken);
  // }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    console.log(accessToken)
    axios("https://api.spotify.com/v1/me/playlists", {
        method: 'GET',
        headers: { "Authorization": "Bearer " + accessToken, "Content-Type" : "application/json"}
      })
      .then (response => {
        console.log(response.data)
        // setPlaylists({

        // }, [])
      });
  }, [accessToken]);

  //  useEffect(() => {
  //   if (!accessToken) return;
  //   console.log(accessToken)
  //   axios
  //   //return a promise
  //   .get(
  //       'https://api.spotify.com/v1/me/playlists', {
  //           params: { limit: 20, offset: 0 },
  //           headers: {
  //               Accept: 'application/json',
  //               Authorization: 'Bearer ' + accessToken,
  //               'Content-Type': 'application/json',
  //           },
  //       })
  //   .then (response => {

  //     console.log(response.data)
  //     response.json()
  //     // setPlaylists({

  //     // }, [])
  //   });
  // }, [accessToken]);

  // useEffect(()=>{
  //   if (!accessToken) return;
  //   fetch("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg", {
  //     headers: {"Authorization": "Bearer "+ accessToken}
  //   })
  //   .then(response => response.json())
  //   .then(data=> console.log(data))
  // }, [accessToken])


  return (
    <div>this is the home component</div>
  )
}

export default SpotifyHome;

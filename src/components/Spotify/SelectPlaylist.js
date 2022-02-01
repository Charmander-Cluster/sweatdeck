import React, { useState, useEffect } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "1a13f745b9ab49caa6559702a79211e6",
});

const token = new URLSearchParams(window.location.search).get("code");

const SelectPlaylist = (props) => {
  // const token = props.code
  //spotifyApi.setAccessToken(token)
  const accessToken = useAuth(token)

  console.log("This is the home component!")


  //const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [spotifyUser, setSpotifyUser] = useState({});


  console.log("Playlists:", playlists)

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    axios
    .get(
        'https://api.spotify.com/v1/me', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            },
        })
    .then (response => {
      console.log(response.data)
      setSpotifyUser({
        id: response.data.id,
        name: response.data.display_name,
        url: response.data.external_urls.spotify
      })
    });
  }, [accessToken]);


   useEffect(() => {
    if (!accessToken) return;
    // if(!spotifyUser) return
    console.log(accessToken)
    axios
    .get(
        'https://api.spotify.com/v1/me/playlists', {
            params: { limit: 50, offset: 0 },
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            },
        })
    .then (response => {
      const playlists = response.data.items
      const publicPlaylists = playlists.filter(playlist => playlist.public===true
        // && playlist.owner.id === spotifyUser.id
        )
      console.log(publicPlaylists)

      publicPlaylists.map(playlist => ({
        name: playlist.name,
        owner: playlist.display_name,
        tracks: playlist.tracks,
        url: playlist.external_urls.spotify,
        id: playlist.id,
        imageUrl: playlist.images[0].url
      }))
      setPlaylists([publicPlaylists])
    });
  }, [accessToken]);

  return (
    (!accessToken) ? (<div>Loading...</div>) :
    (<div>this is the select playlist component</div>)
  )
}

export default SelectPlaylist;

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
  const accessToken = useAuth(token);

  console.log("This is the home component!");

  //const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [spotifyUser, setSpotifyUser] = useState({});

  console.log("Playlists:", playlists);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setSpotifyUser({
          id: response.data.id,
          name: response.data.display_name,
          url: response.data.external_urls.spotify,
        });
      });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    // if(!spotifyUser) return
    console.log(accessToken);
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        params: { limit: 50, offset: 0 },
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const playlists = response.data.items;
        const publicPlaylists = playlists.filter(
          (playlist) => playlist.public === true
          // && playlist.owner.id === spotifyUser.id
        );
        console.log(publicPlaylists);

        const myPlaylists = publicPlaylists.map((playlist) => ({
          name: playlist.name,
          owner: playlist.display_name,
          tracks: playlist.tracks,
          url: playlist.external_urls.spotify,
          id: playlist.id,
          imageUrl: playlist.images[0].url,
        }));
        setPlaylists(myPlaylists);
      });
  }, [accessToken]);

  return !accessToken ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="grid place-items-center">
        <h1 className="grid text-2xl text-teal-500">Select Your Spotify Playlist</h1>
        {/* <p className="text-sm">
          Only "public" playlists may be linked to your workout.
        </p>
        <p className="text-sm">
          For more information on playlists visibility, see "
          <a href="https://support.spotify.com/us/article/playlist-privacy/">
            Playlist Privacy
          </a>
          " from Spotify.
        </p> */}
      </div>

    {(!playlists.length) ? (<div>Getting Playlists</div>) :
    (
      <table className="table-fixed rounded-sm border-collapse bg-neutral-800 w-full">
        <tbody className=" items-center justify-between overflow-y-scroll">
          <thead>
            <tr className="w-12"></tr>
            <tr>Name</tr>
          </thead>
          {playlists.map((playlist) => (
            <tr key={playlist.id}>
              <td className="w-12"><img className="h-10" src={playlist.imageUrl}/></td>
              <td>{playlist.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      )}

      <div className="flex-col">
      <button className="bg-teal-500 p-3 rounded-md">Select Playlist</button>
      <button className="text-teal-500 border border-teak-500 p-3 rounded-md">Cancel</button>
      </div>
    </div>
  );
};

export default SelectPlaylist;

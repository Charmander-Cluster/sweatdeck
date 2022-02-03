import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { localEditWorkout } from "../../store/localCreateWorkout"
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";
import history from "../../history"

const spotifyApi = new SpotifyWebApi({
  clientId: "1a13f745b9ab49caa6559702a79211e6",
});

const token = new URLSearchParams(window.location.search).get("code");

const SelectPlaylist = (props) => {
  // const token = props.code
  //spotifyApi.setAccessToken(token)
  const accessToken = useAuth(token);

  const dispatch = useDispatch()

  let localWorkout = useSelector(state => state.localWorkout);

  console.log("local workout store:", localWorkout)
  console.log("This is the home component!");

  //const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState({});

  console.log("Playlists:", playlists);
  console.log("selected playlist", selectedPlaylist);

  const handleConfirm = (event) => {
    event.preventDefault()
    dispatch(localEditWorkout({...localWorkout, playlist:{name: selectedPlaylist.name, url: selectedPlaylist.url}}))
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // const [spotifyUser, setSpotifyUser] = useState({});
  // useEffect(() => {
  //   if (!accessToken) return;
  //   axios
  //     .get("https://api.spotify.com/v1/me", {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: "Bearer " + accessToken,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setSpotifyUser({
  //         id: response.data.id,
  //         name: response.data.display_name,
  //         url: response.data.external_urls.spotify,
  //       });
  //     });
  // }, [accessToken]);

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
        <div className="flex-col justify-center bg-zinc-800 w-full fixed top-0">
          <div className="flex-col justify-center">
            <div className="grid justify-center">
            <h1 className="grid text-2xl text-teal-500 mt-12 mb-5">
              Select Your Spotify Playlist
            </h1>
            </div>
          </div>

          {(selectedPlaylist.name && (
          <div className="flex-row">
          <div className="mx-5 mb-2">
            <span>SELECTED: </span> <span className="text-teal-500 text-lg">{selectedPlaylist.name}</span>
            <div className="flex ">
            <button onClick={handleConfirm} className="bg-teal-500 p-2 m-2 rounded-md text-sm">
              Confirm & Connect
            </button>
            </div>
            </div>
          </div>
          ))}
            <div className="flex justify-end">
              <button className="text-teal-500 border border-teak-500 p-2 mx-5 rounded-md mb-3">
              Cancel
            </button>
            </div>
          {/* <div className="flex mb-5">
            <button className="bg-teal-500 p-3 m-2 rounded-md">
              Confirm & Connect
            </button>
            <button className="text-teal-500 border border-teak-500 p-3 m-2 rounded-md">
              Cancel
            </button>
          </div> */}
        </div>
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

      {!playlists.length ? (
        <div>Getting Playlists</div>
      ) : (

        <div className="flex flex-col mt-48 mb-14 justify-center">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                      Playlist
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >

                      </th>
                    </tr>
                  </thead>
                  <tbody className=" divide-y divide-gray-200  dark:divide-gray-700 overflow:scroll">
                    {playlists.map((playlist) => (
                      <tr
                        key={playlist.id}
                        playlist={playlist}
                        onClick={() => setSelectedPlaylist(playlist)}
                        className="hover:bg-gray-100 dark:hover:bg-teal-500"
                      >
                        <td className="px-8 py-2 border-t border-gray-600 p-8">
                          <img
                            className="h-10"
                            alt="playlist-art"
                            src={playlist.imageUrl}
                          />
                        </td>
                        <td className="px-8 py-2 border-t border-gray-600 p-8">
                          {playlist.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectPlaylist;

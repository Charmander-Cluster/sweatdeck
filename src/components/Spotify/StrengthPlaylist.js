import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { strengthLocalEditWorkout } from "../../store/strengthLocalCreateWorkout";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";
import useAuthStrength from "./useAuthStrength";
import history from "../../history";

import { createDBWorkout } from "../../store/createDBWorkout"
import { fetchLoginUser } from "../../store/auth";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const spotifyApi = new SpotifyWebApi({
  clientId: "1a13f745b9ab49caa6559702a79211e6",
});

const token = new URLSearchParams(window.location.search).get("code");

const StrengthPlaylist = (props) => {

  const [user, setUser] = useState(getAuth().currentUser);
  const [playlistConfirmed, setPlaylistConfirmed] = useState(false)

  const authUser = useSelector((state) => state.auth);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoginUser());
  }, [dispatch, user]);

  const userId = authUser.uid
  const accessToken = useAuthStrength(token);
  let strengthLocalWorkout = useSelector((state) => state.strengthLocalWorkout);

  console.log("strength local workout store:", strengthLocalWorkout);

  //const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState({});

  useEffect(()=> {
    if (playlistConfirmed)
    dispatch(createDBWorkout(strengthLocalWorkout, userId))
  }, [dispatch, userId, strengthLocalWorkout, playlistConfirmed])

  //console.log("This is the home component!");
  //console.log("Playlists:", playlists);
  //console.log("selected playlist", selectedPlaylist);
  //console.log("**AUTH USER**", authUser)
  //console.log("**USER**", user)
  // console.log("**USERID**", userId)

  const createWorkout = () => {
    dispatch(
      strengthLocalEditWorkout({...strengthLocalWorkout,
        playlist: { name: selectedPlaylist.name, url: selectedPlaylist.url },
      }))
      dispatch(createDBWorkout(strengthLocalWorkout, userId))
  }

  const handleConfirm = (event) => {
    event.preventDefault();
    dispatch(strengthLocalEditWorkout({...strengthLocalWorkout,
      playlist: { name: selectedPlaylist.name, url: selectedPlaylist.url },
    }))
    setPlaylistConfirmed(true)
  };

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
          <div className="flex justify-end">
            <button className="text-teal-500 border border-teak-500 p-1 text-sm rounded-md mt-2 mr-2">
              Cancel
            </button>
          </div>
          <div className="flex-col justify-center">
            <div className="grid justify-center">
              <h1 className="grid text-2xl  mt-5 mb-5">
                Select Your Spotify Playlist
              </h1>
            </div>
          </div>

          {selectedPlaylist.name && (
            <div className="flex justify-center">
              <div className="flex-row justify-center">
                <div className="mx-5 mb-2">
                  <span className="text-md">SELECTED: </span>{" "}
                  <span className="text-teal-500 text-md">
                    {selectedPlaylist.name}
                  </span>
                  <div className="flex ">
                    <button
                      onClick={handleConfirm}
                      className="bg-teal-500 p-2 m-2 rounded-md text-sm"
                    >
                      Confirm & Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

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
        <div className="flex flex-col mt-52 mb-14 justify-center">
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
                      ></th>
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

export default StrengthPlaylist;

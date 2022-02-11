import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { strengthLocalEditWorkout } from "../../store/strengthLocalCreateWorkout";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";
import useAuthStrength from "./useAuthStrength";

import { strengthLocalCreateWorkout } from "../../store/strengthLocalCreateWorkout";
import { createDBWorkout } from "../../store/createDBWorkout";
import { fetchLoginUser } from "../../store/auth";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const spotifyApi = new SpotifyWebApi({
  clientId: "1a13f745b9ab49caa6559702a79211e6",
});

const token = new URLSearchParams(window.location.search).get("code");

const StrengthPlaylist = (props) => {
  const [user, setUser] = useState(getAuth().currentUser);
  const [playlistConfirmed, setPlaylistConfirmed] = useState(false);
  const history = useHistory();

  const authUser = useSelector((state) => state.auth);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoginUser());
  }, [dispatch, user]);

  const userId = authUser.uid;
  const accessToken = useAuthStrength(token);
  let strengthLocalWorkout = useSelector((state) => state.strengthLocalWorkout);

  //const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState({});

  useEffect(() => {
    if (playlistConfirmed) {
      dispatch(createDBWorkout(strengthLocalWorkout, userId));
      dispatch(strengthLocalCreateWorkout({}));
      history.push("/confirmstrengthcreate");
    }
  }, [dispatch, userId, strengthLocalWorkout, playlistConfirmed]);

  const handleConfirm = (event) => {
    event.preventDefault();
    dispatch(
      strengthLocalEditWorkout({
        ...strengthLocalWorkout,
        playlist: {
          name: selectedPlaylist.name,
          url: selectedPlaylist.url,
          imageUrl: selectedPlaylist.imageUrl,
        },
      })
    );
    setPlaylistConfirmed(true);
  };

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
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
      <div className="flex">
        <div className="fixed top-0 flex-col justify-center w-full bg-zinc-800">
          <div className="flex justify-end">
            <Link to="/createworkout/strength">
              <button className="p-1 mt-2 mr-2 text-sm text-teal-500 border rounded-md border-teak-500">
                Cancel
              </button>
            </Link>
          </div>

          <div className="relative z-10 pt-4 pb-10">
            <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
              <div className="flex flex-col items-start lg:flex-row lg:items-center">
                <div className="ml-0 lg:ml-20 lg:my-0">
                  <h4 className="text-2xl font-bold leading-tight text-white">
                    Select Spotify Playlist
                  </h4>
                  <div className="h-1 mt-4 rounded-full bg-gradient-to-l from-teal-600 to-purple-600"></div>
                </div>
              </div>
            </div>
          </div>

          {selectedPlaylist.name && (
            <div className="flex">
              <div className="flex-row">
                <div className="mx-5 mb-2">
                  <span className="text-md">SELECTED: </span>{" "}
                  <span className="text-teal-500 text-md">
                    {selectedPlaylist.name}
                  </span>
                  <div className="flex ">
                    <button
                      onClick={handleConfirm}
                      className="p-2 m-2 text-sm bg-teal-500 rounded-md"
                    >
                      Confirm & Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
        <div className="flex flex-col justify-center mt-56 mb-14">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Playlist
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 overflow:scroll">
                    {playlists.map((playlist) => (
                      <tr
                        key={playlist.id}
                        playlist={playlist}
                        onClick={() => setSelectedPlaylist(playlist)}
                        className="hover:bg-gray-100 dark:hover:bg-teal-500"
                      >
                        <td className="p-8 px-8 py-2 border-t border-gray-600">
                          <img
                            className="h-10"
                            alt="playlist-art"
                            src={playlist.imageUrl}
                          />
                        </td>
                        <td className="p-8 px-8 py-2 border-t border-gray-600">
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

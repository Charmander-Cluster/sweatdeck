import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  const accessToken = props.code

  //const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    if (!accessToken) return;
    axios("https://api.spotify.com/me/playlists", {
        method: 'GET',
        headers: { "Authorization" : "Bearer " + accessToken}
      })
      .then (response => {
        console.log(response.data)
        // setPlaylists({

        // }, [])
      });
  }, [accessToken]);

  axios("https://api.spotify.com/me/playlists", {
        method: 'GET',
        headers: { "Authorization" : "Bearer " + accessToken}
      })
      .then (response => {
        console.log(response.data)
        // setPlaylists({

        // }, [])
      });

  return (
    <div>this is the home component</div>
  )
}

export default Home;

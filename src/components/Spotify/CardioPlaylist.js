import React from "react";
import AuthCardio from "./useAuthCardio";

const token = new URLSearchParams(window.location.search).get("code");

const CardioPlaylist = () => {
  console.log(token)

  if (token) {
    //window.opener.callback(token)
    const accessToken = AuthCardio(token)

    localStorage.setItem("spotifyToken", accessToken);
  }

  return (
   <div>This is the Cardio Playlist component</div>
  )
};

export default CardioPlaylist;

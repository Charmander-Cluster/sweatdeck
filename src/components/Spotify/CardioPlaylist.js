import React from "react";
import AuthCardio from "./useAuthCardio";

const token = new URLSearchParams(window.location.search).get("code");

const CardioPlaylist = () => {
  console.log(token)

  if (token) {
    //window.opener.callback(token)
    const accessToken = AuthCardio(token)
    localStorage.setItem("spotifyToken", accessToken)

    //below closes window immediately w/o close event occuring
    //window.close()
  }

  return (
    <div className="flex-col align-center ">
   <div className="flex">This is the Cardio Playlist component</div>
   <button className="flex border border-white w-40 h-screen" onClick={()=> window.close()}>Close this Window to return to your workout creation</button>
   </div>
  )
};

export default CardioPlaylist;

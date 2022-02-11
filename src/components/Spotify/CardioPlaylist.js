import React from "react";
import AuthCardio from "./useAuthCardio";

const CardioPlaylist = () => {
  const token = new URLSearchParams(window.location.search).get("code");
  console.log(token)
  const accessToken = AuthCardio(token)
  localStorage.setItem("sp-accessToken", accessToken);
};

export default CardioPlaylist;

import React from "react";

const token = new URLSearchParams(window.location.search).get("code");

const CardioPlaylist = (props) => {
  const token = new URLSearchParams(window.location.search).get("code");
  const handleBtnClose = props.handleBtnClose
  console.log(handleBtnClose)

  return (
    <div>
      This is the login window!
      <button onClick={handleBtnClose}> THE BUTTON </button>
    </div>
  );
};

export default CardioPlaylist;

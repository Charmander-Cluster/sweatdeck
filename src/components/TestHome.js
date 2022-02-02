import React from "react";
import { getAuth } from "firebase/auth";
import { logout } from "../store/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const TestHome = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  let history = useHistory();
  const dispatch = useDispatch();

  const handleClick = async (evt) => {
    evt.preventDefault();
    await dispatch(
      logout()
    );
    history.push("/signin");
  };


  return (
    <div>
      <h1> TEST HOME </h1>
      {/* {user.displayName !== null ? <h2> {user.displayName} </h2> : <h2>{user.email}</h2>} */}
      <button
            className="flex flex-row text-1xl mx-2 my-2 justify-center bg-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3"
            onClick ={handleClick}
            >
            Sign Out
          </button>
    </div>
  );
};

export default TestHome;

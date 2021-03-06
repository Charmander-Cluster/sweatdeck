import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cardioLocalCreateWorkout } from "../../store/cardioLocalCreateWorkout";
import AuthCardio from "../Spotify/useAuthCardio";
import CardioPlaylist from "../Spotify/CardioPlaylist";
import SpotifyModal  from "../Spotify/SpotifyModal";
import SelectCardioPlaylist from "../Spotify/SelectCardioPlaylist"

import { createDBWorkoutNoPlaylist } from "../../store/createDBWorkout";
import { fetchLoginUser } from "../../store/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const CreateCardio = (props) => {
  const redirectUri = /localhost/.test(window.location.href)
    ? "http://localhost:3000/cardioplaylist"
    : "https://sweatdeck-test.herokuapp.com/cardioplaylist";

  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state",
    "playlist-read-private",
  ];

  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}`;

  const dispatch = useDispatch();
  const history = useHistory();
  const returnedWorkout = props.returnedWorkout

  const [user, setUser] = useState(getAuth().currentUser);
  const [workoutAdded, setWorkoutAdded] = useState(false);
  const [accessToken, setAccessToken] = useState("")
  const [spotifyLoggedIn, setSpotifyLoggedIn] = useState(false)
  // const [btnState, setBtnState] = useState(false)
  const [token, setToken] = useState("")

  //console.log("**TOKEN**", token)
  console.log("**WINDOW**", window.location)
  // console.log("btnState", btnState)
  //console.log(workout)

  const authUser = useSelector((state) => state.auth);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });
  const userId = authUser.uid;

  useEffect(() => {
    dispatch(fetchLoginUser());
  }, [dispatch, user]);

  const [workout, setWorkout] = useState({
    category: "cardio",
    name: !returnedWorkout ? "" : returnedWorkout.name,
    exercises:
      !returnedWorkout || returnedWorkout.exercises.length === 0
        ? []
        : returnedWorkout.exercises,
    userId: "",
    timesCompleted: 0,
    datesCompleted: [],
    logs: 0,
  });

  const [exercises, setExercises] = useState({
    type: !returnedWorkout
      ? ""
      : returnedWorkout.exercises[0].type,
    distance: !returnedWorkout
      ? ""
      : returnedWorkout.exercises[0].distance,
    units: !returnedWorkout
      ? "select"
      : returnedWorkout.exercises[0].units,
    hours: !returnedWorkout
      ? ""
      : returnedWorkout.exercises[0].hours,
    minutes: !returnedWorkout
      ? ""
      : returnedWorkout.exercises[0].minutes,
  });

  const handleChange = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const handleNestedChange = (event) => {
    setExercises({ ...exercises, [event.target.name]: event.target.value });
  };

  const login = () => {
    let popup = window.open(AUTH_URL,
      'Login with Spotify',
      'width=800,height=600')
   }


  //CREATE THE POPUP
  const handleBtnClick = () => {
    var spotifyLoginWindow = window.open(AUTH_URL, 'Login with Spotify',
    'width=600,height=800');

  // Close event -- assign the access token
    // spotifyLoginWindow.onbeforeunload = function() {
    //   setToken(localStorage.getItem('spotifyToken'))
    // }
    spotifyLoginWindow.onunload = function() {
      setToken(localStorage.getItem('spotifyToken'))
    }
  }

  console.log(token)

  const handleSubmitWithSpotify = (event) => {
    event.preventDefault();
    workout.exercises.push(exercises);
    handleBtnClick(event)
  };

  const handleSubmitWithoutPlaylist = (event) => {
    event.preventDefault();
    workout.exercises.push(exercises);
    dispatch(createDBWorkoutNoPlaylist(workout, userId));
    history.push("/confirmcardiocreate")
    //setWorkoutAdded(true);
  };

  const handleDelete = () => {
    setWorkout({
      category: "cardio",
      name: "",
      exercises: [],
      userId: "",
      timesCompleted: 0,
      datesCompleted: [],
      logs: 0,
    });
    dispatch(cardioLocalCreateWorkout({}));
    history.push("/createworkout");
  };

  const handleCancel = (event) => {
    event.preventDefault()
    setToken("")
  }

  return (token) ? (<SelectCardioPlaylist token={token} workout={workout} handleCancel={handleCancel}/>) :
  (<div className="flex flex-col py-2">
      {/* <div className="flex items-center justify-center">
        <h1 className="my-5 text-3xl text-purple-500 align-center">
          Create Cardio Workout
        </h1>
      </div> */}

      <div className="relative z-10 pt-2 pb-5">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white">
                Create Cardio Workout
              </h4>
              <div className="h-1 mt-4 rounded-full bg-gradient-to-l from-teal-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full mb-3 -mt-4 text-1xl">
        <div className="m-3 overflow-x-auto border border-purple-500 rounded-md bg-neutral-700 mb-14">
          <form className="justify-center max-w-4xl p-3 ">
            <div className="flex flex-wrap -mx-3 ">
              <div className="container flex justify-center">
                <div>
                  <div className="container w-screen p-3">
                    <div className="flex justify-center">
                      <img
                        className="h-16 mb-2 max-h-16"
                        alt="weight-icon"
                        src="https://cdn-wellnessnow.b-cdn.net/wp-content/uploads/2021/01/regenerate-icon.svg"
                      ></img>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex-col justify-center align-center">
                        <div className="container flex justify-center">
                          <div className="flex justify-center">
                            {/* <div className="w-20 px-3 md:w-1/2"> */}
                            <div className="">
                              <label
                                htmlFor="name"
                                className="block mt-3 text-sm font-medium"
                              >
                                Workout Type
                              </label>
                              <select
                                className="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="type"
                                defaultValue=""
                                value={exercises.type}
                                onChange={handleNestedChange}
                              >
                                <option value="" disabled></option>
                                <option value="run">Run</option>
                                <option value="walk">Walk</option>
                                <option value="swim">Swim</option>
                                <option value="row">Row</option>
                                <option value="bike">Bike</option>
                                <option value="elliptical">Elliptical</option>
                                <option value="stairs/stair-stepper">
                                  Stairs/Stair-stepper
                                </option>
                                <option value="rollerskate/rollerblade">
                                  Rollerskate/Rollerblade
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="flex justify-center">
                            <div className=""></div>
                          </div>
                        </div>
                        <div className="flex align-center">
                          <div className="flex-col">
                            <label
                              htmlFor="name"
                              className="block mt-5 text-sm font-medium"
                            >
                              Name Your Workout
                            </label>
                            <input
                              className="w-72  bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required
                              name="name"
                              onChange={handleChange}
                              value={workout.name}
                            />
                            <div className="flex m-5 align-center">
                              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label
                                  htmlFor="distance"
                                  className="block text-sm font-medium"
                                >
                                  Distance
                                </label>
                                <input
                                  name="distance"
                                  className="w-28 @error bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required
                                  type="number"
                                  min="0"
                                  onChange={handleNestedChange}
                                  value={exercises.distance}
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label
                                  htmlFor="units"
                                  className="block text-sm font-medium"
                                >
                                  Units
                                </label>
                                <select
                                  className="w-28 h-12 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1  dark:placeholder-gray-400 dark:text-purple-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  name="units"
                                  required
                                  defaultValue="select"
                                  value={exercises.units}
                                  onChange={handleNestedChange}
                                >
                                  <option value="select" disabled>
                                    Select
                                  </option>
                                  <option value="miles">miles</option>
                                  <option value="kilometers">kilometers</option>
                                  <option value="meters">meters</option>
                                  <option value="yards">yards</option>
                                </select>
                              </div>
                            </div>
                            <div className="container flex justify-center">
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  htmlFor="hours"
                                  className="block text-sm font-medium"
                                >
                                  Hours
                                </label>
                                <input
                                  name="hours"
                                  className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required
                                  type="number"
                                  min="0"
                                  value={exercises.hours}
                                  onChange={handleNestedChange}
                                />
                              </div>
                              <div className="mt-10">:</div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  htmlFor="minutes"
                                  className="block text-sm font-medium "
                                >
                                  Minutes
                                </label>
                                <input
                                  name="minutes"
                                  className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1 dark:placeholder-gray-400 dark:text-purple-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required
                                  type="number"
                                  min="0"
                                  value={exercises.minutes}
                                  onChange={handleNestedChange}
                                />
                              </div>
                            </div>

                            {workout.category === "" ||
                            workout.name === "" ||
                            exercises.type === "" ||
                            exercises.distance === "" ||
                            exercises.units === "" ||
                            exercises.hours === "" ||
                            exercises.minutes === "" ? (
                              <div className="my-5 text-amber-400">
                                Complete all fields to create workout{" "}
                              </div>
                            ) : (
                              <div className="grid mt-5 place-items-center">
                                <button
                                  className="flex p-3 mb-3 text-lg text-white bg-purple-500 rounded-md"
                                  onClick={handleSubmitWithSpotify}
                                  disabled={
                                    workout.category === "" ||
                                    workout.name === "" ||
                                    exercises.type === "" ||
                                    exercises.distance === "" ||
                                    exercises.units === "" ||
                                    exercises.hours === "" ||
                                    exercises.minutes === ""
                                  }
                                  // href={AUTH_URL}
                                >
                                  Save & Connect Spotify Playlist
                                </button>

                                <button
                                  className="flex p-3 mb-3 text-lg text-purple-500 border border-purple-500 rounded-md"
                                  onClick={handleSubmitWithoutPlaylist}
                                  disabled={
                                    workout.category === "" ||
                                    workout.name === "" ||
                                    exercises.type === "" ||
                                    exercises.distance === "" ||
                                    exercises.units === "" ||
                                    exercises.hours === "" ||
                                    exercises.minutes === ""
                                  }
                                >
                                  Save Without Playlist
                                </button>
                              </div>
                            )}

                            <div className="grid place-items-center">
                              <button
                                className="flex p-2 mb-3 text-lg text-gray-400 border border-gray-400 rounded-md rounded-"
                                onClick={handleDelete}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCardio;

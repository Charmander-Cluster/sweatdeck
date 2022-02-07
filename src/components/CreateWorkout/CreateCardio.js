import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { cardioLocalCreateWorkout } from "../../store/cardioLocalCreateWorkout";

import { createDBWorkoutNoPlaylist } from "../../store/createDBWorkout";
import { createDBWorkout } from "../../store/createDBWorkout";
import { fetchLoginUser } from "../../store/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const CreateCardio = (props) => {
  // const redirectUri ="http://localhost:3000/cardioplaylist";

  const redirectUri = /localhost/.test(window.location.href)
    ? "http://localhost:3000/cardioplaylist"
    : "https://sweatdeck.herokuapp.com/cardioplaylist";

  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`;

  const dispatch = useDispatch();

  const [user, setUser] = useState(getAuth().currentUser);
  const [workoutAdded, setWorkoutAdded] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const authUser = useSelector((state) => state.auth);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  let cardioLocalWorkout = useSelector((state) => {
    console.log("State: ", state);
    return state.cardioLocalWorkout;
  });

  useEffect(() => {
    dispatch(fetchLoginUser());
  }, [dispatch, user]);

  console.log(authUser.uid);

  useEffect(() => {
    if (workoutAdded) {
      dispatch(createDBWorkoutNoPlaylist(cardioLocalWorkout, authUser.uid));
      // history.push("/confirmcardiocreate")
      setRedirect(true);
    }
  }, [dispatch, workoutAdded, cardioLocalWorkout, authUser.uid]);

  // const localWorkout = useSelector(state => state.localWorkout)

  const [workout, setWorkout] = useState({
    category: "cardio",
    name: "",
    exercises: [],
    userId: "",
  });

  const [exercises, setExercises] = useState({
    type: "",
    distance: "",
    units: "",
    hours: "",
    minutes: "",
  });

  const handleChange = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  // const handleNestedChange = (event) => {
  //   setWorkout({ ...workout, exercises: { ...workout.exercises[0], [event.target.name]: event.target.value }});
  // };

  const handleNestedChange = (event) => {
    setExercises({ ...exercises, [event.target.name]: event.target.value });
  };

  const handleSubmitWithSpotify = (event) => {
    event.preventDefault();
    workout.exercises.push(exercises);
    dispatch(cardioLocalCreateWorkout(workout));
    console.log("local workout:", cardioLocalWorkout);
    window.location.href = AUTH_URL;
  };

  const handleSubmitWithoutPlaylist = (event) => {
    event.preventDefault();
    workout.exercises.push(exercises);
    dispatch(cardioLocalCreateWorkout(workout));
    setWorkoutAdded(true);
    //history.push("/confirmcardiocreate")
  };

  console.log(workout);

  return redirect ? (
    <Redirect to="/confirmcardiocreate" />
  ) : (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <h1 className="my-10 text-3xl text-teal-500 align-center">
          Create Cardio Workout
        </h1>
      </div>

      <div className="flex flex-row justify-center w-full mb-3 -mt-4 text-1xl">
        <div className="m-3 my-5 overflow-x-auto border border-teal-500 rounded-md bg-neutral-700 mb-14">
          <form className="justify-center max-w-4xl p-3 ">
            <div className="flex flex-wrap -mx-3 ">
              <div className="container flex justify-center">
                <div>
                  <div className="container w-screen p-3">
                    <div className="flex justify-center">
                      <img
                        className="h-16 mb-2 max-h-16"
                        alt="weight-icon"
                        src="https://allenparkdowntown.org/wp-content/uploads/ES-safe-sidewalk.png"
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
                            {/* <div className="w-20 px-3 md:w-1/2"> */}
                            <div className="">
                              {/* <label
                className="block mb-2 text-xs font-bold tracking-wide uppercase"
                htmlFor="minutes"
              >
                Minutes
              </label> */}
                            </div>
                          </div>
                        </div>

                        {/* {workout.type !== "" && ( */}

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
                                  value={workout.distance}
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
                                  className="w-28 h-12 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  name="units"
                                  required
                                  defaultValue="select"
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
                                  onChange={handleNestedChange}
                                  value={workout.hours}
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
                                  className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required
                                  type="number"
                                  min="0"
                                  onChange={handleNestedChange}
                                  value={workout.minutes}
                                />
                              </div>
                            </div>

                            <div className="grid mt-5 place-items-center">
                              <button
                                className="flex p-3 mb-3 text-lg text-white bg-teal-500 rounded-md"
                                onClick={handleSubmitWithSpotify}
                                // href={AUTH_URL}
                              >
                                Save & Connect Playlist
                              </button>

                              <button
                                className="flex p-3 mb-3 text-lg text-teal-500 border border-teal-500 rounded-md"
                                onClick={handleSubmitWithoutPlaylist}
                              >
                                Save Without Playlist
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

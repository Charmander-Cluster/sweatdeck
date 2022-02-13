import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useAuthCardio from "./useAuthCardio";
import SelectCardioPlaylist from "./SelectCardioPlaylist";
import { createDBWorkoutNoPlaylist } from "../../store/createDBWorkout";
import { fetchLoginUser } from "../../store/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const token = new URLSearchParams(window.location.search).get("code");

const CardioPlaylist = (props) => {
  const [select, setSelect] = useState(false);

  const accessToken =
    useAuthCardio(token) || localStorage.getItem("accessToken");

  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(getAuth().currentUser);
  //const [workoutAdded, setWorkoutAdded] = useState(false);

  const authUser = useSelector((state) => state.auth);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });
  const userId = authUser.uid;

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }
  });

  useEffect(() => {
    dispatch(fetchLoginUser());
  }, [dispatch, user]);

  const [workout, setWorkout] = useState({
    category: "cardio",
    name: "",
    exercises: [],
    userId: "",
    timesCompleted: 0,
    datesCompleted: [],
    logs: 0,
  });

  const [exercises, setExercises] = useState({
    type: "",
    distance: "",
    units: "select",
    hours: "",
    minutes: "",
  });

  const handleChange = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const handleNestedChange = (event) => {
    setExercises({ ...exercises, [event.target.name]: event.target.value });
  };

  const handleSelectPlaylist = (event) => {
    event.preventDefault();
    workout.exercises.push(exercises);
    setSelect(true);
  };

  const handleSubmitWithoutPlaylist = (event) => {
    event.preventDefault();
    workout.exercises.push(exercises);
    dispatch(createDBWorkoutNoPlaylist(workout, userId));
    history.push("/confirmcardiocreate");
    // setWorkoutAdded(true);
  };

  const handleCancel = () => {
    setSelect(false);
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
    history.push("/createworkout");
  };

  return select ? (
    <SelectCardioPlaylist
      token={token}
      handleCancel={handleCancel}
      workout={workout}
    />
  ) : (
    <div className="flex flex-col py-2">

      <div className="relative z-10 pt-2 pb-5">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white">
                Create Cardio <span className="text-sm text-zinc-400">| With Playlist</span>
              </h4>
              <div className="h-1 mt-4 bg-gradient-to-l from-teal-600 to-purple-600 rounded-full"></div>
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
                        <div className="flex justify-center">
                          <div className="flex justify-center">
                            <div className=""></div>
                          </div>
                        </div>
                        <div className="flex align-center">
                          <div className="flex-col">
                            <div className="flex-col justify-center items-center">
                              <div className="container flex justify-center">
                                <div className="flex-col justify-center">
                                  <label
                                    htmlFor="name"
                                    className="block mt-2 text-sm font-medium"
                                  >
                                    Name Your Workout
                                  </label>
                                  <input
                                    className="w-64  bg-gray-50 border border-gray-300 text-purple-600 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2  dark:placeholder-gray-400 dark:text-purple-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    name="name"
                                    onChange={handleChange}
                                    value={workout.name}
                                  />
                                </div>
                              </div>

                              <div className="container flex justify-center">
                                <div className="flex justify-center">
                                  {/* <div className="w-20 px-3 md:w-1/2"> */}
                                  <div className="">
                                    <label
                                      htmlFor="name"
                                      className="block mt-2 text-sm font-medium"
                                    >
                                      Workout Type
                                    </label>
                                    <select
                                      className="w-64 bg-gray-50 border border-gray-300 text-purple-600 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2  dark:placeholder-gray-400 dark:text-purple-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                      <option value="elliptical">
                                        Elliptical
                                      </option>
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
                            </div>

                            <div className="flex justify-center">
                              {/* <div className="w-20 md:w-1/2 px-3"> */}
                              <div className="">
                                <label
                                  htmlFor="weight"
                                  className="block text-sm font-medium mt-3"
                                >
                                  Distance
                                </label>
                                <input
                                  className="w-16 bg-gray-50 border border-gray-300 text-purple-600 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 mx-1  dark:placeholder-gray-400 dark:text-purple-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  name="distance"
                                  required
                                  type="number"
                                  min="0"
                                  onChange={handleNestedChange}
                                  value={exercises.distance}
                                />
                              </div>

                              <div className="">
                                <label
                                  htmlFor="units"
                                  className="block text-sm font-medium mt-3"
                                >
                                  Units
                                </label>
                                <select
                                  className="w-16 mr-4 h-12 bg-gray-50 border border-gray-300 text-purple-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-purple-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  name="units"
                                  defaultValue="select"
                                  onChange={handleNestedChange}
                                  value={exercises.units}
                                >
                                  <option value="select" disabled>
                                    --
                                  </option>
                                  <option value="miles">mi</option>
                                  <option value="kilometers">km</option>
                                  <option value="meters">m</option>
                                  <option value="yards">yds</option>
                                </select>
                              </div>

                              <div className="">
                                <label
                                  htmlFor="hours"
                                  className="block text-sm font-medium mt-3"
                                >
                                  Hours
                                </label>
                                <input
                                  className="w-16 bg-gray-50 border border-gray-300 text-purple-600 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 mx-1  dark:placeholder-gray-400 dark:text-purple-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  name="hours"
                                  min="0"
                                  required
                                  type="number"
                                  onChange={handleNestedChange}
                                  value={exercises.hours}
                                />
                              </div>

                              <div className="mt-12">:</div>
                              <div className="">
                                <label
                                  htmlFor="minutes"
                                  className="block text-sm font-medium mt-3"
                                >
                                  Minutes
                                </label>
                                <input
                                  className="w-16 bg-gray-50 border border-gray-300 text-purple-600 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 mx-1 dark:placeholder-gray-400 dark:text-purple-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  name="minutes"
                                  type="number"
                                  min="0"
                                  onChange={handleNestedChange}
                                  value={exercises.minutes}
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
                              <div className="my-3 text-amber-400">
                                Complete all fields to create workout{" "}
                              </div>
                            ) : (
                              <div className="grid mt-5 place-items-center">
                                <button
                                  className="flex p-2 mb-3 text-lg text-white bg-purple-500 rounded-md"
                                  onClick={handleSelectPlaylist}
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
                                  Select Playlist
                                </button>

                                <button
                                  className="flex p-2 mb-3 text-lg text-purple-600 border border-purple-600 rounded-md rounded-"
                                  onClick={handleSubmitWithoutPlaylist}
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

export default CardioPlaylist;

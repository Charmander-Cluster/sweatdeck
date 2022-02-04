import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { localCreateWorkout } from "../../store/localCreateWorkout";
import { useHistory } from "react-router-dom";

const CreateCardio = (props) => {
  const redirectUri = props.redirectUri;

  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`;

  let history = useHistory();
  const dispatch = useDispatch();

  // const localWorkout = useSelector(state => state.localWorkout)
  let localWorkout = useSelector((state) => {
    console.log("State: ", state);
    return state.localWorkout;
  });

  const [workout, setWorkout] = useState({
    category: "",
    name: localWorkout.name,

    //exercises [create an array to store object of properties below]
    type: "",
    distance: "",
    units: "",
    hours: "",
    minutes: "",
  });

  const handleChange = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const handleSubmitWithSpotify = (event) => {
    event.preventDefault();
    dispatch(localCreateWorkout(workout));
    console.log("local workout:", localWorkout);
    history.push(AUTH_URL);
  };

  console.log(workout);

  return (
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
                    onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                  <button className="flex p-3 mb-3 text-lg text-teal-500 border border-teal-500 rounded-md">
                    Save Without Playlist
                  </button>
                </div>
              </div>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCardio;

import React, { useState, useEffect } from "react";
import StrengthDetails from "./StrengthDetails";
import { useSelector, useDispatch } from "react-redux";
import { localCreateWorkout } from "../../store/localCreateWorkout";
import history from "../../history";

const CreateStrength = (props) => {
  const redirectUri = props.redirectUri;
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`;

  const dispatch = useDispatch();

  const localWorkout = useSelector((state) => state.localWorkout);

  const [workout, setWorkout] = useState({
    category: "strength",
    name: "",
    exercises: [],
  });

  const [exercise, setExercise] = useState({});

  const handleChange = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const handleUpdate = (exercise) => {
    setWorkout({ ...workout }, workout.exercises.push(exercise));
  };

  const [counter, setCounter] = useState(0);

  console.log("workout", workout);

  const handleSubmitWithSpotify = (event) => {
    event.preventDefault();
    dispatch(localCreateWorkout(workout));
    console.log("local workout:", localWorkout);
    history.push(AUTH_URL);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <h1 className="my-10 text-3xl text-teal-500 align-center">
          Create Strength Workout
        </h1>
      </div>
      <div className="flex flex-row w-full text-1xl -mt-4 mb-3 justify-center">
        <div className="border border-teal-500 bg-neutral-700 rounded-md my-5 overflow-x-auto m-3 mb-14">
          <form className="max-w-4xl justify-center p-3 ">
            <div className="flex flex-wrap -mx-3 ">
              <div className="container flex justify-center">
                <div className="container p-4 w-screen">
                  <div className="flex justify-center">
                    <img
                      className="max-h-16 h-16 mb-1 -mt-2"
                      alt="weight-icon"
                      src="https://icons-for-free.com/iconfiles/png/512/fitness+gym+gymnasium+icon-1320168052118785594.png"
                    ></img>
                  </div>
                  {/* <h1>Details</h1> */}
                  {/* <div className="border border-teal-500 bg-neutral-700 rounded-md my-5 overflow-x-auto"> */}
                  <div className="flex justify-center">
                    <div className="flex-col my-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium"
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
                    </div>
                  </div>

                  <div className="my-2">
                    <StrengthDetails
                      handleChange={handleChange}
                      handleUpdate={handleUpdate}
                      workout={workout}
                    />
                    {[...Array(counter)].map((_, i) => (
                      <StrengthDetails
                        handleChange={handleChange}
                        handleUpdate={handleUpdate}
                        workout={workout}
                        key={i}
                        number={i}
                      />
                    ))}
                  </div>

                  <div className="flex justify-end">
                    {/* <button
          className="bg-teal-500 p-1 rounded-md"
          onClick={() => setCounter(counter + 1)}
        >
          Add Exercise
        </button> */}

                    <input
                      type="image"
                      alt="add-workout"
                      src="https://cdn-icons-png.flaticon.com/512/189/189689.png"
                      className="bg-teal-500 mr-3 h-8 rounded-2xl"
                      onClick={() => setCounter(counter + 1)}
                    />
                  </div>

                  <div className="grid place-items-center mt-8">
                    <button
                      className="flex bg-teal-500 text-white p-2 mb-3 text-lg rounded-md"
                      onClick={handleSubmitWithSpotify}
                      href={AUTH_URL}
                    >
                      Save & Connect Playlist
                    </button>
                    <button className="flex text-teal-500 border rounded- border-teal-500 p-2 mb-3 text-lg rounded-md">
                      Save Without Playlist
                    </button>
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

export default CreateStrength;

import React, { useState, useEffect } from "react";
import StrengthDetails from "./StrengthDetails";
import { useSelector, useDispatch } from "react-redux";
import { strengthLocalCreateWorkout } from "../../store/strengthLocalCreateWorkout";

import { createDBWorkoutNoPlaylist } from "../../store/createDBWorkout";

import { fetchLoginUser } from "../../store/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

const CreateStrength = (props) => {
  const redirectUri = /localhost/.test(window.location.href)
    ? "http://localhost:3000/strengthplaylist"
    : "https://sweatdeck-test.herokuapp.com/strengthplaylist";

  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`;

  const dispatch = useDispatch();

  const history = useHistory();

  const [user, setUser] = useState(getAuth().currentUser);
  const [workoutAdded, setWorkoutAdded] = useState(false);
  //const [redirect, setRedirect] = useState(false);

  const strengthLocalWorkout = useSelector(state => state.strengthLocalWorkout
  );

  const authUser = useSelector((state) => state.auth);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });
  const userId = authUser.uid;

  useEffect(() => {
    dispatch(fetchLoginUser());
  }, [dispatch, user]);

  useEffect(() => {
    if (workoutAdded) {
      dispatch(createDBWorkoutNoPlaylist(strengthLocalWorkout, userId));
      history.push("/confirmstrengthcreate");
    }
  }, [dispatch, workoutAdded, strengthLocalWorkout, userId]);

  const [workout, setWorkout] = useState({
    category: "strength",
    name: "",
    exercises: [],
    userId: "",
    timesCompleted: 0,
    datesCompleted: [],
    logs: 0,
  });

  console.log(strengthLocalWorkout);
  //const [exercise, setExercise] = useState({});

  const handleChange = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const handleUpdate = (exercise) => {
    setWorkout({ ...workout }, workout.exercises.push(exercise));
  };

  const handleCancel = () => {
    setWorkout({
      category: "strength",
      name: "",
      exercises: [],
      userId: "",
      timesCompleted: 0,
      datesCompleted: [],
      logs: 0,
    });
    setWorkoutAdded(false);
    dispatch(strengthLocalCreateWorkout(workout));
    history.push("/createworkout");
  };

  const [counter, setCounter] = useState(0);

  const handleSubmitWithSpotify = (event) => {
    event.preventDefault();
    dispatch(strengthLocalCreateWorkout(workout));
    console.log("local workout:", strengthLocalWorkout);
    window.location.href = AUTH_URL;
  };

  const handleSubmitWithoutPlaylist = (event) => {
    event.preventDefault();
    dispatch(strengthLocalCreateWorkout(workout));
    setWorkoutAdded(true);
    // history.push("/confirmstrengthcreate")
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <h1 className="my-5 text-3xl text-center text-teal-500 align-center">
          Create Strength Workout
        </h1>
      </div>
      <div className="flex flex-row justify-center w-full mb-3 -mt-4 text-1xl">
        <div className="m-3 my-5 overflow-x-auto border border-teal-500 rounded-md bg-neutral-700 mb-14">
          <form className="justify-center max-w-4xl p-3 ">
            <div className="flex flex-wrap -mx-3 ">
              <div className="container flex justify-center">
                <div className="container w-screen p-4">
                  <div className="flex justify-center">
                    <img
                      className="h-16 mb-1 -mt-2 max-h-16"
                      alt="weight-icon"
                      src="https://icons-for-free.com/iconfiles/png/512/fitness+gym+gymnasium+icon-1320168052118785594.png"
                    ></img>
                  </div>
                  {/* <h1>Details</h1> */}
                  {/* <div className="my-5 overflow-x-auto border border-teal-500 rounded-md bg-neutral-700"> */}
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
                      thisArray={0}
                      workout={workout}
                    />
                    {[...Array(counter)].map((_, i) => (
                      <StrengthDetails
                        handleChange={handleChange}
                        handleUpdate={handleUpdate}
                        workout={workout}
                        thisArray={counter}
                        key={i}
                        number={i}
                      />
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <input
                      type="image"
                      alt="add-workout"
                      src="https://cdn-icons-png.flaticon.com/512/189/189689.png"
                      className="h-8 mr-3 bg-teal-500 rounded-2xl"
                      onClick={() => setCounter(counter + 1)}
                    />
                  </div>

                  { (workout.category === "" ||
                    workout.name === "" ||
                    workout.exercises.length === 0) ?
                 (<div className="text-red-400 my-3 text-center">Complete all fields and save an exercise to create your workout</div>) :

                    (<div className="grid mt-8 place-items-center">
                    <button
                      className="flex p-2 mb-3 text-lg text-white bg-teal-500 rounded-md"
                      onClick={handleSubmitWithSpotify}
                      href={AUTH_URL}
                      disabled={
                        workout.category === "" ||
                        workout.name === "" ||
                        workout.exercises.length === 0
                      }
                    >
                      Save & Connect Spotify Playlist
                    </button>
                    <button className="flex p-2 mb-3 text-lg text-teal-500 border border-teal-500 rounded-md rounded-"
                    onClick={handleSubmitWithoutPlaylist}
                    disabled={
                      workout.category === "" ||
                      workout.name === "" ||
                      workout.exercises.length === 0
                    }
                    >
                      Save Without Playlist
                    </button>
                    </div>)
                  }

                  {/* <div className="grid mt-8 place-items-center">
                    <button
                      className="flex p-2 mb-3 text-lg text-white bg-teal-500 rounded-md"
                      onClick={handleSubmitWithSpotify}
                      href={AUTH_URL}
                      disabled={
                        workout.category === "" ||
                        workout.name === "" ||
                        workout.exercises.length === 0
                      }
                    >
                      Save & Connect Playlist
                    </button>
                    <button className="flex p-2 mb-3 text-lg text-teal-500 border border-teal-500 rounded-md rounded-"
                    onClick={handleSubmitWithoutPlaylist}
                    disabled={
                      workout.category === "" ||
                      workout.name === "" ||
                      workout.exercises.length === 0
                    }
                    >
                      Save Without Playlist
                    </button>
                    </div> */}

                  <div className="grid place-items-center">
                    <button
                      className="flex p-2 mb-3 text-lg text-gray-400 border border-gray-400 rounded-md rounded-"
                      onClick={handleCancel}
                    >
                      Cancel
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

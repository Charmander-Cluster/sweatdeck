import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import useAuthStrength from "./useAuthStrength";
import StrengthDetails from "../CreateWorkout/StrengthDetails";
import SelectStrengthPlaylist from "./SelectStrengthPlaylist";
import { fetchLoginUser } from "../../store/auth";
import { createDBWorkoutNoPlaylist } from "../../store/createDBWorkout";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const token = new URLSearchParams(window.location.search).get("code")

const StrengthPlaylist = (props) => {
  const[select, setSelect] = useState(false)

  const accessToken = useAuthStrength(token)

  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(getAuth().currentUser);

  const authUser = useSelector((state) => state.auth);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  const userId = authUser.uid;

  useEffect(()=> {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken)
    }
  })

  useEffect(() => {
    dispatch(fetchLoginUser());
  }, [dispatch, user]);

  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1)
    setWorkout({ ...workout, count: counter+1 })
  }

  const [workout, setWorkout] = useState({
    category: "strength",
    name: "",
    exercises: [],
    userId: "",
    timesCompleted: 0,
    datesCompleted: [],
    logs: 0,
    count: 0
  });

  // const [counter, setCounter] = useState((workout.count) ? workout.count : 0);


  const handleChange = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const handleUpdate = (exercise) => {
    setWorkout({ ...workout }, workout.exercises.push(exercise));
  };

  const handleDelete = (element) => {
    setWorkout({ ...workout }, workout.exercises.splice(element, 1))
    if (counter > 0) {
      setCounter(counter - 1)
      setWorkout({ ...workout, count: counter-1 })
    }
  };

  const handleCancel = () => {
    setSelect(false)
  };

  const handleSelectPlaylist = (event) => {
    event.preventDefault();
    setSelect(true)
  };


  const handleSubmitWithoutPlaylist = (event) => {
    event.preventDefault();
    dispatch(createDBWorkoutNoPlaylist(workout, userId));
    history.push("/confirmcardiocreate")
  };


return select ? (<SelectStrengthPlaylist token={token} handleCancel={handleCancel} workout={workout}/>) : (
    <div className="flex flex-col py-2">

      <div className="relative z-10 pt-2 pb-2">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white">
              Create Strength <span className="text-sm text-zinc-400">| With Playlist</span>
              </h4>
              <div className="h-1 mt-4 bg-gradient-to-l from-teal-600 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
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
                  <div className="flex justify-center">
                    <div className="flex-col my-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium"
                      >
                        Name Your Workout
                      </label>
                      <input
                        className="w-72  bg-gray-50 border border-gray-300 text-teal-600 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      handleDelete = {handleDelete}
                      counter ={counter}
                      thisArray={0}
                      workout={workout}
                    />
                    {(counter >= 0)  && [...Array(counter)].map((_, i) => (
                      <StrengthDetails
                        handleChange={handleChange}
                        handleUpdate={handleUpdate}
                        handleDelete = {handleDelete}
                        counter={counter}
                        workout={workout}
                        thisArray={i+1}
                        key={i}
                      />
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <input
                      type="image"
                      alt="add-workout"
                      src="https://cdn-icons-png.flaticon.com/512/189/189689.png"
                      className="h-8 mr-3 bg-teal-500 rounded-2xl"
                      onClick={handleAdd}
                    />
                  </div>

                  {(workout.category === "" ||
                    workout.name === "" ||
                    workout.exercises.length === 0) ?
                 (<div className="text-amber-400 my-3 text-center">Complete all fields and save an exercise to create workout</div>) :

                    (<div className="grid mt-8 place-items-center">
                    <button
                      className="flex p-2 mb-3 text-lg text-white bg-teal-500 rounded-md"
                      onClick={handleSelectPlaylist}
                      disabled={
                        workout.category === "" ||
                        workout.name === "" ||
                        workout.exercises.length === 0
                      }
                    >
                      Select Spotify Playlist
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

export default StrengthPlaylist;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleWorkoutThunk } from "../../../store/singleWorkout";
import { editWorkoutThunk } from "../../../store/singleWorkout";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const EditCardioWorkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  let currentWorkout = useSelector((state) => state.singleWorkout);
  let { id, docId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleWorkoutThunk(id, docId));
  }, [dispatch, id, docId]);

  // const localWorkout = useSelector(state => state.localWorkout)

  const [workout, setWorkout] = useState(currentWorkout);
  const [exercises, setExercises] = useState({
    type: currentWorkout.exercises[0].type,
    distance: currentWorkout.exercises[0].distance,
    units: currentWorkout.exercises[0].units,
    hours: currentWorkout.exercises[0].hours,
    minutes: currentWorkout.exercises[0].minutes,
    // type: "",
    // distance: "",
    // units: "",
    // hours: "",
    // minutes: "",
  });

  const handleChange = (event) => {
    setWorkout({
      ...currentWorkout,
      [event.target.name]: event.target.value,
    });
  };

  // const handleNestedChange = (event) => {
  //   setWorkout({ ...workout, exercises: { ...workout.exercises[0], [event.target.name]: event.target.value }});
  // };

  const handleNestedChange = (event) => {
    setExercises({
      ...currentWorkout.exercises[0],
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    workout.exercises[0] = exercises;
    dispatch(editWorkoutThunk(id, docId, workout));
    history.push(`/users/${id}/workouts/${docId}`);
  };

  const handleBack = (event) => {
    event.preventDefault();
    history.push({
      pathname: `/users/${id}/workouts/${docId}`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <h1 className="my-10 text-3xl text-teal-500 align-center">
          Edit Cardio Workout
        </h1>
      </div>

      <div className="flex flex-row justify-center w-full mb-3 -mt-4 text-1xl">
        <div className="m-3 my-5 overflow-x-auto border border-teal-500 rounded-md bg-neutral-700 mb-14">
          <div className="flex justify-start">
            <button
              type="button"
              className="flex p-1 ml-2 mt-2 text-base text-teal-500 border border-1 border-teal-500 rounded-md"
              onClick={handleBack}
            >
              Go back
            </button>
          </div>

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
                                defaultValue={currentWorkout.exercises[0].type}
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
                              defaultValue={currentWorkout.name}
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
                                  defaultValue={
                                    currentWorkout.exercises[0].distance
                                  }
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
                                  defaultValue={
                                    currentWorkout.exercises[0].units
                                  }
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
                                  defaultValue={
                                    currentWorkout.exercises[0].hours
                                  }
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
                                  defaultValue={
                                    currentWorkout.exercises[0].minutes
                                  }
                                />
                              </div>
                            </div>

                            <div className="grid mt-5 place-items-center">
                              <button
                                className="flex p-3 mb-3 text-lg text-white bg-teal-500 rounded-md"
                                onClick={handleSubmit}
                                // href={AUTH_URL}
                              >
                                Save Changes
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

export default EditCardioWorkout;

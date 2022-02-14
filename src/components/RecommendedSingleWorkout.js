import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchJustWorkoutThunk } from "../store/singleWorkout";
import {
  createDBWorkout,
  createDBWorkoutNoPlaylist,
} from "../store/createDBWorkout";

import { useDispatch } from "react-redux";
import { logDBWorkout } from "../store/logWorkout";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

const RecommendedSingleWorkout = (props) => {
  let workout = useSelector((state) => state.singleWorkout);
  // const setRecommended = props.setRecommended

  let { id, docId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchJustWorkoutThunk(docId));
  }, [dispatch, docId]);

  const [btnState, setBtnState] = useState(false);

  const handleBtnClick = (e) => {
    setBtnState((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logDBWorkout(id, docId));
    handleBtnClick(event);
  };

  const handleModal = (event) => {
    event.preventDefault();
    setBtnState((prev) => !prev);
  };

  const handleBack = (event) => {
    event.preventDefault();
    // setRecommended(true);
    history.push({
      pathname: `/users/${id}/workouts`,
      state: workout.category,
    });
  };

  const [saveBtnState, setSaveBtnState] = useState(false);

  const handleSaveModal = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/users/${id}/workouts`,
      state: workout.category,
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (!workout.hasOwnProperty("playlist")) {
      dispatch(createDBWorkoutNoPlaylist(workout, id));
    } else {
      dispatch(createDBWorkout(workout, id));
    }
    setSaveBtnState((prev) => !prev);
  };

  //make ternary statement in return
  return !workout.exercises ? (
    <div>...loading</div>
  ) : (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1">
          <div className="flex justify-start">
            <button
              type="button"
              className="flex p-1 ml-2 text-base text-teal-500 border border-2 border-teal-500 rounded-md"
              onClick={handleBack}
            >
              Go back
            </button>
          </div>
          <h1 className="my-10 text-3xl text-teal-500 align-center text-center uppercase">
            {workout.name}
          </h1>
          <div className="flex flex-row justify-center w-full -mt-10 text-1xl">
            <div className="m-3 my-5 overflow-x-auto border border-teal-500 rounded-md bg-neutral-700 mb-14">
              <div className="justify-center max-w-4xl p-3 ">
                <div className="flex flex-wrap -mx-3">
                  <div className="container flex justify-center w-screen text-center">
                    <div className="grid grid-cols-1">
                      <h1 className="my-3 text-xl text-teal-500 align-center capitalize">
                        {workout.category}
                      </h1>
                      {!workout.hasOwnProperty("playlist") ? (
                        <h2>No Linked Playlist</h2>
                      ) : (
                        <h2 className="mb-3 text-lg text-left">
                          {" "}
                          <a className="text-teal-500 mr-3 text-lg">
                            Playlist:{" "}
                          </a>{" "}
                          <a
                            className="mr-3 p-1 text-base text-center text-white bg-teal-500 rounded-md"
                            href={workout.playlist.url}
                          >
                            {workout.playlist.name}
                          </a>
                        </h2>
                      )}
                      {workout.category === "Strength" ||
                      workout.category === "strength"
                        ? workout.exercises.map((exercise) => {
                            return (
                              <ul
                                key={workout.exercises.indexOf(exercise) + 1}
                                className="text-lg text-left mb-6  list-none"
                              >
                                <li>
                                  <a className="text-teal-500 mr-3">
                                    Body Part:
                                  </a>{" "}
                                  {exercise.bodyPart}
                                </li>
                                <li>
                                  <a className="text-teal-500 mr-3">Type:</a>{" "}
                                  {exercise.type}
                                </li>
                                <li>
                                  <a className="text-teal-500 mr-3">Reps:</a>{" "}
                                  {exercise.reps}
                                </li>
                                <li>
                                  <a className="text-teal-500 mr-3">Sets:</a>{" "}
                                  {exercise.sets}
                                </li>
                                <li>
                                  <a className="text-teal-500 mr-3">Weight:</a>{" "}
                                  {exercise.weight} {exercise.units}
                                </li>
                              </ul>
                            );
                          })
                        : workout.exercises.map((exercise) => {
                            return (
                              <ul
                                key={workout.exercises.indexOf(exercise) + 1}
                                className="text-lg text-left mb-3 list-none"
                              >
                                <li>
                                  {" "}
                                  <a className="text-teal-500 mr-3">
                                    Type:{" "}
                                  </a>{" "}
                                  {exercise.type}
                                </li>
                                <li>
                                  {" "}
                                  <a className="text-teal-500 mr-3">
                                    Distance:{" "}
                                  </a>
                                  {exercise.distance} {exercise.units}
                                </li>
                                <li>
                                  {" "}
                                  <a className="text-teal-500 mr-3">
                                    Time:{" "}
                                  </a>{" "}
                                  {!exercise.hours ? 0 : exercise.hours} hours{" "}
                                  {exercise.minutes} minutes
                                </li>
                              </ul>
                            );
                          })}
                      {/* <div className="grid mt-5 place-items-center"> */}
                      <div className="container flex justify-center">
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <div>
                            <button
                              type="button"
                              className="flex text-center p-1 mb-3 ml-3 text-base text-white bg-teal-600 rounded-md"
                              onClick={handleSave}
                            >
                              Save Workout
                            </button>
                          </div>
                          {saveBtnState ? (
                            // <div>{alert("Workout logged!")}</div>
                            <div
                              className="fixed z-10 inset-0 overflow-y-auto"
                              aria-labelledby="modal-title"
                              role="dialog"
                              aria-modal="true"
                            >
                              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                  aria-hidden="true"
                                ></div>

                                <span
                                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                  aria-hidden="true"
                                >
                                  &#8203;
                                </span>

                                <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-green-500 sm:mx-0 sm:h-10 sm:w-10"></div>
                                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                          className="text-lg leading-6 font-medium text-gray-900"
                                          id="modal-title"
                                        >
                                          Workout saved!
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                      type="button"
                                      className="modal-close mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                      onClick={handleSaveModal}
                                    >
                                      Done
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedSingleWorkout;

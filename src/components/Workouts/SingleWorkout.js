import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleWorkoutThunk,
  deleteWorkoutThunk,
} from "../../store/singleWorkout";
import { useDispatch } from "react-redux";
import { logDBWorkout } from "../../store/logWorkout";
import { Link } from "react-router-dom";
//import Popup from "../../components/Popup";

import SpotifyPlayer from "react-spotify-web-playback";

import { useHistory } from "react-router-dom";

const SingleWorkout = () => {
  let workout = useSelector((state) => state.singleWorkout);

  const authUser = useSelector((state) => state.auth);

  console.log(authUser.accessToken);

  let { id, docId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchSingleWorkoutThunk(id, docId));
  }, [dispatch, id, docId]);

  const [btnState, setBtnState] = useState(false);
  const [deleteBtnState, setDeleteBtnState] = useState(false);

  const handleBtnClick = (e) => {
    setBtnState((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logDBWorkout(id, docId));
    handleBtnClick(event);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteWorkoutThunk(id, docId));
    setDeleteBtnState((prev) => !prev);
  };

  const handleDeleteModal = (event) => {
    event.preventDefault();
    history.push({
      pathname: `/users/${id}/workouts`,
      state: workout.category,
    });
  };

  const handleModal = (event) => {
    event.preventDefault();
    setBtnState((prev) => !prev);
  };

  //make ternary statement in return
  return !workout.exercises ? (
    <div>...loading</div>
  ) : (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1">
          <h1 className="my-10 text-3xl text-center text-teal-500 uppercase align-center">
            {workout.name}
          </h1>
          <div className="flex flex-row justify-center w-full -mt-10 text-1xl">
            <div className="m-3 my-5 overflow-x-auto border border-teal-500 rounded-md bg-neutral-700 mb-14">
              <div className="justify-center max-w-4xl p-3 ">
                <div className="flex flex-wrap -mx-3">
                  <div className="container flex justify-center w-screen text-center">
                    <div className="grid grid-cols-1">
                      <div className="flex justify-start">
                        <button
                          type="button"
                          className="flex p-1 ml-2 text-base text-teal-500 border border-2 border-teal-500 rounded-md"
                          onClick={handleDeleteModal}
                        >
                          Go back
                        </button>
                      </div>
                      <h1 className="my-3 text-xl text-teal-500 capitalize align-center">
                        {workout.category}
                      </h1>
                      {!workout.hasOwnProperty("playlist") ? (
                        <h2>No Linked Playlist</h2>
                      ) : (
                        <h2 className="mb-3 text-lg text-left">
                          {" "}
                          <a className="mr-3 text-lg text-teal-500">
                            Playlist:{" "}
                          </a>{" "}
                          <a
                            className="p-1 mr-3 text-base text-center text-white bg-teal-500 rounded-md"
                            href={workout.playlist.url}
                          >
                            {workout.playlist.name}
                          </a>
                          <SpotifyPlayer
                            token={authUser.accessToken}
                            uris={["spotify:playlist:76ofLf3VyvSN7DjUzbJwsR"]}
                            styles={{
                              activeColor: "#fff",
                              bgColor: "#333",
                              color: "#fff",
                              loaderColor: "#fff",
                              sliderColor: "#1cb954",
                              trackArtistColor: "#ccc",
                              trackNameColor: "#fff",
                            }}
                          />
                        </h2>
                      )}
                      {workout.category === "Strength" ||
                      workout.category === "strength"
                        ? workout.exercises.map((exercise) => {
                            return (
                              <ul
                                key={workout.exercises.indexOf(exercise) + 1}
                                className="mb-6 text-lg text-left list-none"
                              >
                                <li>
                                  <a className="mr-3 text-teal-500">
                                    Body Part:
                                  </a>{" "}
                                  {exercise.bodyPart}
                                </li>
                                <li>
                                  <a className="mr-3 text-teal-500">Type:</a>{" "}
                                  {exercise.type}
                                </li>
                                <li>
                                  <a className="mr-3 text-teal-500">Reps:</a>{" "}
                                  {exercise.reps}
                                </li>
                                <li>
                                  <a className="mr-3 text-teal-500">Sets:</a>{" "}
                                  {exercise.sets}
                                </li>
                                <li>
                                  <a className="mr-3 text-teal-500">Weight:</a>{" "}
                                  {exercise.weight} {exercise.units}
                                </li>
                              </ul>
                            );
                          })
                        : workout.exercises.map((exercise) => {
                            return (
                              <ul
                                key={workout.exercises.indexOf(exercise) + 1}
                                className="mb-3 text-lg text-left list-none"
                              >
                                <li>
                                  {" "}
                                  <a className="mr-3 text-teal-500">
                                    Type:{" "}
                                  </a>{" "}
                                  {exercise.type}
                                </li>
                                <li>
                                  {" "}
                                  <a className="mr-3 text-teal-500">
                                    Distance:{" "}
                                  </a>
                                  {exercise.distance} {exercise.units}
                                </li>
                                <li>
                                  {" "}
                                  <a className="mr-3 text-teal-500">
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
                          <button
                            className="flex p-1 mb-3 ml-3 text-base text-teal-500 border border-2 border-teal-500 rounded-md"
                            onClick={handleSubmit}
                          >
                            Log Workout
                          </button>
                        </div>

                        {btnState ? (
                          // <div>{alert("Workout logged!")}</div>
                          <div
                            className="fixed inset-0 z-10 overflow-y-auto"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                          >
                            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                              <div
                                className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                                aria-hidden="true"
                              ></div>

                              <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>

                              <div className="inline-block overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                                  <div className="sm:flex sm:items-start">
                                    <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mx-auto bg-green-500 rounded-full sm:mx-0 sm:h-10 sm:w-10"></div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                      <h3
                                        className="text-lg font-medium leading-6 text-gray-900"
                                        id="modal-title"
                                      >
                                        Workout logged!
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm modal-close hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleModal}
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
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <div>
                            <Link
                              to={`/users/${id}/workouts/${docId}/edit${workout.category}`}
                              className="flex p-1 mb-3 ml-3 text-base text-center text-white bg-teal-500 rounded-md"
                            >
                              Edit Workout
                            </Link>
                          </div>
                        </div>
                        <div className="grid mt-5 place-items-center"></div>
                        <button
                          className="flex justify-center p-1 mb-3 ml-3 mr-3 text-base text-red-500 border border-2 border-gray-400 rounded-md"
                          onClick={handleDelete}
                        >
                          Delete Workout
                        </button>

                        {deleteBtnState ? (
                          // <div>{alert("Workout logged!")}</div>
                          <div
                            className="fixed inset-0 z-10 overflow-y-auto"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                          >
                            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                              <div
                                className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                                aria-hidden="true"
                              ></div>

                              <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>

                              <div className="inline-block overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                                  <div className="sm:flex sm:items-start">
                                    <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mx-auto bg-red-500 rounded-full sm:mx-0 sm:h-10 sm:w-10"></div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                      <h3
                                        className="text-lg font-medium leading-6 text-gray-900"
                                        id="modal-title"
                                      >
                                        Workout Deleted!
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm modal-close hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleDeleteModal}
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

export default SingleWorkout;

import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleWorkoutThunk } from "../../store/singleWorkout";
import { useDispatch } from "react-redux";
import { logDBWorkout } from "../../store/logWorkout";
import { Link } from "react-router-dom";
import Popup from "../../components/Popup";

const SingleWorkout = () => {
  let workout = useSelector((state) => state.singleWorkout);

  let { id, docId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleWorkoutThunk(id, docId));
  }, [dispatch, id, docId]);

  const [btnState, setBtnState] = useState(false);

  const handleBtnClick = (e) => {
    setBtnState((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logDBWorkout(id, docId));
    handleBtnClick(event);
  };

  //make ternary statement in return
  return !workout.exercises ? (
    <div>...loading</div>
  ) : (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1">
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
                                  {exercise.distance} {exercise.unit}
                                </li>
                                <li>
                                  {" "}
                                  <a className="text-teal-500 mr-3">
                                    Time:{" "}
                                  </a>{" "}
                                  {exercise.hours ? 0 : exercise.hours} hours{" "}
                                  {exercise.minutes} minutes
                                </li>
                              </ul>
                            );
                          })}
                      <div className="grid mt-5 place-items-center">
                        <button
                          className="flex p-3 mb-3 text-lg text-white bg-teal-500 rounded-md"
                          onClick={handleSubmit}
                        >
                          Log Workout
                        </button>

                        {btnState ? (
                          <div>{alert("Workout logged!")}</div>
                        ) : (
                          <div></div>
                        )}

                        <Link
                          to={`/users/${id}/workouts/${docId}/editCardio`}
                          className="p-3 text-sm text-center text-white bg-teal-500 rounded-md"
                        >
                          Create Similar Workout
                        </Link>
                      </div>
                    </div>
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

import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleWorkoutThunk } from "../../store/singleWorkout";
import { useDispatch } from "react-redux";
import { logDBWorkout } from "../../store/logWorkout";

const SingleWorkout = () => {
  let workout = useSelector((state) => state.singleWorkout);

  let { id, docId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleWorkoutThunk(id, docId));
  }, [dispatch, id, docId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logDBWorkout(id, docId));
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
//return(div name = elem.data.name
//weight = elem.data.weight

//div)

export default SingleWorkout;

// import React, { useEffect } from "react";

// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchSingleWorkoutThunk } from "../store/singleWorkout";
// import { useDispatch } from "react-redux";
// const SingleWorkout = () => {
//   let workout = useSelector((state) => state.singleWorkout);
//   console.log("this is workout from SingleWorkout", workout);

//   let { id, docId } = useParams();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchSingleWorkoutThunk(id, docId));
//   }, [dispatch, id, docId]);

//   //make ternary statement in return
//   return (
//     <div>
//       <h1>{workout.name}</h1>
//       <h1>{workout.category}</h1>
//       <h1>{workout.date}</h1>
//       {/* <div>{workout.exercises.map}</div> */}
//     </div>
//   );
// };
// //return(div name = elem.data.name
// //weight = elem.data.weight

// //div)

// export default SingleWorkout;

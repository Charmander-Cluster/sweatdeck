import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleWorkoutThunk } from "../store/singleWorkout";
import { useDispatch } from "react-redux";
const SingleWorkout = () => {
  let workout = useSelector((state) => state.singleWorkout);
  console.log("this is workout from SingleWorkout", workout);

  let { id, docId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleWorkoutThunk(id, docId));
  }, [dispatch, id, docId]);

  //make ternary statement in return
  return !workout.exercises ? (<div>...loading</div>) : (
    <div className="container p-3 w-screen flex flex-col items-center justify-center py-2">
      <div className="rounded overflow-hidden pt-20">
        <div className="grid grid-cols-1">
          <div className="flex flex-col px-6 mt-4">
            <h1 className="font-bold text-3xl text-center mb-1">
              {workout.name}
            </h1>
            <h1 className="font-bold text-center mb-1">{workout.category}</h1>
            <h1>{workout.date}</h1>
            {(workout.category === 'Strength' || workout.category ==='strength') ? (
            workout.exercises.map((exercise) => {
              return (
                <div
                  key={workout.exercises.indexOf(exercise)+1}
                  className="mb-1 border-solid border-2"
                >
                  <li>Body Part: {exercise.bodyPart}</li>
                  <li>Type: {exercise.type}</li>
                  <li>Reps: {exercise.reps}</li>
                  <li>Sets: {exercise.sets}</li>
                  <li>Weight: {exercise.weight} {exercise.units}</li>
                </div>
              );
            })) : (
              workout.exercises.map((exercise) => {
                return (
                  <div
                    key={workout.exercises.indexOf(exercise)+1}
                    className="mb-1 border-solid border-2"
                  >
                    <li>Type: {exercise.type}</li>
                    <li>Distance: {exercise.distance} {exercise.units}</li>
                    <li>Time: {exercise.hours} {exercise.minutes}</li>
                  </div>
                );
              }))
            }
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

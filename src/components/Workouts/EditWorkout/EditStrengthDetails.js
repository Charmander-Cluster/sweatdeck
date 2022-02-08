import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Biceps,
  Triceps,
  Shoulders,
  Back,
  Quads,
  Chest,
  Abs,
} from "./EditStrengthExercises";

const EditStrengthDetails = (props) => {
  const workout = props.workout;
  const handleUpdate = props.handleUpdate;
  const handleDelete = props.handleDelete;

  // console.log("Workout from EditStrengthDetails: ", workout)
  // console.log("thisArray from EditStrengthDetails: ", thisArray)
  // console.log("++++++PROPS:", props)

  const [completedExercises, setCompletedExercises] = useState({});

  const [isCompleted, setIsCompleted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [exercises, setExercises] = useState(workout.exercises);
  const [exercise, setExercise] = useState(workout.exercises[props.number]);

  const handleOuterChange = (event) => {
    setExercises({
      ...workout.exercises,
    });
    // console.log("/+/--//==/CHECKING EXERCISES:", exercise);
  };

  const handleChange = (event) => {
    setExercise({
      ...exercise,
      [event.target.name]: event.target.value,
    });
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    exercises[props.number] = exercise;
    setIsCompleted(true);
    setCompletedExercises(exercises);
  };

  // const handleAdd = (event) => {
  //   event.preventDefault();
  //   setIsSaved(true);
  //   handleUpdate(completedExercises);
  // };

  useEffect(() => {
    if (isCompleted === true) {
      handleUpdate(completedExercises);
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [isCompleted]);

  const handleRemove = (event) => {
    event.preventDefault();
    handleDelete(props.number);
  };

  return (
    <div>
      <div className="border border-teal-500 bg-neutral-500 rounded-md m-0.5 p-2">
        <div className="flex justify-center text-teal-400">
          <p>EXERCISE</p>
        </div>
        <div className="flex justify-center">
          <div className="flex-col justify-center align-center">
            <div className="container flex justify-center">
              <div className="flex justify-center">
                {/* <div className="w-20 md:w-1/2 px-3"> */}
                <div className="">
                  <label
                    htmlFor="bodyPart"
                    className="block text-sm font-medium mt-3"
                  >
                    Muscle Focus
                  </label>
                  <select
                    className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="bodyPart"
                    defaultValue={workout.exercises[props.number].bodyPart}
                    onChange={handleChange}
                  >
                    <option value="select" disabled>
                      --
                    </option>
                    <option value="biceps">Biceps</option>
                    <option value="triceps">Triceps</option>
                    <option value="shoulders">Shoulders</option>
                    <option value="back">Back</option>
                    <option value="quads">Quads</option>
                    <option value="chest">Chest</option>
                    <option value="abs">Abs</option>
                  </select>
                </div>

                <div className="">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium mt-3"
                  >
                    Exercise
                  </label>
                  {exercise.bodyPart ===
                  workout.exercises[props.number].bodyPart ? (
                    <div>
                      {workout.exercises[props.number].bodyPart === "biceps" ? (
                        <Biceps
                          type={workout.exercises[props.number].type}
                          handleChange={handleChange}
                        />
                      ) : workout.exercises[props.number].bodyPart ===
                        "triceps" ? (
                        <Triceps
                          type={workout.exercises[props.number].type}
                          handleChange={handleChange}
                        />
                      ) : workout.exercises[props.number].bodyPart ===
                        "shoulders" ? (
                        <Shoulders
                          type={workout.exercises[props.number].type}
                          handleChange={handleChange}
                        />
                      ) : workout.exercises[props.number].bodyPart ===
                        "back" ? (
                        <Back
                          type={workout.exercises[props.number].type}
                          handleChange={handleChange}
                        />
                      ) : workout.exercises[props.number].bodyPart ===
                        "quads" ? (
                        <Quads
                          type={workout.exercises[props.number].type}
                          handleChange={handleChange}
                        />
                      ) : workout.exercises[props.number].bodyPart ===
                        "chest" ? (
                        <Chest
                          type={workout.exercises[props.number].type}
                          handleChange={handleChange}
                        />
                      ) : (
                        // exercise.bodyPart === "abs" ?
                        <Abs
                          type={workout.exercises[props.number].type}
                          handleChange={handleChange}
                        />
                      )}
                    </div>
                  ) : (
                    <div>
                      {exercise.bodyPart === "biceps" ? (
                        <Biceps type="select" handleChange={handleChange} />
                      ) : exercise.bodyPart === "triceps" ? (
                        <Triceps type="select" handleChange={handleChange} />
                      ) : exercise.bodyPart === "shoulders" ? (
                        <Shoulders type="select" handleChange={handleChange} />
                      ) : exercise.bodyPart === "back" ? (
                        <Back type="select" handleChange={handleChange} />
                      ) : exercise.bodyPart === "quads" ? (
                        <Quads type="select" handleChange={handleChange} />
                      ) : exercise.bodyPart === "chest" ? (
                        <Chest type="select" handleChange={handleChange} />
                      ) : (
                        // exercise.bodyPart === "abs" ?
                        <Abs type="select" handleChange={handleChange} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {/* <div className="w-20 md:w-1/2 px-3"> */}
          <div className="">
            <label htmlFor="weight" className="block text-sm font-medium mt-5">
              Weight
            </label>
            <input
              className="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="weight"
              required
              type="number"
              onChange={handleChange}
              defaultValue={workout.exercises[props.number].weight}
            />
          </div>

          <div className="">
            <label htmlFor="units" className="block text-sm font-medium mt-5">
              Units
            </label>
            <select
              className="w-16 mr-4 m-0.5 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="units"
              defaultValue={workout.exercises[props.number].units}
              onChange={handleChange}
            >
              <option value="select" disabled>
                {" "}
                --
              </option>
              <option value="lbs">lbs</option>
              <option value="kgs">kgs</option>
            </select>
          </div>

          <div className="">
            <label htmlFor="reps" className="block text-sm font-medium mt-5">
              Reps
            </label>
            <input
              className="w-14 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="reps"
              required
              type="number"
              onChange={handleChange}
              defaultValue={workout.exercises[props.number].reps}
            />
          </div>

          <div className="mt-12">x</div>
          <div className="">
            <label htmlFor="sets" className="block text-sm font-medium mt-5">
              Sets
            </label>
            <input
              className="w-14 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="sets"
              onChange={handleChange}
              defaultValue={workout.exercises[props.number].sets}
            />
          </div>
        </div>

        <div className="flex justify-center"></div>

        <div className="flex object-left-bottom">
          <button
            type="remove"
            onClick={handleRemove}
            className="mt-2 p-2 text-white font-bold bg-red-500 rounded-md p-1 text-sm"
          >
            X
          </button>
        </div>

        {/* {!isCompleted && !isSaved && (
          <div className="flex justify-end">
            <p className="mt-2 text-red-400 rounded-md p-1 text-sm">
              Complete all fields
            </p>
            <button
              type="add"
              onClick={handleConfirm}
              className="mt-2 border border-teal-500 rounded-md p-1 text-sm"
              disabled={
                exercise.bodyPart === "" ||
                exercise.type === "" ||
                exercise.weight === "" ||
                exercise.units === "" ||
                exercise.reps === "" ||
                exercise.sets === ""
              }
            >
              Confirm Details
            </button>
          </div>
        )} */}

{
        ((exercise.bodyPart === "" ||
        exercise.type === "" ||
        exercise.weight ===  "" ||
        exercise.units === "" ||
        exercise.reps === "" ||
        exercise.sets === "")) && (<div className="mt-2 text-right mr-1 text-red-400 rounded-md p-1">Complete all fields to add</div>)}

      {(!(exercise.bodyPart === "" ||
        exercise.type === "" ||
        exercise.weight ===  "" ||
        exercise.units === "" ||
        exercise.reps === "" ||
        exercise.sets === "") && !isCompleted) &&
        (<div className="flex justify-end">
        <button type="add" onClick={handleConfirm} className="mt-2 border border-teal-500 rounded-md p-1 text-sm">
          Confirm Details
        </button>
        </div>
        )
      }

{(isCompleted) && ((
        <div className="flex justify-end">
      <div type="add" className="mt-2 mr-1 text-amber-400 rounded-md p-1">
        Saved to Workout
      </div>
      </div>)
      )}
      </div>
    </div>
  );
};

export default EditStrengthDetails;

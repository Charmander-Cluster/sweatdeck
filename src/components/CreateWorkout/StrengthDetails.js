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
} from "./StrengthExercises";

const StrengthDetails = (props) => {
  const workout = props.workout;
  const handleUpdate = props.handleUpdate;
  const thisArray = props.thisArray;
  const handleDelete = props.handleDelete;

  const [completedExercise, setCompletedExercise] = useState({});

  const [isCompleted, setIsCompleted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [exercise, setExercise] = useState({
    bodyPart:(workout.exercises.length === 0 || !workout.exercises[thisArray]) ? "select" : workout.exercises[thisArray].bodyPart,
    type: (workout.exercises.length === 0 || !workout.exercises[thisArray]) ? "select" : workout.exercises[thisArray].type,
    weight:(workout.exercises.length === 0 || !workout.exercises[thisArray]) ? "" : workout.exercises[thisArray].weight,
    units:(workout.exercises.length === 0 || !workout.exercises[thisArray]) ? "select" : workout.exercises[thisArray].units,
    reps:(workout.exercises.length === 0 || !workout.exercises[thisArray]) ? "" : workout.exercises[thisArray].reps,
    sets: (workout.exercises.length === 0 || !workout.exercises[thisArray]) ? "" : workout.exercises[thisArray].sets,
  });

  const handleChange = (event) => {
    setExercise({ ...exercise, [event.target.name]: event.target.value });
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    setIsCompleted(true);
    setCompletedExercise(exercise);
  };

  // const handleDelete = (element) => {
  //   setWorkout({ ...workout }, workout.exercises.splice(element, 1))
  //   if (counter > 0) {
  //     setCounter(counter - 1)
  //     setWorkout({ ...workout, count: counter-1 })
  //   }
  // };

  const handleRemove = (event) => {
    event.preventDefault();
    if (workout.exercises.length === 1) {
      setExercise({
        bodyPart: "select",
        type:"select",
        weight:"",
        units: "select",
        reps: "",
        sets: ""
      })
      setIsCompleted(false)
    }
    handleDelete(thisArray);
  };

  useEffect(() => {
    if (isCompleted === true) {
      handleUpdate(completedExercise);
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [isCompleted]);

  return (
    <div>
      <div className="border border-teal-500 bg-neutral-500 rounded-md m-0.5 p-2">
        {/* <div>
        <div className="flex -mb-6 justify-end">
          <button onClick={handleRemove}>
            {" "}
            <img
              alt="red-x"
              className="h-5"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828595.png"
            />{" "}
          </button>
        </div>
        </div> */}
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
                    className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="bodyPart"
                    defaultValue="select"
                    onChange={handleChange}
                    value={exercise.bodyPart}
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
                  <div
                  // className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {exercise.bodyPart === "biceps" && (
                      <Biceps
                        handleChange={handleChange}
                        type={exercise.type}
                      />
                    )}
                    {exercise.bodyPart === "triceps" && (
                      <Triceps
                        handleChange={handleChange}
                        type={exercise.type}
                      />
                    )}
                    {exercise.bodyPart === "shoulders" && (
                      <Shoulders
                        handleChange={handleChange}
                        type={exercise.type}
                      />
                    )}
                    {exercise.bodyPart === "back" && (
                      <Back handleChange={handleChange} type={exercise.type} />
                    )}
                    {exercise.bodyPart === "quads" && (
                      <Quads handleChange={handleChange} type={exercise.type} />
                    )}
                    {exercise.bodyPart === "chest" && (
                      <Chest handleChange={handleChange} type={exercise.type} />
                    )}
                    {exercise.bodyPart === "abs" && (
                      <Abs handleChange={handleChange} type={exercise.type} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {/* <div className="w-20 md:w-1/2 px-3"> */}
          <div className="">
            <label htmlFor="weight" className="block text-sm font-medium mt-3">
              Weight
            </label>
            <input
              className="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="weight"
              type="number"
              min="0"
              onChange={handleChange}
              value={exercise.weight}
            />
          </div>

          <div className="">
            <label htmlFor="units" className="block text-sm font-medium mt-3">
              Units
            </label>
            <select
              className="w-16 mr-4 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="units"
              defaultValue="select"
              onChange={handleChange}
              value={exercise.units}
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
            <label htmlFor="reps" className="block text-sm font-medium mt-3">
              Reps
            </label>
            <input
              className="w-14 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="reps"
              min="0"
              type="number"
              onChange={handleChange}
              value={exercise.reps}
            />
          </div>

          <div className="mt-10">x</div>
          <div className="">
            <label htmlFor="sets" className="block text-sm font-medium mt-3">
              Sets
            </label>
            <input
              className="w-14 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="sets"
              type="number"
              min="0"
              onChange={handleChange}
              value={exercise.sets}
            />
          </div>
        </div>

        <div className="flex justify-center"></div>

        {(exercise.bodyPart === "" ||
          exercise.type === "" ||
          exercise.weight === "" ||
          exercise.units === "" ||
          exercise.reps === "" ||
          exercise.sets === "") && (
          <div className="mt-2 text-right mr-1 text-amber-400 rounded-md p-1">
            Complete all fields to add
          </div>
        )}

        {!(
          exercise.bodyPart === "" ||
          (exercise.type === "" || exercise.type === "select")||
          exercise.weight === "" ||
          (exercise.units === "" || exercise.units === "select") ||
          exercise.reps === "" ||
          exercise.sets === ""
        ) &&
          !isCompleted && (
            <div className="flex justify-end">
              <button
                type="add"
                onClick={handleConfirm}
                className="mt-2 border border-teal-500 rounded-md p-1 text-sm"
              >
                Confirm Details
              </button>
            </div>
          )}

        {isCompleted && (
          <div className="flex justify-end">
            <div type="add" className="mt-2 mr-1 text-lime-500 rounded-md p-1">
              Added to Workout
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default StrengthDetails;

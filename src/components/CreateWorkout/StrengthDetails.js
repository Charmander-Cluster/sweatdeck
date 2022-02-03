import React, { useState } from "react";

const StrengthDetails = (props) => {
  const workout = props.workout;
  const handleUpdate = props.handleUpdate

  const [completedExercise, setCompletedExercise ] = useState({})

  const [isCompleted, setIsCompleted] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const [exercise, setExercise] = useState({
    bodyPart: "",
    type: "",
    weight: "",
    units: "",
    reps: "",
    sets: "",
  });

  const handleChange = (event) => {
    setExercise({ ...exercise, [event.target.name]: event.target.value });
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    // for (let key in exercise) {
    //   if (!exercise[key]) {
    //     alert("All fields are required.")

    //   }
    // }
    console.log("clicked !")
    setIsCompleted(true)
    setCompletedExercise(exercise)

  }

  const handleAdd = (event) => {
    event.preventDefault();
    setIsSaved(true)
    handleUpdate(completedExercise)
    //setCompletedExercise({})
  }
  console.log(exercise);

  return (
    <div>
      <div className="border border-teal-500 bg-neutral-500 rounded-md m-1 p-4">
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
                    className="w-30 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="bodyPart"
                    defaultValue="select"
                    onChange={handleChange}
                  >
                    <option value="select" disabled>
                      --
                    </option>
                    <option value="biceps">Biceps</option>
                    <option value="triceps">Triceps</option>
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
                  <select
                    className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="type"
                    defaultValue="select"
                    onChange={handleChange}
                  >
                    <option value="select" disabled>
                      {" "}
                      --
                    </option>
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
              value={exercise.weight}
            />
          </div>

          <div className="">
            <label htmlFor="units" className="block text-sm font-medium mt-5">
              Units
            </label>
            <select
              className="w-16 mr-4 m-0.5 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="units"
              defaultValue="select"
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
              value={exercise.reps}
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
              value={exercise.sets}
            />
          </div>
        </div>

        {/* <div className="flex justify-center"> */}
        {/* <form className="flex w-full max-w-lg p-3"> */}
        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}

        <div className="flex justify-center">
          {/* <div className="w-20 md:w-1/2 px-3"> */}
        </div>

        {/* </div> */}

        {/* </form> */}
        {/* </div> */}

      {(!isCompleted && !isSaved) && (<div className="flex justify-end">
        <button type="add" onClick={handleConfirm} className="mt-2 mr-1 border border-teal-500 rounded-md p-1 text-sm">
          Confirm Details
        </button>
        </div>
      )}

      {(isCompleted && !isSaved) && ((
      <div className="flex justify-end">
      <div type="add" className="mt-2 mr-1 text-green-500 rounded-md p-1">
        Updated
      </div>
      <button type="add" onClick={handleAdd} className="mt-2 border border-teal-500 rounded-md p-1">
        Add to Workout
      </button>
      </div>)
      )}

      {(isCompleted && isSaved) && ((
        <div className="flex justify-end">
      <div type="add" className="mt-2 mr-1 text-amber-400 rounded-md p-1">
        Added to Workout
      </div>

      <div type="add" className="mt-2 mr-1 text-red-400  border border-red-400 rounded-md p-1">
        Delete
      </div>
      </div>)
      )}


      {/* {(!isCompleted ?
        (<div className="flex justify-end">
        <button type="add" onClick={handleComplete} className="mt-2 mr-1 border border-teal-500 rounded-md p-1">
          Finish Update
        </button>
        </div>
        ) :

        (<div className="flex justify-end">
        <div type="add" className="mt-2 mr-1 text-green-500 rounded-md p-1">
          Updated
        </div>
        <button type="add" onClick={handleAdd} className="mt-2 border border-teal-500 rounded-md p-1">
          Save
        </button>
        </div>)
        )} */}


      </div>
    </div>
  );
};

export default StrengthDetails;

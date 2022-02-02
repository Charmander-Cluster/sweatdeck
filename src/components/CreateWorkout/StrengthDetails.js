import React from "react";

const StrengthDetails = () => {
  return (
    <div>
      <div className="border border-teal-500 bg-neutral-500 rounded-md p-4">
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
                    htmlFor="name"
                    className="block text-sm font-medium mt-3"
                  >
                    Muscle Focus
                  </label>
                <select
                  className="w-30 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="bodyPart"
                  // onChange={handleChange}
                  // value={workout.type}
                  >
                  <option selected disabled>
                    {" "}
                     {" "}
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
                  className="w-48 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="type"
                  // onChange={handleChange}
                  // value={workout.type}
                >
                  <option selected disabled>
                    {" "}
                     {" "}
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
              <label
                    htmlFor="weight"
                    className="block text-sm font-medium mt-5"
                  >
                    Weight
                  </label>
                <input
                  className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="weight"
                  required
                  type="number"
                  // onChange={handleChange}
                  // value={workout.type}
                />
              </div>

              <div className="">
              <label
                    htmlFor="units"
                    className="block text-sm font-medium mt-5"
                  >
                    Units
                  </label>
                <select
                  className="w-20 mr-4 m-0.5 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="units"
                  // onChange={handleChange}
                  // value={workout.type}
                >
                  <option selected disabled>
                    {" "}
                     {" "}
                  </option>
                  <option value="lbs">lbs</option>
                  <option value="kgs">kgs</option>
                </select>
              </div>



              <div className="">
              <label
                    htmlFor="reps"
                    className="block text-sm font-medium mt-5"
                  >
                    Reps
                  </label>
                <input
                  className="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="reps"
                  required
                  type="number"
                  // onChange={handleChange}
                  // value={workout.type}
                />
              </div>

              <div className="mt-12">
                x
              </div>
              <div className="">
              <label
                    htmlFor="sets"
                    className="block text-sm font-medium mt-5"
                  >
                    Sets
                  </label>
                <input
                  className="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="sets"
                  // onChange={handleChange}
                  // value={workout.type}
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

      </div>
    </div>
  );
};

export default StrengthDetails;

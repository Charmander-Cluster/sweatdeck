import React from "react";

const LiftDetails = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex-col justify-center align-center">
          <div className="container flex justify-center">
            <div className="flex justify-center">
              {/* <div className="w-20 md:w-1/2 px-3"> */}
              <div className="">
                <select
                  className="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="type"
                  // onChange={handleChange}
                  // value={workout.type}
                >
                  <option selected disabled>
                    {" "}
                    Select Workout Type{" "}
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

              <div className="">
                <select
                  className="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="type"
                  // onChange={handleChange}
                  // value={workout.type}
                >
                  <option selected disabled>
                    {" "}
                    Select Workout Type{" "}
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
      {/* <div className="flex justify-center"> */}
      {/* <form className="flex w-full max-w-lg p-3"> */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="container flex justify-center">
          <div className="w-20 md:w-1/2 pr-2 pl-1 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="hours"
            >
              Area
            </label>
            <select className="rounded-md block w-30 bg-gray-200 text-gray-700 border border-teal-500 py-3 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500 text-sm">
              <option>Legs</option>
              <option>Arms</option>
              <option>Back</option>
            </select>
          </div>

          {/* <p className="my-10">:</p> */}

          <div className="w-20 md:w-1/2 px-1">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="minutes"
            >
              Weight
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500"
              id="minutes"
              type="text"
              placeholder="30"
            />
          </div>

          <div className="w-20 md:w-1/2 mb-6 md:mb-0 px-1">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="hours"
            >
              Unit
            </label>
            <select className="rounded-md block w-30 bg-gray-200 text-gray-700 border border-teal-500 py-3 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500 text-sm">
              <option>lb</option>
              <option>kg</option>
            </select>
          </div>

          {/* <p className="my-10">:</p> */}
          <div className="w-20 md:w-1/2 px-1">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="minutes"
            >
              Sets
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500"
              id="minutes"
              type="text"
              placeholder="30"
            />
          </div>
          <div className="w-20 md:w-1/2 px-1">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="minutes"
            >
              Sets
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500"
              id="minutes"
              type="text"
              placeholder="30"
            />
          </div>
        </div>
      </div>
      {/* </form> */}
      {/* </div> */}
    </div>
  );
};

export default LiftDetails;

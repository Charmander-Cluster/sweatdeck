import React, { useState, useEffect } from "react";

const CreateCardio = (props) => {
  const workout = props.workout;
  const handleChange = props.handleChange;

  console.log(workout);

  return (
    <div>
      <div className="container p-3 w-screen">
        <div className="flex justify-center">
          <img
            className="max-h-20 h-20 mb-5"
            alt="weight-icon"
            src="https://allenparkdowntown.org/wp-content/uploads/ES-safe-sidewalk.png"
          ></img>
        </div>
        <div className="flex justify-center">
          <div className="flex-col justify-center align-center">
            <div className="container flex justify-center">
              <div className="flex justify-center">
                {/* <div className="w-20 md:w-1/2 px-3"> */}
                <div className="">
                  {/* <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="minutes"
              >
                Minutes
              </label> */}
                  <select
                    className="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="type"
                    onChange={handleChange}
                    value={workout.type}
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

            {workout.type !== "" && (
              <div className="flex align-center m-5">
                <div className="flex-col">

                <div className="flex align-center m-5">

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="distance"
                      className="block text-sm font-medium"
                    >
                      Distance
                    </label>
                    <input
                      name="distance"
                      className="w-28 @error bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      type="number"
                      onChange={handleChange}
                      value={workout.distance}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                      htmlFor="units"
                      className="block text-sm font-medium"
                    >
                      Units
                    </label>
                  <select
                    className="w-28 h-12 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1  dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="units"
                    required
                    onChange={handleChange}
                    value={workout.units}
                  >
                    <option selected={true} disabled> Select Unit</option>
                    <option value="miles">miles</option>
                    <option value="kilometers">kilometers</option>
                    <option value="meters">meters</option>
                    <option value="yards">yards</option>
                  </select>
                </div>
                </div>


              <div className="container flex justify-center">
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="hours"
                    className="block text-sm font-medium"
                  >
                    Hours
                  </label>
                  <input
                    name="hours"
                    className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    type="number"
                    onChange={handleChange}
                    value={workout.hours}
                  />
                </div>
                <div className="mt-10">
                :
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="minutes"
                    className="block text-sm font-medium "
                  >
                    Minutes
                  </label>
                  <input
                    name="minutes"
                    className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    type="number"
                    onChange={handleChange}
                    value={workout.minutes}
                  />
                </div>
                </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCardio;

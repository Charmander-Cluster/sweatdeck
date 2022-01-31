import React, { useState, useEffect } from "react";

const CreateRun = () => {
  //const workout = "run";

  const [workout, setWorkout] = useState({
    hours: '',
    minutes: '',
    distance: '',
    units: ''
  })

  console.log(workout)

  const handleChange = event => {
    console.log(event.target.value)
    setWorkout({...workout, [event.target.name]: event.target.value})
  }

  return(
    <div className="container p-8">
      <div className="flex justify-center">
      <img className="h-20" src="https://icon-library.com/images/run_38139.png" alt="running-icon"></img>
      </div>
      {/* <h1>Details</h1> */}
      <div className="border border-teal-500 bg-neutral-700 rounded-md my-5">
        <form className="w-full max-w-lg justify-center p-3">

          <div className="flex flex-wrap -mx-3">
            <div className="container flex ml-6">
            <p className="mt-8 w-20">Time</p>
            <div className="w-20 md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="hours"
              >
                Hours
              </label>

              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500"
                id="hours"
                name="hours"
                onChange={handleChange}
                type="text"
                placeholder="1"
                value={workout.hours}
              />
            </div>

            <p className="my-10">:</p>

            <div className="w-20 md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="minutes"
              >
                Minutes
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500"
                id="minutes"
                name="minutes"
                onChange={handleChange}
                type="text"
                placeholder="30"
                value={workout.minutes}
              />
            </div>
          </div>
          </div>



          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="container flex ml-6">
            <p className="mt-3 w-20">Distance</p>
            <div className="w-20 md:w-1/2 px-3 mb-6 md:mb-0">
              {/* <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="hours"
              >
                Hours
              </label> */}

              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500"
                id="distance"
                name="distance"
                onChange={handleChange}
                type="text"
                placeholder="2.1"
                value={workout.distance}
              />
            </div>

            <div className="w-20 md:w-1/2 px-3">

              {/* <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="minutes"
              >
                Minutes
              </label> */}
              <select
                className="block w-20 text-sm bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500"
                id="units"
                name="units"
                onChange={handleChange}
                value={workout.units}
              >
                <option selected disabled> unit </option>
                <option value="mi">mi</option>
                <option value="km">km</option>

              </select>

            </div>
          </div>
          </div>


        </form>
      </div>

      <div className="flex justify-center">
      <button>Save Workout</button>
      </div>

    </div>
  )
}

export default CreateRun

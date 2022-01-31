import React from "react";

const LiftDetails = () => {
  return (
    <div>
      <div className="flex justify-center">
        <form className="flex w-full max-w-lg p-3">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="container flex justify-center">

              <div className="w-20 md:w-1/2 pr-2 pl-1 mb-6 md:mb-0">
                {/* <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="hours"
                >
                  Hours
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500"
                  id="hours"
                  type="text"
                  placeholder="1"
                /> */}

                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="hours"
                >
                  Area
                </label>
                <select className="rounded-md block w-30 bg-gray-200 text-gray-700 border border-teal-500 py-3 px-2 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500">
                  <option>Legs</option>
                  <option>Arms</option>
                  <option>Back</option>
                </select>
              </div>

              {/* <p className="my-10">:</p> */}

              <div className="w-20 md:w-1/2 px-3">
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

              <div className="w-20 md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="hours"
                >
                  Reps
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-solid focus:bg-teal focus:border-gray-500"
                  id="hours"
                  type="text"
                  placeholder="1"
                />
              </div>

              {/* <p className="my-10">:</p> */}
              <div className="w-20 md:w-1/2 px-3">
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
        </form>
      </div>
    </div>
  );
};

export default LiftDetails;

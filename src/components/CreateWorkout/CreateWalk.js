import React from "react";

const CreateWalk = () => {
  return (
    <div className="container p-8">
      <div className="border border-teal-500 bg-neutral-700 rounded-md">
        <form className="w-full max-w-lg justify-center p-3">
          <div className="flex flex-wrap -mx-3 mb-6">
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
                type="text"
                placeholder="1"
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
                type="text"
                placeholder="30"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWalk;

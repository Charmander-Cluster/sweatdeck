import React from "react";
import DynamicWorkoutStrengthChart from "../Charts/DynamicStrengthChart";

const DynamicStrength = (props) => {
  return (
    <div className="container px-6 pt-4 mx-auto snap-center">
      <div className="relative z-10 w-full mb-8 -mt-8 bg-teal-600 rounded shadow-md shadow-black">
        <div className="flex items-start py-5 pl-6 rounded shadow ">
          <div className="pl-3 pr-3 mt-1">
            <div className="flex items-end mt-4">
              <h2 className="text-2xl font-bold leading-normal text-fuchsia-700 ">
                Workout
              </h2>
              <p className="mb-1 ml-2 text-sm text-white text-clip overflow-clip">
                {props.workoutData.name}
              </p>
            </div>
            {props.workoutData.playlist ? (
              <div className="flex items-end mt-4">
                <h2 className="font-bold leading-normal text-md text-fuchsia-700 ">
                  Playlist
                </h2>
                <p className="mb-1 ml-2 text-sm text-white">
                  {" "}
                  {props.workoutData.playlist.name}
                </p>
              </div>
            ) : (
              <div className="flex items-end mt-4">
                <h2 className="font-bold leading-normal text-md text-fuchsia-700 ">
                  Playlist
                </h2>
                <p className="mb-1 ml-2 text-sm text-white"> N/A</p>
              </div>
            )}
            <div className="flex items-center mt-5">
              <div className="flex flex-row">
                <div>
                  <p className="pl-1 text-xs font-bold leading-normal tracking-wide text-white">
                    {props.workoutData.exercises[0].sets} Sets
                  </p>
                  <p className="pl-1 text-xs font-bold leading-normal tracking-wide text-white">
                    {props.workoutData.exercises[0].reps} Reps
                  </p>
                </div>
                <div className="pl-6">
                  <DynamicWorkoutStrengthChart
                    workoutData={props.workoutData.exercises[0]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicStrength;

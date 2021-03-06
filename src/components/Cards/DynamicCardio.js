import React from "react";
import DynamicWorkoutCardioChart from "../Charts/DynamicCardioChart";

const DynamicCardio = (props) => {
  // console.log("Dynamic Cardio ---", props.userId);

  return (
    <div className="container px-6 pt-8 mx-auto snap-center">
      <div className="relative z-10 w-full mb-8 -mt-8 bg-teal-600 rounded-md shadow-md shadow-black">
        <div className="flex items-start py-5 pl-6">
          <div className="pl-1 pr-1 mt-1">
            <div className="flex items-end">
              <h2 className="text-2xl font-bold leading-normal text-purple-700 ">
                Workout
              </h2>
              <p className="mb-1 ml-2 text-sm text-white">
                {" "}
                {props.workoutData.name}
              </p>
            </div>
            {props.workoutData.playlist ? (
              <div className="flex items-end mt-4">
                <h2 className="font-bold leading-normal text-purple-700 text-md">
                  Playlist
                </h2>
                <p className="mb-1 ml-2 text-sm text-white">
                  {" "}
                  {props.workoutData.playlist.name}
                </p>
              </div>
            ) : (
              <div className="flex items-end mt-4">
                <h2 className="font-bold leading-normal text-purple-700 text-md">
                  Playlist
                </h2>
                <p className="mb-1 ml-2 text-sm text-white"> N/A</p>
              </div>
            )}

            <div className="flex items-center mt-5">
              <div className="flex flex-row">
                <div>
                  <p className="text-xs font-bold leading-normal tracking-wide text-white">
                    {props.workoutData.exercises[0].distance} Miles
                  </p>
                  <p className="text-xs font-bold leading-normal tracking-wide text-white">
                    {props.workoutData.exercises[0].minutes} Minutes
                  </p>
                </div>
                <div className="pl-6">
                  <DynamicWorkoutCardioChart
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

export default DynamicCardio;

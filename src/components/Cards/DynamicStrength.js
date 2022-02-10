import React from "react";
import DynamicWorkoutStrengthChart from "../Charts/DynamicStrengthChart";

const DynamicStrength = (props) => {
  // const setsSum = props.workoutData
  //   .map((workout) => {
  //     return workout.exercises;
  //   })

  //   .reduce((totalSets, workout) => {
  //     return (
  //       totalSets +
  //       workout.reduce((insideSets, exercise) => {
  //         return insideSets + parseInt(exercise.sets);
  //       }, 0)
  //     );
  //   }, 0);

  // // const repsSum = props.workouts
  // //   .map((workout) => {
  // //     return workout.workoutData.exercises;
  // //   })
  // //   .reduce((totalReps, workout) => {
  // //     return (
  // //       totalReps +
  // //       workout.reduce((insideReps, exercise) => {
  // //         return insideReps + parseInt(exercise.reps);
  // //       }, 0)
  // //     );
  // //   }, 0);

  // console.log(setsSum);

  return (
    <div className="container px-6 pt-4 mx-auto snap-center">
      <div className="relative z-10 w-full mb-8 -mt-8 bg-teal-600 rounded shadow-md shadow-black">
        <div className="flex items-start py-5 pl-6 rounded shadow ">
          <div className="pl-3 pr-3 mt-1">
            <div className="flex items-end mt-4">
              <h2 className="text-2xl font-bold leading-normal text-purple-600">
                Workout
              </h2>
              <p className="mb-1 ml-2 text-sm text-white text-clip overflow-clip">
                {props.workoutData.name}
              </p>
            </div>
            {props.workoutData.playlist ? (
              <div className="flex items-end mt-4">
                <h2 className="font-bold leading-normal text-purple-600 text-md">
                  Playlist
                </h2>
                <p className="mb-1 ml-2 text-sm text-white text-clip overflow-clip">
                  {" "}
                  {props.workoutData.playlist.name}
                </p>
              </div>
            ) : (
              <div className="flex items-end mt-4">
                <h2 className="font-bold leading-normal text-purple-600 text-md">
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

import React from "react";
import DoughnutActivityChart from "../Charts/DoughnutActivityChart";

const DynamicActivity = (props) => {
  //   console.log(props.workouts);

  const setsSum = props.workouts
    .filter((workout) => workout.workoutData.category === "Strength")
    .map((workout) => {
      return workout.workoutData.exercises;
    })
    .reduce((totalSets, workout) => {
      return (
        totalSets +
        workout.reduce((insideSets, exercise) => {
          return insideSets + parseInt(exercise.sets);
        }, 0)
      );
    }, 0);

  const repsSum = props.workouts
    .filter((workout) => workout.workoutData.category === "Strength")
    .map((workout) => {
      return workout.workoutData.exercises;
    })
    .reduce((totalReps, workout) => {
      return (
        totalReps +
        workout.reduce((insideReps, exercise) => {
          return insideReps + parseInt(exercise.reps);
        }, 0)
      );
    }, 0);

  const distanceSum = props.workouts
    .filter((workout) => workout.workoutData.category === "Cardio")
    .map((workout) => {
      return workout.workoutData.exercises;
    })
    .reduce((totalDistance, workout) => {
      return (
        totalDistance +
        workout.reduce((insideDistance, exercise) => {
          return insideDistance + parseInt(exercise.distance);
        }, 0)
      );
    }, 0);

  const minutesSum = props.workouts
    .filter((workout) => workout.workoutData.category === "Cardio")
    .map((workout) => {
      return workout.workoutData.exercises;
    })
    .reduce((totalMinutes, workout) => {
      return (
        totalMinutes +
        workout.reduce((insideMinutes, exercise) => {
          return insideMinutes + parseInt(exercise.minutes);
        }, 0)
      );
    }, 0);

  const calculatedSums = {
    setsSum,
    repsSum,
    distanceSum,
    minutesSum,
  };

  return (
    <div className="relative z-10 w-full mb-6 -mt-8 bg-teal-600 rounded shadow">
      <h3 className="py-4 pl-6 text-2xl font-bold leading-normal text-fuchsia-700 ">
        Weekly Activity
      </h3>
      <div className="flex items-center justify-center py-2 pl-6 rounded shadow ">
        <div className="pl-3 pr-10">
          <div className="flex items-center justify-center">
            <DoughnutActivityChart calculatedSums={calculatedSums} />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col pr-10 mt-4">
              <h2 className="text-2xl font-bold leading-normal text-fuchsia-700 ">
                Strength
              </h2>
              <p className="mb-1 ml-2 text-sm text-white">{setsSum} Sets</p>
              <p className="mb-1 ml-2 text-sm text-white">{repsSum} Reps</p>
            </div>
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold leading-normal text-fuchsia-700 ">
                Cardio
              </h2>
              <p className="mb-1 ml-2 text-sm text-white">
                {distanceSum} Miles
              </p>
              <p className="mb-1 ml-2 text-sm text-white">
                {minutesSum} Minutes
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center pt-4">
            <p>Well done this week!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicActivity;

import React from "react";
import DoughnutActivityChart from "../Charts/DoughnutActivityChart";

const DynamicActivity = (props) => {
  const workoutLength = props.workouts
    .map((workout) => {
      return workout.workoutData.timesCompleted;
    })
    .reduce((timesCompleted, workout) => {
      return timesCompleted + workout;
    }, 0);

  const setsSum = props.workouts
    .filter((workout) => workout.workoutData.category === "strength")
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
    .filter((workout) => workout.workoutData.category === "strength")
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
    .filter((workout) => workout.workoutData.category === "cardio")
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
    .filter((workout) => workout.workoutData.category === "cardio")
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
    <div className="relative z-10 w-full mb-6 -mt-8 bg-teal-600 rounded-md shadow-md shadow-black">
      <h3 className="py-4 pl-6 text-2xl font-bold leading-normal text-purple-700 ">
        Weekly Activity
      </h3>
      <div className="flex items-center justify-center py-2 pl-6 rounded shadow">
        <div className="pl-3 pr-10">
          <div className="flex items-center justify-center">
            <DoughnutActivityChart
              calculatedSums={calculatedSums}
              workoutLength={workoutLength}
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col pr-10 mt-4">
              <h2 className="text-2xl font-bold leading-normal text-purple-700 ">
                Strength
              </h2>
              <p className="mb-1 ml-2 text-sm text-white">{setsSum} Sets</p>
              <p className="mb-1 ml-2 text-sm text-white">{repsSum} Reps</p>
            </div>
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold leading-normal text-purple-700 ">
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
            {workoutLength < 5 ? (
              <p>Do more workouts!</p>
            ) : workoutLength < 10 ? (
              <p>Well done this week!</p>
            ) : (
              <p>You are seriously amazing!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicActivity;

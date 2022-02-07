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

  console.log(setsSum);

  return (
    <div className="relative z-10 w-full mb-8 -mt-8 bg-teal-600 rounded shadow">
      <h3 className="py-5 pl-6 text-2xl font-bold leading-normal text-fuchsia-700 ">
        Weekly Activity
      </h3>
      <div className="flex items-center justify-center py-2 pl-6 rounded shadow ">
        <div className="pl-3 pr-10 mt-1">
          <div className="flex items-center justify-center">
            <DoughnutActivityChart />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col pr-10 mt-4">
              <h2 className="text-2xl font-bold leading-normal text-fuchsia-700 ">
                Strength
              </h2>
              <p className="mb-1 ml-2 text-sm text-white">100 Sets</p>
              <p className="mb-1 ml-2 text-sm text-white">300 Reps</p>
            </div>
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold leading-normal text-fuchsia-700 ">
                Cardio
              </h2>
              <p className="mb-1 ml-2 text-sm text-white">50 Miles</p>
              <p className="mb-1 ml-2 text-sm text-white">300 Minutes</p>
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

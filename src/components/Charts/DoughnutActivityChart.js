import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ActivityChart = (props) => {
  const labels = ["Sets", "Reps", "Miles", "Minutes"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "white",
        },
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: [
          props.calculatedSums.setsSum,
          props.calculatedSums.repsSum,
          props.calculatedSums.distanceSum,
          props.calculatedSums.minutesSum,
        ],
        backgroundColor: ["#f87171", "#38bdf8", "#facc15", "#e879f9"],
        borderColor: ["#fef2f2"],
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <div className="relative flex items-center justify-center w-48 h-48">
        <Doughnut data={data} options={options} className="z-10" />
        <div className="absolute z-0 flex flex-col items-center justify-center w-24 h-24 bg-white rounded-full">
          <p className="text-2xl font-semibold leading-6 text-center text-purple-600">
            {props.workoutLength}
          </p>
          <p className="font-semibold leading-6 text-center text-purple-600 text-md">
            Workouts
          </p>
        </div>
      </div>
    </>
  );
};

export default ActivityChart;

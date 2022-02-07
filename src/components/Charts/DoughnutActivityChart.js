import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [30, 15, 50],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
      ],
      borderColor: ["#fef2f2"],
      borderWidth: 2,
    },
  ],
};

const ActivityChart = () => {
  return (
    <>
      <div className="relative flex items-center justify-center w-48 h-48">
        <Doughnut data={data} className="z-10" />
        <div className="absolute z-0 flex flex-col items-center justify-center w-24 bg-white rounded-full h-28">
          <p className="text-2xl font-semibold leading-6 text-center text-black">
            20
          </p>
          <p className="text-lg font-semibold leading-6 text-center text-black">
            Workouts
          </p>
        </div>
      </div>
    </>
  );
};

export default ActivityChart;

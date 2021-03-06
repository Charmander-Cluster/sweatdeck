import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DynamicWorkoutCardioChart = (props) => {
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
    scales: {
      y: {
        display: false,
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ["Miles", "Minutes"];

  const data = {
    labels,

    datasets: [
      {
        data: [props.workoutData.distance, props.workoutData.minutes],
        backgroundColor: "#9333ea",
      },
    ],
  };

  return (
    <>
      <div className="w-48 h-full">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

export default DynamicWorkoutCardioChart;

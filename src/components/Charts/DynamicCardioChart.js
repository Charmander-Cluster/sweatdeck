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
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ["Distance", "Hours"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [props.workoutData.distance, props.workoutData.hours],
        backgroundColor: "rgba(255, 99, 132)",
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
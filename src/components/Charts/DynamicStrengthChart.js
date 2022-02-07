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

const DynamicWorkoutStrengthChart = (props) => {
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
      x: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  const labels = ["Sets", "Reps"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [props.workoutData.sets, props.workoutData.reps],
        backgroundColor: "#a21caf",
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

export default DynamicWorkoutStrengthChart;

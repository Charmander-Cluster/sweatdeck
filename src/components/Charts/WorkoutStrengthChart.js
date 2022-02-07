import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Chart from "chart.js/auto";
const WorkoutStrengthChart = (props) => {
  useEffect(() => {
    if (window.myChart instanceof Chart) {
      window.myChart.destroy();
    }

    const ctx = document
      .getElementById("workoutStrengthChart")
      .getContext("2d");

    window.myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Reps", "Sets", "Weight"],
        datasets: [
          {
            label: false,
            data: [
              props.workout.workoutData.exercises[0].reps,
              props.workout.workoutData.exercises[0].sets,
              props.workout.workoutData.exercises[0].weight,
            ],
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "#0f766e",
            pointBackgroundColor: "#0f766e",
            fill: "start",
            tension: 0.4,
          },

          {
            label: false,
            data: [
              props.workout.workoutData.exercises[1].reps,
              props.workout.workoutData.exercises[1].sets,
              props.workout.workoutData.exercises[1].weight,
            ],
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "#FDBA74",
            pointBackgroundColor: "#0f766e",
            fill: "start",
            tension: 0.4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        tooltips: {
          enable: false,
        },
        generateLabels: {
          hidden: true,
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
      scales: {
        yAxes: {
          ticks: {
            color: "rgba(255, 255, 255, 1)",
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },

        xAxes: {
          ticks: {
            color: "rgba(255, 255, 255, 1)",
          },
          grid: {
            circular: true,
            borderColor: "rgba(255, 255, 255, .2)",
            color: "rgba(255, 255, 255, .2)",
            borderDash: [5, 5],
          },
        },
      },
    });
  });
  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
      </Helmet>
      <div className="w-full p-2 mt-2 border-2 border-teal-500 shadow-md shadow-black">
        <p className="pb-2 text-base font-medium leading-none text-center text-white">
          Analysis
        </p>
        <div className="w-full h-full">
          <canvas id="workoutStrengthChart" width={250} />
        </div>
      </div>
    </>
  );
};

export default WorkoutStrengthChart;

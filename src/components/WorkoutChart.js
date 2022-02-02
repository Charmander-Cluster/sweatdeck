import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Chart from "chart.js/auto";
const WorkoutChart = (props) => {
  useEffect(() => {
    if (window.myChart instanceof Chart) {
      window.myChart.destroy();
    }
    const ctx = document.getElementById("myChart").getContext("2d");
    window.myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["reps", "sets", "weight"],
        datasets: [
          {
            label: false,
            data: [
              props.userWorkout[0].reps,
              props.userWorkout[0].sets,
              props.userWorkout[0].weight,
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
              props.userWorkout[1].reps,
              props.userWorkout[1].sets,
              props.userWorkout[1].weight,
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
      <div className="mt-2 w-full border-2 border-teal-500 p-2">
        <p className="text-base font-medium pb-2 text-center leading-none text-white">
          Analysis
        </p>
        <div className="w-full h-full">
          <canvas id="myChart" width={250} />
        </div>
      </div>
    </>
  );
};

export default WorkoutChart;

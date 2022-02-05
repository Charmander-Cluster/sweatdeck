import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Chart from "chart.js/auto";
const WorkoutCardioChart = (props) => {
  useEffect(() => {
    if (window.myChart instanceof Chart) {
      window.myChart.destroy();
    }

    const ctx = document.getElementById("myChart").getContext("2d");

    window.myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Distance", "Minutes"],
        datasets: [
          {
            label: false,
            data: [
              props.userWorkout[0].exercises[0].distance,
              props.userWorkout[0].exercises[0].minutes,
            ],
            backgroundColor: "#0d9488",
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
          <canvas id="myChart" width={250} />
        </div>
      </div>
    </>
  );
};

export default WorkoutCardioChart;

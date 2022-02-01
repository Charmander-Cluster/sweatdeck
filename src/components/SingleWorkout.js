import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Chart from "chart.js/auto";

const SingleWorkout = () => {
  useEffect(() => {
    const context = document.getElementById("workoutChart").getContext("2d");
    const workoutChart = new Chart(context, {
      type: "line",
      data: {
        labels: ["", "", "", " ", "", ""],
        datasets: [
          {
            label: "My Speed",
            data: [1, 10, 6, 11, 6, 12],
            borderColor: ["#0f766e"],
            borderWidth: 3,
            strokeColor: "#6366F1",
          },
          {
            label: "Average Speed",
            data: [10, 6, 8, 14, 9, 15],
            borderColor: ["#E0E7FF"],
            borderWidth: 3,
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        generateLabels: {
          hidden: true,
        },
        legend: {
          display: false,
        },
      },
    });
  });

  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script
          defer
          src="https://cdn.tuk.dev/dev/light-dark-switch.js"
        ></script>
      </Helmet>
      <div className="flex items-center justify-center w-full h-full py-12 px-4">
        <div className="max-w-sm w-full pt-6 border-teal-700 border-2 rounded">
          <div className="pl-8 pr-6">
            <div className="flex items-center justify-between">
              <p className="sm:pr-48 pr-10 text-xs font-medium leading-3 text-gray-500 dark:text-gray-400">
                John
              </p>

              <div className="w-8 h-6">
                <div className="flex items-center justify-center px-1 py-1.5 flex-1 h-full ">
                  <p className="text-xs font-semibold leading-3 text-right ">
                    Running
                  </p>
                </div>
              </div>
            </div>
            <p className="text-4xl font-semibold leading-9 pt-3 text-gray-800 dark:text-gray-100">
              2
            </p>
            <p className="text-xs font-medium leading-3 pt-1 text-teal-700">
              Total Exercises
            </p>
            <div className="flex items-start justify-between pt-7">
              <div className="flex items-start">
                <div className="w-1 h-9 bg-teal-700 rounded-sm" />
                <div className="flex flex-col pl-3 pt-2">
                  <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                    Time
                  </p>
                </div>
              </div>
              <p className="text-xl font-semibold leading-5 pt-2 text-right text-gray-800 dark:text-gray-100">
                20 Seconds
              </p>
            </div>
            <div className="flex items-start justify-between pt-4">
              <div className="flex items-start">
                <div className="w-1 h-9 bg-teal-700 rounded-sm" />
                <div className="flex flex-col pl-3 pt-2">
                  <p className="text-lg leading-none text-gray-800 dark:text-gray-100">
                    Distance
                  </p>
                </div>
              </div>
              <p className="text-xl font-semibold pt-2 leading-5 text-right text-gray-800 dark:text-gray-100">
                100 Feet
              </p>
            </div>
          </div>
          <div className="pt-6">
            <div className="w-full h-full">
              <canvas id="workoutChart" width={250} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleWorkout;

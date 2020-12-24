import "../index.css";

import React, { useEffect } from "react";
import Chart from "chart.js";
import moment from "moment";
function GlobalChart(props) {
    //console.log(props.positive);
  const dataPositive = [];
  useEffect(() => {
    for (let i = 0; i < props.data.length; i++) {
      dataPositive.push({
        t: new moment(props.date[i] + "").format(),
        y: props.data[i] / 10000,
      });
    }
    console.log(dataPositive);
    var ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        datasets: [
          {
            label: props.label,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            fill: false,
            data: dataPositive,
          },
        ],
      },

      // Configuration options go here
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
              time: {
                unit: "month",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                max: 30,
                min: 0,
                stepSize: 1,
              },
            },
          ],
          bounds: "data",
        },
      },
    });
  });
  return (
    <div className="graph">
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default GlobalChart;

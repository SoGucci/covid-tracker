// React
import React, { useEffect, useState } from "react";
import moment from "moment";

// CSS
import "../index.css";

//import GlobalChart from "../components/GlobalChart";
import Card from "../components/Card";

function Current() {
  const [currentUSValues, setCurrentUSValues] = useState({
    death: "",
    deathIncrease: "",
    negative: "",
    positive: "",
    pending: "",
  });

  useEffect(() => {
    const axios = require("axios");
    axios
      .get("https://api.covidtracking.com/v1/us/current.json")
      .then(function (response) {
        //console.log(response.data[0]);

        setCurrentUSValues(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="current">
      <h1>Current Statistics</h1>
      <p>Last page refresh: {new moment().format("dddd, MMMM Do YYYY")} </p>
      <p>
        Last data refresh:{" "}
        {new moment(currentUSValues.date + "").format("dddd, MMMM Do YYYY")}
      </p>
      <div className="wrap">
        <div className="current-list">
          <h2>Cummulative</h2>
          <Card
            message="Pending: "
            data={currentUSValues.pending.toLocaleString()}
          ></Card>
          <Card
            message="Positive: "
            data={currentUSValues.positive.toLocaleString()}
          ></Card>
          <Card
            message="Negative: "
            data={currentUSValues.negative.toLocaleString()}
          ></Card>
        </div>

        <div className="current-list">
          <h2>Hospitalized</h2>
          <Card
            message="Cumulative hospitalized: "
            data={currentUSValues.hospitalizedCumulative}
          ></Card>
          <Card
            message="Currently hospitalized: "
            data={currentUSValues.hospitalizedCurrently}
          ></Card>
          <Card
            message="New total hospitalizations: "
            data={currentUSValues.hospitalizedIncrease}
          ></Card>
        </div>

        {/* <GlobalChart></GlobalChart> */}
      </div>
    </div>
  );
}

export default Current;

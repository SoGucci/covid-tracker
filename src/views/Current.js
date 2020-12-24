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
    recovered: "",
    negative: "",
    positive: "",
    pending: "",
    hospitalizedCumulative: "",
    hospitalizedCurrently: "",
    hospitalizedIncrease: "",
    totalTestResults: "",
    positiveIncrease: "",
    negativeIncrease: "",
    totalTestResultsIncrease: "",
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
      <h1 className="sticky-icky">Current Statistics</h1>
      <p>Last page refresh: {new moment().format("dddd, MMMM Do YYYY")} </p>
      <p>
        Last data refresh:{" "}
        {new moment(currentUSValues.date + "").format("dddd, MMMM Do YYYY")}
      </p>
      <p>Pending test results: {currentUSValues.pending.toLocaleString()}</p>
      <div className="wrap">
        <div className="current-list">
          <h2>All Time</h2>
          <Card
            message="Tests: "
            data={currentUSValues.totalTestResults.toLocaleString()}
          ></Card>
          <Card
            message="Positive: "
            data={currentUSValues.positive.toLocaleString()}
          ></Card>
          <Card
            message="Negative: "
            data={currentUSValues.negative.toLocaleString()}
          ></Card>
          <Card
            message="Dead: "
            data={currentUSValues.death.toLocaleString()}
          ></Card>
        </div>

        <div className="current-list">
          <h2>Today</h2>
          <Card
            message="Tests: "
            data={currentUSValues.totalTestResultsIncrease.toLocaleString()}
          ></Card>
          <Card
            message="Positive: "
            data={currentUSValues.positiveIncrease.toLocaleString()}
          ></Card>
          <Card
            message="Negative: "
            data={currentUSValues.negativeIncrease.toLocaleString()}
          ></Card>
          <Card
            message="Dead: "
            data={currentUSValues.deathIncrease.toLocaleString()}
          ></Card>
        </div>
        {/* <div className="current-list">
          <h2>Hospitalized</h2>
          <Card
            message="All time: "
            data={currentUSValues.hospitalizedCumulative.toLocaleString()}
          ></Card>
          <Card
            message="Currently: "
            data={currentUSValues.hospitalizedCurrently.toLocaleString()}
          ></Card>
          <Card
            message="Today: "
            data={currentUSValues.hospitalizedIncrease.toLocaleString()}
          ></Card>
        </div>

        <div className="current-list">
          <h2>Outcome</h2>
          <Card
            message="Dead: "
            data={currentUSValues.death.toLocaleString()}
          ></Card>
          <Card
            message="Currently: "
            data={currentUSValues.hospitalizedCurrently.toLocaleString()}
          ></Card>
          <Card
            message="recovered: "
            data={currentUSValues.recovered.toLocaleString()}
          ></Card>
        </div> */}

        {/* <GlobalChart></GlobalChart> */}
      </div>
      <p>Recovered: {currentUSValues.recovered.toLocaleString()}</p>
    </div>
  );
}

export default Current;

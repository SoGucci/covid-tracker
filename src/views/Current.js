// React
import React, { useEffect, useState } from "react";

// CSS
import "../index.css";

//import GlobalChart from "../components/GlobalChart";
import Card from "../components/Card";

function Current() {
  const [currentUSValues, setCurrentUSValues] = useState({});
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

  console.log(currentUSValues);

  const { death, positive, negative } = currentUSValues;

  return (
    <div className="current">
      <h1>Up to date statistics</h1>
      <p>Last updated: {currentUSValues.date}</p>

      <h2>The numbers</h2>
      <div className="current-list">
        <Card message="Total dead: " data={death}></Card>
        <Card message="Total positive: " data={positive}></Card>
        <Card message="Total negative: " data={negative}></Card>
      </div>

      <h2>The numbers</h2>
      <div className="current-list">
        <Card message="Total dead: " data={death}></Card>
        <Card message="Total positive: " data={positive}></Card>
        <Card message="Total negative: " data={negative}></Card>
      </div>

      {/* <GlobalChart></GlobalChart> */}
    </div>
  );
}

export default Current;

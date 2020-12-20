import "../index.css";
import React, { useEffect, useState } from "react";
//import GlobalChart from "../components/GlobalChart";
function Historic() {
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

  //    console.log(currentUSValues);
  return (
    <div className="historic">
      <h1>Global</h1>
      <p>Last updated: {currentUSValues.date}</p>
      {/* <GlobalChart></GlobalChart> */}
    </div>
  );
}

export default Historic;

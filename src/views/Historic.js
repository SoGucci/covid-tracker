import "../index.css";
import React, { useEffect, useState } from "react";
import GlobalChart from "../components/GlobalChart";
function Historic() {
  const [historicUSValues, setHistoricUSValues] = useState([{ date: "" }]);
  const [positiveIncrease, setPositiveIncreaseUSValues] = useState({
    positiveIncrease: "",
  });

  const [date, setDateUSValues] = useState({ date: "" });
  useEffect(() => {
    const axios = require("axios");
    axios
      .get("https://api.covidtracking.com/v1/us/daily.json")
      .then(function (response) {
        console.log(response.data);
        setHistoricUSValues(response.data);
        let positiveIncreaseArray = [];
        let dateArray = [];
        response.data.map((x) => {
          positiveIncreaseArray.unshift(x.positiveIncrease);
          dateArray.unshift(x.date);
          return "";
        });
        setPositiveIncreaseUSValues(positiveIncreaseArray);
        setDateUSValues(dateArray);

        console.log(dateArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //    console.log(currentUSValues);
  return (
    <div className="historic">
      <h1>Global</h1>
      <p>Last updated: {historicUSValues[0].date}</p>

      <GlobalChart
        label="Positive Cases"
        data={positiveIncrease}
        date={date}
      ></GlobalChart>
    </div>
  );
}

export default Historic;

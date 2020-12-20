import React from "react";
import "../index.css";
function Card(props) {
  // console.log(props.current.death);
  return (
    <div className="card">
      {props.message} {props.data}
    </div>
  );
}

export default Card;

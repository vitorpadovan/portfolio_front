import "./CardGroup.css";
import React from "react";
export default (props) => {
  return (
    <div className="GroupCard">
      <h1 className="font-black text-3xl">{props.title}</h1>
      {props.children}
    </div>
  );
};

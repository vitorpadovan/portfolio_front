import "./CardGroup.css";
import React from "react";
export default (props) => {
  return (
    <div className="GroupCard">
      <h1>
        <span className="font-black text-3xl">{props.title}</span>{" "}
        <span className="font-black">
          {props.selected != null ? props.selected : ""}
          {props.items != null ? "/" + props.items : ""}
        </span>
      </h1>
      {props.children}
    </div>
  );
};

import React from "react";
import "./Buttons.css";

export const ViewBtn = props =>
  <a href={props.link}>
    <button {...props} style={{float: "right"}} className="btn btn-info viewBtn">
      {props.children}
    </button>
  </a>
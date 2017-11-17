import React from "react";
import "./Buttons.css";

export const SaveBtn = props =>
  <button {...props} style={{ float: "right", backgroundColor: "#294dbc", color: "white" }} className="btn saveBtn">
    {props.children}
  </button>;

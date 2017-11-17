import React from "react";
import "./Buttons.css";

export const SaveBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-danger saveBtn">
    {props.children}
  </button>;

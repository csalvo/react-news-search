import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", backgroundColor: "#ffb6b5", color: "white" }} className="btn">
    {props.children}
  </button>;

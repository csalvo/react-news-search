import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", backgroundColor: "#fc4949", color: "white" }} className="btn">
    {props.children}
  </button>;

import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 250, textAlign: "center", padding: "20px" }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;

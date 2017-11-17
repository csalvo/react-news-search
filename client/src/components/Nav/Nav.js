import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top" style={{backgroundColor: "#ffb6b5", borderColor: "#ffb6b5"}}>
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          New York Times Search
        </a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/">Search</a></li>
        <li><a href="/saved">Saved</a></li>
      </ul>
    </div>
  </nav>;

export default Nav;
